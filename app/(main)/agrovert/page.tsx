import OrganizationPage from '@/components/organization-page'
import { organizationPages } from '@/lib/organization-pages'

export const metadata = {
  title: 'Hami Agrovert - Sustainable Agriculture Solutions',
  description: 'Discover Hami Agrovert, our sustainable agriculture division providing eco-friendly farming solutions.',
}

export default function Agrovert() {
  return <OrganizationPage data={organizationPages.agrovert} />
}
