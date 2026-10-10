import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Braces,
  Database,
  Server,
  Terminal,
  Workflow,
} from "lucide-react";

import { SiGithub } from "@icons-pack/react-simple-icons";

import { siteConfig } from "@/config/site";
import Image from "next/image";

const technologies = [
  "TypeScript",
  "JavaScript",
  "React.js",
  "Next.js",
  "NestJS",
  "Express.js",
  "PostgreSQL",
  "MongoDb",
  "AWS",
  "Docker",
];

const capabilities = [
  { icon: Server, label: "Backend Engineering" },
  { icon: Braces, label: "Frontend Development" },
  { icon: Database, label: "Database Design" },
  { icon: Workflow, label: "Cloud & DevOps" },
];

export function HeroSection() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden border-b border-line"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.025] dark:opacity-[0.045]"
        style={{
          backgroundImage:
            "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "linear-gradient(to bottom, black, transparent 85%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div
          className="
            portfolio-hero-grid
            grid
            items-center
            gap-10
            py-14
            lg:h-[calc(100svh-80px)]
            lg:min-h-[620px]
            lg:grid-cols-[1.15fr_0.85fr]
            lg:gap-14
            lg:py-8
            2xl:gap-20
          "
        >
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-3">
              <span
                aria-hidden="true"
                className="size-2 rounded-full bg-accent"
              />

              <span className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
                Full-Stack Software Engineer
              </span>
            </div>

            <p className="mb-4 text-base font-medium text-muted sm:text-lg">
              Hello, I'm Chanuka.
            </p>

            <h1
              id="hero-title"
              className="
                text-[clamp(3rem,5vw,5rem)]
                font-semibold
                leading-[1.04]
                tracking-[-0.06em]
              "
            >
              Engineering
              <br />
              <span className="text-muted">ideas into</span>
              <br />
              <span className="text-accent">reality.</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
              I build scalable applications, robust backend systems, and
              intuitive digital experiences, transforming complex challenges
              into reliable software.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                href="/terminal"
                className="group inline-flex min-h-12 items-center gap-2 rounded-lg border border-line bg-surface px-5 py-3 text-sm font-semibold transition-colors hover:border-accent/50 hover:text-accent"
              >
                <Terminal size={17} />
                Open Terminal
              </Link>
              <Link
                href="/#projects"
                className="
                  group
                  inline-flex
                  min-h-12
                  items-center
                  justify-center
                  gap-3
                  rounded-lg
                  bg-foreground
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  text-background
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:shadow-lg
                  focus-visible:outline-2
                  focus-visible:outline-offset-4
                  focus-visible:outline-accent
                "
              >
                Explore my work
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>

              <Link
                href="/#contact"
                className="
                  inline-flex
                  min-h-12
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-line
                  bg-surface
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  text-foreground
                  transition-colors
                  hover:bg-foreground/5
                  focus-visible:outline-2
                  focus-visible:outline-offset-4
                  focus-visible:outline-accent
                "
              >
                Get in touch
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-line pt-6">
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                Find me on
              </span>

              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="text-muted transition-colors hover:text-foreground"
              >
                <SiGithub size={20} />
              </a>

              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="text-muted transition-colors hover:text-foreground"
              >
                <Image
                  src="/icons/linkedin-light.png"
                  alt=""
                  width={20}
                  height={20}
                  className="block dark:hidden"
                />

                <Image
                  src="/icons/linkedin-dark.png"
                  alt=""
                  width={20}
                  height={20}
                  className="hidden dark:block"
                />
              </a>

              <Link
                href="#about"
                className="ml-auto inline-flex items-center gap-2 text-xs font-medium text-muted transition-colors hover:text-foreground"
              >
                Discover more
                <ArrowDown size={15} />
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[440px] lg:max-w-none">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-5 rounded-3xl bg-accent/5 blur-3xl"
            />

            <div className="relative overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_18px_65px_-35px_rgba(0,0,0,0.22)]">
              <div className="flex items-center justify-between border-b border-line px-5 py-3.5">
                <div className="flex items-center gap-2.5">
                  <Terminal
                    size={16}
                    className="text-accent"
                    aria-hidden="true"
                  />

                  <span className="font-mono text-xs font-medium">
                    engineering.profile
                  </span>
                </div>

                <div className="flex items-center gap-1.5" aria-hidden="true">
                  <span className="size-2 rounded-full bg-foreground/15" />
                  <span className="size-2 rounded-full bg-foreground/15" />
                  <span className="size-2 rounded-full bg-accent" />
                </div>
              </div>

              <div className="border-b border-line bg-foreground/[0.025] px-5 py-4 font-mono text-xs leading-6 sm:px-6">
                <p className="text-muted">{"// Developer identity"}</p>

                <div className="mt-2">
                  <p>
                    <span className="text-accent">const</span> engineer = {"{"}
                  </p>

                  <p className="pl-4">
                    <span className="text-muted">role:</span>{" "}
                    <span>"Full-Stack Engineer",</span>
                  </p>

                  <p className="pl-4">
                    <span className="text-muted">focus:</span>{" "}
                    <span>"Scalable Applications",</span>
                  </p>

                  <p className="pl-4">
                    <span className="text-muted">experience:</span>{" "}
                    <span className="text-accent">"3+ years"</span>
                  </p>

                  <p>{"};"}</p>
                </div>
              </div>

              <div className="p-4 sm:p-5">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-muted">
                    Areas of expertise
                  </span>

                  <span className="font-mono text-[10px] text-muted">
                    01 - 04
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  {capabilities.map(({ icon: Icon, label }) => (
                    <div
                      key={label}
                      className="
                        flex
                        min-h-16
                        flex-col
                        justify-between
                        gap-2
                        rounded-lg
                        border
                        border-line
                        bg-background
                        p-3
                        transition-colors
                        hover:border-accent/40
                      "
                    >
                      <Icon
                        size={18}
                        strokeWidth={1.7}
                        className="text-accent"
                        aria-hidden="true"
                      />

                      <span className="text-[11px] font-medium leading-4 sm:text-xs">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-line px-4 py-3 sm:px-5">
                <p className="mb-2.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                  Primary toolkit
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-line bg-background px-2 py-1 font-mono text-[10px] text-muted"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2 border-t border-line bg-accent/[0.035] px-4 py-2.5 sm:px-5">
                <span
                  aria-hidden="true"
                  className="size-1.5 rounded-full bg-accent"
                />

                <span className="font-mono text-[10px] tracking-wide text-muted">
                  Always learning. Always building.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
