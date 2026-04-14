import { HomeShell } from '@/components/HomeShell'
import { getAllCountries } from '@/lib/api/countries'

export const dynamic = 'force-dynamic'

const Homepage = async (): Promise<React.JSX.Element> => {
  const countries = await getAllCountries()

  return <HomeShell countries={countries} />
}

export default Homepage
