import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { ArrowRight, Package, TrendingUp, Globe } from 'lucide-react'
import { subOrganizations } from '@/lib/data'

export const metadata = {
  title: 'Hami Mifi - General Trade & Commerce',
  description: 'Discover Hami Mifi, our general trading division providing quality merchandise and business solutions.',
}

export default function Mifi() {
  const mifi = subOrganizations.mifi

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-16 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-block px-4 py-2 bg-white/20 rounded-full mb-4">
                <span className="text-sm font-semibold text-white">Hami General Dealers</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                {mifi.name}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 text-balance">
                {mifi.tagline}
              </p>
              <p className="text-lg text-white/80 mb-8">
                {mifi.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/consult"
                  className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors w-fit"
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
                  {mifi.mission}
                </p>
                <p className="text-muted-foreground mt-4">
                  We deliver quality products and reliable services, connecting suppliers with businesses and individuals across the region. Our extensive network and commitment to excellence make us your trusted trading partner.
                </p>
              </div>
              <div className="bg-blue-50 rounded-lg p-8 border border-blue-200">
                <h3 className="text-2xl font-bold text-blue-700 mb-6">Why Partner With Mifi?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Package className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-foreground">Quality Products</p>
                      <p className="text-sm text-muted-foreground">Carefully selected merchandise</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <TrendingUp className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-foreground">Business Growth</p>
                      <p className="text-sm text-muted-foreground">Partnership opportunities</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Globe className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-foreground">Wide Distribution</p>
                      <p className="text-sm text-muted-foreground">Access across the region</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 md:py-24 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center text-balance">
              Our Services
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mifi.services.map((service, index) => (
                <div key={index} className="bg-white rounded-lg p-6 border border-blue-200 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Package className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {service}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Professional trading and commerce solutions
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Market Reach */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center text-balance">
              Our Reach & Impact
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                <p className="text-muted-foreground">Business Partners</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
                <p className="text-muted-foreground">Distribution Centers</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <div className="text-4xl font-bold text-blue-600 mb-2">5000+</div>
                <p className="text-muted-foreground">SKUs Stocked</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <div className="text-4xl font-bold text-blue-600 mb-2">99%</div>
                <p className="text-muted-foreground">On-Time Delivery</p>
              </div>
            </div>
          </div>
        </section>

        {/* Product Categories */}
        <section className="py-16 md:py-24 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center text-balance">
              What We Trade
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-8 border border-blue-200">
                <h3 className="text-lg font-bold text-foreground mb-3">General Merchandise</h3>
                <p className="text-muted-foreground">
                  Wide range of consumer goods, household items, and everyday products for retail and wholesale.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 border border-blue-200">
                <h3 className="text-lg font-bold text-foreground mb-3">Industrial Supplies</h3>
                <p className="text-muted-foreground">
                  Equipment, tools, and materials for farms, businesses, and industrial operations.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 border border-blue-200">
                <h3 className="text-lg font-bold text-foreground mb-3">Import/Export</h3>
                <p className="text-muted-foreground">
                  International trading services connecting local suppliers with global markets.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 border border-blue-200">
                <h3 className="text-lg font-bold text-foreground mb-3">Logistics Solutions</h3>
                <p className="text-muted-foreground">
                  Reliable storage, distribution, and delivery services across multiple locations.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 border border-blue-200">
                <h3 className="text-lg font-bold text-foreground mb-3">Wholesale Networks</h3>
                <p className="text-muted-foreground">
                  Dedicated wholesale channels for retailers, traders, and business establishments.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 border border-blue-200">
                <h3 className="text-lg font-bold text-foreground mb-3">Trade Finance</h3>
                <p className="text-muted-foreground">
                  Flexible payment terms and financing options for trusted business partners.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
              Grow Your Business With Mifi
            </h2>
            <p className="text-lg text-white/90 mb-8 text-balance">
              Access quality products, reliable distribution, and business opportunities through our extensive network.
            </p>
            <Link
              href="/consult"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
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
