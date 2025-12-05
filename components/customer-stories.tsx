"use client"

import { Star, Quote } from "lucide-react"

export function CustomerStories() {
  const stories = [
    {
      name: "Lusaka Restaurant Group",
      type: "Restaurant Chain",
      quote:
        "HGD has been our trusted egg supplier for 5 years. Their consistent quality and reliable delivery have been instrumental to our restaurant operations.",
      rating: 5,
    },
    {
      name: "Kafue Retail Stores",
      type: "Retail Partner",
      quote:
        "Working with Hami General Dealers has transformed our supply chain. Their professionalism and competitive pricing keep our customers happy.",
      rating: 5,
    },
    {
      name: "Chirundu Fresh Markets",
      type: "Market Distributor",
      quote:
        "The bulk orders we place weekly are always handled with utmost professionalism. HGD truly understands business.",
      rating: 5,
    },
    {
      name: "Siavonga Food Services",
      type: "Catering Company",
      quote:
        "Premium quality eggs at competitive rates. HGD's team goes the extra mile to ensure we get the best products every time.",
      rating: 5,
    },
  ]

  return (
    <section id="stories" className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Quote className="text-primary" size={32} />
            <h2 className="text-4xl font-bold text-foreground">Customer Stories</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from our valued clients about their experience partnering with Hami General Dealers.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {stories.map((story, index) => (
            <div
              key={index}
              className="bg-card border-l-4 border-primary rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(story.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-muted-foreground italic mb-4">"{story.quote}"</p>

              {/* Customer Info */}
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{story.name}</p>
                <p className="text-sm text-primary font-medium">{story.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
