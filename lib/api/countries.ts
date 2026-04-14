import { cache } from 'react'
import type { Country } from '@/lib/types/country'

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

export async function getAllCountries(): Promise<Country[]> {
  // Fetch only the homepage fields to keep payloads small.
  const res = await fetch(`${API_BASE}/all?fields=${FIELDS_ALL}`, {
  // 24hrs cache
    next: { revalidate: 86400 },
  })

  if (!res.ok) {
    throw new Error(`Failed to fetch countries: ${res.status}`)
  }

  return res.json() as Promise<Country[]>
}

async function fetchCountryByCode(code: string): Promise<Country | null> {
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

  return res.json() as Promise<Country>
}

// Dedupes in-flight work per request (e.g. generateMetadata + page share one fetch).
export const getCountryByCode = cache(fetchCountryByCode)
