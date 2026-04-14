// TypeScript interfaces for REST Countries API
// Use these types throughout your application for proper type safety

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
  symbol: string;
}

export interface CountryLanguage {
  [key: string]: string;
}

export interface Country {
  name: CountryName;
  tld?: string[];
  cca2: string;
  ccn3?: string;
  cca3: string;
  independent?: boolean;
  status: string;
  unMember: boolean;
  currencies?: {
    [key: string]: CountryCurrency;
  };
  capital?: string[];
  region: string;
  subregion?: string;
  languages?: CountryLanguage;
  translations?: {
    [key: string]: {
      official: string;
      common: string;
    };
  };
  latlng: [number, number];
  landlocked: boolean;
  borders?: string[];
  area: number;
  demonyms?: {
    [key: string]: {
      f: string;
      m: string;
    };
  };
  flag: string;
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
  population: number;
  fifa?: string;
  car: {
    signs: string[];
    side: string;
  };
  timezones: string[];
  continents: string[];
  flags: CountryFlags;
  coatOfArms: {
    png?: string;
    svg?: string;
  };
  startOfWeek: string;
  capitalInfo: {
    latlng?: [number, number];
  };
  postalCode?: {
    format: string;
    regex: string;
  };
}

export interface CountryListItem {
  name: CountryName;
  flags: CountryFlags;
  population: number;
  region: string;
  capital?: string[];
  cca3: string;
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
