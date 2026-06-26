import OrganizationPage from '@/components/organization-page'
import { organizationPages } from '@/lib/organization-pages'

export const metadata = {
  title: 'Hami Agrovert - Chicks, Vaccines, Drugs, Feed & Consultations',
  description: 'Discover Hami Agrovert for chicks, vaccines, veterinary drugs, animal feed, and farm consultations.',
}

export default function Agrovert() {
  return <OrganizationPage data={organizationPages.agrovert} />
}
