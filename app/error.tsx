"use client";

import { useEffect } from "react";
import Link from "next/link";

interface ErrorPageProps {
  readonly error: Error & { digest?: string };
  readonly reset: () => void;
}

const ErrorPage = ({ error, reset }: ErrorPageProps): React.JSX.Element => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-[calc(100dvh-80px)] bg-light-background px-6 py-16 dark:bg-dark-secondary md:px-8 md:py-20 xl:px-[128px]">
      <section className="mx-auto flex w-full max-w-2xl flex-col items-center justify-center rounded-xl border border-black/5 bg-light-elements p-8 text-center shadow-sm dark:border-white/10 dark:bg-dark-primary dark:shadow-none md:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-light-input dark:text-white/60">
          Something went wrong
        </p>
        <h1 className="mt-4 text-3xl font-extrabold text-light-text dark:text-white md:text-4xl">
          Unable to load data
        </h1>
        <p className="mt-4 text-base text-light-input dark:text-white/70">
          Please try again or go back to the homepage.
        </p>
        <div className="mt-8 flex gap-3">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center rounded-md bg-light-text px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-black dark:bg-white dark:text-dark-primary dark:hover:bg-white/90"
          >
            Retry
          </button>
          <Link
            href="/"
            className="inline-flex items-center rounded-md border border-black/10 px-5 py-3 text-sm font-semibold text-light-text transition-colors hover:bg-black/5 dark:border-white/20 dark:text-white dark:hover:bg-white/10"
          >
            Home
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ErrorPage;
