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
             Seeks to achieve high quality goods and services and a good distribution network in Zambia by giving our customers the best price, and undertake investment activities that will enhance the capital base. The company seeks to contribute to social economical development of our country through the use of a qualified and experienced workforce in the execution of its works. 
            </p>
          </div>

          {/* Vision */}
          <div className="bg-accent text-accent-foreground rounded-lg p-8 shadow-lg">
            <h3 className="text-3xl font-bold mb-4 flex items-center gap-3">
              <span className="text-4xl">🚀</span>
              Our Vision
            </h3>
            <p className="text-lg leading-relaxed">
              Our vision is to offer our clients, both big and small, world class service coupled with fair pricing, and unfaltering belief in our products, equipment and services offered whilst maintaining an element of fun in an ever changing marketplace. We strive to operate in an equal opportunity environment and value independency and encourage entrepreneurial flair. 
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
