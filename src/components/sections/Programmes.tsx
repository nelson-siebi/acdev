"use client"

import { useState } from "react"
import { ArrowRight, ChevronDown, Users, Scale, Briefcase, Smartphone } from "lucide-react"
import Link from "next/link"

const programmes = [
  {
    id: 1,
    icon: Users,
    title: "Renforcement institutionnel",
    subtitle: "Programme I",
    description: "Formation des membres en genre, droits humains des femmes, traite et trafic. NTIC et gestion de projets.",
    objectifs: ["Formation en genre", "Droits humains", "Gestion de projets"],
    color: "#1E40AF",
    bgColor: "bg-blue-50"
  },
  {
    id: 2,
    icon: Scale,
    title: "Droits de l'Homme & VBG",
    subtitle: "Programme II",
    description: "Éducation aux droits, sensibilisation aux violences sexuelles, hygiène menstruelle, santé reproductive.",
    objectifs: ["Éducation aux droits", "Prévention VBG", "Santé reproductive"],
    color: "#DC2626",
    bgColor: "bg-red-50"
  },
  {
    id: 3,
    icon: Briefcase,
    title: "Autonomisation économique",
    subtitle: "Programme III",
    description: "Appui technique et financier pour le développement des activités génératrices de revenus (AGR).",
    objectifs: ["Formation AGR", "Microfinance", "Suivi-évaluation"],
    color: "#16A34A",
    bgColor: "bg-green-50"
  },
  {
    id: 6,
    icon: Smartphone,
    title: "Digital & Cohésion sociale",
    subtitle: "Programme VI",
    description: "Sensibilisation sur l'usage des médias sociaux, communication pour la paix, ateliers de formation.",
    objectifs: ["Médias sociaux", "Communication paix", "Citoyenneté"],
    color: "#1E40AF",
    bgColor: "bg-blue-50"
  }
]

export function Programmes() {
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <section className="py-20 bg-white">
      <div className="container-acdev">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
          <div>
            <span className="text-[#DC2626] font-semibold text-sm uppercase tracking-wider">
              Nos actions
            </span>
            <h2 
              className="text-4xl font-bold text-black mt-2"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Programmes 2026-2028
            </h2>
          </div>
          <p className="text-gray-600 max-w-lg mt-4 lg:mt-0">
            Quatre axes stratégiques pour transformer la vie des femmes et des enfants
          </p>
        </div>

        {/* Grille interactive */}
        <div className="grid md:grid-cols-2 gap-6">
          {programmes.map((programme) => (
            <div
              key={programme.id}
              className={`relative overflow-hidden transition-all duration-500 ${
                expanded === programme.id ? 'md:col-span-2' : ''
              }`}
            >
              <div 
                className={`p-8 border-l-4 ${programme.bgColor} hover:shadow-lg transition-shadow cursor-pointer`}
                style={{ borderLeftColor: programme.color }}
                onClick={() => setExpanded(expanded === programme.id ? null : programme.id)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div 
                      className="w-12 h-12 flex items-center justify-center text-white"
                      style={{ backgroundColor: programme.color }}
                    >
                      <programme.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <span className="text-sm font-medium" style={{ color: programme.color }}>
                        {programme.subtitle}
                      </span>
                      <h3 
                        className="text-xl font-bold text-black"
                        style={{ fontFamily: 'var(--font-heading)' }}
                      >
                        {programme.title}
                      </h3>
                    </div>
                  </div>
                  <ChevronDown 
                    className={`h-5 w-5 text-gray-400 transition-transform ${
                      expanded === programme.id ? 'rotate-180' : ''
                    }`} 
                  />
                </div>
                
                <p className="mt-4 text-gray-600">
                  {programme.description}
                </p>
                
                {/* Contenu expandé */}
                <div className={`overflow-hidden transition-all duration-500 ${
                  expanded === programme.id ? 'max-h-40 mt-6' : 'max-h-0'
                }`}>
                  <div className="pt-4 border-t border-gray-200">
                    <h4 className="font-semibold text-black mb-3">Objectifs :</h4>
                    <div className="flex flex-wrap gap-2">
                      {programme.objectifs.map((obj, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 bg-white text-sm border border-gray-200"
                        >
                          {obj}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/programmes"
            className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white hover:bg-gray-800 transition-colors group"
          >
            Voir tous les détails
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
