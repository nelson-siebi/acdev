"use client"

import { Check } from "lucide-react"
import Link from "next/link"

const membresTypes = [
  {
    type: "Membre bienfaiteur",
    cotisation: "50 000 FCFA / an",
    qui: [
      "Personnes physiques souhaitant soutenir ACDEV",
      "Professionnels engagés dans la défense des droits humains",
      "Particuliers sensibles aux causes sociales au Cameroun"
    ],
    avantages: [
      "Reçu fiscal pour déduction d'impôt",
      "Accès prioritaire aux événements et formations",
      "Mention sur la liste des membres bienfaiteurs (avec accord)",
      "Bulletin d'information trimestriel",
      "Invitation aux assemblées générales"
    ]
  },
  {
    type: "Membre institutionnel",
    cotisation: "200 000 FCFA / an",
    qui: [
      "ONG et associations partenaires",
      "Institutions œuvrant dans le développement social",
      "Organisations engagées contre les VBG"
    ],
    avantages: [
      "Reçu fiscal pour déduction d'impôt",
      "Visibilité sur le site web et publications",
      "Accès au réseau d'expertise ACDEV",
      "Partage de ressources et documentations",
      "Priorité pour les partenariats",
      "Invitation aux assemblées générales avec droit de vote"
    ]
  },
  {
    type: "Membre fondateur",
    cotisation: "Gratuite à vie",
    qui: [
      "Membres fondateurs d'ACDEV",
      "Bureau exécutif en exercice",
      "Personnes ayant contribué significativement à la création d'ACDEV"
    ],
    avantages: [
      "Tous les avantages du membre bienfaiteur",
      "Accès gratuit à toutes les formations",
      "Droit de vote aux assemblées générales",
      "Éligibilité au conseil d'administration",
      "Accès aux réunions stratégiques"
    ]
  }
]

export default function DevenirMembrePage() {
  return (
    <div className="min-h-screen bg-[#FDFCFA]">
      {/* Hero */}
      <section className="bg-[#F5F3EF] border-b border-[#E5E1D8] py-16 lg:py-20">
        <div className="container-acdev">
          <h1 
            className="text-4xl lg:text-5xl font-bold text-[#2C3E50] mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Devenir membre
          </h1>
          <p className="text-xl text-[#5D6D7E] max-w-3xl">
            Rejoignez ACDEV et contribuez à notre mission de promotion des droits humains 
            et de prévention des violences basées sur le genre au Cameroun.
          </p>
        </div>
      </section>

      {/* Types de membres */}
      <section className="py-16 lg:py-24">
        <div className="container-acdev">
          <div className="grid lg:grid-cols-3 gap-8">
            {membresTypes.map((membre, index) => (
              <div 
                key={index} 
                className="border border-[#E5E1D8] bg-[#FFFCF8] p-8 flex flex-col"
              >
                {/* En-tête */}
                <div className="border-b border-[#E5E1D8] pb-6 mb-6">
                  <h2 
                    className="text-2xl font-bold text-[#2C3E50] mb-3"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {membre.type}
                  </h2>
                  <p className="text-lg text-[#B85C38] font-semibold">
                    {membre.cotisation}
                  </p>
                </div>

                {/* Qui */}
                <div className="mb-6">
                  <h3 className="font-semibold text-[#2C3E50] mb-3">Qui peut adhérer ?</h3>
                  <ul className="space-y-2">
                    {membre.qui.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-[#5D6D7E]">
                        <span className="text-[#B85C38] mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Avantages */}
                <div className="flex-1">
                  <h3 className="font-semibold text-[#2C3E50] mb-3">Les avantages</h3>
                  <ul className="space-y-3">
                    {membre.avantages.map((avantage, i) => (
                      <li key={i} className="flex items-start gap-2 text-[#5D6D7E]">
                        <Check className="h-5 w-5 text-[#C9A961] shrink-0 mt-0.5" />
                        <span className="text-sm">{avantage}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="mt-8 pt-6 border-t border-[#E5E1D8]">
                  <Link
                    href="/nous-soutenir"
                    className="block w-full text-center px-6 py-4 bg-[#B85C38] text-[#FFFCF8] hover:bg-[#8B4513] transition-colors"
                  >
                    Adhérer maintenant
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="py-16 bg-[#F5F3EF] border-y border-[#E5E1D8]">
        <div className="container-acdev">
          <h2 
            className="text-3xl font-bold text-[#2C3E50] mb-12 text-center"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Comment devenir membre ?
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                etape: "1",
                titre: "Choisir",
                desc: "Sélectionnez le type de membre qui vous convient"
              },
              {
                etape: "2",
                titre: "Remplir",
                desc: "Complétez le formulaire d'adhésion en ligne"
              },
              {
                etape: "3",
                titre: "Payer",
                desc: "Effectuez votre cotisation par Mobile Money ou virement"
              },
              {
                etape: "4",
                titre: "Confirmer",
                desc: "Recevez votre carte de membre et accès aux avantages"
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-[#B85C38] text-[#FFFCF8] flex items-center justify-center text-xl font-bold">
                  {step.etape}
                </div>
                <h3 className="font-semibold text-[#2C3E50] mb-2">{step.titre}</h3>
                <p className="text-sm text-[#5D6D7E]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16">
        <div className="container-acdev text-center">
          <h2 
            className="text-2xl font-bold text-[#2C3E50] mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Des questions ?
          </h2>
          <p className="text-[#5D6D7E] mb-6">
            Contactez-nous pour plus d'informations sur l'adhésion
          </p>
          <a 
            href="mailto:inside_development@yahoo.com"
            className="text-[#B85C38] hover:underline"
          >
            inside_development@yahoo.com
          </a>
        </div>
      </section>
    </div>
  )
}
