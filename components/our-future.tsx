export function OurFuture() {
  return (
    <section id="our-future" className="py-20 px-4 bg-gradient-to-br from-secondary/10 via-accent/10 to-primary/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Future</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building tomorrow's agricultural excellence today
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Innovation */}
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Innovation & Technology</h3>
            <p className="text-muted-foreground leading-relaxed">
              Investing in modern farming technologies, automation, and sustainable practices to enhance productivity
              and quality. We're committed to staying at the forefront of agricultural innovation.
            </p>
          </div>

          {/* Expansion */}
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Regional Expansion</h3>
            <p className="text-muted-foreground leading-relaxed">
              Expanding our distribution network to reach more farmers across Zambia and neighboring regions. Our goal
              is to make quality agricultural inputs accessible to every farmer.
            </p>
          </div>

          {/* Sustainability */}
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Sustainable Growth</h3>
            <p className="text-muted-foreground leading-relaxed">
              Implementing eco-friendly practices and supporting sustainable agriculture. We're building a future where
              business growth goes hand-in-hand with environmental responsibility.
            </p>
          </div>
        </div>

        {/* Vision Statement */}
        {/* <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 text-center text-white shadow-2xl">
          <h3 className="text-3xl font-bold mb-6">Our 2030 Vision</h3>
          <p className="text-lg leading-relaxed max-w-4xl mx-auto mb-8">
            By 2030, Hami General Dealers aims to be the leading agricultural enterprise in Zambia, recognized for
            exceptional quality, innovation, and unwavering commitment to farmer success. We envision a future where
            every Zambian farmer has access to world-class agricultural inputs and services that drive prosperity and
            sustainable growth.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
              <div className="text-2xl font-bold">10+</div>
              <div className="text-sm">Regional Hubs</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
              <div className="text-2xl font-bold">5000+</div>
              <div className="text-sm">Partner Farmers</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
              <div className="text-2xl font-bold">100%</div>
              <div className="text-sm">Quality Assurance</div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}
