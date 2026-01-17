"use client"

import { Navigation } from "@/components/navigation"
import { HeroSlider } from "@/components/hero-slider"
import { LocationsCarousel } from "@/components/locations-carousel"
import { MissionVision } from "@/components/mission-vision"
import { About } from "@/components/about"
import { Team } from "@/components/team"
import { CustomerStories } from "@/components/customer-stories"
import { OurReach } from "@/components/our-reach"
import { Ventures } from "@/components/ventures"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { MediaShowcase } from "@/components/media-showcase"
import { OurStory } from "@/components/our-story"
import { OurFuture } from "@/components/our-future"
import { HamiAgro } from "@/components/hami-agro"
import { AgroShops } from "@/components/agro-shops"
import { Chatbot } from "@/components/chatbot"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <HeroSlider />
      <MediaShowcase />
      <LocationsCarousel />
      <About />
      <HamiAgro />
      <AgroShops />
      <OurStory />
      <Team />
      <CustomerStories />
      <OurReach />
      <Ventures />
      <MissionVision />
      <OurFuture />
      <ContactSection />
      <Footer />
      <Chatbot />
    </div>
  )
}
