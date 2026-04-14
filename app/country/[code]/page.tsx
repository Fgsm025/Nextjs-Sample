import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getCountryByCode } from '@/lib/countries'

interface CountryDetailPageProps {
  readonly params: Promise<{ code: string }>
}

const CountryDetailPage = async ({
  params,
}: CountryDetailPageProps): Promise<React.JSX.Element> => {
  const { code } = await params

  let country
  try {
    country = await getCountryByCode(code)
  } catch {
    notFound()
  }

  const nativeName =
    country.name.nativeName && Object.values(country.name.nativeName)[0]?.common
      ? Object.values(country.name.nativeName)[0].common
      : country.name.common
  const topLevelDomain = country.tld?.[0] ?? 'N/A'
  const currencies = country.currencies
    ? Object.values(country.currencies)
        .map((c) => c.name)
        .join(', ')
    : 'N/A'
  const languages = country.languages
    ? Object.values(country.languages as Record<string, string>).join(', ')
    : 'N/A'
  const borderCountries = country.borders ?? []

  return (
    <div className='min-h-screen bg-light-background dark:bg-dark-secondary'>
      <main className='w-full px-6 py-8 md:px-8 xl:px-[112px]'>
        <Link
          href='/'
          className='inline-flex h-[43px] w-[100px] items-center gap-[6px] rounded-[4px] bg-light-elements px-[20px] py-[12px] text-[12px] font-normal leading-[100%] text-light-text shadow-[0_0_8px_0_hsla(0,0%,0%,0.25)] dark:bg-dark-primary dark:text-white md:text-[16px]'
        >
          <span aria-hidden>&larr;</span> Back
        </Link>

        <section className='mt-10 grid gap-10 lg:grid-cols-[640px_1fr] lg:items-center lg:gap-x-[80px] lg:gap-y-12'>
          <div className='relative h-[232px] w-full max-w-[640px] overflow-hidden lg:h-[455px]'>
            <Image
              src={country.flags.svg}
              alt={country.flags.alt ?? `Flag of ${country.name.common}`}
              fill
              className='object-cover'
              sizes='(max-width: 1024px) 100vw, 640px'
              priority
            />
          </div>

          <div className='w-full max-w-[560px] lg:flex lg:h-[455px] lg:flex-col lg:justify-center'>
            <h1 className='mb-6 text-[24px] font-bold leading-[100%] text-light-text dark:text-white md:text-[40px] lg:mb-10'>
              {country.name.common}
            </h1>

            <div className='grid gap-0 md:grid-cols-2 md:gap-8'>
              <div className='mb-10 flex flex-col gap-3 text-light-text dark:text-white/90 md:mb-0'>
                <p>
                  <span className='text-[14px] font-semibold leading-[100%]'>
                    Native Name:
                  </span>{' '}
                  <span className='text-[14px] font-normal leading-[100%]'>
                    {nativeName}
                  </span>
                </p>
                <p>
                  <span className='text-[14px] font-semibold leading-[100%]'>
                    Population:
                  </span>{' '}
                  <span className='text-[14px] font-normal leading-[100%]'>
                    {country.population.toLocaleString()}
                  </span>
                </p>
                <p>
                  <span className='text-[14px] font-semibold leading-[100%]'>
                    Region:
                  </span>{' '}
                  <span className='text-[14px] font-normal leading-[100%]'>
                    {country.region}
                  </span>
                </p>
                <p>
                  <span className='text-[14px] font-semibold leading-[100%]'>
                    Sub Region:
                  </span>{' '}
                  <span className='text-[14px] font-normal leading-[100%]'>
                    {country.subregion ?? 'N/A'}
                  </span>
                </p>
                <p>
                  <span className='text-[14px] font-semibold leading-[100%]'>
                    Capital:
                  </span>{' '}
                  <span className='text-[14px] font-normal leading-[100%]'>
                    {country.capital?.[0] ?? 'N/A'}
                  </span>
                </p>
              </div>

              <div className='mb-10 flex flex-col gap-3 text-light-text dark:text-white/90 md:mb-0'>
                <p>
                  <span className='text-[14px] font-semibold leading-[100%]'>
                    Top Level Domain:
                  </span>{' '}
                  <span className='text-[14px] font-normal leading-[100%]'>
                    {topLevelDomain}
                  </span>
                </p>
                <p>
                  <span className='text-[14px] font-semibold leading-[100%]'>
                    Currencies:
                  </span>{' '}
                  <span className='text-[14px] font-normal leading-[100%]'>
                    {currencies}
                  </span>
                </p>
                <p>
                  <span className='text-[14px] font-semibold leading-[100%]'>
                    Languages:
                  </span>{' '}
                  <span className='text-[14px] font-normal leading-[100%]'>
                    {languages}
                  </span>
                </p>
              </div>
            </div>

            <div className='mt-0 flex flex-col items-start gap-3 md:mt-10'>
              <span className='text-[16px] font-medium leading-[100%] text-light-text dark:text-white'>
                Border Countries:
              </span>
              {borderCountries.length > 0 ? (
                <div className='flex flex-wrap gap-3'>
                  {borderCountries.map((borderCode) => (
                    <Link
                      key={borderCode}
                      href={`/country/${borderCode}`}
                      className='rounded-sm bg-light-elements px-4 py-[6px] text-[12px] font-normal leading-[100%] text-light-text shadow-[0_0_8px_0_hsla(0,0%,0%,0.25)] dark:bg-dark-primary dark:text-white'
                    >
                      {borderCode}
                    </Link>
                  ))}
                </div>
              ) : (
                <span className='text-sm text-light-input dark:text-white/60'>
                  None
                </span>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default CountryDetailPage
