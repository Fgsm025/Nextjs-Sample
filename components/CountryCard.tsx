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
      className="group flex w-full flex-col overflow-hidden rounded-[4px] bg-light-elements shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg dark:bg-dark-primary"
    >
      <div className="relative h-[192px] w-full overflow-hidden">
        <Image
          src={country.flags.svg}
          alt={country.flags.alt ?? `Flag of ${country.name.common}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
          className="object-cover"
        />
      </div>

      <div className="h-[183px] px-6 py-8">
        <h2 className="mb-4 text-[18px] font-bold leading-[100%] text-light-text dark:text-white">
          {country.name.common}
        </h2>
        <div className="flex flex-col gap-3">
          <p className="text-[16px] font-normal leading-[100%] text-light-text dark:text-white/90">
            <span className="text-[16px] font-semibold leading-[100%]">Population:</span>{" "}
            {country.population.toLocaleString()}
          </p>
          <p className="text-[16px] font-normal leading-[100%] text-light-text dark:text-white/90">
            <span className="text-[16px] font-semibold leading-[100%]">Region:</span>{" "}
            {country.region}
          </p>
          <p className="text-[16px] font-normal leading-[100%] text-light-text dark:text-white/90">
            <span className="text-[16px] font-semibold leading-[100%]">Capital:</span>{" "}
            {capital}
          </p>
        </div>
      </div>
    </Link>
  );
};
