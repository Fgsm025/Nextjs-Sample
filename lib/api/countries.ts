import { cache } from 'react'
import type { CountryDetail, CountryListItem } from '@/lib/types/country'

const API_BASE = 'https://restcountries.com/v3.1'

const FIELDS_ALL = [
  'cca3',
  'name',
  'flags',
  'population',
  'region',
  'capital',
].join(',')

const FIELDS_ALPHA = [
  'cca3',
  'name',
  'flags',
  'population',
  'region',
  'subregion',
  'capital',
  'tld',
  'currencies',
  'languages',
  'borders',
].join(',')

export async function getAllCountries(): Promise<CountryListItem[]> {
  // Fetch only the homepage fields to keep payloads small.
  const res = await fetch(`${API_BASE}/all?fields=${FIELDS_ALL}`, {
  // 24hrs cache
    next: { revalidate: 86400 },
  })

  if (!res.ok) {
    throw new Error(`Failed to fetch countries: ${res.status}`)
  }

  const data: unknown = await res.json()
  if (!Array.isArray(data)) {
    throw new Error('Invalid countries response shape')
  }

  return data.map(parseCountryListItem)
}

async function fetchCountryByCode(code: string): Promise<CountryDetail | null> {
  // Fetch full detail fields for a specific country page.
  const res = await fetch(`${API_BASE}/alpha/${code}?fields=${FIELDS_ALPHA}`, {
    next: { revalidate: 86400 },
  })

  if (res.status === 404) {
    return null
  }

  if (!res.ok) {
    throw new Error(`Failed to fetch country ${code}: ${res.status}`)
  }

  const data: unknown = await res.json()
  return parseCountryDetail(data)
}

// Dedupes in-flight work per request (e.g. generateMetadata + page share one fetch).
export const getCountryByCode = cache(fetchCountryByCode)

interface BorderCountryName {
  cca3: string
  name: {
    common: string
  }
}

export async function getBorderCountryNames(
  codes: string[],
): Promise<Record<string, string>> {
  if (codes.length === 0) {
    return {}
  }

  const query = codes.join(',')
  const res = await fetch(`${API_BASE}/alpha?codes=${query}&fields=cca3,name`, {
    next: { revalidate: 86400 },
  })

  if (!res.ok) {
    return {}
  }

  const data: unknown = await res.json()
  if (!Array.isArray(data)) {
    return {}
  }

  const parsed = data.filter(isBorderCountryName)
  return Object.fromEntries(parsed.map((country) => [country.cca3, country.name.common]))
}

function parseCountryListItem(value: unknown): CountryListItem {
  const country = value as CountryListItem
  return {
    name: country.name,
    cca3: country.cca3,
    flags: country.flags,
    population: country.population,
    region: country.region,
    capital: country.capital,
  }
}

function parseCountryDetail(value: unknown): CountryDetail {
  const country = (Array.isArray(value) ? value[0] : value) as CountryDetail
  return {
    name: country.name,
    cca3: country.cca3,
    flags: country.flags,
    population: country.population,
    region: country.region,
    subregion: country.subregion,
    capital: country.capital,
    tld: country.tld,
    currencies: country.currencies,
    languages: country.languages,
    borders: country.borders,
  }
}

function isBorderCountryName(value: unknown): value is BorderCountryName {
  const country = value as BorderCountryName
  return (
    typeof country?.cca3 === 'string' &&
    typeof country?.name?.common === 'string'
  )
}
