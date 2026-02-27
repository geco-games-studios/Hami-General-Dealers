import Link from 'next/link'
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <h3 className="font-bold text-lg">Hami General Dealers</h3>
            </div>
            <p className="text-sm opacity-90">
              Providing quality agricultural and business solutions across East Africa.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-sm">Quick Links</h4>
            <nav className="flex flex-col gap-2 text-sm">
              <Link href="/" className="opacity-90 hover:opacity-100 transition-opacity">
                Home
              </Link>
              <Link href="/about" className="opacity-90 hover:opacity-100 transition-opacity">
                About Us
              </Link>
              <Link href="/our-work" className="opacity-90 hover:opacity-100 transition-opacity">
                Our Work
              </Link>
              <Link href="/events" className="opacity-90 hover:opacity-100 transition-opacity">
                Events
              </Link>
            </nav>
          </div>

          {/* Our Organizations */}
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-sm">Our Organizations</h4>
            <nav className="flex flex-col gap-2 text-sm">
              <Link href="/agrovert" className="opacity-90 hover:opacity-100 transition-opacity">
                Hami Agrovert
              </Link>
              <Link href="/mifi" className="opacity-90 hover:opacity-100 transition-opacity">
                Hami Mifi
              </Link>
              <Link href="/farms" className="opacity-90 hover:opacity-100 transition-opacity">
                Hami Farms
              </Link>
              <Link href="/consult" className="opacity-90 hover:opacity-100 transition-opacity">
                Consultation
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-sm">Contact</h4>
            <div className="flex flex-col gap-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Nairobi, Kenya</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+254 20 XXXX XXXX</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>info@hamigroup.co.ke</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm opacity-90">
            © {currentYear} Hami General Dealers. All rights reserved.
          </p>
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
