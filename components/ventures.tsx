"use client"

import { Briefcase, ArrowRight } from "lucide-react"

export function Ventures() {
  const ventures = [
    {
      title: "Premium Egg Supply",
      description:
        "Our core business providing high-quality eggs to restaurants, retailers, and institutions across the country.",
      icon: "🥚",
    },
    {
      title: "Poultry Feed Distribution",
      description:
        "Supplying premium feed products to farms and breeders, supporting the broader agricultural ecosystem.",
      icon: "🌾",
    },
    {
      title: "Veterinary Services",
      description: "Health and wellness services for poultry, ensuring flock productivity and disease prevention.",
      icon: "⚕️",
    },
    {
      title: "Cold Storage Solutions",
      description:
        "Modern storage facilities maintaining optimal conditions for egg preservation and quality assurance.",
      icon: "❄️",
    },
    {
      title: "Training & Consulting",
      description: "Offering expertise and guidance to upcoming farmers and small businesses in poultry production.",
      icon: "📚",
    },
    {
      title: "Organic & Specialty Products",
      description: "Developing lines of specialty eggs including organic, free-range, and fortified varieties.",
      icon: "✨",
    },
  ]

  return (
    <section id="ventures" className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Briefcase className="text-primary" size={32} />
            <h2 className="text-4xl font-bold text-foreground">Our Ventures</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expanding beyond eggs - building a comprehensive agricultural enterprise serving multiple sectors.
          </p>
        </div>

        {/* Ventures Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ventures.map((venture, index) => (
            <div
              key={index}
              className="group bg-card border-2 border-primary/20 rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all duration-300"
            >
              {/* Icon */}
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{venture.icon}</div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {venture.title}
              </h3>
              <p className="text-muted-foreground mb-4">{venture.description}</p>

              {/* Arrow */}
              <div className="flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-sm font-semibold">Learn more</span>
                <ArrowRight size={16} className="ml-2" />
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise Call-to-Action */}
        <div className="mt-12 bg-gradient-to-r from-primary to-primary/80 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-primary-foreground mb-3">Strategic Partnership Opportunities</h3>
          <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
            Interested in partnering with us or exploring wholesale opportunities? We're always looking for strategic
            collaborations to expand our ventures.
          </p>
          <button className="bg-primary-foreground text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground/90 transition-colors">
            Explore Partnerships
          </button>
        </div>
      </div>
    </section>
  )
}
