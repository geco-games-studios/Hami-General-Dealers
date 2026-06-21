import OrganizationPage from '@/components/organization-page'
import { organizationPages } from '@/lib/organization-pages'

export const metadata = {
  title: 'Hami Farms - Modern Agriculture Operations',
  description: 'Discover Hami Farms, our modern farming operations producing quality crops using advanced techniques.',
}

export default function Farms() {
  return <OrganizationPage data={organizationPages.farms} />
}
