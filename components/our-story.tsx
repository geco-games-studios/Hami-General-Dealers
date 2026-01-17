"use client"

import { useEffect, useState } from "react"

export function OurStory() {
  const [visibleItems, setVisibleItems] = useState([false, false, false])

  useEffect(() => {
    visibleItems.forEach((_, index) => {
      setTimeout(() => {
        setVisibleItems((prev) => {
          const newState = [...prev]
          newState[index] = true
          return newState
        })
      }, index * 300)
    })
  }, [])

  const timelineItems = [
    {
      year: "2015",
      title: "Foundation & Vision",
      description: "Hami General Dealers was established with a clear mission to empower Zambian farmers",
      image: "/Kafue-town/2.jpeg",
    },
    {
      year: "2016-2019",
      title: "Growth & Expansion",
      description: "Expanded across Mazabuka, Chirundu, Lusaka, Kafue, and Siavonga",
      image: "/Shikoswe/5.jpeg",
    },
    {
      year: "2020-Present",
      title: "Industry Leader",
      description: "A well-established enterprise, continuously investing in infrastructure and technology",
      image: "/Kafue-town/8.jpeg",
    },
  ]

  return (
    <section id="our-story" className="py-20 px-4 bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse top-20 left-10"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4">Our Story</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A journey of growth, dedication, and commitment to Zambian agriculture
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Center line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary to-secondary transform -translate-x-1/2"></div>

          {timelineItems.map((item, index) => (
            <div
              key={index}
              className={`mb-12 transform transition-all duration-700 ${
                visibleItems[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "md:direction-rtl" : ""}`}>
                <div className="hidden md:flex justify-center">
                  {index % 2 === 0 ? (
                    <div className="flex flex-col items-center">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="w-24 h-24 rounded-full border-4 border-primary shadow-lg object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ) : null}
                </div>

                {/* Content */}
                <div className="p-8 rounded-lg bg-card border-2 border-primary/30 hover:border-primary hover:shadow-xl transition-all duration-300 group">
                  <div className="text-primary font-bold text-2xl mb-2 group-hover:text-secondary transition-colors">
                    {item.year}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>

                <div className="hidden md:flex justify-center">
                  {index % 2 === 1 ? (
                    <div className="flex flex-col items-center">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="w-24 h-24 rounded-full border-4 border-primary shadow-lg object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div className="grid md:grid-cols-2 gap-8 mt-20">
          <div className="group bg-gradient-to-br from-primary to-primary/80 rounded-lg p-8 text-white text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="text-5xl font-bold mb-2">9+</div>
            <div className="text-lg font-semibold">Years of Service</div>
          </div>
          <div className="group bg-gradient-to-br from-secondary to-secondary/80 rounded-lg p-8 text-white text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="text-5xl font-bold mb-2">1000+</div>
            <div className="text-lg font-semibold">Satisfied Customers</div>
          </div>
        </div>
      </div>
    </section>
  )
}
