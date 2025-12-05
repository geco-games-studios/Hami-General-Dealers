export function MissionVision() {
  return (
    <section id="mission" className="py-16 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Mission & Vision</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="bg-primary text-primary-foreground rounded-lg p-8 shadow-lg">
            <h3 className="text-3xl font-bold mb-4 flex items-center gap-3">
              <span className="text-4xl">🎯</span>
              Our Mission
            </h3>
            <p className="text-lg leading-relaxed">
              To deliver consistent, high-quality egg supply to businesses and institutions across the nation. We
              maintain excellence through professional operations, strategic partnerships, and unwavering commitment to
              customer satisfaction and reliable service.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-accent text-accent-foreground rounded-lg p-8 shadow-lg">
            <h3 className="text-3xl font-bold mb-4 flex items-center gap-3">
              <span className="text-4xl">🚀</span>
              Our Vision
            </h3>
            <p className="text-lg leading-relaxed">
              To establish Hami General Dealers as the premier agricultural supplier in the region, recognized for
              operational excellence, innovation, and the ability to meet diverse business needs. We aspire to be the
              trusted partner of choice for enterprises seeking reliability and quality.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
