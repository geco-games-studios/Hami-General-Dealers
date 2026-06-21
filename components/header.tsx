'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Leaf, Mail, Menu, Phone, ShoppingBag, X } from 'lucide-react'

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
              (570) 262-1413
            </span>
            <span className="inline-flex items-center gap-2">
              <Mail className="h-3.5 w-3.5 text-emerald-300" />
              address@gmail.com
            </span>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-11 w-11 items-center justify-center rounded-md border-2 border-emerald-700 text-emerald-800">
              <Leaf className="h-6 w-6" />
            </div>
            <div className="leading-tight">
              <span className="block text-xl font-extrabold text-slate-950">Hami</span>
              <span className="block text-xs font-semibold text-emerald-700">General Dealers</span>
            </div>
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
              href="/contact"
              className="text-sm font-semibold text-slate-700 transition-colors hover:text-emerald-700"
            >
              Sign In
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
