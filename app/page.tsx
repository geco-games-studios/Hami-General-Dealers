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

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <HeroSlider />
      <LocationsCarousel />
      <About />
      <Team />
      <CustomerStories />
      <OurReach />
      <Ventures />
      {/* </CHANGE> */}
      <MissionVision />
      <ContactSection />
      <Footer />
    </div>
  )
}
