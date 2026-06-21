import OrganizationPage from '@/components/organization-page'
import { organizationPages } from '@/lib/organization-pages'

export const metadata = {
  title: 'Mifi Business Solutions - Trade & Commerce',
  description: 'Discover Mifi Business Solutions, our business solutions division for procurement, supply, and commerce.',
}

export default function Mifi() {
  return <OrganizationPage data={organizationPages.mifi} />
}
