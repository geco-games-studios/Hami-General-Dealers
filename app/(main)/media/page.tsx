import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { FileText, Image, Video, Download } from 'lucide-react'

export const metadata = {
  title: 'Media - Hami General Dealers',
  description: 'News, press releases, photos, and media resources from Hami General Dealers.',
}

const mediaCategories = [
  {
    href: '/media/press-releases',
    title: 'Press Releases',
    description: 'Latest news and announcements from our organization',
    icon: FileText,
  },
  {
    href: '/media/photo-gallery',
    title: 'Photo Gallery',
    description: 'High-quality images from events and operations',
    icon: Image,
  },
  {
    href: '/media/videos',
    title: 'Videos',
    description: 'Documentary and promotional content',
    icon: Video,
  },
  {
    href: '/media/media-kit',
    title: 'Media Kit',
    description: 'Logos, fact sheets, and brand guidelines',
    icon: Download,
  },
]

const latestNews = [
  {
    date: 'February 10, 2024',
    type: 'Press Release',
    title: 'Hami General Dealers Expands Operations to Northern Region',
    summary: 'Major expansion initiative brings quality agricultural services and products to farmers in previously underserved areas...',
  },
  {
    date: 'January 28, 2024',
    type: 'Partnership',
    title: 'Strategic Partnership Announced with Technology Innovation Leaders',
    summary: 'Hami Farms continues strengthening poultry farming, egg production, and cattle production operations...',
  },
  {
    date: 'January 15, 2024',
    type: 'Award',
    title: 'Agrovert Expands Farm Input Support',
    summary: 'Our Agrovert division supports customers with chicks, vaccines, drugs, feed, and practical farm consultations...',
  },
]

export default function Media() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Media Center
            </h1>
            <p className="text-xl text-white/90 max-w-3xl text-balance">
              Press releases, photos, videos, and resources about Hami General Dealers.
            </p>
          </div>
        </section>

        {/* Media Categories */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {mediaCategories.map((category) => {
                const Icon = category.icon

                return (
                  <Link
                    key={category.href}
                    href={category.href}
                    className="bg-white border-2 border-primary/20 rounded-lg p-8 hover:shadow-lg transition-shadow"
                  >
                    <Icon className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-lg font-bold text-foreground mb-2">{category.title}</h3>
                    <p className="text-muted-foreground text-sm">{category.description}</p>
                  </Link>
                )
              })}
            </div>

            {/* Sample Press Releases */}
            <h2 className="text-3xl font-bold text-foreground mb-8">Latest News</h2>
            <div className="space-y-6">
              {latestNews.map((item) => (
                <article key={item.title} className="border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <span className="text-sm text-muted-foreground">{item.date}</span>
                    <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                      {item.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.summary}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Media Contact */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Media Inquiries
            </h2>
            <div className="bg-white rounded-lg border border-border p-8">
              <p className="text-muted-foreground mb-6">
                For press inquiries, interview requests, or media resources, please contact our Communications team:
              </p>
              <div className="space-y-3">
                <p className="text-foreground font-semibold">Email:</p>
                <p className="text-primary">generalmanagerhami@gmail.com</p>
                
                <p className="text-foreground font-semibold mt-6">Phone:</p>
                <p className="text-primary">+260 979 718945</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
