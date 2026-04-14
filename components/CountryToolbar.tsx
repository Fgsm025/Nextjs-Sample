"use client";

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type ChangeEvent,
} from "react";
import { FiChevronDown, FiSearch } from "react-icons/fi";

const REGIONS = ["Africa", "America", "Asia", "Europe", "Oceania"] as const;

export type RegionFilter = (typeof REGIONS)[number] | "";

interface CountryToolbarProps {
  readonly searchQuery: string;
  readonly onSearchChange: (value: string) => void;
  readonly selectedRegion: RegionFilter;
  readonly onRegionChange: (region: RegionFilter) => void;
}

export const CountryToolbar = ({
  searchQuery,
  onSearchChange,
  selectedRegion,
  onRegionChange,
}: CountryToolbarProps): React.JSX.Element => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const listboxId = useId();

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent): void => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const handleKeyDown = (event: globalThis.KeyboardEvent): void => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  const handleSearchInput = useCallback(
    (event: ChangeEvent<HTMLInputElement>): void => {
      onSearchChange(event.target.value);
    },
    [onSearchChange],
  );

  const handleToggleMenu = useCallback((): void => {
    setMenuOpen((open) => !open);
  }, []);

  const handleSelectRegion = useCallback(
    (region: RegionFilter): void => {
      onRegionChange(region);
      setMenuOpen(false);
    },
    [onRegionChange],
  );

  const triggerLabel =
    selectedRegion === "" ? "Filter by Region" : selectedRegion;

  return (
    <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
      <label className="relative block w-full max-w-[419px]">
        <span className="sr-only">Search for a country</span>
        <FiSearch
          className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-light-input dark:text-white/70"
          aria-hidden
        />
        <input
          type="search"
          value={searchQuery}
          onChange={handleSearchInput}
          placeholder="Search for a country..."
          className="h-[52px] w-full rounded-md border-0 bg-light-elements pl-12 pr-4 text-sm text-light-text shadow-[0_0_8px_0_hsla(0,0%,0%,0.15)] placeholder:text-light-input focus:outline-none focus:ring-2 focus:ring-light-text/20 dark:bg-dark-primary dark:text-white dark:placeholder:text-white/60 dark:focus:ring-white/20 md:text-base"
        />
      </label>

      <div ref={containerRef} className="relative h-[56px] w-[262px] shrink-0">
        <button
          type="button"
          id={`${listboxId}-trigger`}
          aria-haspopup="listbox"
          aria-expanded={menuOpen}
          aria-controls={listboxId}
          onClick={handleToggleMenu}
          className="flex h-[56px] w-full items-center justify-between gap-2 rounded-md border-0 bg-light-elements px-4 text-left text-sm font-normal text-light-text shadow-[0_0_8px_0_hsla(0,0%,0%,0.15)] dark:bg-dark-primary dark:text-white md:text-base"
        >
          <span className="truncate">{triggerLabel}</span>
          <FiChevronDown
            className={`h-5 w-5 shrink-0 text-light-input transition-transform [stroke-width:2.5] dark:text-white/70 ${menuOpen ? "rotate-180" : ""}`}
            aria-hidden
          />
        </button>

        {menuOpen ? (
          <div
            id={listboxId}
            role="listbox"
            aria-labelledby={`${listboxId}-trigger`}
            className="absolute left-0 right-0 z-10 mt-2 overflow-hidden rounded-md bg-light-elements py-2 text-sm shadow-lg dark:bg-dark-primary md:text-base"
          >
            <button
              type="button"
              role="option"
              aria-selected={selectedRegion === ""}
              className="w-full px-4 py-2 text-left text-light-text hover:bg-light-background focus:bg-light-background focus:outline-none dark:text-white dark:hover:bg-dark-secondary dark:focus:bg-dark-secondary"
              onClick={() => handleSelectRegion("")}
            >
              All regions
            </button>
            {REGIONS.map((region) => (
              <button
                key={region}
                type="button"
                role="option"
                aria-selected={selectedRegion === region}
                className="w-full px-4 py-2 text-left text-light-text hover:bg-light-background focus:bg-light-background focus:outline-none dark:text-white dark:hover:bg-dark-secondary dark:focus:bg-dark-secondary"
                onClick={() => handleSelectRegion(region)}
              >
                {region}
              </button>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};
