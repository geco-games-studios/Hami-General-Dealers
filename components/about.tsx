"use client"

import { useEffect, useState } from "react"

export function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="about" className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="absolute top-10 right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-20 left-5 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image with animation */}
          <div
            className={`transform transition-all duration-1000 ${isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
          >
            <div className="flex items-center justify-center h-96 relative group">
              {/* Animated glow background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-3xl group-hover:blur-2xl transition-all duration-300 animate-pulse"></div>

              {/* Professional Agricultural Icon */}
              <div className="relative w-64 h-64 flex items-center justify-center">
                <svg
                  viewBox="0 0 200 200"
                  className="w-full h-full group-hover:scale-110 transition-transform duration-300"
                >
                  {/* Background Circle */}
                  <circle cx="100" cy="100" r="95" fill="#E1AA19" stroke="#2D5016" strokeWidth="2" opacity="0.1" />
                  
                  {/* Growth Plant/Leaf */}
                  <g>
                    {/* Main stem */}
                    <line x1="100" y1="160" x2="100" y2="60" stroke="#2D5016" strokeWidth="4" strokeLinecap="round" />
                    
                    {/* Left leaf - top */}
                    <path d="M 100 80 Q 70 60 65 40" stroke="#4CAF50" strokeWidth="5" fill="none" strokeLinecap="round" />
                    <ellipse cx="65" cy="35" rx="8" ry="12" fill="#66BB6A" stroke="#2D5016" strokeWidth="1.5" transform="rotate(-45 65 35)" />
                    
                    {/* Right leaf - top */}
                    <path d="M 100 80 Q 130 60 135 40" stroke="#4CAF50" strokeWidth="5" fill="none" strokeLinecap="round" />
                    <ellipse cx="135" cy="35" rx="8" ry="12" fill="#66BB6A" stroke="#2D5016" strokeWidth="1.5" transform="rotate(45 135 35)" />
                    
                    {/* Left leaf - middle */}
                    <path d="M 100 110 Q 60 100 50 90" stroke="#4CAF50" strokeWidth="5" fill="none" strokeLinecap="round" />
                    <ellipse cx="48" cy="88" rx="8" ry="12" fill="#66BB6A" stroke="#2D5016" strokeWidth="1.5" transform="rotate(-30 48 88)" />
                    
                    {/* Right leaf - middle */}
                    <path d="M 100 110 Q 140 100 150 90" stroke="#4CAF50" strokeWidth="5" fill="none" strokeLinecap="round" />
                    <ellipse cx="152" cy="88" rx="8" ry="12" fill="#66BB6A" stroke="#2D5016" strokeWidth="1.5" transform="rotate(30 152 88)" />
                  </g>
                  
                  {/* Root system */}
                  <g opacity="0.6">
                    <path d="M 100 160 L 85 180" stroke="#8B6F47" strokeWidth="3" strokeLinecap="round" />
                    <path d="M 100 160 L 115 180" stroke="#8B6F47" strokeWidth="3" strokeLinecap="round" />
                    <circle cx="80" cy="185" r="2" fill="#8B6F47" />
                    <circle cx="90" cy="188" r="2" fill="#8B6F47" />
                    <circle cx="110" cy="188" r="2" fill="#8B6F47" />
                    <circle cx="120" cy="185" r="2" fill="#8B6F47" />
                  </g>
                  
                  {/* Decorative circles representing growth rings */}
                  <circle cx="100" cy="160" r="5" fill="#2D5016" opacity="0.3" />
                  <circle cx="100" cy="160" r="3" fill="#4CAF50" />
                </svg>
              </div>

              <p className="absolute bottom-2 text-center text-sm font-semibold text-foreground">
                Agricultural Excellence
              </p>
            </div>
          </div>

          {/* Content with staggered text animation */}
          <div
            className={`transform transition-all duration-1000 delay-200 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
          >
            <h2 className="text-4xl font-bold mb-6 text-foreground">Who We Are</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hami General Dealers is a well-established and reputable Sole Proprietorship enterprise, founded and
              registered in 2015. From its inception, the company has been driven by a core mission: to empower Zambian
              farmers and livestock producers by providing high-quality, cost-effective agricultural inputs and
              services. Over the years, it has grown from a local supplier into a trusted partner for agricultural
              productivity across its operational regions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
