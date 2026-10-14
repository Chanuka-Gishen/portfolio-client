"use client";

import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type KeyboardEvent,
} from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  CornerDownLeft,
  Folder,
  History,
  Keyboard,
  Moon,
  Sun,
  Terminal,
  Trash2,
} from "lucide-react";

import { projects } from "@/data/projects";
import { experiences } from "@/data/experience";
import { skillCategories } from "@/data/skills";
import { siteConfig } from "@/config/site";

type TerminalTheme = "dark" | "light";

type TerminalLink = {
  label: string;
  href: string;
  external?: boolean;
};

type TerminalItem =
  | { type: "text"; content: string }
  | { type: "heading"; content: string }
  | { type: "divider" }
  | { type: "links"; links: TerminalLink[] }
  | { type: "commands"; commands: string[] }
  | { type: "project"; slug: string }
  | { type: "spacer" };

type TerminalEntry = {
  id: number;
  command?: string;
  items: TerminalItem[];
  isError?: boolean;
};

type CommandResult = {
  items: TerminalItem[];
  error?: boolean;
  clear?: boolean;
  toggleTheme?: boolean;
};

const COMMANDS = [
  "help",
  "whoami",
  "about",
  "skills",
  "experience",
  "projects",
  "project",
  "github",
  "contact",
  // "resume",
  "neofetch",
  "history",
  "ls",
  "pwd",
  "date",
  "clear",
  "theme",
  "matrix",
  "sudo hire-me",
  "cd projects",
] as const;

const QUICK_COMMANDS = [
  "help",
  "about",
  "skills",
  "projects",
  "experience",
  "contact",
];

const HELP_COMMANDS = [
  ["help", "Show available commands"],
  ["whoami", "Developer identity"],
  ["about", "Professional background"],
  ["skills", "Technical skills"],
  ["experience", "Employment history"],
  ["projects", "Browse portfolio projects"],
  ["project <slug>", "Explore a specific project"],
  ["github", "GitHub profile"],
  ["contact", "Contact information"],
  // ["resume", "Resume and download link"],
  ["neofetch", "Developer system information"],
  ["history", "Previous commands"],
  ["theme", "Toggle terminal appearance"],
  ["clear", "Clear terminal output"],
  ["ls", "List portfolio directories"],
  ["pwd", "Current directory"],
  ["date", "Current date and time"],
  ["cd projects", "Open projects page"],
  ["sudo hire-me", "Recruitment protocol"],
];

const initialItems: TerminalItem[] = [
  {
    type: "heading",
    content: `Welcome to ${siteConfig.name}'s terminal.`,
  },
  {
    type: "text",
    content: "An interactive way to explore my engineering journey.",
  },
  { type: "spacer" },
  {
    type: "text",
    content: "Type a command or select an option below to get started.",
  },
  {
    type: "commands",
    commands: ["help", "whoami", "projects", "neofetch"],
  },
];

