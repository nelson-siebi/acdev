"use client"

import { useState, useEffect } from "react"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

const slides = [
  {
    image: "/kevin-bonilla-GE5T26wd3QM-unsplash.jpg",
    title: "Ensemble pour les droits des femmes",
    subtitle: "8 400+ enfants sensibilisés aux violences sexuelles"
  },
  {
    image: "/maria-lupan-HI9Gw0On60Q-unsplash.jpg",
    title: "Formation et autonomisation",
    subtitle: "3 000+ élèves formés sur l'hygiène menstruelle"
  },
  {
    image: "/microsoft-copilot-pqMPnPo4_ZA-unsplash.jpg",
    title: "Accompagnement sur le terrain",
    subtitle: "100+ mères accompagnées dans 3 régions du Cameroun"
  }
]

export function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const next = () => setCurrent((prev) => (prev + 1) % slides.length)
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <section className="relative bg-black">
      {/* Carousel plein écran */}
      <div className="relative h-[600px] lg:h-[700px]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === current ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
              onError={(e) => {
                const target = e.currentTarget
                target.style.display = "none"
              }}
            />
          </div>
        ))}

        {/* Overlay sombre pour lisibilité */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

        {/* Contenu texte - positionné en bas */}
        <div className="absolute bottom-0 left-0 right-0 pb-32 lg:pb-40">
          <div className="container-acdev">
            <div className="max-w-3xl">
              {/* Badge */}
              <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-white text-sm mb-4 border-l-4 border-[#DC2626]">
                ONG Camerounaise depuis 2012
              </span>
              
              {/* Titre dynamique selon le slide */}
              <h1 
                className="text-3xl lg:text-5xl font-bold text-white leading-tight mb-4"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {slides[current].title}
              </h1>
              
              <p className="text-lg text-white/80 mb-8">
                {slides[current].subtitle}
              </p>
              
              {/* Boutons */}
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/nous-soutenir"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#DC2626] text-white hover:bg-[#B91C1C] transition-colors font-semibold"
                >
                  Faire un don
                </Link>
                <Link 
                  href="/a-propos"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-black transition-colors"
                >
                  Notre histoire
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation flèches */}
        <button 
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/30 text-white hover:bg-black/50 transition-colors"
          aria-label="Précédent"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button 
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/30 text-white hover:bg-black/50 transition-colors"
          aria-label="Suivant"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Indicateurs */}
        <div className="absolute bottom-32 lg:bottom-40 right-4 lg:right-8 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-1 transition-all ${
                index === current ? 'w-8 bg-[#DC2626]' : 'w-4 bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
      
      {/* Bas en forme de S aplati */}
      <div className="absolute bottom-0 left-0 right-0 h-20 lg:h-28">
        <svg 
          viewBox="0 0 1440 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path 
            d="M0 80 
               C 300 80, 500 30, 720 50 
               C 940 70, 1140 80, 1440 60 
               V 100 H 0 Z" 
            fill="white"
          />
          <path 
            d="M0 75 
               C 300 75, 500 25, 720 45 
               C 940 65, 1140 75, 1440 55" 
            stroke="#1E40AF" 
            strokeWidth="3"
            fill="none"
          />
        </svg>
      </div>
    </section>
  )
}
