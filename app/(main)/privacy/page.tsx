import Header from '@/components/header'
import Footer from '@/components/footer'

export const metadata = {
  title: 'Privacy Policy - Hami General Dealers',
  description: 'How Hami General Dealers handles customer and website information.',
}

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-white py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-foreground">Privacy Policy</h1>
          <div className="mt-8 space-y-6 text-muted-foreground">
            <p>Hami General Dealers uses customer information to respond to inquiries, provide services, coordinate orders, and improve communication.</p>
            <p>We may collect names, phone numbers, email addresses, message details, and service interests when you contact us or submit a form.</p>
            <p>We do not sell personal information. Information may be shared internally across Hami organizations only when needed to serve your request.</p>
            <p>For privacy questions, contact generalmanagerhami@gmail.com.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
