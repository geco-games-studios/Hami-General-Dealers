export function OurStory() {
  return (
    <section id="our-story" className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Story</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A journey of growth, dedication, and commitment to Zambian agriculture
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Timeline Content */}
          <div className="space-y-8">
            <div className="relative pl-8 border-l-4 border-primary">
              <div className="absolute -left-3 top-0 w-6 h-6 bg-primary rounded-full border-4 border-background"></div>
              <div className="mb-1 text-sm font-semibold text-primary">2015 - The Beginning</div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Foundation & Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                Hami General Dealers was established with a clear mission: to empower Zambian farmers by providing
                high-quality, affordable agricultural inputs. Starting as a local supplier, we set out to make a
                meaningful difference in the agricultural sector.
              </p>
            </div>

            <div className="relative pl-8 border-l-4 border-primary">
              <div className="absolute -left-3 top-0 w-6 h-6 bg-primary rounded-full border-4 border-background"></div>
              <div className="mb-1 text-sm font-semibold text-primary">2016-2019 - Growth & Expansion</div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Building Trust</h3>
              <p className="text-muted-foreground leading-relaxed">
                Through consistent quality and reliable service, we expanded our reach across Mazabuka, Chirundu,
                Lusaka, Kafue, and Siavonga. Our commitment to farmers earned us a reputation as a trusted agricultural
                partner.
              </p>
            </div>

            <div className="relative pl-8 border-l-4 border-primary">
              <div className="absolute -left-3 top-0 w-6 h-6 bg-primary rounded-full border-4 border-background"></div>
              <div className="mb-1 text-sm font-semibold text-primary">2020-Present - Thriving Enterprise</div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Industry Leader</h3>
              <p className="text-muted-foreground leading-relaxed">
                Today, we stand as a well-established enterprise, continuously investing in infrastructure, technology,
                and our workforce. Our strategic distribution network and unwavering quality standards make us a
                preferred choice for agricultural productivity.
              </p>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img
                src="/modern-poultry-farm-facility.jpg"
                alt="Hami General Dealers facility"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <div className="text-white">
                  <p className="text-3xl font-bold mb-2">9+ Years</p>
                  <p className="text-lg">Of Dedicated Service to Zambian Agriculture</p>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-6 shadow-lg text-center">
                <div className="text-3xl font-bold text-primary mb-1">5+</div>
                <div className="text-sm text-muted-foreground">Key Locations</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg text-center">
                <div className="text-3xl font-bold text-primary mb-1">1000+</div>
                <div className="text-sm text-muted-foreground">Satisfied Customers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
