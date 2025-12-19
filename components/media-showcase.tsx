"use client"

import Image from "next/image"

export function MediaShowcase() {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Our Operations in Action</h2>
          <p className="text-lg text-muted-foreground">See our state-of-the-art facilities and daily operations</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Video Section */}
          <div className="space-y-4">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-black shadow-lg">
              <video controls className="w-full h-full object-cover" poster="/farm-operations-video-thumbnail.jpg">
                <source src="/videos/farm-operation.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <h3 className="text-xl font-semibold text-foreground">Daily Farm Operations</h3>
            <p className="text-muted-foreground">
              Watch how our professional team maintains the highest standards in egg production
            </p>
          </div>

          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg group">
              <Image
                src="/modern-poultry-farm-facility.jpg"
                alt="Modern poultry facility"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <h3 className="text-xl font-semibold text-foreground">State-of-the-Art Facilities</h3>
            <p className="text-muted-foreground">
              Our modern infrastructure ensures optimal conditions for our livestock
            </p>
          </div>
        </div>

        {/* Additional Images Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg group">
            <Image
              src="/egg-collection-process.jpg"
              alt="Egg collection"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
              <p className="text-white font-semibold">Quality Collection Process</p>
            </div>
          </div>

          <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg group">
            <Image
              src="/egg-packaging-and-quality-control.jpeg"
              alt="Packaging facility"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
              <p className="text-white font-semibold">Professional Packaging</p>
            </div>
          </div>

          <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg group">
            <Image
              src="/delivery-trucks-fleet.jpg"
              alt="Delivery fleet"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
              <p className="text-white font-semibold">Reliable Distribution</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
