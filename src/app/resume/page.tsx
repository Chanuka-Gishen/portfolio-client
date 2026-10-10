import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  Download,
  ExternalLink,
  FileText,
  Mail,
} from "lucide-react";

import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "View and download the resume of Chanuka Gishen, Full-Stack Software Engineer.",
  alternates: {
    canonical: "/resume",
  },
};

export default function ResumePage() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-7xl px-5 pb-20 pt-12 sm:px-8 lg:px-10 lg:pt-16">
        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
        >
          <ArrowLeft size={17} />
          Back to portfolio
        </Link>

        <div className="mb-10 flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="font-mono text-xs text-accent">
                PORTFOLIO / RESUME
              </span>
              <span className="h-px w-12 bg-line" />
            </div>

            <h1 className="text-4xl font-semibold tracking-[-0.055em] sm:text-5xl lg:text-6xl">
              My <span className="text-muted">resume.</span>
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-7 text-muted sm:text-base">
              An overview of my professional experience, technical skills, and
              software engineering background.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center gap-2 rounded-lg border border-line bg-surface px-5 py-3 text-sm font-semibold transition-colors hover:border-accent/40 hover:text-accent"
            >
              <ExternalLink size={17} />
              Open PDF
            </a>

            <a
              href="/resume.pdf"
              download="Chanuka-Gishen-Resume.pdf"
              className="inline-flex min-h-12 items-center gap-2 rounded-lg bg-foreground px-5 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-85"
            >
              <Download size={17} />
              Download resume
            </a>
          </div>
        </div>

        <div className="mb-7 flex items-start gap-3 rounded-lg border border-line bg-surface px-5 py-4">
          <Mail
            size={18}
            className="mt-0.5 shrink-0 text-accent"
            aria-hidden="true"
          />

          <div>
            <p className="text-sm font-semibold">Contact Information</p>

            <p className="mt-1 text-sm leading-6 text-muted">
              For privacy reasons, my personal phone number is not included in
              this public resume. It is available upon request through email or
              LinkedIn.
            </p>
          </div>
        </div>

        <div className="mb-7 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-line bg-surface px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex size-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
              <FileText size={21} />
            </div>

            <div>
              <p className="text-sm font-semibold">Chanuka Gishen - Resume</p>

              <p className="mt-1 text-xs text-muted">
                Full-Stack Software Engineer · PDF
              </p>
            </div>
          </div>

          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center gap-2 text-xs font-medium text-muted transition-colors hover:text-accent"
          >
            <Mail size={15} />
            Get in touch
          </a>
        </div>

        <div className="overflow-hidden rounded-xl border border-line bg-surface">
          <div className="flex items-center justify-between gap-3 border-b border-line px-5 py-4">
            <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
              Document preview
            </span>

            <span className="font-mono text-[11px] text-muted">resume.pdf</span>
          </div>

          <object
            data="/resume.pdf"
            type="application/pdf"
            aria-label="Chanuka Gishen resume PDF"
            className="block h-[75svh] min-h-[550px] w-full lg:h-[950px]"
          >
            <div className="flex flex-col items-center justify-center gap-4 px-6 py-20 text-center">
              <FileText size={40} className="text-accent" aria-hidden="true" />

              <p className="max-w-md text-sm leading-7 text-muted">
                Your browser couldn't display the PDF preview. You can open or
                download the resume instead.
              </p>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-accent"
              >
                Open resume
                <ExternalLink size={16} />
              </a>
            </div>
          </object>
        </div>

        <p className="mt-5 text-center text-xs leading-6 text-muted">
          For the best viewing experience on mobile, use the Open PDF button
          above.
        </p>
      </section>
    </main>
  );
}
