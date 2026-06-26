import OrganizationPage from '@/components/organization-page'
import { organizationPages } from '@/lib/organization-pages'

export const metadata = {
  title: 'Hamiz Motors - Motorbikes, Parts & Rider Gear',
  description: 'Shop Hamiz Motors for motorbikes, motorbike parts, riding clothes, gloves, boots, and related gear.',
}

export default function Hamiz() {
  return <OrganizationPage data={organizationPages.hamiz} />
}
