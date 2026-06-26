import Header from '@/components/header'
import Footer from '@/components/footer'
import Image from 'next/image'
import { Download } from 'lucide-react'

export const metadata = {
  title: 'Media Kit - Hami General Dealers',
  description: 'Brand assets, facts, and media resources for Hami General Dealers.',
}

const facts = [
  ['Company', 'Hami General Dealers'],
  ['Registered', '2015'],
  ['Base', 'Lusaka, Zambia'],
  ['Focus', 'Agriculture, microfinance, farms, motors, logistics, IT, and media'],
]

export default function MediaKit() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-primary py-16 text-primary-foreground md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Media Kit</h1>
            <p className="max-w-3xl text-xl text-white/90">
              Logos, company facts, and brand resources for media and partner use.
            </p>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-[0.8fr_1.2fr] lg:px-8">
            <div className="rounded-lg border border-border bg-white p-8 shadow-sm">
              <Image src="/images/logo-hami.png" alt="Hami General Dealers logo" width={280} height={280} className="mx-auto h-56 w-56 object-contain" />
              <button className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground">
                <Download className="h-5 w-5" />
                Logo Asset Available
              </button>
            </div>

            <div>
              <h2 className="mb-6 text-3xl font-bold text-foreground">Company Facts</h2>
              <div className="grid gap-4">
                {facts.map(([label, value]) => (
                  <div key={label} className="rounded-lg border border-border p-5">
                    <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">{label}</p>
                    <p className="mt-2 font-bold text-foreground">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
