"use client"

import { Users } from "lucide-react"

export function Team() {
  const team = [
    {
      name: "Nchimunya Hamimbo",
      role: "Chief Executive Director",
      description:
        "Our Chief Executive Director, provides the strategic vision and executive leadership that guides HGD's mission.",
    },
    {
      name: "Mapalo Kayange",
      role: "General Manager",
      description: "As General Manager, Mapalo Kayange provides strategic leadership and oversees the seamless daily operations of all company locations.",
    },
    {
      name: "Wendy Maimbo",
      role: "Operations Manager",
      description: "Wendy Maimbo, as our Operations Manager, is the architect of our daily efficiency. She designs, implements, and optimizes the core processes that power our service delivery. ",
    },
    {
      name: "Harrison Chooye",
      role: "Farm Manager",
      description: "Harrison Chooye, our Farm Manager, is the steward of our land and livestock. He provides hands-on leadership to ensure the highest standards of animal welfare, crop health, and operational efficiency",
    },
  ]

  return (
    <section id="team" className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Users className="text-primary" size={32} />
            <h2 className="text-4xl font-bold text-foreground">Our Dedicated Team</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the experienced professionals driving Hami General Dealers' success and commitment to excellence.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div
              key={index}
              className="group bg-card border-2 border-primary/20 rounded-lg p-6 hover:shadow-lg hover:border-primary transition-all duration-300"
            >
              <div className="flex flex-col h-full">
                {/* Avatar Placeholder */}
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                  <Users className="text-primary" size={32} />
                </div>

                {/* Team Member Info */}
                <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-sm font-semibold text-primary mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground flex-grow">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
