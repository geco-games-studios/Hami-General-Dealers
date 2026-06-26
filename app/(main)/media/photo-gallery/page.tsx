import Header from '@/components/header'
import Footer from '@/components/footer'
import Image from 'next/image'

export const metadata = {
  title: 'Photo Gallery - Hami General Dealers',
  description: 'Photos from Hami General Dealers operations, organizations, and community work.',
}

const photos = [
  { title: 'Hami General Dealers', src: '/images/hami-about-team.png' },
  { title: 'Hami Agrovet', src: '/images/hami-hero-agro.png' },
  { title: 'Hami Farms', src: '/images/hami-hero-farm.png' },
  { title: 'Mifi Business Solutions', src: '/images/hami-hero-mifi.png' },
  { title: 'Hamiz Motors and Logistics', src: '/images/hami-hero-hamiz.png' },
  { title: 'Customer Support', src: '/images/hami-hero-home.png' },
]

export default function PhotoGallery() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-primary py-16 text-primary-foreground md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Photo Gallery</h1>
            <p className="max-w-3xl text-xl text-white/90">
              Images from our teams, services, organizations, and daily operations.
            </p>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
            {photos.map((photo) => (
              <article key={photo.title} className="overflow-hidden rounded-lg border border-border bg-white shadow-sm">
                <div className="relative aspect-[4/3] bg-primary/5">
                  <Image src={photo.src} alt={photo.title} fill className="object-cover" sizes="(min-width: 1024px) 33vw, 100vw" />
                </div>
                <div className="p-5">
                  <h2 className="font-bold text-foreground">{photo.title}</h2>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
