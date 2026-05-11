"use client"

import { ArrowRight, Users, Scale, Briefcase, Smartphone } from "lucide-react"
import Link from "next/link"

const programmes = [
  {
    id: 1,
    icon: Users,
    title: "Renforcement institutionnel",
    subtitle: "Programme I",
    description: "Formation des membres en genre, droits humains des femmes, traite et trafic. NTIC et gestion de projets.",
    color: "#1E40AF",
  },
  {
    id: 2,
    icon: Scale,
    title: "Droits de l'Homme & VBG",
    subtitle: "Programme II",
    description: "Éducation aux droits, sensibilisation aux violences sexuelles, hygiène menstruelle, santé reproductive.",
    color: "#DC2626",
  },
  {
    id: 3,
    icon: Briefcase,
    title: "Autonomisation économique",
    subtitle: "Programme III",
    description: "Appui technique et financier pour le développement des activités génératrices de revenus (AGR).",
    color: "#16A34A",
  },
  {
    id: 6,
    icon: Smartphone,
    title: "Digital & Cohésion sociale",
    subtitle: "Programme VI",
    description: "Sensibilisation sur l'usage des médias sociaux, communication pour la paix, ateliers de formation.",
    color: "#1E40AF",
  }
]

export function Programmes() {
  return (
    <section className="py-20 bg-white border-t border-gray-200">
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

        <div className="grid md:grid-cols-2 gap-0 border-y border-gray-200">
          {programmes.map((programme) => (
            <div
              key={programme.id}
              className="p-8 lg:p-10 bg-white border-b border-gray-200 md:border-r md:border-gray-200 last:border-b-0"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center text-white" style={{ backgroundColor: programme.color }}>
                  <programme.icon className="h-5 w-5" />
                </div>

                <div className="min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm font-semibold" style={{ color: programme.color }}>
                      {programme.subtitle}
                    </span>
                    <span className="inline-block w-6 h-0.5" style={{ backgroundColor: programme.color }} />
                  </div>
                  <h3 className="text-lg lg:text-xl font-bold text-black" style={{ fontFamily: 'var(--font-heading)' }}>
                    {programme.title}
                  </h3>
                  <p className="mt-3 text-gray-600">
                    {programme.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/programmes"
            className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white"
          >
            Voir tous les détails
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
