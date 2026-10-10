import { ArrowUpRight, Mail, MapPin, MessageCircle } from "lucide-react";

import { SiGithub } from "@icons-pack/react-simple-icons";
import { siteConfig } from "@/config/site";
import { Reveal } from "../ui/reveal";

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-20 border-b border-line py-20 sm:py-24 "
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mb-12 flex items-center gap-3">
          <span className="font-mono text-xs text-accent">05 / CONTACT</span>
          <span className="h-px w-12 bg-line" />
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:gap-20">
          <Reveal>
            <div>
              <p className="mb-5 text-sm font-medium text-muted sm:text-base">
                Have something in mind?
              </p>

              <h2
                id="contact-heading"
                className="max-w-3xl text-[clamp(3.5rem,7vw,6.5rem)] font-semibold leading-[1.04] tracking-[-0.065em]"
              >
                Let's build
                <br />
                something
                <br />
                <span className="text-accent">meaningful.</span>
              </h2>

              <p className="mt-8 max-w-xl text-base leading-8 text-muted">
                I'm interested in software engineering opportunities,
                interesting technical challenges, and collaborating on impactful
                digital products.
              </p>

              <a
                href={`mailto:${siteConfig.email}`}
                className="group mt-9 inline-flex min-h-14 items-center gap-4 rounded-lg bg-foreground px-7 py-4 text-sm font-semibold text-background transition-all hover:-translate-y-0.5 hover:shadow-lg motion-reduce:transform-none"
              >
                <Mail size={19} aria-hidden="true" />
                Start a conversation
                <ArrowUpRight
                  size={19}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
            </div>
          </Reveal>

          <Reveal>
            <div className="flex flex-col justify-end">
              <div className="divide-y divide-line border-t border-line">
                <div className="py-6">
                  <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                    Email
                  </p>

                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="group inline-flex items-center gap-2 break-all text-base font-medium transition-colors hover:text-accent"
                  >
                    {siteConfig.email}
                    <ArrowUpRight size={16} className="shrink-0" />
                  </a>
                </div>

                <div className="py-6">
                  <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                    Location
                  </p>

                  <p className="flex items-center gap-2 text-base font-medium">
                    <MapPin
                      size={18}
                      className="text-accent"
                      aria-hidden="true"
                    />
                    Sri Lanka
                  </p>
                </div>

                <div className="py-6">
                  <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                    Find me online
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href={siteConfig.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex size-11 items-center justify-center rounded-lg border border-line bg-surface text-muted transition-colors hover:border-accent/40 hover:text-accent"
                      aria-label="GitHub profile"
                    >
                      <SiGithub size={19} color="currentColor" />
                    </a>

                    <a
                      href={siteConfig.links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex size-11 items-center justify-center rounded-lg border border-line bg-surface text-muted transition-colors hover:border-accent/40 hover:text-accent"
                      aria-label="LinkedIn profile"
                    >
                      <MessageCircle size={19} aria-hidden="true" />
                    </a>

                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="inline-flex size-11 items-center justify-center rounded-lg border border-line bg-surface text-muted transition-colors hover:border-accent/40 hover:text-accent"
                      aria-label="Send an email"
                    >
                      <Mail size={19} aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-7 flex items-center gap-3 rounded-lg border border-line bg-surface px-4 py-3">
                <span className="relative flex size-2.5">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent/40 motion-reduce:animate-none" />
                  <span className="relative size-2.5 rounded-full bg-accent" />
                </span>

                <p className="text-xs font-medium text-muted">
                  Open to new opportunities
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
