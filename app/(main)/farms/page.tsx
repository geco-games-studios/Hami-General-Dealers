import OrganizationPage from '@/components/organization-page'
import { organizationPages } from '@/lib/organization-pages'

export const metadata = {
  title: 'Hami Farms - Poultry Farming & Cattle Production',
  description: 'Discover Hami Farms, focused on poultry farming, egg production, and cattle production.',
}

export default function Farms() {
  return <OrganizationPage data={organizationPages.farms} />
}
