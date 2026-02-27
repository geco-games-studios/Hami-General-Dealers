'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

const navigationItems = [
  { href: '/', label: 'Home' },
  {
    label: 'Organization',
    submenu: [
      { href: '/about', label: 'About Us' },
      { href: '/team', label: 'Our Team' },
      { href: '/our-work', label: 'Our Work' },
    ],
  },
  {
    label: 'Divisions',
    submenu: [
      { href: '/agrovert', label: 'Agrovert' },
      { href: '/mifi', label: 'Mifi' },
      { href: '/farms', label: 'Farms' },
    ],
  },
  {
    label: 'Services',
    submenu: [
      { href: '/consult', label: 'Consulting' },
      { href: '/our-work', label: 'Our Services' },
    ],
  },
  {
    label: 'Resources',
    submenu: [
      { href: '/events', label: 'Events' },
      { href: '/media', label: 'Media' },
      { href: '/', label: 'Blog' },
    ],
  },
  { href: '/contact', label: 'Contact' },
]

interface NavItem {
  href?: string
  label: string
  submenu?: NavItem[]
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const renderNavItem = (item: NavItem, isMobile = false) => {
    if (!item.submenu) {
      return (
        <Link
          key={item.href}
          href={item.href || '#'}
          onClick={() => isMobile && setIsOpen(false)}
          className="px-3 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-md transition-colors block"
        >
          {item.label}
        </Link>
      )
    }

    return (
      <div key={item.label} className={`relative group ${isMobile ? 'w-full' : ''}`}>
        <button
          onClick={() => isMobile && setOpenDropdown(openDropdown === item.label ? null : item.label)}
          className="px-3 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-md transition-colors flex items-center gap-1 w-full"
        >
          {item.label}
          <ChevronDown className={`w-4 h-4 transition-transform ${isMobile && openDropdown === item.label ? 'rotate-180' : ''}`} />
        </button>

        {/* Desktop Dropdown */}
        {!isMobile && (
          <div className="absolute left-0 mt-0 w-48 bg-white border border-border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-40">
            {item.submenu.map((subitem) => (
              <Link
                key={subitem.href}
                href={subitem.href || '#'}
                className="block px-4 py-2 text-sm text-foreground hover:bg-muted first:rounded-t-md last:rounded-b-md transition-colors"
              >
                {subitem.label}
              </Link>
            ))}
          </div>
        )}

        {/* Mobile Dropdown */}
        {isMobile && openDropdown === item.label && (
          <div className="pl-4 bg-muted rounded-md mt-1">
            {item.submenu.map((subitem) => (
              <Link
                key={subitem.href}
                href={subitem.href || '#'}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-sm text-foreground hover:bg-muted/50 rounded-md transition-colors"
              >
                {subitem.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">H</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-primary text-sm">Hami</span>
              <span className="text-xs text-muted-foreground">General Dealers</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigationItems.map((item) => renderNavItem(item, false))}
          </nav>

          {/* CTA Button */}
          <div className="hidden sm:flex items-center gap-4">
            <Link
              href="/consult"
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Get Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-muted transition-colors"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4 border-t border-border">
            <nav className="flex flex-col gap-1">
              {navigationItems.map((item) => renderNavItem(item, true))}
              <Link
                href="/consult"
                onClick={() => setIsOpen(false)}
                className="px-3 py-2 mt-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                Get Consultation
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
