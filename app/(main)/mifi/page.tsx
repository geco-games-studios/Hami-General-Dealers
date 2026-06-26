import OrganizationPage from '@/components/organization-page'
import { organizationPages } from '@/lib/organization-pages'

export const metadata = {
  title: 'Mifi Business Solutions - Microfinance & Daily Loans',
  description: 'Discover Mifi Business Solutions, a microfinance company specializing in daily loans.',
}

export default function Mifi() {
  return <OrganizationPage data={organizationPages.mifi} />
}
