import type { Metadata } from "next";
import { ProjectsExplorer } from "@/components/projects/projects-explorer";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore full-stack applications, e-commerce platforms, enterprise systems, and automation projects.",
};

export default function ProjectsPage() {
  const categories = [
    "All",
    ...new Set(projects.map((project) => project.category)),
  ];

  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-7xl px-5 pb-12 pt-24 sm:px-8 lg:px-10 lg:pt-32">
        <div className="mb-7 flex items-center gap-3">
          <span className="font-mono text-xs text-accent">
            PORTFOLIO / PROJECTS
          </span>
          <span className="h-px w-12 bg-line" />
        </div>

        <h1 className="max-w-3xl text-5xl font-semibold tracking-tight sm:text-6xl">
          Work that
          <br />
          <span className="text-muted">speaks for itself.</span>
        </h1>

        <p className="mt-7 max-w-2xl text-base leading-8 text-muted">
          A collection of projects focused on solving real-world problems
          through modern software engineering.
        </p>
      </section>

      <ProjectsExplorer projects={projects} categories={categories} />
    </main>
  );
}
