import Header from '@/components/header'
import Footer from '@/components/footer'
import { FileText, Image, Video, Download } from 'lucide-react'

export const metadata = {
  title: 'Media - Hami General Dealers',
  description: 'News, press releases, photos, and media resources from Hami General Dealers.',
}

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
              <div className="bg-white border-2 border-primary/20 rounded-lg p-8 hover:shadow-lg transition-shadow cursor-pointer">
                <FileText className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-2">Press Releases</h3>
                <p className="text-muted-foreground text-sm">
                  Latest news and announcements from our organization
                </p>
              </div>

              <div className="bg-white border-2 border-primary/20 rounded-lg p-8 hover:shadow-lg transition-shadow cursor-pointer">
                <Image className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-2">Photo Gallery</h3>
                <p className="text-muted-foreground text-sm">
                  High-quality images from events and operations
                </p>
              </div>

              <div className="bg-white border-2 border-primary/20 rounded-lg p-8 hover:shadow-lg transition-shadow cursor-pointer">
                <Video className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-2">Videos</h3>
                <p className="text-muted-foreground text-sm">
                  Documentary and promotional content
                </p>
              </div>

              <div className="bg-white border-2 border-primary/20 rounded-lg p-8 hover:shadow-lg transition-shadow cursor-pointer">
                <Download className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-2">Media Kit</h3>
                <p className="text-muted-foreground text-sm">
                  Logos, fact sheets, and brand guidelines
                </p>
              </div>
            </div>

            {/* Sample Press Releases */}
            <h2 className="text-3xl font-bold text-foreground mb-8">Latest News</h2>
            <div className="space-y-6">
              <div className="border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-sm text-muted-foreground">February 10, 2024</span>
                  <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                    Press Release
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Hami General Dealers Expands Operations to Northern Region
                </h3>
                <p className="text-muted-foreground">
                  Major expansion initiative brings quality agricultural services and products to farmers in previously underserved areas...
                </p>
              </div>

              <div className="border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-sm text-muted-foreground">January 28, 2024</span>
                  <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                    Partnership
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Strategic Partnership Announced with Technology Innovation Leaders
                </h3>
                <p className="text-muted-foreground">
                  Hami Farms partners with leading tech companies to introduce cutting-edge agricultural technology solutions...
                </p>
              </div>

              <div className="border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-sm text-muted-foreground">January 15, 2024</span>
                  <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                    Award
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Agrovert Recognized for Sustainability Excellence
                </h3>
                <p className="text-muted-foreground">
                  Our Agrovert division receives prestigious award for outstanding commitment to environmental conservation and sustainable practices...
                </p>
              </div>
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
                <p className="text-primary">media@hamigroup.co.ke</p>
                
                <p className="text-foreground font-semibold mt-6">Phone:</p>
                <p className="text-primary">+254 20 XXXX XXXX</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
