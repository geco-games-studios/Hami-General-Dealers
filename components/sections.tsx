import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Leaf, Lightbulb, BookOpen, TrendingUp, Play } from 'lucide-react'
import { blogPosts, events, services, testimonials, heroVideo } from '@/lib/data'
import { BlogCard, EventCard, ServiceCard } from './cards'
import { TestimonialCard } from './testimonial-card'

const iconMap = {
  Leaf,
  Lightbulb,
  BookOpen,
  TrendingUp,
}

export function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-primary to-secondary text-primary-foreground py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-6 text-balance">
              Building a Better Future in Agriculture & Commerce
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 text-balance">
              Hami General Dealers provides eggs, agricultural inputs, animal feed, veterinary drugs and services, printing, design, office supplies, and stationery across Zambia.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                href="/consult"
                className="px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Get Consultation
              </Link>
              <Link
                href="/our-work"
                className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors flex items-center gap-2"
              >
                Explore Our Work <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Video Section */}
          <div className="relative rounded-lg overflow-hidden shadow-2xl">
            <div className="aspect-video bg-black">
              <iframe
                className="w-full h-full"
                src={heroVideo.url}
                title="Hami General Dealers Introduction"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function WhoWeAreSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Who We Are
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              Hami General Dealers is a Zambian-owned enterprise registered in 2015 and committed to reliable agriculture, supply, and commercial service delivery.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Through Agrovert, Mifi, and Hami Farms, we support farmers, marketeers, businesses, and communities with products and services built around quality and client satisfaction.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <p className="text-foreground font-medium">Registered Zambian business since 2015</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <p className="text-foreground font-medium">Serving farmers, marketeers, and business customers</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <p className="text-foreground font-medium">Commitment to quality service and client satisfaction</p>
              </div>
            </div>
          </div>
          <div className="relative h-96 overflow-hidden rounded-lg border border-primary/20 bg-primary/5">
            <Image
              src="/images/hami-about-team.png"
              alt="Hami General Dealers team"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export function WhatWeDoSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            What We Do
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our services span Agrovert farm inputs, poultry and cattle production, microfinance daily loans, motors, IT, and media support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap]
            return (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                icon={IconComponent && <IconComponent className="w-6 h-6" />}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function HistorySection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center text-balance">
          Our Journey
        </h2>
        
        <div className="space-y-8">
          <div className="flex gap-8 items-start">
            <div className="hidden md:flex flex-col items-center gap-2 w-32 flex-shrink-0">
              <div className="w-4 h-4 rounded-full bg-primary"></div>
              <div className="w-1 h-16 bg-primary/30"></div>
            </div>
            <div className="flex-grow">
              <h3 className="text-xl font-bold text-primary mb-2">2015 - Foundation</h3>
              <p className="text-muted-foreground">
                Hami General Dealers was founded with a mission to transform agricultural practices and support local communities.
              </p>
            </div>
          </div>

          <div className="flex gap-8 items-start">
            <div className="hidden md:flex flex-col items-center gap-2 w-32 flex-shrink-0">
              <div className="w-4 h-4 rounded-full bg-primary"></div>
              <div className="w-1 h-16 bg-primary/30"></div>
            </div>
            <div className="flex-grow">
              <h3 className="text-xl font-bold text-primary mb-2">2017 - Agrovert Launch</h3>
              <p className="text-muted-foreground">
                Built Agrovert around chicks, vaccines, drugs, feed, and practical farm consultations.
              </p>
            </div>
          </div>

          <div className="flex gap-8 items-start">
            <div className="hidden md:flex flex-col items-center gap-2 w-32 flex-shrink-0">
              <div className="w-4 h-4 rounded-full bg-primary"></div>
              <div className="w-1 h-16 bg-primary/30"></div>
            </div>
            <div className="flex-grow">
              <h3 className="text-xl font-bold text-primary mb-2">2019 - Expansion</h3>
              <p className="text-muted-foreground">
                Expanded operations with Hami Farms for poultry and cattle production and Mifi for microfinance daily loans.
              </p>
            </div>
          </div>

          <div className="flex gap-8 items-start">
            <div className="hidden md:flex flex-col items-center gap-2 w-32 flex-shrink-0">
              <div className="w-4 h-4 rounded-full bg-primary"></div>
            </div>
            <div className="flex-grow">
              <h3 className="text-xl font-bold text-primary mb-2">2024 - Future Forward</h3>
              <p className="text-muted-foreground">
                Continuing to improve farm inputs, poultry and cattle production, daily loan support, motors, and project services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function BlogSection() {
  const featuredPosts = blogPosts.slice(0, 3)

  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
              Our Blog
            </h2>
            <p className="text-muted-foreground mt-2">
              Latest insights and updates from our organization
            </p>
          </div>
          <Link
            href="/blog"
            className="hidden sm:flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors"
          >
            View All <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredPosts.map((post) => (
            <BlogCard
              key={post.id}
              title={post.title}
              excerpt={post.excerpt}
              author={post.author}
              date={post.date}
              category={post.category}
              slug={post.slug}
            />
          ))}
        </div>

        <div className="sm:hidden mt-8 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors"
          >
            View All <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export function EventsSection() {
  const featuredEvents = events.slice(0, 3)

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
              Upcoming Events
            </h2>
            <p className="text-muted-foreground mt-2">
              Join us at our latest events and workshops
            </p>
          </div>
          <Link
            href="/events"
            className="hidden sm:flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors"
          >
            View All <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredEvents.map((event) => (
            <EventCard
              key={event.id}
              title={event.title}
              date={event.date}
              time={event.time}
              location={event.location}
              description={event.description}
              type={event.type}
            />
          ))}
        </div>

        <div className="sm:hidden mt-8 text-center">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors"
          >
            View All <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Hear From Our Partners
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from farmers, businesses, and community organizations who trust Hami General Dealers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}

export function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
          Ready to Partner With Us?
        </h2>
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto text-balance">
          Whether you're a farmer, business partner, or community organization, we're here to help you succeed.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/consult"
            className="px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Schedule a Consultation
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
