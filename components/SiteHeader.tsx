"use client";

import { useCallback, useEffect, useState } from "react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";

type Theme = "light" | "dark";
const THEME_STORAGE_KEY = "theme";

const applyTheme = (next: Theme): void => {
  const root = document.documentElement;
  if (next === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
};

export const SiteHeader = (): React.JSX.Element => {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const storedTheme = globalThis.localStorage.getItem(THEME_STORAGE_KEY);
    if (storedTheme === "light" || storedTheme === "dark") {
      setTheme(storedTheme);
      return;
    }

    const prefersDark = globalThis.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(prefersDark ? "dark" : "light");
  }, []);

  useEffect(() => {
    applyTheme(theme);
    globalThis.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  const handleToggleTheme = useCallback((): void => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  }, []);

  const isDark = theme === "dark";

  return (
    <header className="border-b border-black/5 bg-light-elements shadow-sm dark:border-white/10 dark:bg-dark-primary dark:shadow-none">
      <div className="flex h-[80px] items-center p-6 md:px-8 md:py-0 xl:px-[128px]">
        <p className="text-[12px] font-semibold leading-[100%] text-light-text dark:text-white md:text-[20px]">
          Where in the world?
        </p>
        <button
          type="button"
          onClick={handleToggleTheme}
          className="ml-auto flex items-center gap-2 text-[12px] font-medium leading-[100%] text-light-text dark:text-white md:text-[16px]"
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
          {isDark ? (
            <HiOutlineSun className="h-5 w-5 shrink-0" aria-hidden />
          ) : (
            <HiOutlineMoon className="h-5 w-5 shrink-0" aria-hidden />
          )}
          <span>{isDark ? "Light Mode" : "Dark Mode"}</span>
        </button>
      </div>
    </header>
  );
};
