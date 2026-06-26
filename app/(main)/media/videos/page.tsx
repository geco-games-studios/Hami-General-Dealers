import Header from '@/components/header'
import Footer from '@/components/footer'
import { Play } from 'lucide-react'

export const metadata = {
  title: 'Videos - Hami General Dealers',
  description: 'Video updates and media resources from Hami General Dealers.',
}

const videos = [
  'Company overview',
  'Hami Agrovet product support',
  'Hami Farms operations',
  'Mifi Business Solutions customer support',
]

export default function Videos() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-primary py-16 text-primary-foreground md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Videos</h1>
            <p className="max-w-3xl text-xl text-white/90">
              Promotional videos, field updates, and organization stories will be published here.
            </p>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
            {videos.map((video) => (
              <article key={video} className="rounded-lg border border-border bg-white p-8 shadow-sm">
                <div className="mb-5 flex aspect-video items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Play className="h-14 w-14 fill-current" />
                </div>
                <h2 className="text-xl font-bold text-foreground">{video}</h2>
                <p className="mt-3 text-muted-foreground">Video content coming soon.</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
