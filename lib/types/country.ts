export interface CountryName {
  common: string;
  official: string;
  nativeName?: {
    [key: string]: {
      official: string;
      common: string;
    };
  };
}

export interface CountryFlags {
  png: string;
  svg: string;
  alt?: string;
}

export interface CountryCurrency {
  name: string;
}

export interface CountryLanguage {
  [key: string]: string;
}

export interface CountryListItem {
  name: CountryName;
  cca3: string;
  flags: CountryFlags;
  population: number;
  region: string;
  capital?: string[];
}

export interface CountryDetail {
  name: CountryName;
  cca3: string;
  flags: CountryFlags;
  population: number;
  region: string;
  subregion?: string;
  capital?: string[];
  tld?: string[];
  currencies?: Record<string, CountryCurrency>;
  languages?: CountryLanguage;
  borders?: string[];
}

export interface CountryFilters {
  search: string;
  region: string;
}

export type Region = "Africa" | "Americas" | "Asia" | "Europe" | "Oceania" | "";

export interface CountryCardProps {
  country: CountryListItem;
  onClick: (cca3: string) => void;
}

export interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export interface RegionFilterProps {
  value: Region;
  onChange: (region: Region) => void;
}

export interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}
