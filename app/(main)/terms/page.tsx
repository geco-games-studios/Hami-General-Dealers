import Header from '@/components/header'
import Footer from '@/components/footer'

export const metadata = {
  title: 'Terms of Service - Hami General Dealers',
  description: 'Website and service terms for Hami General Dealers.',
}

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-white py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-foreground">Terms of Service</h1>
          <div className="mt-8 space-y-6 text-muted-foreground">
            <p>By using this website, you agree to use the information responsibly and contact Hami General Dealers directly for current pricing, availability, and service details.</p>
            <p>Website content is provided for general information and may be updated as services, organizations, and offers change.</p>
            <p>Orders, consultations, partnerships, and service agreements are confirmed separately through direct communication with our team.</p>
            <p>For questions about these terms, contact generalmanagerhami@gmail.com.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
