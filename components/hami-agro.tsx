"use client"

import { Leaf } from "lucide-react"

export function HamiAgro() {
  const products = [
    { title: "Premium Seeds", icon: "🌱" },
    { title: "Fertilizers & Nutrients", icon: "🌾" },
    { title: "Pest Control Solutions", icon: "🛡️" },
    { title: "Agricultural Tools", icon: "🔧" },
    { title: "Crop Advisory", icon: "📋" },
    { title: "Irrigation Support", icon: "💧" },
  ]

  return (
    <section id="hami-agro" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-primary/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4 animate-bounce">
            <Leaf className="text-primary" size={32} />
            <h2 className="text-4xl font-bold text-foreground">Hami Agro</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Empowering Zambian farmers with premium agricultural solutions
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
          {products.map((product, index) => (
            <div
              key={index}
              className="group text-center p-6 rounded-lg bg-card border-2 border-primary/20 hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="text-5xl mb-3 group-hover:scale-125 transition-transform duration-300 inline-block">
                {product.icon}
              </div>

              {/* Title */}
              <h3 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">
                {product.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
