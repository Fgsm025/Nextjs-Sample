import Image from "next/image";
import Link from "next/link";
import type { Country } from "@/lib/types";

interface CountryCardProps {
  readonly country: Country;
}

export const CountryCard = ({ country }: CountryCardProps): React.JSX.Element => {
  const capital = country.capital?.[0] ?? "N/A";

  return (
    <Link
      href={`/country/${country.cca3}`}
      className="group overflow-hidden rounded-[4px] bg-light-elements shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg dark:bg-dark-primary"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={country.flags.svg}
          alt={country.flags.alt ?? `Flag of ${country.name.common}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
          className="object-cover"
        />
      </div>

      <div className="px-6 py-6">
        <h2 className="mb-3 text-lg font-extrabold text-light-text dark:text-white">
          {country.name.common}
        </h2>
        <p className="text-sm text-light-text dark:text-white/90">
          <span className="font-semibold">Population:</span>{" "}
          {country.population.toLocaleString()}
        </p>
        <p className="text-sm text-light-text dark:text-white/90">
          <span className="font-semibold">Region:</span> {country.region}
        </p>
        <p className="text-sm text-light-text dark:text-white/90">
          <span className="font-semibold">Capital:</span> {capital}
        </p>
      </div>
    </Link>
  );
};
