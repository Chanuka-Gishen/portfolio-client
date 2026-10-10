import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  ExternalLink,
  Github,
  Layers3,
} from "lucide-react";

import { projects } from "@/data/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: project.title,
    description: project.description,

    alternates: {
      canonical: `/projects/${project.slug}`,
    },

    openGraph: {
      title: `${project.title} | Chanuka Gishen`,
      description: project.description,
      url: `/projects/${project.slug}`,
      type: "article",
      ...(project.image ? { images: [project.image] } : {}),
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const overview = project.overview?.length
    ? project.overview
    : [project.description];

  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-7xl px-5 pb-24 pt-24 sm:px-8 lg:px-10 lg:pt-32">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-12">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            All projects
          </Link>
        </nav>

        {/* Project header */}
        <header className="mb-12">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-wider text-accent">
              {project.category}
            </span>

            {project.status && (
              <span className="rounded-full border border-line bg-surface px-3 py-1 text-xs text-muted">
                {project.status}
              </span>
            )}
          </div>

          <h1 className="max-w-5xl text-5xl font-semibold tracking-[-0.055em] sm:text-6xl lg:text-7xl">
            {project.title}
          </h1>

          <p className="mt-5 text-lg text-muted sm:text-xl">
            {project.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            {project.website && (
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-foreground px-5 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-85"
              >
                Visit website
                <ArrowUpRight size={17} />
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-5 py-3 text-sm font-semibold transition-colors hover:border-accent/50"
              >
                View source code
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </header>

        {/* Hero preview */}
        <div className="relative mb-16 flex aspect-[16/9] items-center justify-center overflow-hidden rounded-2xl border border-line bg-surface">
          {project.image ? (
            <Image
              src={project.image}
              alt={`${project.title} application preview`}
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1152px"
              className="object-cover"
            />
          ) : (
            <div className="flex flex-col items-center gap-4 text-muted">
              <Layers3 size={52} strokeWidth={1.2} aria-hidden="true" />
              <span className="font-mono text-sm">{project.title}</span>
            </div>
          )}
        </div>

        {/* Overview & project information */}
        <div className="grid gap-12 border-b border-line pb-14 lg:grid-cols-[1fr_280px] lg:gap-20">
          <div>
            <SectionLabel number="01" title="Overview" />

            <h2 className="mt-5 text-3xl font-semibold tracking-tight">
              The project.
            </h2>

            <div className="mt-6 max-w-3xl space-y-5">
              {overview.map((paragraph) => (
                <p key={paragraph} className="text-base leading-8 text-muted">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <aside className="space-y-8">
            <div>
              <p className="mb-2 font-mono text-xs uppercase tracking-wider text-muted">
                My role
              </p>
              <p className="text-sm font-medium">
                {project.role ?? "Software Development"}
              </p>
            </div>

            <div>
              <p className="mb-2 font-mono text-xs uppercase tracking-wider text-muted">
                Project status
              </p>
              <p className="text-sm font-medium">
                {project.status ?? "Not specified"}
              </p>
            </div>

            <div>
              <p className="mb-3 font-mono text-xs uppercase tracking-wider text-muted">
                Technologies
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-line bg-surface px-3 py-1.5 font-mono text-[11px] text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {/* Features */}
        {!!project.features?.length && (
          <section className="border-b border-line py-16">
            <SectionLabel number="02" title="Capabilities" />

            <h2 className="mt-5 text-3xl font-semibold tracking-tight">
              Key features.
            </h2>

            <div className="mt-9 grid gap-x-12 gap-y-5 md:grid-cols-2">
              {project.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 border-b border-line pb-5"
                >
                  <Check
                    size={17}
                    className="mt-1 shrink-0 text-accent"
                    aria-hidden="true"
                  />
                  <p className="text-sm leading-7 text-muted">{feature}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Architecture */}
        {!!project.architecture?.length && (
          <section className="border-b border-line py-16">
            <SectionLabel number="03" title="Engineering" />

            <h2 className="mt-5 text-3xl font-semibold tracking-tight">
              Technical architecture.
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
              Technologies and architectural decisions involved in developing
              the application.
            </p>

            <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {project.architecture.map((item, index) => (
                <div
                  key={item}
                  className="rounded-xl border border-line bg-surface p-5"
                >
                  <span className="font-mono text-xs text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="mt-5 text-sm font-medium leading-6">{item}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Challenges */}
        {!!project.challenges?.length && (
          <section className="border-b border-line py-16">
            <SectionLabel number="04" title="Problem solving" />

            <h2 className="mt-5 text-3xl font-semibold tracking-tight">
              Engineering challenges.
            </h2>

            <div className="mt-8 max-w-3xl divide-y divide-line">
              {project.challenges.map((challenge, index) => (
                <div key={challenge} className="flex items-start gap-6 py-5">
                  <span className="font-mono text-xs text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="text-sm leading-7 text-muted">{challenge}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Screenshots */}
        {!!project.screenshots?.length && (
          <section className="py-16">
            <SectionLabel number="05" title="Gallery" />

            <h2 className="mt-5 text-3xl font-semibold tracking-tight">
              Inside the project.
            </h2>

            <div className="mt-9 grid gap-8">
              {project.screenshots.map((screenshot) => (
                <figure key={screenshot.src}>
                  <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-line bg-surface">
                    <Image
                      src={screenshot.src}
                      alt={screenshot.alt}
                      fill
                      sizes="(max-width: 1280px) 100vw, 1152px"
                      className="object-contain"
                    />
                  </div>

                  {screenshot.caption && (
                    <figcaption className="mt-3 text-sm text-muted">
                      {screenshot.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          </section>
        )}

        {/* Back navigation */}
        <div className="mt-10 border-t border-line pt-9">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-3 text-sm font-semibold transition-colors hover:text-accent"
          >
            <ArrowLeft
              size={17}
              className="transition-transform group-hover:-translate-x-1"
            />
            Back to all projects
          </Link>
        </div>
      </div>
    </main>
  );
}

function SectionLabel({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-mono text-xs text-accent">
        {number} / {title.toUpperCase()}
      </span>
      <span className="h-px w-10 bg-line" />
    </div>
  );
}
