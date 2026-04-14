import { CountryCard } from '@/components/CountryCard'
import type { Country } from '@/lib/types'

interface CountryGridProps {
  readonly countries: Country[]
}

export const CountryGrid = ({
  countries,
}: CountryGridProps): React.JSX.Element => {
  if (countries.length === 0) {
    return (
      <p className='py-12 text-center text-light-input dark:text-white/60'>
        No countries found.
      </p>
    )
  }

  return (
    <div className='grid justify-center gap-6 xl:justify-start [grid-template-columns:repeat(auto-fit,minmax(286px,286px))]'>
      {countries.map((country) => (
        <CountryCard key={country.cca3} country={country} />
      ))}
    </div>
  )
}
