import { CountryCard } from "@/components/CountryCard";
import type { Country } from "@/lib/types";

interface CountryGridProps {
  readonly countries: Country[];
}

export const CountryGrid = ({ countries }: CountryGridProps): React.JSX.Element => {
  if (countries.length === 0) {
    return (
      <p className="py-12 text-center text-light-input dark:text-white/60">
        No countries found.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {countries.map((country) => (
        <CountryCard key={country.cca3} country={country} />
      ))}
    </div>
  );
};
