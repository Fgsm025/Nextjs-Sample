import { HomeShell } from '@/components/HomeShell'
import { getAllCountries } from '@/lib/api/countries'

// Force dynamic rendering for this page to ensure fresh data on each request.
export const dynamic = 'force-dynamic'

const Homepage = async (): Promise<React.JSX.Element> => {
  const countries = await getAllCountries()

  return <HomeShell countries={countries} />
}

export default Homepage
