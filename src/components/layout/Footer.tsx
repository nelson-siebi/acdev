"use client"

import Link from "next/link"
import { useState, useEffect } from "react"

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path
      fill="currentColor"
      d="M13.5 22v-8h2.7l.4-3h-3.1V9.2c0-.9.3-1.6 1.6-1.6h1.7V5c-.3 0-1.4-.1-2.7-.1-2.7 0-4.6 1.6-4.6 4.7V11H7v3h2.5v8h4z"
    />
  </svg>
)

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path
      fill="currentColor"
      d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9A3.5 3.5 0 0 0 20 16.5v-9A3.5 3.5 0 0 0 16.5 4h-9ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.2-.8a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
    />
  </svg>
)

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path
      fill="currentColor"
      d="M12 2a9.9 9.9 0 0 0-8.6 14.9L2 22l5.3-1.4A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-3.1.8.8-3-.2-.3A8 8 0 1 1 12 20Zm4.6-6.1c-.2-.1-1.3-.6-1.5-.7-.2-.1-.4-.1-.6.1l-.8 1c-.2.2-.3.2-.6.1a6.6 6.6 0 0 1-3.2-2.8c-.2-.3 0-.4.1-.6l.6-.8c.1-.2.1-.4 0-.6l-.7-1.6c-.2-.4-.4-.3-.6-.3h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 2 0 1.2.9 2.4 1 2.6.1.2 1.8 2.8 4.5 4 .6.3 1.1.5 1.5.6.6.2 1.1.2 1.5.1.5-.1 1.3-.5 1.4-1 .2-.5.2-1 .1-1.1 0-.1-.2-.2-.4-.3Z"
    />
  </svg>
)

const MailIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path
      fill="currentColor"
      d="M4 6h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Zm0 2v.2l8 5.2 8-5.2V8H4Zm16 10V10.6l-7.5 4.9a1 1 0 0 1-1.1 0L4 10.6V18h16Z"
    />
  </svg>
)

const carouselItems = [
  {
    image: "/kevin-bonilla-GE5T26wd3QM-unsplash.jpg",
    text: "Soutien aux femmes vulnérables"
  },
  {
    image: "/maria-lupan-HI9Gw0On60Q-unsplash.jpg",
    text: "Hygiène menstruelle dans les écoles"
  },
  {
    image: "/microsoft-copilot-pqMPnPo4_ZA-unsplash.jpg",
    text: "Accompagnement des jeunes filles"
  },
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
    <footer className="bg-black text-white">
      {/* Carousel d'images */}
      <div className="relative overflow-hidden h-64 md:h-80">
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img src={item.image} alt={item.text} className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-black/55" />

            <div className="absolute inset-0 flex items-end">
              <div className="container-acdev pb-10">
                <p className="text-sm uppercase tracking-wider text-gray-200 mb-2">Nos actions sur le terrain</p>
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
                index === currentSlide ? 'bg-white' : 'bg-white/30'
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
              className="text-2xl font-bold text-white"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              ACDEV
            </Link>
            <p className="text-gray-300 text-sm mt-4 leading-relaxed">
              Association au Cœur du Développement. Depuis 2012 au Cameroun.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/a-propos" className="text-gray-300 text-sm">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/programmes" className="text-gray-300 text-sm">
                  Programmes
                </Link>
              </li>
              <li>
                <Link href="/actualites" className="text-gray-300 text-sm">
                  Actualités
                </Link>
              </li>
              <li>
                <Link href="/nous-soutenir" className="text-gray-300 text-sm">
                  Faire un don →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <a href="mailto:inside_development@yahoo.com" className="inline-flex items-center gap-2 text-gray-300 text-sm underline">
              <MailIcon className="h-4 w-4" />
              <span>inside_development@yahoo.com</span>
            </a>
            <p className="text-gray-400 text-sm mt-2">
              Cameroun — Littoral, Est, Centre
            </p>

            <div className="flex items-center gap-3 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white/80">
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white/80">
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-white/80">
                <WhatsAppIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bas de footer */}
        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © <span suppressHydrationWarning>{new Date().getFullYear()}</span> ACDEV. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/mentions-legales" className="text-sm text-gray-400">
              Mentions légales
            </Link>
            <Link href="/confidentialite" className="text-sm text-gray-400">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
