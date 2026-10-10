import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  Layers3,
  Monitor,
  ShoppingBag,
  MonitorCog,
} from "lucide-react";

import { projects, type Project } from "@/data/projects";
import { Reveal } from "../ui/reveal";

const visualConfig: Record<
  string,
  {
    icon: typeof ShoppingBag;
    number: string;
    gradient: string;
  }
> = {
  avoro: {
    icon: ShoppingBag,
    number: "01",
    gradient:
      "from-[#dddde8] to-[#bdc1d5] dark:from-[#252a3d] dark:to-[#171b2b]",
  },
  waduwada: {
    icon: Layers3,
    number: "02",
    gradient:
      "from-[#e8dfd5] to-[#cbbbab] dark:from-[#342d2c] dark:to-[#221d20]",
  },
  "erp-business-system": {
    icon: Monitor,
    number: "03",
    gradient:
      "from-[#d9e2ed] to-[#b0c2d8] dark:from-[#233347] dark:to-[#151e2c]",
  },
  "visa-appointment-automation": {
    icon: MonitorCog,
    number: "04",
    gradient:
      "from-[#DDD6FE] to-[#A5B4FC] dark:from-[#312E81] dark:to-[#1E1B4B]",
  },
};

function ProjectPreview({ project }: { project: Project }) {
  const visual = visualConfig[project.slug] ?? {
    icon: Monitor,
    number: "00",
    gradient: "from-slate-200 to-slate-300",
  };

  const Icon = visual.icon;

  return (
    <div
      className={`relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br ${visual.gradient} sm:aspect-[5/3] lg:aspect-[4/3]`}
    >
      {project.image ? (
        <Image
          src={project.image}
          alt={`${project.title} project preview`}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
      ) : (
        <>
          <div
            aria-hidden="true"
            className="absolute inset-6 rounded-xl border border-white/25 sm:inset-10"
          />

          <div className="relative flex flex-col items-center gap-5 text-slate-700 dark:text-slate-200">
            <div className="flex size-20 items-center justify-center rounded-2xl border border-white/40 bg-white/20 shadow-xl backdrop-blur-md sm:size-24">
              <Icon size={38} strokeWidth={1.2} aria-hidden="true" />
            </div>

            <span className="text-center text-lg font-semibold tracking-tight sm:text-2xl">
              {project.title}
            </span>
          </div>

          <span className="absolute bottom-7 left-7 font-mono text-xs text-slate-600 dark:text-slate-300">
            PROJECT / {visual.number}
          </span>
        </>
      )}
    </div>
  );
}

function ProjectShowcase({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const reversed = index % 2 !== 0;

  return (
    <article className="group grid items-center gap-8 border-t border-line py-10 sm:py-14 lg:grid-cols-2 lg:gap-16 lg:py-16">
      <div className={reversed ? "lg:order-2" : ""}>
        <ProjectPreview project={project} />
      </div>

      <div
        className={`flex flex-col items-start ${reversed ? "lg:order-1" : ""}`}
      >
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <span className="font-mono text-xs text-accent">
            {String(index + 1).padStart(2, "0")}
          </span>

          <span className="h-px w-7 bg-line" />

          <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
            {project.category}
          </span>

          {project.status && (
            <span className="rounded-full border border-line bg-surface px-3 py-1 text-[10px] font-medium text-muted">
              {project.status}
            </span>
          )}
        </div>

        <h3 className="text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
          {project.title}
        </h3>

        <p className="mt-3 text-sm font-medium text-accent">
          {project.subtitle}
        </p>

        <p className="mt-5 max-w-lg text-sm leading-7 text-muted sm:text-base sm:leading-8">
          {project.description}
        </p>

        {/* Technology list */}
        <div className="mt-7 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-md border border-line bg-surface px-3 py-1.5 font-mono text-[11px] text-muted"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-9 flex flex-wrap items-center gap-6">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-accent"
          >
            View case study
            <ArrowUpRight size={17} aria-hidden="true" />
          </Link>

          {project.website && (
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-accent"
            >
              Live website
              <ExternalLink size={15} aria-hidden="true" />
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-accent"
            >
              Source code
              <ExternalLink size={15} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export function ProjectsSection() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="scroll-mt-20 border-b border-line py-10 sm:py-24 "
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal>
          <div className="mb-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <div className="mb-7 flex items-center gap-3">
                <span className="font-mono text-xs text-accent">
                  04 / PROJECTS
                </span>

                <span className="h-px w-12 bg-line" />
              </div>

              <h2
                id="projects-heading"
                className="text-4xl font-semibold leading-tight tracking-[-0.045em] sm:text-5xl"
              >
                Selected
                <br />
                <span className="text-muted">work.</span>
              </h2>
            </div>

            <div className="flex items-end">
              <p className="max-w-xl text-base leading-8 text-muted">
                A selection of projects exploring full-stack development,
                backend engineering, e-commerce, and business-focused software
                solutions.
              </p>
            </div>
          </div>
        </Reveal>

        <div>
          {featuredProjects.map((project, index) => (
            <Reveal key={project.slug}>
              <ProjectShowcase project={project} index={index} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="flex justify-center border-t border-line pt-10">
            <Link
              href="/projects"
              className="group inline-flex min-h-12 items-center gap-3 rounded-lg border border-line bg-surface px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent/40 hover:text-accent"
            >
              Explore all projects
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
