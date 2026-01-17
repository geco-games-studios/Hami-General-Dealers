"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const slides = [
  {
    id: 1,
    title: "Enterprise-Grade Agriculture",
    subtitle: "Reliable egg supply chains across the nation with professional operations",
    image: "/farm-chickens-1.jpg",
  },
  {
    id: 2,
    title: "Professional Team Operations",
    subtitle: "A dedicated workforce committed to quality and excellence across all locations",
    image: "/farm-team.jpeg",
  },
  {
    id: 3,
    title: "Efficient Logistics & Distribution",
    subtitle: "Our fleet ensures timely delivery to Mazabuka, Chirundu, Lusaka, Kafue, and Siavonga",
    image: "/farm-logistics.jpeg",
  },
  {
    id: 4,
    title: "Promising Future Growth",
    subtitle: "Expanding our horizon with a new, cutting-edge poultry facility.",
    image: "/farm-operations.jpeg",
  },
  {
    id: 5,
    title: "Shikoswe Agro Shop",
    subtitle: "Quality agricultural supplies and expert farming solutions in Southern Region",
    image: "/Shikoswe/1.jpeg",
  },
  {
    id: 6,
    title: "Chirundu Agro Shop",
    subtitle: "Gateway to northern markets with comprehensive agro-retail services",
    image: "/Chirundu/1.jpeg",
  },
  {
    id: 7,
    title: "Kafue Town Agro Shop",
    subtitle: "Industrial zone agricultural hub serving commercial and retail clients",
    image: "/Kafue-town/1.jpeg",
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
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === current ? "opacity-100 scale-100 z-10" : "opacity-0 scale-105 z-0 pointer-events-none"
          }`}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            className={`object-cover transition-transform text-white duration-[5000ms] ease-out ${
              index === current ? "scale-110" : "scale-100"
            }`}
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60" />
          <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
            {/* <h2
              className={`text-4xl md:text-6xl font-bold mb-4 text-white text-balance transition-all duration-700 delay-200 ${
                index === current ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              {slide.title}
            </h2> */}
            <p
              className={`text-xl md:text-2xl text-white text-balance transition-all duration-700 delay-500 ${
                index === current ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              {slide.subtitle}
            </p>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={previous}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 hover:scale-110 text-white p-2 rounded-full transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 hover:scale-110 text-white p-2 rounded-full transition-all duration-300"
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
            className={`rounded-full transition-all duration-300 ${
              index === current ? "bg-white w-8 h-3" : "bg-white/50 w-3 h-3 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