function getCommandResult(
  rawCommand: string,
  history: string[],
): CommandResult {
  const normalized = rawCommand.trim().replace(/\s+/g, " ");
  const [action, ...args] = normalized.toLowerCase().split(" ");
  const argument = args.join(" ");

  switch (action) {
    case "help":
      return {
        items: [
          { type: "heading", content: "Available commands" },
          { type: "divider" },
          ...HELP_COMMANDS.map(([name, description]) => ({
            type: "text" as const,
            content: `${name.padEnd(19)} ${description}`,
          })),
          { type: "spacer" },
          {
            type: "text",
            content: "Tip: TAB completes commands. ↑ and ↓ navigate history.",
          },
        ],
      };

    case "whoami":
      return {
        items: [
          { type: "heading", content: siteConfig.name },
          {
            type: "text",
            content: "Role       Full-Stack Software Engineer",
          },
          {
            type: "text",
            content: "Focus      Backend & Full-Stack Development",
          },
          {
            type: "text",
            content: "Experience 3+ years",
          },
          {
            type: "text",
            content: "Location   Sri Lanka",
          },
          { type: "spacer" },
          {
            type: "commands",
            commands: ["about", "experience", "skills"],
          },
        ],
      };

    case "about":
      return {
        items: [
          {
            type: "heading",
            content: "About me",
          },
          {
            type: "text",
            content:
              "I'm a Full-Stack Software Engineer focused on developing reliable backend systems and modern web applications.",
          },
          { type: "spacer" },
          {
            type: "text",
            content:
              "My experience includes ERP applications, e-commerce platforms, REST APIs, database design, cloud deployments, and business automation.",
          },
          { type: "spacer" },
          {
            type: "links",
            links: [
              {
                label: "Read more about me",
                href: "/#about",
              },
            ],
          },
        ],
      };

    case "skills":
      return {
        items: [
          {
            type: "heading",
            content: "Technical toolkit",
          },
          { type: "divider" },
          ...skillCategories.flatMap((category): TerminalItem[] => [
            {
              type: "heading",
              content: category.title,
            },
            {
              type: "text",
              content: category.skills.map((skill) => skill.name).join("  ·  "),
            },
            { type: "spacer" },
          ]),
          {
            type: "links",
            links: [
              {
                label: "View skills section",
                href: "/#skills",
              },
            ],
          },
        ],
      };

    case "experience":
      return {
        items: [
          {
            type: "heading",
            content: "Professional experience",
          },
          { type: "divider" },
          ...experiences.flatMap((job): TerminalItem[] => [
            {
              type: "heading",
              content: `${job.role} @ ${job.company}`,
            },
            {
              type: "text",
              content: `${job.period} · ${job.location}`,
            },
            {
              type: "text",
              content: job.description,
            },
            { type: "spacer" },
          ]),
          {
            type: "links",
            links: [
              {
                label: "View experience timeline",
                href: "/#experience",
              },
            ],
          },
        ],
      };

    case "projects":
      return {
        items: [
          {
            type: "heading",
            content: "Portfolio projects",
          },
          {
            type: "text",
            content: "Select a project below to inspect its details.",
          },
          { type: "divider" },
          ...projects.map(
            (project): TerminalItem => ({
              type: "project",
              slug: project.slug,
            }),
          ),
          { type: "spacer" },
          {
            type: "links",
            links: [
              {
                label: "Browse all projects",
                href: "/projects",
              },
            ],
          },
        ],
      };

    case "project": {
      if (!argument) {
        return {
          items: [
            {
              type: "text",
              content: "Usage: project <slug>",
            },
            {
              type: "commands",
              commands: projects.map((project) => `project ${project.slug}`),
            },
          ],
        };
      }

      const project = projects.find(
        (item) => item.slug.toLowerCase() === argument,
      );

      if (!project) {
        return {
          error: true,
          items: [
            {
              type: "text",
              content: `Project '${argument}' not found.`,
            },
            {
              type: "text",
              content: "Run 'projects' to see available entries.",
            },
          ],
        };
      }

      return {
        items: [
          {
            type: "heading",
            content: project.title,
          },
          {
            type: "text",
            content: project.subtitle,
          },
          { type: "divider" },
          {
            type: "text",
            content: project.description,
          },
          { type: "spacer" },
          {
            type: "text",
            content: `Status: ${project.status ?? "Not specified"}`,
          },
          {
            type: "text",
            content: `Stack: ${project.technologies.join(", ")}`,
          },
          { type: "spacer" },
          {
            type: "links",
            links: [
              {
                label: "View case study",
                href: `/projects/${project.slug}`,
              },
              ...(project.website
                ? [
                    {
                      label: "Live website",
                      href: project.website,
                      external: true,
                    },
                  ]
                : []),
              ...(project.github
                ? [
                    {
                      label: "Source code",
                      href: project.github,
                      external: true,
                    },
                  ]
                : []),
            ],
          },
        ],
      };
    }

    case "github":
      return {
        items: [
          {
            type: "heading",
            content: "GitHub",
          },
          {
            type: "text",
            content:
              "Explore my public repositories, pinned projects, and contribution activity.",
          },
          {
            type: "links",
            links: [
              {
                label: "Visit GitHub",
                href: siteConfig.links.github,
                external: true,
              },
              {
                label: "GitHub activity section",
                href: "/#github",
              },
            ],
          },
        ],
      };

    case "contact":
      return {
        items: [
          {
            type: "heading",
            content: "Contact information",
          },
          {
            type: "text",
            content: `Email: ${siteConfig.email}`,
          },
          {
            type: "text",
            content: "Location: Sri Lanka",
          },
          { type: "spacer" },
          {
            type: "links",
            links: [
              {
                label: "Send email",
                href: `mailto:${siteConfig.email}`,
              },
              {
                label: "LinkedIn",
                href: siteConfig.links.linkedin,
                external: true,
              },
              {
                label: "Contact section",
                href: "/#contact",
              },
            ],
          },
        ],
      };

    // case "resume":
    //   return {
    //     items: [
    //       {
    //         type: "heading",
    //         content: "Professional Resume",
    //       },
    //       {
    //         type: "text",
    //         content: "Full-Stack Software Engineer | 3+ years of experience",
    //       },
    //       {
    //         type: "text",
    //         content:
    //           "Explore my professional experience, technical expertise, and project background.",
    //       },
    //       { type: "spacer" },
    //       {
    //         type: "links",
    //         links: [
    //           {
    //             label: "View resume",
    //             href: "/resume",
    //           },
    //           {
    //             label: "Open PDF",
    //             href: "/resume.pdf",
    //             external: true,
    //           },
    //         ],
    //       },
    //     ],
    //   };

    case "neofetch":
      return {
        items: [
          {
            type: "heading",
            content: "◢ PORTFOLIO OS ◣",
          },
          { type: "divider" },
          {
            type: "text",
            content: `user       ${siteConfig.name}`,
          },
          {
            type: "text",
            content: "role       Full-Stack Software Engineer",
          },
          {
            type: "text",
            content: "location   Sri Lanka",
          },
          {
            type: "text",
            content: "experience 3+ years",
          },
          {
            type: "text",
            content: "shell      portfolio-terminal",
          },
          {
            type: "text",
            content: "framework  Next.js + TypeScript",
          },
          {
            type: "text",
            content: "status     Always building",
          },
          { type: "spacer" },
          {
            type: "text",
            content: "████ ████ ████ ████",
          },
        ],
      };

    case "history":
      return {
        items: [
          {
            type: "heading",
            content: "Command history",
          },
          ...(history.length
            ? history.map(
                (command, index): TerminalItem => ({
                  type: "text",
                  content: `${String(index + 1).padStart(3)}  ${command}`,
                }),
              )
            : [
                {
                  type: "text" as const,
                  content: "No previous commands.",
                },
              ]),
        ],
      };

    case "ls":
      return {
        items: [
          {
            type: "commands",
            commands: [
              "about",
              "experience",
              "skills",
              "projects",
              "github",
              "contact",
            ],
          },
        ],
      };

    case "pwd":
      return {
        items: [
          {
            type: "text",
            content: "/home/visitor/portfolio",
          },
        ],
      };

    case "date":
      return {
        items: [
          {
            type: "text",
            content: new Date().toLocaleString(),
          },
        ],
      };

    case "theme":
      return {
        toggleTheme: true,
        items: [
          {
            type: "text",
            content: "Terminal appearance switched.",
          },
        ],
      };

    case "clear":
      return {
        clear: true,
        items: [],
      };

    case "matrix":
      return {
        items: [
          {
            type: "heading",
            content: "MATRIX MODE",
          },
          {
            type: "text",
            content: "01001000 01100101 01101100 01101100 01101111",
          },
          {
            type: "text",
            content: "Wake up, visitor...",
          },
          {
            type: "text",
            content: "The best code is the code that solves a problem.",
          },
        ],
      };

    case "sudo":
      if (argument === "hire-me") {
        return {
          items: [
            {
              type: "heading",
              content: "[ ACCESS GRANTED ]",
            },
            { type: "divider" },
            {
              type: "text",
              content: "Recruitment protocol initialized.",
            },
            {
              type: "text",
              content: `Candidate: ${siteConfig.name}`,
            },
            {
              type: "text",
              content: "Role: Full-Stack Software Engineer",
            },
            {
              type: "text",
              content: "Status: Open to opportunities",
            },
            { type: "spacer" },
            {
              type: "links",
              links: [
                {
                  label: "Initiate contact",
                  href: `mailto:${siteConfig.email}`,
                },
                {
                  label: "View resume",
                  href: "/resume.pdf",
                  external: true,
                },
              ],
            },
            {
              type: "text",
              content: "No actual root privileges granted. :)",
            },
          ],
        };
      }

      return {
        error: true,
        items: [
          {
            type: "text",
            content: "Permission denied.",
          },
          {
            type: "text",
            content: "Hint: sudo hire-me",
          },
        ],
      };

    case "cd":
      if (argument === "projects") {
        return {
          items: [
            {
              type: "text",
              content: "Available destination:",
            },
            {
              type: "links",
              links: [
                {
                  label: "Open projects directory",
                  href: "/projects",
                },
              ],
            },
          ],
        };
      }

      return {
        error: true,
        items: [
          {
            type: "text",
            content: `Directory '${argument || "~"}' unavailable.`,
          },
        ],
      };

    default:
      return {
        error: true,
        items: [
          {
            type: "text",
            content: `Command not found: ${action}`,
          },
          {
            type: "text",
            content: "Type 'help' for available commands.",
          },
        ],
      };
  }
}

