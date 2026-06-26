import OrganizationPage from '@/components/organization-page'
import { organizationPages } from '@/lib/organization-pages'

export const metadata = {
  title: 'Mipro - IT & Media',
  description: 'Discover Mipro, the IT and Media perspective of Hami General Dealers.',
}

export default function Mipro() {
  return <OrganizationPage data={organizationPages.mipro} />
}
