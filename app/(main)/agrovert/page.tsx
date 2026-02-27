import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { ArrowRight, Leaf, Droplets, Sprout } from 'lucide-react'
import { subOrganizations } from '@/lib/data'

export const metadata = {
  title: 'Hami Agrovert - Sustainable Agriculture Solutions',
  description: 'Discover Hami Agrovert, our sustainable agriculture division providing eco-friendly farming solutions.',
}

export default function Agrovert() {
  const agrovert = subOrganizations.agrovert

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-600 to-green-700 text-white py-16 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-block px-4 py-2 bg-white/20 rounded-full mb-4">
                <span className="text-sm font-semibold text-white">Hami General Dealers</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                {agrovert.name}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 text-balance">
                {agrovert.tagline}
              </p>
              <p className="text-lg text-white/80 mb-8">
                {agrovert.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/consult"
                  className="px-8 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors w-fit"
                >
                  Get Consultation
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors w-fit flex items-center gap-2"
                >
                  Contact Us <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-lg text-muted-foreground">
                  {agrovert.mission}
                </p>
                <p className="text-muted-foreground mt-4">
                  We believe that agriculture and environmental conservation can go hand-in-hand. Our sustainable practices protect ecosystems while delivering quality crops and competitive returns for farmers.
                </p>
              </div>
              <div className="bg-green-50 rounded-lg p-8 border border-green-200">
                <h3 className="text-2xl font-bold text-green-700 mb-6">Core Values</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Leaf className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-foreground">Environmental Stewardship</p>
                      <p className="text-sm text-muted-foreground">Protecting nature for future generations</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Sprout className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-foreground">Sustainable Practices</p>
                      <p className="text-sm text-muted-foreground">Eco-friendly farming methods</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Droplets className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-foreground">Resource Conservation</p>
                      <p className="text-sm text-muted-foreground">Wise use of water and natural resources</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 md:py-24 bg-green-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center text-balance">
              Our Services
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {agrovert.services.map((service, index) => (
                <div key={index} className="bg-white rounded-lg p-6 border border-green-200 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Leaf className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {service}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Comprehensive solutions for sustainable agriculture
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center text-balance">
              Our Impact
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                <div className="text-4xl font-bold text-green-600 mb-2">2,500+</div>
                <p className="text-muted-foreground">Organic Farmers Certified</p>
              </div>
              <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                <div className="text-4xl font-bold text-green-600 mb-2">15,000+</div>
                <p className="text-muted-foreground">Hectares Managed Sustainably</p>
              </div>
              <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                <div className="text-4xl font-bold text-green-600 mb-2">40%</div>
                <p className="text-muted-foreground">Yield Improvement on Average</p>
              </div>
              <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
                <p className="text-muted-foreground">Chemical-Free Operations</p>
              </div>
            </div>
          </div>
        </section>

        {/* Programs */}
        <section className="py-16 md:py-24 bg-green-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center text-balance">
              Our Programs
            </h2>

            <div className="space-y-8">
              <div className="bg-white rounded-lg p-8 border border-green-200">
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Organic Certification Program
                </h3>
                <p className="text-muted-foreground">
                  Complete support to transition and certify your farm as organic, including training, documentation, and certification guidance.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 border border-green-200">
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Water Conservation Initiative
                </h3>
                <p className="text-muted-foreground">
                  Advanced technologies and techniques to reduce water usage by up to 40% while maintaining or improving productivity.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 border border-green-200">
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Soil Health Management
                </h3>
                <p className="text-muted-foreground">
                  Comprehensive soil testing, analysis, and restoration programs to build long-term soil fertility and sustainability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-green-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
              Join the Sustainable Agriculture Revolution
            </h2>
            <p className="text-lg text-white/90 mb-8 text-balance">
              Transform your farm with sustainable practices that protect the environment while growing your income.
            </p>
            <Link
              href="/consult"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Schedule Consultation <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
