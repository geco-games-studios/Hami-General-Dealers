"use client"

import { Map, TrendingUp } from "lucide-react"

export function OurReach() {
  const reach = [
    { metric: "5", label: "Service Regions", description: "Covering Mazabuka, Chirundu, Lusaka, Kafue, and Siavonga" },
    {
      metric: "500+",
      label: "Active Customers",
      description: "From restaurants to retail stores to institutional buyers",
    },
    { metric: "1000+", label: "Weekly Deliveries", description: "Ensuring freshness and reliability across regions" },
    {
      metric: "10,000+",
      label: "Eggs Supplied Daily",
      description: "Meeting the diverse needs of our growing customer base",
    },
  ]

  return (
    <section id="reach" className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Map className="text-primary" size={32} />
            <h2 className="text-4xl font-bold text-foreground">Our Reach & Impact</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Serving communities across multiple regions with dependable supply and excellent service.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {reach.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30 rounded-lg p-6 text-center hover:border-primary/60 transition-colors"
            >
              <div className="flex items-center justify-center gap-2 mb-3">
                <TrendingUp className="text-primary" size={24} />
                <p className="text-4xl font-bold text-primary">{item.metric}</p>
              </div>
              <p className="font-semibold text-foreground mb-2">{item.label}</p>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Service Regions Detail */}
        <div className="bg-card border-2 border-primary/20 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-foreground mb-6">Strategic Locations</h3>
          <div className="grid md:grid-cols-5 gap-4">
            {["Mazabuka", "Chirundu", "Lusaka", "Kafue", "Siavonga"].map((location, index) => (
              <div
                key={index}
                className="bg-primary/10 rounded-lg p-4 text-center hover:bg-primary/20 transition-colors"
              >
                <p className="font-semibold text-foreground">{location}</p>
                <p className="text-xs text-muted-foreground mt-1">Distribution Hub</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
