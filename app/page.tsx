import { HomeShell } from '@/components/HomeShell'
import { getAllCountries } from '@/lib/api/countries'

const Homepage = async (): Promise<React.JSX.Element> => {
  const countries = await getAllCountries()

  return <HomeShell countries={countries} />
}

export default Homepage
