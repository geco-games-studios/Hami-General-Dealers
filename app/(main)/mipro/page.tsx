import OrganizationPage from '@/components/organization-page'
import { organizationPages } from '@/lib/organization-pages'

export const metadata = {
  title: 'Mipro - Projects & Procurement',
  description: 'Discover Mipro, our projects, procurement, and delivery coordination organization.',
}

export default function Mipro() {
  return <OrganizationPage data={organizationPages.mipro} />
}
