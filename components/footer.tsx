export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="font-bold text-xl bg-accent text-accent-foreground px-2 py-1 rounded">HGD</div>
              <h3 className="font-bold text-lg">Hami General Dealers</h3>
            </div>
            <p className="opacity-90">
              Professional agricultural supplier delivering premium quality to enterprises nationwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 opacity-90">
              <li>
                <a href="#about" className="hover:opacity-100 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#locations" className="hover:opacity-100 transition">
                  Service Network
                </a>
              </li>
              <li>
                <a href="#mission" className="hover:opacity-100 transition">
                  Mission & Vision
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:opacity-100 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-bold mb-4">Service Areas</h4>
            <p className="opacity-90 text-sm leading-relaxed">
              Mazabuka • Chirundu • Lusaka
              <br />
              Kafue • Siavonga
            </p>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center opacity-90">
          <p>&copy; {currentYear} Hami General Dealers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
