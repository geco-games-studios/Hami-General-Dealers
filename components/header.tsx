'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Mail, Menu, Phone, ShoppingBag, X } from 'lucide-react'

const navigationItems = [
  { href: '/', label: 'Home' },
  { href: '/agrovert', label: 'Agrovert' },
  { href: '/farms', label: 'Farms' },
  { href: '/mifi', label: 'Mifi' },
  { href: '/hamiz', label: 'Hamiz' },
  { href: '/mipro', label: 'Mipro' },
  { href: '/our-work', label: 'Our Work' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-emerald-100">
      <div className="hidden bg-slate-950 text-white md:block">
        <div className="mx-auto flex h-8 max-w-6xl items-center justify-between px-4 text-xs">
          <p>All supplies, farm inputs, and consulting under one trusted roof</p>
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-2">
              <Phone className="h-3.5 w-3.5 text-emerald-300" />
              +260 979 718945
            </span>
            <span className="inline-flex items-center gap-2">
              <Mail className="h-3.5 w-3.5 text-emerald-300" />
              generalmanagerhami@gmail.com
            </span>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center" aria-label="Hami General Dealers home">
            <Image
              src="/images/logo-hami.png"
              alt="Hami General Dealers"
              width={80}
              height={80}
              priority
              className="h-16 w-16 object-contain"
            />
          </Link>

          <nav className="hidden items-center gap-5 xl:gap-8 lg:flex">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-slate-700 transition-colors hover:text-emerald-700"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 sm:flex">
            <Link
              href="/careers"
              className="text-sm font-semibold text-slate-700 transition-colors hover:text-emerald-700"
            >
              Join Us
            </Link>
            <Link
              href="/consult"
              className="inline-flex items-center gap-2 rounded-md border border-slate-950 px-5 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:border-emerald-700 hover:bg-emerald-700 hover:text-white"
            >
              <ShoppingBag className="h-4 w-4" />
              Partner
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-md p-2 text-slate-900 transition-colors hover:bg-emerald-50 lg:hidden"
            aria-label="Toggle navigation"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="border-t border-emerald-100 pb-4 lg:hidden">
            <nav className="flex flex-col gap-1 pt-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-md px-3 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-700"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/careers"
                onClick={() => setIsOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-700"
              >
                Join Us
              </Link>
              <Link
                href="/consult"
                onClick={() => setIsOpen(false)}
                className="mt-2 rounded-md bg-emerald-700 px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-emerald-800"
              >
                Partner With Us
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
