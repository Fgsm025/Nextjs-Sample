export interface CountryName {
  common: string;
  official: string;
  nativeName?: Record<string, { official: string; common: string }>;
}

export interface CountryFlags {
  svg: string;
  png: string;
  alt?: string;
}

export interface Country {
  cca3: string;
  name: CountryName;
  flags: CountryFlags;
  population: number;
  region: string;
  subregion?: string;
  capital?: string[];
  tld?: string[];
  currencies?: Record<string, { name: string; symbol?: string }>;
  languages?: Record<string, string>;
  borders?: string[];
}
