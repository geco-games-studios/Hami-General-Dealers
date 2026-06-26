import Header from '@/components/header'
import Footer from '@/components/footer'

export const metadata = {
  title: 'Cookies - Hami General Dealers',
  description: 'Cookie information for the Hami General Dealers website.',
}

export default function Cookies() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-white py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-foreground">Cookies</h1>
          <div className="mt-8 space-y-6 text-muted-foreground">
            <p>This website may use basic cookies or similar browser storage to support site performance, forms, analytics, and user experience.</p>
            <p>You can control cookies through your browser settings. Blocking cookies may affect some site features.</p>
            <p>We use cookie information to understand website usage and improve Hami General Dealers content and services.</p>
            <p>For cookie questions, contact generalmanagerhami@gmail.com.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
