import Link from "next/link";

const NotFoundPage = (): React.JSX.Element => (
  <main className="min-h-[calc(100dvh-80px)] bg-light-background px-6 py-16 dark:bg-dark-secondary md:px-8 md:py-20 xl:px-[128px]">
    <section className="mx-auto flex w-full max-w-2xl flex-col items-center justify-center rounded-xl border border-black/5 bg-light-elements p-8 text-center shadow-sm dark:border-white/10 dark:bg-dark-primary dark:shadow-none md:p-12">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-light-input dark:text-white/60">
        Error 404
      </p>
      <h1 className="mt-4 text-3xl font-extrabold text-light-text dark:text-white md:text-4xl">
        Page not found
      </h1>
      <p className="mt-4 text-base text-light-input dark:text-white/70">
        The page you are looking for does not exist or was moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center rounded-md bg-light-text px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-black dark:bg-white dark:text-dark-primary dark:hover:bg-white/90"
      >
        Back to homepage
      </Link>
    </section>
  </main>
);

export default NotFoundPage;
