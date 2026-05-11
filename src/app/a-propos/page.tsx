import { Heart, Users, Target, Award } from "lucide-react"

const partenaires = [
  "IOM", "OIT (ILO)", "Coopération Suisse", "AGEH", "Amplify Change", 
  "Ministère de la Promotion de la Femme", "Ministère de la Jeunesse", "CRTV"
]

const equipe = [
  { role: "Fondatrice & Présidente", nom: "Mme Marie Louisette LOBE", desc: "12+ ans d'expérience en changement social" },
  { role: "Gestionnaire des programmes", nom: "À définir", desc: "Coordination des activités terrain" },
  { role: "Secrétaire exécutif", nom: "À définir", desc: "Gestion administrative" },
  { role: "Gestionnaire financier", nom: "À définir", desc: "Comptabilité et reporting" },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-white border-b border-gray-200 py-20 lg:py-28">
        <div className="container-acdev text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-black mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
            À propos d'ACDEV
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Association au Cœur du Développement - Engagée pour la promotion d'un développement 
            social inclusif, équitable et durable au Cameroun depuis 2012.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-acdev">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center border border-gray-200 p-8 bg-white">
              <div className="mx-auto w-14 h-14 bg-[#1E40AF] flex items-center justify-center mb-4 text-white">
                <Target className="h-7 w-7" />
              </div>
              <h2 className="text-xl font-bold text-black mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                Notre Vision
              </h2>
              <p className="text-gray-700">
                Contribuer à rendre le monde meilleur pour les femmes, les enfants et toutes les personnes vulnérables.
              </p>
            </div>

            <div className="text-center border border-gray-200 p-8 bg-white">
              <div className="mx-auto w-14 h-14 bg-[#DC2626] flex items-center justify-center mb-4 text-white">
                <Heart className="h-7 w-7" />
              </div>
              <h2 className="text-xl font-bold text-black mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                Notre Mission
              </h2>
              <p className="text-gray-700">
                Promotion des droits humains, prévention des violences basées sur le genre, 
                autonomisation des femmes et enfants.
              </p>
            </div>

            <div className="text-center border border-gray-200 p-8 bg-white">
              <div className="mx-auto w-14 h-14 bg-[#16A34A] flex items-center justify-center mb-4 text-white">
                <Award className="h-7 w-7" />
              </div>
              <h2 className="text-xl font-bold text-black mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                Nos Valeurs
              </h2>
              <div className="flex flex-wrap justify-center gap-2">
                {["Amour", "Respect", "Solidarité"].map((v) => (
                  <span key={v} className="px-3 py-1 border border-gray-200 text-sm text-black">
                    {v}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Équipe */}
      <section className="py-16 lg:py-24 bg-white border-t border-gray-200">
        <div className="container-acdev">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ fontFamily: 'var(--font-heading)' }}>
            Notre équipe
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {equipe.map((membre, idx) => (
              <div key={idx} className="border border-gray-200 bg-white p-6">
                <div className="w-12 h-12 bg-black flex items-center justify-center mb-4 text-white">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-black">{membre.nom}</h3>
                <p className="text-sm text-[#1E40AF] font-semibold mt-1">{membre.role}</p>
                <p className="text-sm text-gray-700 mt-3">{membre.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partenaires */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-acdev">
          <h2 className="text-3xl font-bold text-center mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Nos partenaires
          </h2>
          <p className="text-center text-[var(--muted-foreground)] mb-12 max-w-2xl mx-auto">
            ACDEV collaborer avec des organisations nationales et internationales pour maximiser son impact.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {partenaires.map((partenaire) => (
              <div
                key={partenaire}
                className="px-6 py-3 border border-gray-200 text-black font-medium"
              >
                {partenaire}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
