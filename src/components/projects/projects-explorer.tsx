"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, FolderCode } from "lucide-react";

import { Project } from "@/data/projects";

type ProjectsExplorerProps = {
  projects: Project[];
  categories: string[];
};

export function ProjectsExplorer({
  projects,
  categories,
}: ProjectsExplorerProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 lg:px-10">
      <div className="mb-10 flex flex-wrap items-center gap-2 border-b border-line pb-7">
        {categories.map((category) => {
          const active = activeCategory === category;

          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              aria-pressed={active}
              className={`rounded-full border px-4 py-2 text-xs font-medium transition-colors ${
                active
                  ? "border-foreground bg-foreground text-background"
                  : "border-line bg-surface text-muted hover:border-accent/50 hover:text-foreground"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="mb-6 flex items-center justify-between">
        <p className="font-mono text-xs text-muted">
          {filteredProjects.length} PROJECTS
        </p>

        <span className="font-mono text-xs text-muted">SELECTED WORK</span>
      </div>

      <div className="grid gap-x-7 gap-y-12 md:grid-cols-2">
        {filteredProjects.map((project, index) => (
          <article key={project.slug} className="group min-w-0">
            <Link
              href={`/projects/${project.slug}`}
              className="block rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              aria-label={`View ${project.title} case study`}
            >
              <div className="relative flex aspect-[16/11] items-center justify-center overflow-hidden rounded-xl border border-line bg-surface">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={`${project.title} project preview`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.035] motion-reduce:transform-none"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-4 text-muted">
                    <FolderCode
                      size={44}
                      strokeWidth={1.2}
                      aria-hidden="true"
                    />
                    <span className="font-mono text-xs uppercase tracking-widest">
                      {project.category}
                    </span>
                  </div>
                )}

                <div className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full border border-line bg-surface text-foreground shadow-sm transition-colors group-hover:bg-foreground group-hover:text-background">
                  <ArrowUpRight size={19} aria-hidden="true" />
                </div>
              </div>
            </Link>

            <div className="mt-5">
              <div className="mb-3 flex flex-wrap items-center gap-3">
                <span className="font-mono text-[11px] text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="font-mono text-[11px] uppercase tracking-wide text-muted">
                  {project.category}
                </span>

                {project.status && (
                  <span className="rounded-full border border-line px-2.5 py-1 text-[10px] text-muted">
                    {project.status}
                  </span>
                )}
              </div>

              <Link href={`/projects/${project.slug}`}>
                <h2 className="text-2xl font-semibold tracking-tight transition-colors hover:text-accent">
                  {project.title}
                </h2>
              </Link>

              <p className="mt-2 text-sm font-medium text-accent">
                {project.subtitle}
              </p>

              <p className="mt-3 line-clamp-3 text-sm leading-7 text-muted">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.slice(0, 5).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-line bg-surface px-2.5 py-1.5 font-mono text-[11px] text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-5">
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:text-accent"
                >
                  View case study
                  <ArrowUpRight size={16} />
                </Link>

                {project.website && (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
                  >
                    Live website
                    <ExternalLink size={15} />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
