import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-6xl flex-col items-start justify-center px-5 sm:px-8">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="mt-3 text-4xl font-bold">Page not found</h1>
      <p className="mt-4 text-muted">This page doesn’t exist yet.</p>
      <Link
        href="/"
        className="mt-8 text-sm font-semibold text-accent hover:underline"
      >
        Back to homepage →
      </Link>
    </section>
  );
}
