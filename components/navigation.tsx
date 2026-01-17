"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="HAMI General Dealers Logo" width={60} height={60} className="h-16 w-auto" />
            <div>
              <h1 className="text-lg font-bold">Hami General Dealers</h1>
            </div>
          </div>

          {/* Desktop Menu - REDUCED ITEMS */}
          <div className="hidden md:flex gap-8">
            <a href="#about" className="hover:opacity-80 transition">
              About
            </a>
            <a href="#hami-agro" className="hover:opacity-80 transition">
              Products
            </a>
            <a href="#agro-shops" className="hover:opacity-80 transition">
              Shops
            </a>
            <a href="#our-story" className="hover:opacity-80 transition">
              Story
            </a>
            <a href="#contact" className="hover:opacity-80 transition">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#about" className="block py-2 hover:opacity-80 transition">
              About
            </a>
            <a href="#hami-agro" className="block py-2 hover:opacity-80 transition">
              Products
            </a>
            <a href="#agro-shops" className="block py-2 hover:opacity-80 transition">
              Shops
            </a>
            <a href="#our-story" className="block py-2 hover:opacity-80 transition">
              Story
            </a>
            <a href="#contact" className="block py-2 hover:opacity-80 transition">
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
