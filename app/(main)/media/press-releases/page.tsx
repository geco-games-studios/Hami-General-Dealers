import Header from '@/components/header'
import Footer from '@/components/footer'

export const metadata = {
  title: 'Press Releases - Hami General Dealers',
  description: 'Official news and announcements from Hami General Dealers.',
}

const releases = [
  {
    date: 'February 10, 2024',
    type: 'Press Release',
    title: 'Hami General Dealers Expands Operations to Northern Region',
    summary: 'Major expansion initiative brings quality agricultural services and products to farmers in previously underserved areas.',
  },
  {
    date: 'January 28, 2024',
    type: 'Partnership',
    title: 'Strategic Partnership Announced with Technology Innovation Leaders',
    summary: 'Hami Farms continues strengthening poultry farming, egg production, and cattle production operations.',
  },
  {
    date: 'January 15, 2024',
    type: 'Award',
    title: 'Agrovert Expands Farm Input Support',
    summary: 'Our Agrovert division supports customers with chicks, vaccines, drugs, feed, and practical farm consultations.',
  },
]

export default function PressReleases() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-primary py-16 text-primary-foreground md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Press Releases</h1>
            <p className="max-w-3xl text-xl text-white/90">Official announcements and updates from Hami General Dealers.</p>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-4xl space-y-6 px-4 sm:px-6 lg:px-8">
            {releases.map((item) => (
              <article key={item.title} className="rounded-lg border border-border bg-white p-6 shadow-sm">
                <div className="mb-3 flex items-start justify-between gap-4">
                  <span className="text-sm text-muted-foreground">{item.date}</span>
                  <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">{item.type}</span>
                </div>
                <h2 className="text-xl font-bold text-foreground">{item.title}</h2>
                <p className="mt-3 text-muted-foreground">{item.summary}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
