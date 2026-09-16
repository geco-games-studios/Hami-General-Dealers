import OrganizationPage from '@/components/organization-page'
import { organizationPages } from '@/lib/organization-pages'

export const metadata = {
  title: 'Mifi Goods and Supply - Goods and Supply',
  description: 'Discover Mifi Goods and Supply, providing practical goods, sourcing, and distribution support.',
}

export default function Mifi() {
  return <OrganizationPage data={organizationPages.mifi} />
}
