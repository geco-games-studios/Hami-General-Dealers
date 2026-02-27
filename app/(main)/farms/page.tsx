import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { ArrowRight, Wheat, TrendingUp, Settings } from 'lucide-react'
import { subOrganizations } from '@/lib/data'

export const metadata = {
  title: 'Hami Farms - Modern Agriculture Operations',
  description: 'Discover Hami Farms, our modern farming operations producing quality crops using advanced techniques.',
}

export default function Farms() {
  const farms = subOrganizations.farms

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-orange-600 to-orange-700 text-white py-16 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-block px-4 py-2 bg-white/20 rounded-full mb-4">
                <span className="text-sm font-semibold text-white">Hami General Dealers</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                {farms.name}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 text-balance">
                {farms.tagline}
              </p>
              <p className="text-lg text-white/80 mb-8">
                {farms.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/consult"
                  className="px-8 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors w-fit"
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
                  {farms.mission}
                </p>
                <p className="text-muted-foreground mt-4">
                  Hami Farms operates large-scale operations that combine traditional farming knowledge with cutting-edge agricultural technology to maximize productivity and quality.
                </p>
              </div>
              <div className="bg-orange-50 rounded-lg p-8 border border-orange-200">
                <h3 className="text-2xl font-bold text-orange-700 mb-6">Our Approach</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Wheat className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-foreground">Diversified Crops</p>
                      <p className="text-sm text-muted-foreground">Multiple crop varieties</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Settings className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-foreground">Modern Technology</p>
                      <p className="text-sm text-muted-foreground">Advanced farming equipment</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <TrendingUp className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-foreground">Continuous Improvement</p>
                      <p className="text-sm text-muted-foreground">Research and innovation</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 md:py-24 bg-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center text-balance">
              Our Services & Operations
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {farms.services.map((service, index) => (
                <div key={index} className="bg-white rounded-lg p-6 border border-orange-200 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <Wheat className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {service}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Quality agricultural production and services
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Production Stats */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center text-balance">
              Our Production Scale
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="bg-orange-50 rounded-lg p-6 border border-orange-200">
                <div className="text-4xl font-bold text-orange-600 mb-2">5,000+</div>
                <p className="text-muted-foreground">Hectares Under Cultivation</p>
              </div>
              <div className="bg-orange-50 rounded-lg p-6 border border-orange-200">
                <div className="text-4xl font-bold text-orange-600 mb-2">12+</div>
                <p className="text-muted-foreground">Crop Varieties Produced</p>
              </div>
              <div className="bg-orange-50 rounded-lg p-6 border border-orange-200">
                <div className="text-4xl font-bold text-orange-600 mb-2">50,000+</div>
                <p className="text-muted-foreground">Tons Annual Production</p>
              </div>
              <div className="bg-orange-50 rounded-lg p-6 border border-orange-200">
                <div className="text-4xl font-bold text-orange-600 mb-2">100+</div>
                <p className="text-muted-foreground">Skilled Staff</p>
              </div>
            </div>
          </div>
        </section>

        {/* Crops & Livestock */}
        <section className="py-16 md:py-24 bg-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center text-balance">
              What We Produce
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-8 border border-orange-200">
                <h3 className="text-2xl font-bold text-foreground mb-6">Crops</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-600"></span>
                    Maize and grains
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-600"></span>
                    Legumes and pulses
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-600"></span>
                    Vegetables and fruits
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-600"></span>
                    Oil seeds
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-600"></span>
                    Horticulture products
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-8 border border-orange-200">
                <h3 className="text-2xl font-bold text-foreground mb-6">Livestock</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-600"></span>
                    Dairy cattle
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-600"></span>
                    Beef production
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-600"></span>
                    Poultry farming
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-600"></span>
                    Animal feed production
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-600"></span>
                    Veterinary services
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Technology & Infrastructure */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center text-balance">
              Technology & Infrastructure
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-border rounded-lg p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Modern Equipment</h3>
                <p className="text-muted-foreground mb-4">
                  State-of-the-art machinery and equipment for plowing, planting, harvesting, and processing.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Mechanized farming equipment</li>
                  <li>• GPS-guided precision farming</li>
                  <li>• Irrigation systems</li>
                  <li>• Processing facilities</li>
                </ul>
              </div>

              <div className="border border-border rounded-lg p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Smart Farming</h3>
                <p className="text-muted-foreground mb-4">
                  Data-driven approaches to optimize productivity and sustainability.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Soil and weather monitoring</li>
                  <li>• Yield prediction analytics</li>
                  <li>• Resource optimization</li>
                  <li>• Quality assurance systems</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-orange-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
              Partner With Hami Farms
            </h2>
            <p className="text-lg text-white/90 mb-8 text-balance">
              Access quality agricultural products and services from modern, efficient farming operations.
            </p>
            <Link
              href="/consult"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
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
