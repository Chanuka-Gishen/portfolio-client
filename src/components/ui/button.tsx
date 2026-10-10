import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline";
  className?: string;
};
export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: Props) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-colors",
        variant === "primary"
          ? "bg-accent text-accent-foreground hover:opacity-90"
          : "border border-line bg-surface text-foreground hover:bg-foreground/5",
        className,
      )}
    >
      {children}
    </Link>
  );
}
