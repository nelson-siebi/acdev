"use client"

import { Quote, MapPin, GraduationCap, Heart, Award } from "lucide-react"

const timeline = [
  {
    year: "2012",
    title: "La rencontre",
    description: "Mme Marie Louisette LOBE est profondément touchée par la précarité d'une jeune femme en Éthiopie.",
    icon: Heart,
    color: "#DC2626"
  },
  {
    year: "2012",
    title: "Fondation ACDEV",
    description: "Création de l'association au Cameroun avec mission : soutenir les femmes et enfants vulnérables.",
    icon: MapPin,
    color: "#1E40AF"
  },
  {
    year: "2015",
    title: "Premiers programmes",
    description: "Lancement des activités de sensibilisation dans les régions du Littoral et du Centre.",
    icon: GraduationCap,
    color: "#16A34A"
  },
  {
    year: "2024",
    title: "12 ans d'impact",
    description: "Plus de 8 400 enfants sensibilisés, 3 000 élèves formés, intervention dans 3 régions.",
    icon: Award,
    color: "#1E40AF"
  }
]

export function Histoire() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-acdev">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#DC2626] font-semibold text-sm uppercase tracking-wider">
            Notre parcours
          </span>
          <h2 
            className="text-4xl font-bold text-black mt-2 mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Une histoire d'engagement
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            De l'Éthiopie au Cameroun, l'aventure ACDEV commence par une rencontre humaine
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#DC2626] via-[#1E40AF] to-[#16A34A]" />
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="relative flex gap-6 group">
                  {/* Icon */}
                  <div 
                    className="relative z-10 w-12 h-12 flex items-center justify-center text-white shrink-0 transition-transform group-hover:scale-110"
                    style={{ backgroundColor: item.color }}
                  >
                    <item.icon className="h-5 w-5" />
                  </div>
                  
                  {/* Content */}
                  <div className="pb-8">
                    <span 
                      className="text-sm font-bold"
                      style={{ color: item.color }}
                    >
                      {item.year}
                    </span>
                    <h3 className="text-lg font-bold text-black mt-1 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quote card */}
          <div className="lg:sticky lg:top-24">
            <div className="bg-black text-white p-8 lg:p-12 relative">
              <Quote className="h-10 w-10 text-[#DC2626] mb-6" />
              <blockquote 
                className="text-2xl lg:text-3xl font-bold leading-tight mb-8"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                "Protéger les groupes vulnérables, c'est assurer notre avenir commun"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#DC2626] flex items-center justify-center text-white font-bold">
                  ML
                </div>
                <div>
                  <p className="font-semibold">Mme Marie Louisette LOBE</p>
                  <p className="text-sm text-gray-400">Fondatrice & Présidente</p>
                </div>
              </div>
            </div>

            {/* Valeurs */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { label: "Amour", color: "#DC2626" },
                { label: "Respect", color: "#1E40AF" },
                { label: "Solidarité", color: "#16A34A" }
              ].map((valeur) => (
                <div 
                  key={valeur.label}
                  className="text-center p-4 bg-white border-2 border-gray-100 hover:border-transparent transition-colors"
                  style={{ borderBottomColor: valeur.color, borderBottomWidth: '3px' }}
                >
                  <span className="font-bold text-black">{valeur.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
