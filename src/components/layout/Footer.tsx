"use client"

import Link from "next/link"
import { useState, useEffect } from "react"

const carouselItems = [
  {
    image: "/photos/action-1.jpg",
    text: "Soutien aux femmes vulnérables dans la région du Littoral"
  },
  {
    image: "/photos/action-2.jpg",
    text: "Formation sur l'hygiène menstruelle dans les écoles"
  },
  {
    image: "/photos/action-3.jpg",
    text: "Accompagnement des jeunes filles mères"
  },
  {
    image: "/photos/action-4.jpg",
    text: "Sensibilisation contre les violences basées sur le genre"
  }
]

export function Footer() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <footer className="bg-[#2C3E50] text-[#FFFCF8]">
      {/* Carousel d'images */}
      <div className="relative overflow-hidden h-64 md:h-80">
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Placeholder image - remplacer par vraies photos */}
            <div className="w-full h-full bg-[#4A6B7C] flex items-center justify-center">
              <div className="text-center p-8">
                <p className="text-[#C9A961] text-sm uppercase tracking-wider mb-2">Nos actions sur le terrain</p>
                <p className="text-xl md:text-2xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>
                  {item.text}
                </p>
              </div>
            </div>
          </div>
        ))}
        
        {/* Indicateurs */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-[#C9A961]' : 'bg-[#FFFCF8]/30'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Contenu footer */}
      <div className="container-acdev py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo et description */}
          <div>
            <Link 
              href="/" 
              className="text-2xl font-bold text-[#C9A961]"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              ACDEV
            </Link>
            <p className="text-[#C9A961]/80 text-sm mt-4 leading-relaxed">
              Association au Cœur du Développement. Depuis 2012 au Cameroun.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-[#C9A961] mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/a-propos" className="text-[#FFFCF8]/80 hover:text-[#C9A961] text-sm">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/programmes" className="text-[#FFFCF8]/80 hover:text-[#C9A961] text-sm">
                  Programmes
                </Link>
              </li>
              <li>
                <Link href="/actualites" className="text-[#FFFCF8]/80 hover:text-[#C9A961] text-sm">
                  Actualités
                </Link>
              </li>
              <li>
                <Link href="/nous-soutenir" className="text-[#FFFCF8]/80 hover:text-[#C9A961] text-sm">
                  Faire un don →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-[#C9A961] mb-4">Contact</h4>
            <p className="text-[#FFFCF8]/80 text-sm">
              inside_development@yahoo.com
            </p>
            <p className="text-[#FFFCF8]/60 text-sm mt-2">
              Cameroun — Littoral, Est, Centre
            </p>
          </div>
        </div>

        {/* Bas de footer */}
        <div className="pt-8 border-t border-[#4A6B7C] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#FFFCF8]/60">
            © {new Date().getFullYear()} ACDEV. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/mentions-legales" className="text-sm text-[#FFFCF8]/60 hover:text-[#C9A961]">
              Mentions légales
            </Link>
            <Link href="/confidentialite" className="text-sm text-[#FFFCF8]/60 hover:text-[#C9A961]">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
