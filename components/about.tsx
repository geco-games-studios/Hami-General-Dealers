export function About() {
  return (
    <section id="about" className="py-16 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image - Changed from emoji to professional business visual */}
          <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg h-96 flex items-center justify-center border-2 border-primary/30">
            <div className="text-center space-y-4">
              <div className="text-6xl">📦</div>
              <p className="text-lg font-semibold text-foreground">Nationwide Distribution</p>
              <p className="text-sm text-muted-foreground">Professional Supply Chain</p>
            </div>
          </div>

          {/* Content - Rewritten to focus on business operations and enterprise value */}
          <div>
            <h2 className="text-4xl font-bold mb-6 text-foreground">Who We Are</h2>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Hami General Dealers is a well-established and reputable Sole Proprietorship enterprise, founded and registered in 2015. From its inception, the company has been driven by a core mission: to empower Zambian farmers and livestock producers by providing high-quality, cost-effective agricultural inputs and services. Over the years, it has grown from a local supplier into a trusted partner for agricultural productivity across its operational regions.
            </p>
            
            {/* <div className="space-y-4">
              <div className="flex gap-4">
                <div className="text-2xl font-bold text-primary flex-shrink-0">✓</div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Strategic Distribution Network</h3>
                  <p className="text-muted-foreground">Coverage across Mazabuka, Chirundu, Lusaka, Kafue, Siavonga</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-2xl font-bold text-primary flex-shrink-0">✓</div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Superior Quality Standards</h3>
                  <p className="text-muted-foreground">Rigorous quality control and hygiene protocols</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-2xl font-bold text-primary flex-shrink-0">✓</div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Dependable Supply</h3>
                  <p className="text-muted-foreground">Consistent availability and reliable logistics</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-2xl font-bold text-primary flex-shrink-0">✓</div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Professional Operations</h3>
                  <p className="text-muted-foreground">Business-focused management and customer relations</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}
