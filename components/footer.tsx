import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'

const footerLinks = {
  Organizations: [
    { href: '/agrovert', label: 'Agrovert' },
    { href: '/farms', label: 'Hami Farms' },
    { href: '/mifi', label: 'Mifi Business Solutions' },
    { href: '/hamiz', label: 'Hamiz Motors' },
    { href: '/mipro', label: 'Mipro' },
  ],
  Features: [
    { href: '/about', label: 'About' },
    { href: '/our-work', label: 'Our Work' },
    { href: '/events', label: 'Events' },
  ],
  Support: [
    { href: '/contact', label: 'Contact' },
    { href: '/consult', label: 'Consulting' },
    { href: '/media', label: 'Media' },
    { href: '/media/photo-gallery', label: 'Photo Gallery' },
    { href: '/media/videos', label: 'Videos' },
    { href: '/media/media-kit', label: 'Media Kit' },
    { href: '/media/press-releases', label: 'Press Releases' },
  ],
  Legal: [
    { href: '/privacy', label: 'Privacy' },
    { href: '/terms', label: 'Terms of Service' },
    { href: '/cookies', label: 'Cookies' },
  ],
}

const socials = [
  { href: '#', label: 'Instagram', icon: Instagram },
  { href: '#', label: 'YouTube', icon: Youtube },
  { href: '#', label: 'Facebook', icon: Facebook },
  { href: '#', label: 'Twitter', icon: Twitter },
  { href: '#', label: 'LinkedIn', icon: Linkedin },
]

export default function Footer() {
  return (
    <footer className="bg-[#f2f2f2] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-2xl bg-white p-6 shadow-sm md:p-8">
        <div className="rounded-xl bg-orange-500 px-6 py-8 text-white md:px-10 md:py-10">
          <div className="grid gap-8 md:grid-cols-[1fr_1.15fr] md:items-center">
            <div>
              <h2 className="max-w-md text-3xl font-black leading-tight md:text-4xl">
                Subscribe to our newsletter
              </h2>
              <p className="mt-4 text-sm font-medium text-white/75">
                Be the first to receive updates, tips, opportunities, and more.
              </p>
            </div>
            <form className="w-full">
              <div className="flex flex-col gap-3 sm:flex-row">
                <label className="sr-only" htmlFor="footer-email">
                  Email address
                </label>
                <input
                  id="footer-email"
                  type="email"
                  placeholder="Enter your email"
                  className="h-12 flex-1 rounded-full border-0 bg-white/25 px-5 text-sm font-semibold text-white placeholder:text-white/65 outline-none ring-1 ring-white/10 transition focus:ring-2 focus:ring-white"
                />
                <button
                  type="submit"
                  className="h-12 rounded-full bg-white px-7 text-sm font-extrabold text-slate-950 transition-colors hover:bg-slate-100"
                >
                  Subscribe
                </button>
              </div>
              <p className="mt-3 text-xs font-medium text-white/70">
                By subscribing you agree to our Privacy Policy.
              </p>
            </form>
          </div>
        </div>

        <div className="grid gap-10 px-2 py-10 md:grid-cols-5 md:px-0">
          <div>
            <Link href="/" className="inline-flex items-center" aria-label="Hami General Dealers home">
              <Image
                src="/images/logo-hami.png"
                alt="Hami General Dealers"
                width={104}
                height={104}
                className="h-20 w-20 object-contain"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-500">
              Your group for Agrovert farm inputs, poultry and cattle production, microfinance daily loans, motorbikes, parts, gear, IT, and media support.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map((social) => {
                const Icon = social.icon

                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-orange-500 hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </Link>
                )
              })}
            </div>
          </div>

          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h3 className="text-sm font-black text-slate-950">{group}</h3>
              <nav className="mt-4 flex flex-col gap-3">
                {links.map((link) => (
                  <Link key={link.label} href={link.href} className="text-sm font-medium text-slate-500 transition-colors hover:text-orange-500">
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-100 px-2 pt-6 text-center text-xs font-semibold text-slate-400 md:px-0">
          © {new Date().getFullYear()} Hami General Dealers. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
