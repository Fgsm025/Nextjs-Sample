'use client'

import { useCallback, useMemo, useState } from 'react'
import { CountryToolbar, type RegionFilter } from '@/components/CountryToolbar'
import { CountryGrid } from '@/components/CountryGrid'
import type { CountryListItem } from '@/lib/types/country'

interface HomeShellProps {
  readonly countries: CountryListItem[]
}

export const HomeShell = ({ countries }: HomeShellProps): React.JSX.Element => {
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [selectedRegion, setSelectedRegion] = useState<RegionFilter>('')

  const handleSearchChange = useCallback((value: string): void => {
    setSearchQuery(value)
  }, [])

  const handleRegionChange = useCallback((region: RegionFilter): void => {
    setSelectedRegion(region)
  }, [])

  // Apply search and region filters on the client side for instant updates.
  const filtered = useMemo<CountryListItem[]>(() => {
    const query = searchQuery.toLowerCase().trim()

    return countries.filter((c) => {
      const matchesRegion = selectedRegion === '' || c.region === selectedRegion
      const matchesSearch =
        query === '' || c.name.common.toLowerCase().includes(query)
      return matchesRegion && matchesSearch
    })
  }, [countries, searchQuery, selectedRegion])

  return (
    <div className='flex min-h-screen flex-col bg-light-background font-sans text-base text-light-text antialiased dark:bg-dark-secondary dark:text-white'>
      <main className='w-full flex-1 p-6 md:px-8 md:py-10 xl:px-[128px]'>
        <CountryToolbar
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
          selectedRegion={selectedRegion}
          onRegionChange={handleRegionChange}
        />
        <div className='mt-8 md:mt-12'>
          <CountryGrid countries={filtered} />
        </div>
      </main>
    </div>
  )
}
