import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'

export const metadata = {
  title: 'Our Work - Hami General Dealers',
  description: 'Discover our services, projects, and impact across agriculture and commerce.',
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
              Comprehensive solutions across agriculture, commerce, and community development.
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
                  We provide end-to-end agricultural solutions from supply to market access, helping farmers maximize yields while practicing sustainability.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground">Quality seeds and fertilizers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground">Expert farming consulting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground">Training and capacity building</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground">Market access and trading</span>
                  </li>
                </ul>
                <Link
                  href="/agrovert"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors"
                >
                  Learn about Agrovert <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <div className="bg-primary/5 rounded-lg h-64 flex items-center justify-center border-2 border-primary/20">
                <div className="text-center text-muted-foreground">
                  <p>Agricultural Services Image</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="bg-secondary/5 rounded-lg h-64 flex items-center justify-center border-2 border-secondary/20 md:order-last">
                <div className="text-center text-muted-foreground">
                  <p>Commercial Services Image</p>
                </div>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                  Commercial Solutions
                </h2>
                <p className="text-muted-foreground mb-6">
                  Mifi brings quality general merchandise, wholesale trading, and business logistics to partners across the region.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground">General merchandise distribution</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground">Wholesale and retail partnerships</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground">Import and export services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground">Business logistics solutions</span>
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
                  Transforming Small-Scale Farming in Kiambu
                </h3>
                <p className="text-muted-foreground mb-4">
                  Through our Agrovert division, we provided 500 farmers in Kiambu region with sustainable farming training, quality inputs, and market access, resulting in a 45% increase in yields.
                </p>
                <div className="text-primary font-semibold text-sm">
                  Impact: 500 farmers, 45% yield increase
                </div>
              </div>

              <div className="bg-white rounded-lg p-8 border border-border">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                    Case Study
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Sustainable Water Harvesting Initiative
                </h3>
                <p className="text-muted-foreground mb-4">
                  Implemented water conservation technologies across 200 farms, reducing water usage by 40% while maintaining productivity in drought-prone areas.
                </p>
                <div className="text-primary font-semibold text-sm">
                  Impact: 200 farms, 40% water savings
                </div>
              </div>

              <div className="bg-white rounded-lg p-8 border border-border">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                    Case Study
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Youth Entrepreneurship Program
                </h3>
                <p className="text-muted-foreground mb-4">
                  Empowered 300 young entrepreneurs through training, mentorship, and access to markets via our Mifi division, creating sustainable livelihoods.
                </p>
                <div className="text-primary font-semibold text-sm">
                  Impact: 300 youth, sustainable businesses
                </div>
              </div>

              <div className="bg-white rounded-lg p-8 border border-border">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                    Case Study
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Organic Certification Support
                </h3>
                <p className="text-muted-foreground mb-4">
                  Guided 150 farmers through organic certification process, enabling them to access premium markets and increase income by 60%.
                </p>
                <div className="text-primary font-semibold text-sm">
                  Impact: 150 farmers, 60% income increase
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
              Our expert consultants provide specialized advice on farming practices, market trends, business strategy, and sustainability.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-border rounded-lg p-8">
                <h3 className="text-lg font-bold text-foreground mb-3">Farming Consultation</h3>
                <p className="text-muted-foreground mb-4">
                  Personalized advice on crop selection, soil management, pest control, and optimization strategies tailored to your land and climate.
                </p>
              </div>

              <div className="border border-border rounded-lg p-8">
                <h3 className="text-lg font-bold text-foreground mb-3">Business Planning</h3>
                <p className="text-muted-foreground mb-4">
                  Strategic planning services to help you develop sustainable business models and expand market reach.
                </p>
              </div>

              <div className="border border-border rounded-lg p-8">
                <h3 className="text-lg font-bold text-foreground mb-3">Sustainability Assessment</h3>
                <p className="text-muted-foreground mb-4">
                  Evaluate your operations and get recommendations for environmental conservation and cost efficiency.
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
