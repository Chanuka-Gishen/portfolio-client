import {
  ArrowUpRight,
  Code2,
  Database,
  GitBranch,
  Globe2,
  Server,
  Wrench,
  Cloud,
  CodeXml,
} from "lucide-react";

import {
  SiCloudflare,
  SiDocker,
  SiExpress,
  SiFastapi,
  SiFlutter,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiJavascript,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiOpenjdk,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiPython,
  SiReact,
  SiSpringboot,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiMui,
  SiFormik,
  SiReacthookform,
} from "@icons-pack/react-simple-icons";

import { skillCategories } from "@/data/skills";

import type { ComponentType, SVGProps } from "react";
import { Reveal } from "../ui/reveal";

type IconComponent = ComponentType<
  SVGProps<SVGSVGElement> & { size?: number | string }
>;

const skillIcons: Record<string, IconComponent> = {
  javascript: SiJavascript,
  typescript: SiTypescript,
  react: SiReact,
  nextdotjs: SiNextdotjs,
  tailwindcss: SiTailwindcss,
  mui: SiMui,
  flutter: SiFlutter,
  formik: SiFormik,
  reactForm: SiReacthookform,
  nodedotjs: SiNodedotjs,
  nestjs: SiNestjs,
  express: SiExpress,
  python: SiPython,
  fastapi: SiFastapi,
  openjdk: SiOpenjdk,
  springboot: SiSpringboot,
  postgresql: SiPostgresql,
  mongodb: SiMongodb,
  mysql: SiMysql,
  prisma: SiPrisma,
  supabase: SiSupabase,
  amazonwebservices: Cloud,
  docker: SiDocker,
  githubactions: SiGithubactions,
  cloudflare: SiCloudflare,
  nginx: SiNginx,
  linux: SiLinux,
  git: SiGit,
  github: SiGithub,
  postman: SiPostman,
  visualstudiocode: CodeXml,
};

const categoryIcons = {
  frontend: Globe2,
  backend: Server,
  databases: Database,
  devops: GitBranch,
  tools: Wrench,
};

function SkillBadge({ name, icon }: { name: string; icon?: string }) {
  const Icon = icon ? skillIcons[icon] : undefined;

  return (
    <div
      className="
        group
        inline-flex
        min-h-11
        items-center
        gap-2.5
        rounded-lg
        border
        border-line
        bg-surface
        px-3.5
        py-2.5
        transition-all
        duration-200
        hover:-translate-y-0.5
        hover:border-accent/40
        hover:shadow-sm
        motion-reduce:transform-none
      "
    >
      {Icon ? (
        <Icon
          size={17}
          className="shrink-0 text-muted transition-colors group-hover:text-accent"
          aria-hidden="true"
        />
      ) : (
        <Code2
          size={17}
          className="shrink-0 text-muted transition-colors group-hover:text-accent"
          aria-hidden="true"
        />
      )}

      <span className="whitespace-nowrap text-xs font-medium text-foreground sm:text-sm">
        {name}
      </span>
    </div>
  );
}

export function SkillsSection() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="scroll-mt-20 border-b border-line py-20 sm:py-24 "
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal>
          <div className="mb-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <div className="mb-7 flex items-center gap-3">
                <span className="font-mono text-xs text-accent">
                  03 / EXPERTISE
                </span>
                <span className="h-px w-12 bg-line" />
              </div>

              <h2
                id="skills-heading"
                className="text-4xl font-semibold leading-tight tracking-[-0.045em] sm:text-5xl"
              >
                Technical
                <br />
                <span className="text-muted">toolkit.</span>
              </h2>
            </div>

            <div className="flex items-end">
              <p className="max-w-xl text-base leading-8 text-muted">
                A collection of technologies and tools I work with to design,
                build, deploy, and maintain modern software applications.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="border-t border-line">
          {skillCategories.map((category, index) => {
            const CategoryIcon =
              categoryIcons[category.id as keyof typeof categoryIcons] ?? Code2;

            return (
              <Reveal key={category.id}>
                <div
                  className="
                  grid
                  gap-6
                  border-b
                  border-line
                  py-8
                  md:grid-cols-[0.35fr_0.65fr]
                  md:gap-10
                  lg:py-10
                "
                >
                  <div>
                    <div className="mb-4 flex items-center gap-3">
                      <span className="font-mono text-xs text-muted/60">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <CategoryIcon
                        size={19}
                        strokeWidth={1.7}
                        className="text-accent"
                        aria-hidden="true"
                      />
                    </div>

                    <h3 className="text-lg font-semibold tracking-tight sm:text-xl">
                      {category.title}
                    </h3>

                    <p className="mt-2 max-w-xs text-sm leading-6 text-muted">
                      {category.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap content-start gap-2.5 md:pt-1">
                    {category.skills.map((skill) => (
                      <SkillBadge
                        key={skill.name}
                        name={skill.name}
                        icon={skill.icon}
                      />
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
          <p className="max-w-xl text-sm leading-7 text-muted">
            Technology is a tool, not the destination. I focus on choosing the
            right solutions for each problem while continuously expanding my
            skills.
          </p>

          <a
            href="#projects"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-accent"
          >
            See these skills in action
            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
