import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle } from 'lucide-react'

export const metadata = {
  title: 'Our Work - Hami General Dealers',
  description: 'Discover our services across Agrovert farm inputs, poultry and cattle production, microfinance daily loans, motors, IT, and media support.',
}

export default function OurWork() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Our Work & Services
            </h1>
            <p className="text-xl text-white/90 max-w-3xl text-balance">
              Comprehensive solutions across agriculture, microfinance, mobility, and community development.
            </p>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                  Agricultural Services
                </h2>
                <p className="text-muted-foreground mb-6">
                  We provide agricultural products and services including chicks, vaccines, animal feed, veterinary drugs, poultry support, cattle production support, and farm consultations.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground">Animal feed and stock feed supply</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground">Veterinary drugs and services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground">Day-old chicks and poultry support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground">Layer and egg production support</span>
                  </li>
                </ul>
                <Link
                  href="/agrovert"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors"
                >
                  Learn about Agrovert <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <div className="relative h-64 overflow-hidden rounded-lg border border-primary/20 bg-primary/5">
                <Image
                  src="/images/hami-hero-professional.png"
                  alt="Hami General Dealers agricultural services"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative h-64 overflow-hidden rounded-lg border border-secondary/20 bg-secondary/5 md:order-last">
                <Image
                  src="/images/team-1.jpeg"
                  alt="Hami General Dealers commercial services"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                  Microfinance Solutions
                </h2>
                <p className="text-muted-foreground mb-6">
                  Mifi Business Solutions is a microfinance company specializing in daily loans for customers who need practical short-term financial support.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground">Daily loan services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground">Microfinance customer support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground">Short-term financial support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground">Loan processing and repayment coordination</span>
                  </li>
                </ul>
                <Link
                  href="/mifi"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors"
                >
                  Learn about Mifi <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies / Success Stories */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center text-balance">
              Success Stories
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-8 border border-border">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                    Case Study
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Agricultural Inputs for Farmers and Marketeers
                </h3>
                <p className="text-muted-foreground mb-4">
                  Through Hami Agrovert, we connect farmers and marketeers with chicks, vaccines, feed, veterinary drugs, and farm consultation support.
                </p>
                <div className="text-primary font-semibold text-sm">
                  Focus: agricultural inputs and timely supply
                </div>
              </div>

              <div className="bg-white rounded-lg p-8 border border-border">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                    Case Study
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Poultry Farming and Cattle Production
                </h3>
                <p className="text-muted-foreground mb-4">
                  Hami Farms supports poultry farming, egg production, and cattle production as core parts of its farm operations.
                </p>
                <div className="text-primary font-semibold text-sm">
                  Focus: poultry, cattle, and farm operations
                </div>
              </div>

              <div className="bg-white rounded-lg p-8 border border-border">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                    Case Study
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  IT, Media, and Brand Communication
                </h3>
                <p className="text-muted-foreground mb-4">
                  Mipro supports the IT and media perspective of the organization through digital content, communication materials, brand updates, and media coordination.
                </p>
                <div className="text-primary font-semibold text-sm">
                  Focus: IT support, media content, and communication
                </div>
              </div>

              <div className="bg-white rounded-lg p-8 border border-border">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                    Case Study
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Direct Supplier Relationships
                </h3>
                <p className="text-muted-foreground mb-4">
                  Hami General Dealers builds relationships with manufacturers and source suppliers to reduce unnecessary middlemen and strengthen supply control.
                </p>
                <div className="text-primary font-semibold text-sm">
                  Focus: reliable sourcing and distribution
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Consulting Services */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center text-balance">
              Consulting Services
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Our team provides practical support on farming practices, agricultural products, supplier coordination, business planning, and customer delivery.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-border rounded-lg p-8">
                <h3 className="text-lg font-bold text-foreground mb-3">Farming Consultation</h3>
                <p className="text-muted-foreground mb-4">
                  Practical support on poultry production, cattle production, veterinary products, stock feed, and general farm planning.
                </p>
              </div>

              <div className="border border-border rounded-lg p-8">
                <h3 className="text-lg font-bold text-foreground mb-3">Business Planning</h3>
                <p className="text-muted-foreground mb-4">
                  Strategic planning services to help you coordinate operations, customer support, and growth.
                </p>
              </div>

              <div className="border border-border rounded-lg p-8">
                <h3 className="text-lg font-bold text-foreground mb-3">Sustainability Assessment</h3>
                <p className="text-muted-foreground mb-4">
                  Review product needs, sourcing options, and delivery plans to improve reliability and cost efficiency.
                </p>
              </div>

              <div className="border border-border rounded-lg p-8">
                <h3 className="text-lg font-bold text-foreground mb-3">Market Access Support</h3>
                <p className="text-muted-foreground mb-4">
                  Connect with reliable buyers, understand market dynamics, and develop effective marketing strategies.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link
                href="/consult"
                className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
              >
                Schedule a Consultation <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
