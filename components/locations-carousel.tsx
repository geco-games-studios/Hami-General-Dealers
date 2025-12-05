"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const locations = [
  {
    id: 1,
    name: "Mazabuka",
    region: "Southern Region",
    description: "Primary distribution hub for southern provinces",
  },
  { id: 2, name: "Chirundu", region: "Border Region", description: "Gateway to northern markets and transit route" },
  { id: 3, name: "Lusaka", region: "Central Hub", description: "Capital city center with institutional clients" },
  { id: 4, name: "Kafue", region: "Industrial Zone", description: "Commercial and industrial supplier center" },
  { id: 5, name: "Siavonga", region: "Lake District", description: "Regional distribution for southern areas" },
]

export function LocationsCarousel() {
  const [current, setCurrent] = useState(0)

  const previous = () => setCurrent((prev) => (prev - 1 + locations.length) % locations.length)
  const next = () => setCurrent((prev) => (prev + 1) % locations.length)

  return (
    <section id="locations" className="py-16 px-4 bg-secondary/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Our Service Network</h2>
          <p className="text-lg text-muted-foreground">
            Strategic locations across the nation for optimal distribution
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-5 gap-4">
          {locations.map((location) => (
            <div
              key={location.id}
              className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition transform hover:scale-105 border-l-4 border-primary"
            >
              <h3 className="text-xl font-bold text-foreground mb-1">{location.name}</h3>
              <p className="text-sm font-semibold text-primary mb-3">{location.region}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{location.description}</p>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="relative bg-white rounded-lg p-8 text-center shadow-lg mb-6 border-l-4 border-primary">
            <h3 className="text-2xl font-bold text-foreground mb-2">{locations[current].name}</h3>
            <p className="text-sm font-semibold text-primary mb-4">{locations[current].region}</p>
            <p className="text-muted-foreground leading-relaxed">{locations[current].description}</p>
          </div>

          {/* Mobile Navigation */}
          <div className="flex justify-between items-center">
            <button
              onClick={previous}
              className="bg-primary text-primary-foreground p-2 rounded-full hover:opacity-90 transition"
              aria-label="Previous location"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex gap-2">
              {locations.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full transition ${index === current ? "bg-primary" : "bg-muted"}`}
                  aria-label={`Go to ${locations[index].name}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="bg-primary text-primary-foreground p-2 rounded-full hover:opacity-90 transition"
              aria-label="Next location"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
