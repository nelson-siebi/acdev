"use client"

import { useState } from "react"
import Link from "next/link"

const navItems = [
  { label: "À propos", href: "/a-propos" },
  { label: "Programmes", href: "/programmes" },
  { label: "Actualités", href: "/actualites" },
]

// Icône Menu Hamburger
const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

// Icône Fermer (X)
const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header>
      {/* Top bar - sécurité + réseaux (caché sur mobile) */}
      <div className="hidden md:block bg-black text-white py-2">
        <div className="container-acdev flex items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            {/* Option sécurité - cacher mes infos */}
            <a 
              href="https://www.google.com/search?q=météo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#16A34A] transition-colors"
            >
              <span>🛑</span>
              <span className="font-medium">Cacher ma visite</span>
            </a>
            <span className="text-gray-500">|</span>
            <span className="text-[#16A34A]">Appel d'urgence : à venir</span>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-gray-500">Suivez-nous :</span>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#16A34A] transition-colors"
            >
              Facebook
            </a>
            <a 
              href="mailto:inside_development@yahoo.com"
              className="hover:text-[#16A34A] transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* Navigation principale */}
      <div className="border-b border-gray-200 bg-white">
        <div className="container-acdev py-4">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="text-xl font-bold text-[#DC2626]" style={{ fontFamily: 'var(--font-heading)' }}>
              ACDEV
            </Link>

            <nav className="flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-black hover:text-[#DC2626] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <Link 
                href="/nous-soutenir"
                className="px-4 py-2 bg-[#DC2626] text-white hover:bg-[#B91C1C] transition-colors"
              >
                Faire un don
              </Link>
            </nav>
          </div>

          {/* Mobile Navigation - Simplifiée */}
          <div className="flex md:hidden items-center justify-between">
            {/* Logo */}
            <Link href="/" className="text-xl font-bold text-[#DC2626]" style={{ fontFamily: 'var(--font-heading)' }}>
              ACDEV
            </Link>

            {/* Right side: Don + Hamburger */}
            <div className="flex items-center gap-3">
              <Link 
                href="/nous-soutenir"
                className="px-3 py-2 bg-[#DC2626] text-white text-sm hover:bg-[#B91C1C] transition-colors"
              >
                Faire un don
              </Link>
              
              {/* Hamburger */}
              <button
                className="p-2 text-black"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              >
                {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-gray-200">
              <div className="space-y-4">
                <Link 
                  href="/" 
                  className="block text-black text-lg" 
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Accueil
                </Link>
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block text-black text-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                {/* Option sécurité aussi sur mobile */}
                <a 
                  href="https://www.google.com/search?q=météo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#DC2626] pt-4 border-t border-gray-200"
                >
                  <span>🛑</span>
                  <span>Cacher ma visite</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
