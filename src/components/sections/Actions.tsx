"use client"

import Link from "next/link"

const actions = [
  {
    image: "/kevin-bonilla-GE5T26wd3QM-unsplash.jpg",
    title: "Sensibilisation communautaire",
    location: "Région du Littoral",
    description: "Séances de sensibilisation et de prévention des violences basées sur le genre."
  },
  {
    image: "/maria-lupan-HI9Gw0On60Q-unsplash.jpg",
    title: "Hygiène menstruelle",
    location: "Établissements scolaires",
    description: "Formation et accompagnement des élèves sur l’hygiène menstruelle et la santé reproductive."
  },
  {
    image: "/microsoft-copilot-pqMPnPo4_ZA-unsplash.jpg",
    title: "Accompagnement des femmes",
    location: "Région du Centre",
    description: "Soutien et orientation des femmes vulnérables : écoute, information, accompagnement."
  }
]

export function Actions() {
  return (
    <section className="py-20 bg-white border-t border-gray-200">
      <div className="container-acdev">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <span className="text-[#16A34A] font-semibold text-sm uppercase tracking-wider">
              Sur le terrain
            </span>
            <h2 className="text-4xl font-bold text-black mt-2" style={{ fontFamily: "var(--font-heading)" }}>
              Quelques actions déjà réalisées
            </h2>
          </div>
          <p className="text-gray-600 max-w-xl">
            Des activités concrètes menées avec les communautés, les écoles et les acteurs locaux.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {actions.map((action, index) => (
            <div key={index} className="bg-white border border-gray-200">
              <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
                <img src={action.image} alt={action.title} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-semibold text-black" style={{ fontFamily: "var(--font-heading)" }}>
                    {action.title}
                  </h3>
                  <span className="inline-block w-6 h-0.5 bg-[#1E40AF]" />
                </div>
                <p className="text-sm text-gray-600 mb-3">{action.location}</p>
                <p className="text-sm text-gray-700">{action.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/actualites" className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white">
            Voir nos actualités
          </Link>
        </div>
      </div>
    </section>
  )
}
