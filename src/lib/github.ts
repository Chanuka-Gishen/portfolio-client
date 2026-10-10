import "server-only";

export type GithubRepository = {
  name: string;
  description: string | null;
  url: string;
  primaryLanguage: {
    name: string;
    color: string | null;
  } | null;
  languages: {
    edges: {
      size: number;
      node: {
        name: string;
        color: string | null;
      };
    }[];
  };
};

export type GithubContributionDay = {
  date: string;
  contributionCount: number;
  color: string;
  contributionLevel:
    | "NONE"
    | "FIRST_QUARTILE"
    | "SECOND_QUARTILE"
    | "THIRD_QUARTILE"
    | "FOURTH_QUARTILE";
};

export type GithubLanguage = {
  name: string;
  color: string;
  percentage: number;
};

export type GithubActivity = {
  username: string;
  profileUrl: string;
  pinnedRepositories: GithubRepository[];
  totalContributions: number;
  contributionWeeks: {
    contributionDays: GithubContributionDay[];
  }[];
  languages: GithubLanguage[];
};

const query = `
  query GithubPortfolio($login: String!) {
    user(login: $login) {
      login
      url

      pinnedItems(
        first: 6
        types: REPOSITORY
      ) {
        nodes {
          ... on Repository {
            name
            description
            url
            isPrivate
            primaryLanguage {
              name
              color
            }
            languages(first: 10) {
              edges {
                size
                node {
                  name
                  color
                }
              }
            }
          }
        }
      }

      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              contributionCount
              color
              contributionLevel
            }
          }
        }
      }

      repositories(
        first: 50
        ownerAffiliations: OWNER
        privacy: PUBLIC
        orderBy: {
          field: UPDATED_AT
          direction: DESC
        }
      ) {
        nodes {
          isFork
          languages(first: 10) {
            edges {
              size
              node {
                name
                color
              }
            }
          }
        }
      }
    }
  }
`;

type LanguageEdge = {
  size: number;
  node: {
    name: string;
    color: string | null;
  };
};

type GithubRepositoryNode = GithubRepository & {
  isPrivate: boolean;
};

type GithubApiResponse = {
  data?: {
    user: {
      login: string;
      url: string;
      pinnedItems: {
        nodes: (GithubRepositoryNode | null)[];
      };
      contributionsCollection: {
        contributionCalendar: {
          totalContributions: number;
          weeks: {
            contributionDays: GithubContributionDay[];
          }[];
        };
      };
      repositories: {
        nodes: {
          isFork: boolean;
          languages: {
            edges: LanguageEdge[];
          };
        }[];
      };
    } | null;
  };
  errors?: { message: string }[];
};

function calculateLanguages(
  repositories: {
    isFork: boolean;
    languages: { edges: LanguageEdge[] };
  }[],
): GithubLanguage[] {
  const totals = new Map<string, { size: number; color: string }>();

  for (const repository of repositories) {
    if (repository.isFork) continue;

    for (const edge of repository.languages.edges) {
      const current = totals.get(edge.node.name);

      totals.set(edge.node.name, {
        size: (current?.size ?? 0) + edge.size,
        color: edge.node.color ?? "#8998ff",
      });
    }
  }

  const totalSize = Array.from(totals.values()).reduce(
    (sum, language) => sum + language.size,
    0,
  );

  if (totalSize === 0) return [];

  return Array.from(totals.entries())
    .map(([name, value]) => ({
      name,
      color: value.color,
      percentage: (value.size / totalSize) * 100,
    }))
    .sort((a, b) => b.percentage - a.percentage);
}

export async function getGithubActivity(): Promise<GithubActivity | null> {
  const username = process.env.GITHUB_USERNAME;
  const token = process.env.GITHUB_TOKEN;

  if (!username || !token) {
    console.warn("GitHub credentials are missing.");
    return null;
  }

  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/vnd.github+json",
      },
      body: JSON.stringify({
        query,
        variables: { login: username },
      }),
      next: {
        revalidate: 21600,
      },
    });

    if (!response.ok) {
      throw new Error(`GitHub API returned ${response.status}`);
    }

    const result = (await response.json()) as GithubApiResponse;

    if (result.errors?.length) {
      throw new Error(result.errors.map((error) => error.message).join("; "));
    }

    const user = result.data?.user;

    if (!user) return null;

    const calendar = user.contributionsCollection.contributionCalendar;

    return {
      username: user.login,
      profileUrl: user.url,

      pinnedRepositories: user.pinnedItems.nodes.filter(
        (repo): repo is GithubRepositoryNode =>
          repo !== null && !repo.isPrivate,
      ),

      totalContributions: calendar.totalContributions,
      contributionWeeks: calendar.weeks,

      languages: calculateLanguages(user.repositories.nodes),
    };
  } catch (error) {
    console.error("GitHub activity request failed:", error);
    return null;
  }
}
