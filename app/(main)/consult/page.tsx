import Header from '@/components/header'
import Footer from '@/components/footer'
import { CheckCircle } from 'lucide-react'

export const metadata = {
  title: 'Consultation Services - Hami General Dealers',
  description: 'Schedule a consultation with our expert advisors for farming, business, and sustainability solutions.',
}

export default function Consult() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Expert Consultation Services
            </h1>
            <p className="text-xl text-white/90 max-w-3xl text-balance">
              Get personalized advice from our experienced consultants to optimize your farming or business operations.
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6 text-balance">
                  Why Choose Our Consultation?
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground">Expert advisors with 10+ years of experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground">Customized solutions tailored to your needs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground">Proven track record of successful outcomes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground">Ongoing support and follow-up services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground">Affordable and flexible pricing options</span>
                  </li>
                </ul>
              </div>
              <div className="bg-primary/5 rounded-lg h-64 flex items-center justify-center border-2 border-primary/20">
                <div className="text-center text-muted-foreground">
                  <p>Consultation Services Image</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center text-balance">
              Our Consultation Services
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-lg p-8 border border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary font-bold text-lg">🌾</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Farm Management</h3>
                <p className="text-muted-foreground mb-4">
                  Comprehensive guidance on crop selection, soil management, irrigation, pest control, and harvest optimization.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Soil testing and analysis</li>
                  <li>• Crop planning and rotation</li>
                  <li>• Irrigation system design</li>
                  <li>• Pest and disease management</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-8 border border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary font-bold text-lg">📊</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Business Planning</h3>
                <p className="text-muted-foreground mb-4">
                  Strategic planning to grow your business, expand markets, and improve profitability.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Business strategy development</li>
                  <li>• Market analysis</li>
                  <li>• Financial planning</li>
                  <li>• Growth acceleration</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-8 border border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary font-bold text-lg">♻️</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Sustainability</h3>
                <p className="text-muted-foreground mb-4">
                  Transition to sustainable farming practices that protect the environment while maintaining yields.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Organic certification</li>
                  <li>• Water conservation</li>
                  <li>• Carbon reduction</li>
                  <li>• Biodiversity preservation</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-8 border border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-primary font-bold text-lg">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Market Access</h3>
                <p className="text-muted-foreground mb-4">
                  Connect with reliable buyers, understand market dynamics, and develop effective marketing strategies.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Buyer connections</li>
                  <li>• Price negotiation</li>
                  <li>• Quality standards</li>
                  <li>• Branding and marketing</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Consultation Process */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center text-balance">
              Our Process
            </h2>

            <div className="space-y-6">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg flex-shrink-0">
                  1
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-foreground mb-2">Schedule Initial Meeting</h3>
                  <p className="text-muted-foreground">
                    Contact us to schedule a free initial consultation to discuss your needs and challenges.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg flex-shrink-0">
                  2
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-foreground mb-2">Assessment & Analysis</h3>
                  <p className="text-muted-foreground">
                    Our consultants thoroughly assess your current situation and identify key opportunities.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg flex-shrink-0">
                  3
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-foreground mb-2">Customized Plan</h3>
                  <p className="text-muted-foreground">
                    We develop a personalized action plan with clear recommendations and timelines.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg flex-shrink-0">
                  4
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-foreground mb-2">Implementation Support</h3>
                  <p className="text-muted-foreground">
                    We guide you through implementation and provide ongoing support and adjustments.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg flex-shrink-0">
                  5
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-foreground mb-2">Follow-up & Optimization</h3>
                  <p className="text-muted-foreground">
                    Regular check-ins to monitor progress and optimize results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center text-balance">
              Flexible Pricing Options
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg border border-border p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-foreground mb-3">Single Session</h3>
                <p className="text-3xl font-bold text-primary mb-4">KES 5,000</p>
                <p className="text-muted-foreground text-sm mb-6">
                  One-time consultation session with our experts
                </p>
                <button className="w-full px-6 py-2 border border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors">
                  Book Now
                </button>
              </div>

              <div className="bg-primary text-primary-foreground rounded-lg p-8 border-2 border-primary shadow-lg relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-accent text-accent-foreground text-xs font-bold rounded-full">
                  POPULAR
                </div>
                <h3 className="text-xl font-bold mb-3">Quarterly Package</h3>
                <p className="text-3xl font-bold mb-4">KES 45,000</p>
                <p className="text-white/90 text-sm mb-6">
                  4 monthly sessions with comprehensive support
                </p>
                <button className="w-full px-6 py-2 bg-white text-primary rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                  Select Plan
                </button>
              </div>

              <div className="bg-white rounded-lg border border-border p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-foreground mb-3">Annual Package</h3>
                <p className="text-3xl font-bold text-primary mb-4">KES 150,000</p>
                <p className="text-muted-foreground text-sm mb-6">
                  Year-round support with priority access
                </p>
                <button className="w-full px-6 py-2 border border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors">
                  Book Now
                </button>
              </div>
            </div>

            <p className="text-center text-muted-foreground mt-8">
              All packages include free initial assessment. Custom packages available upon request.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6 text-balance">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-white/90 mb-8 text-balance">
              Contact us today for your free initial consultation.
            </p>
            <button className="px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Schedule Consultation
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
