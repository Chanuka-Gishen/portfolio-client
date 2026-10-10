import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Terminal } from "lucide-react";

import { PortfolioTerminal } from "@/components/terminal/portfolio-terminal";

export const metadata: Metadata = {
  title: "Interactive Terminal",
  description:
    "Explore my software engineering experience, technical skills, projects, and contact information through an interactive terminal.",
  alternates: {
    canonical: "/terminal",
  },
};

export default function TerminalPage() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-6xl px-4 pb-20 pt-10 sm:px-8 sm:pt-14 lg:pt-16">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
        >
          <ArrowLeft size={16} />
          Back to portfolio
        </Link>

        <div className="mb-9 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-4 flex items-center gap-2 font-mono text-xs text-accent">
              <Terminal size={16} />
              INTERACTIVE PORTFOLIO
            </div>

            <h1 className="text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
              Developer Terminal.
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-7 text-muted sm:text-base">
              Prefer exploring through the command line? Discover my projects,
              experience, and technical expertise using an interactive terminal.
            </p>
          </div>

          <div className="w-fit rounded-full border border-line bg-surface px-4 py-2 font-mono text-[11px] text-muted">
            Terminal v2.0
          </div>
        </div>

        <PortfolioTerminal />

        <p className="mt-6 text-center text-xs leading-6 text-muted">
          This is a simulated portfolio terminal. Commands are predefined and do
          not execute on a real server.
        </p>
      </section>
    </main>
  );
}
