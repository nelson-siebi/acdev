"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useMemo, useState } from "react"

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
  const [selected, setSelected] = useState<{ mode: string; amount: string } | null>(null)

  const paymentText = useMemo(() => {
    if (!selected) return "Paiement par Mobile Money (OM, MTN MoMo) ou virement bancaire"
    if (selected.amount === "Adhésion") return "Adhésion : nous vous contactons après votre message ou paiement"
    return `Montant sélectionné : ${selected.amount}`
  }, [selected])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-white border-b border-gray-200 py-16 lg:py-20">
        <div className="container-acdev">
          <h1 
            className="text-4xl lg:text-5xl font-bold text-black mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Soutenez notre action
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl">
            Votre contribution nous permet de continuer à protéger les femmes et les enfants 
            vulnérables au Cameroun.
          </p>
        </div>
      </section>

      {/* Modes de don */}
      <section className="py-16 lg:py-24">
        <div className="container-acdev">
          <div className="grid lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
            {modesDons.map((mode, idx) => (
              <div 
                key={idx} 
                className="bg-white p-8 flex flex-col"
              >
                <h2 
                  className="text-2xl font-bold text-black mb-4"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {mode.titre}
                </h2>
                
                <p className="text-gray-700 mb-6 flex-1">
                  {mode.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  <p className="text-sm text-gray-600">Montants suggérés :</p>
                  <div className="flex flex-wrap gap-2">
                    {mode.montants.map((m) => (
                      <button
                        key={m}
                        onClick={() => setSelected({ mode: mode.titre, amount: `${m} ${mode.unite}` })}
                        className="px-4 py-2 border border-gray-200 text-black text-sm"
                      >
                        {m} {mode.unite}
                      </button>
                    ))}
                  </div>
                </div>
                
                {mode.titre === "Devenir membre" ? (
                  <Link
                    href="/devenir-membre"
                    className="w-full px-6 py-4 bg-black text-white text-center"
                    onClick={() => setSelected({ mode: mode.titre, amount: "Adhésion" })}
                  >
                    Voir l'adhésion →
                  </Link>
                ) : (
                  <a
                    href="#paiement"
                    className="w-full px-6 py-4 bg-[#DC2626] text-white text-center"
                  >
                    Je contribue →
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Info paiement */}
          <div id="paiement" className="mt-12 p-8 bg-white border border-gray-200">
            <p className="text-gray-700 text-center mb-4">
              {paymentText}
            </p>
            <p className="text-sm text-gray-600 text-center">
              Transactions sécurisées • Reçu fiscal disponible • Contact : inside_development@yahoo.com
            </p>
          </div>
        </div>
      </section>

      {/* Devenir membre - CTA */}
      <section className="py-16 bg-black text-white">
        <div className="container-acdev text-center">
          <h2 
            className="text-3xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Rejoignez ACDEV
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Découvrez tous les avantages de l'adhésion et devenez membre dès aujourd'hui.
          </p>
          <Link
            href="/devenir-membre"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black"
          >
            Voir les options d'adhésion
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Contact simplifié */}
      <section className="py-16 border-t border-gray-200">
        <div className="container-acdev">
          <div className="max-w-2xl mx-auto text-center">
            <h2 
              className="text-2xl font-bold text-black mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Contactez-nous
            </h2>
            <p className="text-gray-700 mb-8">
              Pour toute question sur les dons ou les partenariats
            </p>
            
            <div className="space-y-4">
              <a 
                href="mailto:inside_development@yahoo.com"
                className="block text-[#1E40AF] underline text-lg"
              >
                inside_development@yahoo.com
              </a>
              <p className="text-gray-700">
                Cameroun — Littoral, Est, Centre
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
