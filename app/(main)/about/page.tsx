import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'About Us - Hami General Dealers',
  description: 'Learn about Hami General Dealers, our mission, vision, and commitment to agricultural excellence.',
}

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              About Hami General Dealers
            </h1>
            <p className="text-xl text-white/90 max-w-3xl text-balance">
              Pioneering sustainable agricultural and commercial solutions across East Africa.
            </p>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-primary mb-3">Our Mission</h3>
                <p className="text-muted-foreground">
                  To empower agricultural communities and businesses through innovative, sustainable solutions that drive economic growth and improve livelihoods across East Africa.
                </p>
              </div>

              <div className="bg-secondary/5 border-l-4 border-secondary p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-secondary mb-3">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be the leading integrated agricultural and business solutions provider recognized for excellence, sustainability, and positive impact on communities.
                </p>
              </div>

              <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-accent mb-3">Our Values</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Integrity and transparency</li>
                  <li>• Innovation and excellence</li>
                  <li>• Sustainability and responsibility</li>
                  <li>• Community commitment</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Company History */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-balance">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-3xl text-muted-foreground">
              <p>
                Founded in 2015 by visionary entrepreneurs with a passion for transforming agriculture, Hami General Dealers started with a simple belief: that better farming practices and smart commerce can lift entire communities out of poverty.
              </p>
              <p>
                What began as a small trading operation has grown into an integrated business group with three distinct divisions, each addressing critical needs in the agricultural and commercial sectors.
              </p>
              <p>
                Over the past nine years, we've built strong relationships with thousands of farmers, suppliers, and partners. Our commitment to quality, innovation, and sustainability has positioned us as a trusted leader in our industry.
              </p>
            </div>
          </div>
        </section>

        {/* Our Organizations */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center text-balance">
              Our Organizations
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Agrovert */}
              <div className="bg-white border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-40 bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center">
                  <div className="text-4xl font-bold text-green-600">AG</div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Hami Agrovert</h3>
                  <p className="text-primary text-sm font-semibold mb-3">Sustainable Agriculture Solutions</p>
                  <p className="text-muted-foreground mb-4">
                    Specializing in eco-friendly farming practices and environmental conservation.
                  </p>
                  <Link
                    href="/agrovert"
                    className="text-primary font-semibold flex items-center gap-2 hover:text-primary/80 transition-colors"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Mifi */}
              <div className="bg-white border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-40 bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                  <div className="text-4xl font-bold text-blue-600">MF</div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Hami Mifi</h3>
                  <p className="text-primary text-sm font-semibold mb-3">General Trade & Commerce</p>
                  <p className="text-muted-foreground mb-4">
                    Your reliable partner for quality general merchandise and business solutions.
                  </p>
                  <Link
                    href="/mifi"
                    className="text-primary font-semibold flex items-center gap-2 hover:text-primary/80 transition-colors"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Farms */}
              <div className="bg-white border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-40 bg-gradient-to-br from-orange-100 to-orange-50 flex items-center justify-center">
                  <div className="text-4xl font-bold text-orange-600">HF</div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Hami Farms</h3>
                  <p className="text-primary text-sm font-semibold mb-3">Modern Agriculture Operations</p>
                  <p className="text-muted-foreground mb-4">
                    Large-scale modern farming producing quality crops using advanced techniques.
                  </p>
                  <Link
                    href="/farms"
                    className="text-primary font-semibold flex items-center gap-2 hover:text-primary/80 transition-colors"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Stats */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">9+</div>
                <p className="text-white/90">Years of Experience</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">5,000+</div>
                <p className="text-white/90">Farmers Supported</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
                <p className="text-white/90">Locations Across Kenya</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">100%</div>
                <p className="text-white/90">Commitment to Quality</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
