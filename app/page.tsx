import Header from '@/components/header'
import Footer from '@/components/footer'
import {
  HeroSection,
  WhoWeAreSection,
  WhatWeDoSection,
  HistorySection,
  BlogSection,
  EventsSection,
  TestimonialsSection,
  CTASection,
} from '@/components/sections'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <WhoWeAreSection />
        <WhatWeDoSection />
        <HistorySection />
        <TestimonialsSection />
        <BlogSection />
        <EventsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
