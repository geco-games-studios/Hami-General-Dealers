"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    id: 1,
    title: "Enterprise-Grade Agriculture",
    subtitle: "Reliable egg supply chains across the nation with professional operations",
    gradient: "from-[#49374e] to-[#e1aa19]",
  },
  {
    id: 2,
    title: "Trusted Business Partner",
    subtitle: "Serving retailers, distributors, and institutions nationwide since establishment",
    gradient: "from-[#e1aa19] to-[#d1ae47]",
  },
  {
    id: 3,
    title: "Premium Quality Eggs",
    subtitle: "Our flagship product delivered with consistency to Mazabuka, Chirundu, Lusaka, Kafue, and Siavonga",
    gradient: "from-[#d1ae47] to-[#49374e]",
  },
]

export function HeroSlider() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const previous = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  const next = () => setCurrent((prev) => (prev + 1) % slides.length)

  return (
    <section className="relative w-full h-96 md:h-[500px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 bg-gradient-to-r ${slide.gradient} transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-black/25" />
          <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">{slide.title}</h2>
            <p className="text-xl md:text-2xl opacity-95 text-balance">{slide.subtitle}</p>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={previous}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition ${index === current ? "bg-white" : "bg-white/50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
