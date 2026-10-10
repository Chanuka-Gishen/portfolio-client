import Link from "next/link";
import { ArrowUpRight, Code2, GitCommitHorizontal, Pin } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";

import {
  getGithubActivity,
  type GithubContributionDay,
  type GithubRepository,
} from "@/lib/github";
import { Reveal } from "../ui/reveal";

const contributionColors: Record<
  GithubContributionDay["contributionLevel"],
  string
> = {
  NONE: "bg-[#e5e8ef] dark:bg-[#292e3a]",
  FIRST_QUARTILE: "bg-[#c7d2fe] dark:bg-[#373b79]",
  SECOND_QUARTILE: "bg-[#a5b4fc] dark:bg-[#5256a5]",
  THIRD_QUARTILE: "bg-[#818cf8] dark:bg-[#7177ce]",
  FOURTH_QUARTILE: "bg-[#4f46e5] dark:bg-[#a5b4fc]",
};

function ContributionGraph({
  weeks,
}: {
  weeks: {
    contributionDays: GithubContributionDay[];
  }[];
}) {
  return (
    <div>
      <div className="overflow-x-auto pb-3">
        <div className="flex w-max gap-[3px]">
          {weeks.map((week, index) => (
            <div
              key={`${week.contributionDays[0]?.date}-${index}`}
              className="flex flex-col gap-[3px]"
            >
              {week.contributionDays.map((day) => (
                <div
                  key={day.date}
                  title={`${day.contributionCount} contributions on ${day.date}`}
                  aria-label={`${day.contributionCount} contributions on ${day.date}`}
                  className={`size-[12px] rounded-[3px] ${contributionColors[day.contributionLevel]}`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between gap-4">
        <span className="text-xs text-muted">
          Contribution activity over the past year
        </span>

        <div className="flex shrink-0 items-center gap-1.5">
          <span className="mr-1 text-[10px] text-muted">Less</span>

          {Object.values(contributionColors).map((color, index) => (
            <span
              key={index}
              className={`size-[10px] rounded-[2px] ${color}`}
            />
          ))}

          <span className="ml-1 text-[10px] text-muted">More</span>
        </div>
      </div>
    </div>
  );
}

function RepositoryCard({ repository }: { repository: GithubRepository }) {
  return (
    <a
      href={repository.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col rounded-xl border border-line bg-surface p-5 transition-colors hover:border-accent/50 sm:p-6"
    >
      <div className="mb-5 flex items-start justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <Pin size={15} className="shrink-0 text-accent" aria-hidden="true" />

          <h4 className="break-words text-sm font-semibold sm:text-base">
            {repository.name}
          </h4>
        </div>

        <ArrowUpRight
          size={17}
          className="shrink-0 text-muted transition-colors group-hover:text-accent"
          aria-hidden="true"
        />
      </div>

      <p className="mb-6 flex-1 text-sm leading-6 text-muted">
        {repository.description ??
          "Explore the source code and project details on GitHub."}
      </p>

      <div className="flex flex-wrap items-center gap-3 border-t border-line pt-4">
        {repository.primaryLanguage && (
          <div className="flex items-center gap-2">
            <span
              className="size-2 rounded-full"
              style={{
                backgroundColor: repository.primaryLanguage.color ?? "#8998ff",
              }}
            />

            <span className="font-mono text-[11px] text-muted">
              {repository.primaryLanguage.name}
            </span>
          </div>
        )}

        <span className="ml-auto font-mono text-[10px] text-muted">
          PUBLIC REPOSITORY
        </span>
      </div>
    </a>
  );
}

export async function GithubSection() {
  const activity = await getGithubActivity();

  if (!activity) return null;

  const topLanguages = activity.languages.slice(0, 8);

  return (
    <section
      id="github"
      aria-labelledby="github-heading"
      className="scroll-mt-20 border-b border-line py-10 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal>
          <div className="mb-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <div className="mb-7 flex items-center gap-3">
                <span className="font-mono text-xs text-accent">
                  05 / GITHUB
                </span>
                <span className="h-px w-12 bg-line" />
              </div>

              <h2
                id="github-heading"
                className="text-4xl font-semibold leading-tight tracking-[-0.045em] sm:text-5xl"
              >
                Building
                <br />
                <span className="text-muted">in public.</span>
              </h2>
            </div>

            <div className="flex flex-col justify-end gap-5">
              <p className="max-w-xl text-base leading-8 text-muted">
                A look at my development activity, selected repositories, and
                the technologies behind my public projects.
              </p>

              <a
                href={activity.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 text-sm font-semibold transition-colors hover:text-accent"
              >
                <SiGithub size={17} color="currentColor" />@{activity.username}
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="rounded-2xl border border-line bg-surface p-5 sm:p-7 lg:p-9">
            <div className="mb-8 flex flex-wrap items-start justify-between gap-5">
              <div>
                <div className="mb-3 flex items-center gap-2">
                  <GitCommitHorizontal size={18} className="text-accent" />

                  <h3 className="text-lg font-semibold">
                    Contribution activity
                  </h3>
                </div>

                <p className="text-sm text-muted">
                  Commits, pull requests, issues, and other qualifying GitHub
                  contributions.
                </p>
              </div>

              <div className="text-left sm:text-right">
                <p className="text-3xl font-semibold tracking-tight">
                  {activity.totalContributions.toLocaleString()}
                </p>

                <p className="mt-1 text-xs text-muted">
                  Contributions in the past year
                </p>
              </div>
            </div>

            <ContributionGraph weeks={activity.contributionWeeks} />
          </div>
        </Reveal>

        {topLanguages.length > 0 && (
          <Reveal>
            <div className="mt-12">
              <div className="mb-6 flex items-center gap-3">
                <Code2 size={19} className="text-accent" />

                <h3 className="text-xl font-semibold tracking-tight">
                  Languages across my repositories
                </h3>
              </div>

              <div className="overflow-hidden rounded-full bg-foreground/10">
                <div className="flex h-3 w-full">
                  {activity.languages.map((language) => (
                    <div
                      key={language.name}
                      style={{
                        width: `${language.percentage}%`,
                        backgroundColor: language.color,
                      }}
                      title={`${language.name}: ${language.percentage.toFixed(1)}%`}
                    />
                  ))}
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-x-7 gap-y-3">
                {topLanguages.map((language) => (
                  <div key={language.name} className="flex items-center gap-2">
                    <span
                      className="size-2.5 rounded-full"
                      style={{
                        backgroundColor: language.color,
                      }}
                    />

                    <span className="text-xs font-medium">{language.name}</span>

                    <span className="font-mono text-[11px] text-muted">
                      {language.percentage.toFixed(1)}%
                    </span>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-xs leading-5 text-muted">
                Based on language bytes across recent owned public repositories.
                Private repositories are excluded.
              </p>
            </div>
          </Reveal>
        )}

        <Reveal>
          <div className="mt-16">
            <div className="mb-7 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="mb-2 font-mono text-[11px] uppercase tracking-wider text-accent">
                  Selected repositories
                </p>

                <h3 className="text-2xl font-semibold tracking-tight">
                  Pinned on GitHub.
                </h3>
              </div>

              <a
                href={`${activity.profileUrl}?tab=repositories`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-accent"
              >
                All repositories
                <ArrowUpRight size={16} />
              </a>
            </div>

            {activity.pinnedRepositories.length > 0 ? (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {activity.pinnedRepositories.map((repo) => (
                  <Reveal key={repo.url}>
                    <RepositoryCard repository={repo} />
                  </Reveal>
                ))}
              </div>
            ) : (
              <p className="rounded-xl border border-line bg-surface p-6 text-sm text-muted">
                No public repositories are currently pinned to this GitHub
                profile.
              </p>
            )}
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-10 flex justify-center">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-accent"
            >
              Interested in working together?
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
