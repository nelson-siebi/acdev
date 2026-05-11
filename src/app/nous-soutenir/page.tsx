"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"

const modesDons = [
  {
    titre: "Don ponctuel",
    description: "Faites un don unique pour soutenir nos actions sur le terrain.",
    montants: ["5 000", "10 000", "25 000", "50 000"],
    unite: "FCFA"
  },
  {
    titre: "Don régulier",
    description: "Devenez donateur mensuel et accompagnez durablement nos programmes.",
    montants: ["5 000", "10 000", "20 000"],
    unite: "FCFA/mois"
  },
  {
    titre: "Devenir membre",
    description: "Rejoignez ACDEV et bénéficiez d'avantages exclusifs.",
    montants: ["Adhésion"],
    unite: "à partir de 50 000 FCFA/an"
  }
]

export default function NousSoutenirPage() {
  return (
    <div className="min-h-screen bg-[#FDFCFA]">
      {/* Hero */}
      <section className="bg-[#F5F3EF] border-b border-[#E5E1D8] py-16 lg:py-20">
        <div className="container-acdev">
          <h1 
            className="text-4xl lg:text-5xl font-bold text-[#2C3E50] mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Soutenez notre action
          </h1>
          <p className="text-xl text-[#5D6D7E] max-w-3xl">
            Votre contribution nous permet de continuer à protéger les femmes et les enfants 
            vulnérables au Cameroun.
          </p>
        </div>
      </section>

      {/* Modes de don */}
      <section className="py-16 lg:py-24">
        <div className="container-acdev">
          <div className="grid lg:grid-cols-3 gap-px bg-[#E5E1D8] border border-[#E5E1D8]">
            {modesDons.map((mode, idx) => (
              <div 
                key={idx} 
                className="bg-[#FFFCF8] p-8 flex flex-col"
              >
                <h2 
                  className="text-2xl font-bold text-[#2C3E50] mb-4"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {mode.titre}
                </h2>
                
                <p className="text-[#5D6D7E] mb-6 flex-1">
                  {mode.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  <p className="text-sm text-[#8B7355]">Montants suggérés :</p>
                  <div className="flex flex-wrap gap-2">
                    {mode.montants.map((m) => (
                      <button
                        key={m}
                        className="px-4 py-2 border border-[#E5E1D8] text-[#2C3E50] hover:border-[#B85C38] hover:text-[#B85C38] transition-colors text-sm"
                      >
                        {m} {mode.unite}
                      </button>
                    ))}
                  </div>
                </div>
                
                <button className="w-full px-6 py-4 bg-[#B85C38] text-[#FFFCF8] hover:bg-[#8B4513] transition-colors">
                  Je contribue →
                </button>
              </div>
            ))}
          </div>

          {/* Info paiement */}
          <div className="mt-12 p-8 bg-[#F5F3EF] border border-[#E5E1D8]">
            <p className="text-[#5D6D7E] text-center mb-4">
              Paiement par Mobile Money (OM, MTN MoMo) ou virement bancaire
            </p>
            <p className="text-sm text-[#8B7355] text-center">
              Transactions sécurisées • Reçu fiscal disponible
            </p>
          </div>
        </div>
      </section>

      {/* Devenir membre - CTA */}
      <section className="py-16 bg-[#2C3E50] text-[#FFFCF8]">
        <div className="container-acdev text-center">
          <h2 
            className="text-3xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Rejoignez ACDEV
          </h2>
          <p className="text-[#C9A961] mb-8 max-w-2xl mx-auto">
            Découvrez tous les avantages de l'adhésion et devenez membre dès aujourd'hui.
          </p>
          <Link
            href="/devenir-membre"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A961] text-[#2C3E50] hover:bg-[#B8A050] transition-colors"
          >
            Voir les options d'adhésion
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Contact simplifié */}
      <section className="py-16 border-t border-[#E5E1D8]">
        <div className="container-acdev">
          <div className="max-w-2xl mx-auto text-center">
            <h2 
              className="text-2xl font-bold text-[#2C3E50] mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Contactez-nous
            </h2>
            <p className="text-[#5D6D7E] mb-8">
              Pour toute question sur les dons ou les partenariats
            </p>
            
            <div className="space-y-4">
              <a 
                href="mailto:inside_development@yahoo.com"
                className="block text-[#B85C38] hover:underline text-lg"
              >
                inside_development@yahoo.com
              </a>
              <p className="text-[#5D6D7E]">
                Cameroun — Littoral, Est, Centre
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
