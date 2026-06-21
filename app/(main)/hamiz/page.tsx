import OrganizationPage from '@/components/organization-page'
import { organizationPages } from '@/lib/organization-pages'

export const metadata = {
  title: 'Hamiz Motors - Vehicle Sourcing & Motors',
  description: 'Join Hamiz Motors for vehicle sourcing, launch updates, and motors opportunities.',
}

export default function Hamiz() {
  return <OrganizationPage data={organizationPages.hamiz} />
}
