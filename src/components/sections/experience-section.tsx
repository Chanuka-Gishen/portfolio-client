import { ArrowUpRight, BriefcaseBusiness, MapPin } from "lucide-react";

import { experiences } from "@/data/experience";
import { Reveal } from "../ui/reveal";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="scroll-mt-20 border-b border-line py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal>
          <div className="mb-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <div className="mb-7 flex items-center gap-3">
                <span className="font-mono text-xs text-accent">
                  02 / EXPERIENCE
                </span>
                <span className="h-px w-12 bg-line" />
              </div>

              <h2
                id="experience-heading"
                className="text-4xl font-semibold leading-tight tracking-[-0.045em] sm:text-5xl"
              >
                Professional
                <br />
                <span className="text-muted">journey.</span>
              </h2>
            </div>

            <div className="flex items-end">
              <p className="max-w-xl text-base leading-8 text-muted">
                My experience working on real-world software solutions, from
                building application features and backend services to managing
                databases, integrations, and production deployments.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="relative border-l border-line ml-2 sm:ml-3">
          {experiences.map((experience, index) => (
            <Reveal key={experience.id}>
              <article className="relative pb-14 py-5 pl-8 last:pb-0 sm:pl-12">
                <div
                  aria-hidden="true"
                  className="absolute -left-[7px] top-1.5 flex size-[13px] items-center justify-center rounded-full border-2 border-accent bg-background"
                />

                <div className="grid gap-6 lg:grid-cols-[0.34fr_0.66fr] lg:gap-12">
                  <div>
                    <span className="mb-4 inline-flex items-center gap-2 rounded-md border border-line bg-surface px-3 py-1.5 font-mono text-[11px] text-muted">
                      <BriefcaseBusiness size={13} className="text-accent" />
                      {experience.employmentType}
                    </span>

                    <p className="font-mono text-sm font-medium text-foreground">
                      {experience.period}
                    </p>

                    <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-muted">
                      <MapPin size={13} />
                      {experience.location}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                          {experience.role}
                        </h3>

                        <p className="mt-2 text-base font-medium text-accent">
                          {experience.company}
                        </p>
                      </div>

                      <span className="font-mono text-xs text-muted/60">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <p className="mt-5 max-w-2xl text-sm leading-7 text-muted sm:text-base">
                      {experience.description}
                    </p>

                    <ul className="mt-6 space-y-3">
                      {experience.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-start gap-3 text-sm leading-6 text-muted"
                        >
                          <ArrowUpRight
                            size={16}
                            className="mt-1 shrink-0 text-accent"
                            aria-hidden="true"
                          />

                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-7 flex flex-wrap gap-2">
                      {experience.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-md border border-line bg-surface px-3 py-1.5 font-mono text-[11px] text-muted"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