export function PortfolioTerminal() {
  const [entries, setEntries] = useState<TerminalEntry[]>([
    {
      id: 0,
      items: initialItems,
    },
  ]);

  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [theme, setTheme] = useState<TerminalTheme>("dark");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);
  const nextId = useRef(1);
  const shouldScrollRef = useRef(false);

  const dark = theme === "dark";

  useEffect(() => {
    if (!shouldScrollRef.current) return;

    shouldScrollRef.current = false;

    const frame = requestAnimationFrame(() => {
      inputRef.current?.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
        block: "nearest",
      });
    });

    return () => cancelAnimationFrame(frame);
  }, [entries]);

  const matches = input.trim()
    ? [
        ...COMMANDS.filter((command) =>
          command.startsWith(input.trim().toLowerCase()),
        ),
        ...projects
          .map((project) => `project ${project.slug}`)
          .filter((command) => command.startsWith(input.trim().toLowerCase())),
      ].filter((value, index, values) => values.indexOf(value) === index)
    : [];

  function executeCommand(raw: string) {
    const command = raw.trim().replace(/\s+/g, " ");

    if (!command) return;

    const result = getCommandResult(command, history);

    setHistory((previous) => [...previous, command]);
    setHistoryIndex(-1);
    setInput("");
    setSuggestions([]);

    shouldScrollRef.current = true;

    if (result.clear) {
      setEntries([]);
      return;
    }

    if (result.toggleTheme) {
      setTheme((previous) => (previous === "dark" ? "light" : "dark"));
    }

    setEntries((previous) => [
      ...previous,
      {
        id: nextId.current++,
        command,
        items: result.items,
        isError: result.error,
      },
    ]);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    executeCommand(input);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "ArrowUp") {
      event.preventDefault();

      if (!history.length) return;

      const index =
        historyIndex < 0 ? history.length - 1 : Math.max(0, historyIndex - 1);

      setHistoryIndex(index);
      setInput(history[index]);
      setSuggestions([]);
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();

      if (historyIndex < 0) return;

      const nextIndex = historyIndex + 1;

      if (nextIndex >= history.length) {
        setHistoryIndex(-1);
        setInput("");
      } else {
        setHistoryIndex(nextIndex);
        setInput(history[nextIndex]);
      }

      setSuggestions([]);
      return;
    }

    if (event.key === "Tab") {
      event.preventDefault();

      if (matches.length === 1) {
        setInput(matches[0]);
        setSuggestions([]);
      } else if (matches.length > 1) {
        setSuggestions(matches);
      }

      return;
    }

    if (event.key === "Escape") {
      setSuggestions([]);
    }
  }

  function runQuickCommand(command: string) {
    executeCommand(command);
  }

  return (
    <div
      className={`flex w-full min-w-0 flex-col overflow-hidden rounded-2xl border font-mono shadow-[0_25px_90px_-35px_rgba(0,0,0,0.35)] ${
        dark
          ? "border-[#293348] bg-[#0b1019] text-[#dce5f3]"
          : "border-slate-300 bg-[#f8fafc] text-slate-900"
      }`}
    >
      <div
        className={`flex min-h-14 items-center justify-between gap-3 border-b px-4 sm:px-6 ${
          dark
            ? "border-[#293348] bg-[#111927]"
            : "border-slate-200 bg-slate-100"
        }`}
      >
        <div className="flex items-center gap-2">
          <span className="size-3 rounded-full bg-[#ff605c]" />
          <span className="size-3 rounded-full bg-[#ffbd44]" />
          <span className="size-3 rounded-full bg-[#00ca4e]" />
        </div>

        <div className="flex items-center gap-2 text-[11px] opacity-70">
          <Terminal size={14} />
          <span className="hidden sm:inline">visitor@portfolio — bash</span>
          <span className="sm:hidden">portfolio — bash</span>
        </div>

        <button
          type="button"
          onClick={() => executeCommand("theme")}
          aria-label={
            dark
              ? "Switch terminal to light mode"
              : "Switch terminal to dark mode"
          }
          className="rounded-md p-2 opacity-70 transition-opacity hover:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          {dark ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      </div>

      <div className="min-h-[360px] px-4 py-6 sm:min-h-[420px] sm:px-7 sm:py-8">
        <div
          role="log"
          aria-live="polite"
          aria-relevant="additions"
          className="space-y-6"
        >
          {entries.map((entry) => (
            <div key={entry.id}>
              {entry.command && (
                <div className="mb-3 flex flex-wrap items-center gap-2 text-xs sm:text-sm">
                  <TerminalPrompt dark={dark} />
                  <span className="break-all text-inherit">
                    {entry.command}
                  </span>
                </div>
              )}

              <div
                className={`space-y-2 text-xs leading-6 sm:text-sm ${
                  entry.isError
                    ? "text-red-400"
                    : dark
                      ? "text-[#b4c1d4]"
                      : "text-slate-600"
                }`}
              >
                {entry.items.map((item, index) => (
                  <TerminalOutputItem
                    key={`${entry.id}-${index}`}
                    item={item}
                    dark={dark}
                    onCommand={runQuickCommand}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-7">
          <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <TerminalPrompt dark={dark} />

            <div className="relative flex min-w-0 flex-1 items-center">
              <input
                ref={inputRef}
                value={input}
                onChange={(event) => {
                  setInput(event.target.value);
                  setSuggestions([]);
                  setHistoryIndex(-1);
                }}
                onKeyDown={handleKeyDown}
                aria-label="Terminal command"
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck={false}
                enterKeyHint="go"
                className="peer w-full min-w-0 bg-transparent py-2 text-xs text-inherit outline-none placeholder:opacity-40 sm:text-sm"
                placeholder="Type a command..."
              />

              {/* Blinking cursor when input is empty */}
              {!input && (
                <span
                  aria-hidden="true"
                  className={`pointer-events-none absolute left-0 top-1/2 h-4 w-[2px] -translate-y-1/2 animate-pulse opacity-0 peer-focus:opacity-80 motion-reduce:animate-none ${
                    dark ? "bg-[#93aaff]" : "bg-blue-600"
                  }`}
                />
              )}
            </div>

            <button
              type="submit"
              disabled={!input.trim()}
              aria-label="Execute command"
              className={`inline-flex size-9 shrink-0 items-center justify-center rounded-md transition-colors disabled:cursor-not-allowed disabled:opacity-30 ${
                dark
                  ? "bg-[#293348] hover:bg-[#36435c]"
                  : "bg-slate-200 hover:bg-slate-300"
              }`}
            >
              <CornerDownLeft size={16} />
            </button>
          </form>

          {/* Autocomplete results */}
          {suggestions.length > 0 && (
            <div
              className={`mt-3 rounded-lg border p-2 ${
                dark
                  ? "border-[#293348] bg-[#111927]"
                  : "border-slate-200 bg-white"
              }`}
            >
              <p className="mb-2 px-2 text-[10px] uppercase tracking-wider opacity-60">
                Matching commands
              </p>

              <div className="flex flex-wrap gap-2">
                {suggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    onClick={() => {
                      setInput(suggestion);
                      setSuggestions([]);
                      inputRef.current?.focus();
                    }}
                    className="rounded border border-current/15 px-2.5 py-1.5 text-xs transition-colors hover:text-accent"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Matching command suggestions */}
          {input && matches.length > 0 && suggestions.length === 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {matches.slice(0, 4).map((match) => (
                <button
                  key={match}
                  type="button"
                  onClick={() => {
                    setInput(match);
                    inputRef.current?.focus();
                  }}
                  className="rounded-md px-2 py-1 text-[11px] opacity-55 transition-opacity hover:opacity-100"
                >
                  <ChevronRight size={12} className="mr-1 inline" />
                  {match}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Quick command toolbar */}
      <div
        className={`border-t px-4 py-4 sm:px-7 ${
          dark
            ? "border-[#293348] bg-[#101725]"
            : "border-slate-200 bg-slate-100/70"
        }`}
      >
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="text-[10px] uppercase tracking-[0.16em] opacity-55">
            Quick commands
          </span>

          <button
            type="button"
            onClick={() => executeCommand("clear")}
            className="inline-flex items-center gap-1.5 text-[11px] opacity-65 transition-opacity hover:opacity-100"
            aria-label="Clear terminal"
          >
            <Trash2 size={13} />
            Clear
          </button>
        </div>

        <div className="flex flex-wrap gap-2">
          {QUICK_COMMANDS.map((command) => (
            <button
              key={command}
              type="button"
              onClick={() => runQuickCommand(command)}
              className={`rounded-md border px-3 py-2 text-[11px] transition-colors sm:text-xs ${
                dark
                  ? "border-[#33405a] bg-[#182236] text-[#aebfdd] hover:border-[#7b94ce] hover:text-white"
                  : "border-slate-300 bg-white text-slate-600 hover:border-blue-400 hover:text-blue-700"
              }`}
            >
              <span className="mr-1.5 opacity-50">$</span>
              {command}
            </button>
          ))}
        </div>

        {/* Keyboard hints */}
        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-[10px] opacity-50">
          <span className="inline-flex items-center gap-1.5">
            <Keyboard size={13} />
            TAB autocomplete
          </span>

          <span className="inline-flex items-center gap-1.5">
            <History size={13} />↑ ↓ history
          </span>

          <span className="inline-flex items-center gap-1.5">
            <CornerDownLeft size={13} />
            ENTER execute
          </span>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Terminal prompt
// ─────────────────────────────────────────────

function TerminalPrompt({ dark }: { dark: boolean }) {
  return (
    <span
      className={`shrink-0 whitespace-nowrap text-xs font-medium sm:text-sm ${
        dark ? "text-[#93aaff]" : "text-blue-700"
      }`}
    >
      <span className="hidden sm:inline">visitor@portfolio:~$</span>

      <span className="sm:hidden">~$</span>
    </span>
  );
}

// ─────────────────────────────────────────────
// Output rendering
// ─────────────────────────────────────────────

function TerminalOutputItem({
  item,
  dark,
  onCommand,
}: {
  item: TerminalItem;
  dark: boolean;
  onCommand: (command: string) => void;
}) {
  switch (item.type) {
    case "heading":
      return (
        <p
          className={`font-semibold ${
            dark ? "text-[#93aaff]" : "text-blue-700"
          }`}
        >
          {item.content}
        </p>
      );

    case "text":
      return <p className="whitespace-pre-wrap break-words">{item.content}</p>;

    case "divider":
      return (
        <div
          aria-hidden="true"
          className={`my-3 h-px w-full ${
            dark ? "bg-[#293348]" : "bg-slate-200"
          }`}
        />
      );

    case "spacer":
      return <div className="h-2" aria-hidden="true" />;

    case "commands":
      return (
        <div className="flex flex-wrap gap-2 pt-2">
          {item.commands.map((command) => (
            <button
              key={command}
              type="button"
              onClick={() => onCommand(command)}
              className={`inline-flex items-center gap-2 rounded-md border px-3 py-2 text-xs transition-colors ${
                dark
                  ? "border-[#34415d] bg-[#172136] text-[#b4c9f3] hover:border-[#8399c9] hover:bg-[#202d47]"
                  : "border-slate-300 bg-white text-blue-700 hover:border-blue-400 hover:bg-blue-50"
              }`}
            >
              <ChevronRight size={13} />
              {command}
            </button>
          ))}
        </div>
      );

    case "links":
      return (
        <div className="flex flex-wrap gap-3 pt-2">
          {item.links.map((link) => {
            const content = (
              <>
                {link.label}
                <ArrowUpRight size={14} aria-hidden="true" />
              </>
            );

            const className = `inline-flex items-center gap-2 rounded-md border px-3.5 py-2 text-xs font-medium transition-colors ${
              dark
                ? "border-[#485b81] bg-[#182743] text-[#a9c4ff] hover:bg-[#263958]"
                : "border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-100"
            }`;

            if (link.external || link.href.startsWith("mailto:")) {
              return (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className={className}
                >
                  {content}
                </a>
              );
            }

            return (
              <Link key={link.href} href={link.href} className={className}>
                {content}
              </Link>
            );
          })}
        </div>
      );

    case "project": {
      const project = projects.find((p) => p.slug === item.slug);

      if (!project) return null;

      return (
        <button
          type="button"
          onClick={() => onCommand(`project ${project.slug}`)}
          className={`group my-1 flex w-full items-center justify-between gap-4 rounded-lg border p-4 text-left transition-colors ${
            dark
              ? "border-[#2d3951] bg-[#111a2a] hover:border-[#6c83b2] hover:bg-[#17243a]"
              : "border-slate-200 bg-white hover:border-blue-300 hover:bg-blue-50"
          }`}
        >
          <div className="flex min-w-0 items-start gap-3">
            <Folder
              size={18}
              className={`mt-0.5 shrink-0 ${
                dark ? "text-[#93aaff]" : "text-blue-700"
              }`}
            />

            <div className="min-w-0">
              <p className="font-semibold">{project.title}</p>

              <p className="mt-1 text-[11px] opacity-60">{project.subtitle}</p>

              <p className="mt-2 text-[10px] opacity-50">
                {project.status ?? "Project"}
                {" · "}
                {project.technologies.slice(0, 3).join(" / ")}
              </p>
            </div>
          </div>

          <ArrowRight
            size={17}
            className="shrink-0 opacity-50 transition-transform group-hover:translate-x-1"
          />
        </button>
      );
    }

    default:
      return null;
  }
}
