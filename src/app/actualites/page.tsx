import { Calendar, ArrowRight, User } from "lucide-react"
import Link from "next/link"

const actualites = [
  {
    id: 1,
    title: "Lancement du Plan d'Action Triennal 2026-2028",
    date: "2026-01-15",
    resume: "ACDEV dévoile son nouveau plan stratégique axé sur 4 programmes d'intervention pour renforcer son impact au Cameroun.",
    categorie: "Institutionnel",
    auteur: "ACDEV"
  },
  {
    id: 2,
    title: "Sensibilisation de 700 enfants aux violences sexuelles",
    date: "2025-12-20",
    resume: "Nos équipes ont sensibilisé plus de 700 enfants cette année sur la prévention des violences sexuelles et des enlèvements.",
    categorie: "Programme II",
    auteur: "Marie Louisette LOBE"
  },
  {
    id: 3,
    title: "Formation de 100 mères célibataires en AGR",
    date: "2025-11-10",
    resume: "Programme d'autonomisation économique : 100 mères célibataires et victimes de violences ont reçu un soutien technique et financier.",
    categorie: "Programme III",
    auteur: "Équipe ACDEV"
  },
  {
    id: 4,
    title: "Partenariat avec l'OIT pour la résilience économique des réfugiés",
    date: "2024-06-15",
    resume: "Projet de résilience économique pour les réfugiés dans les régions de l'Est et de l'Adamaoua (2021-2024).",
    categorie: "Partenariat",
    auteur: "ACDEV"
  },
  {
    id: 5,
    title: "Ateliers d'hygiène menstruelle dans les écoles",
    date: "2025-09-05",
    resume: "Plus de 3 000 élèves formés sur l'hygiène menstruelle et la santé reproductive dans les établissements scolaires partenaires.",
    categorie: "Programme II",
    auteur: "Équipe terrain"
  },
  {
    id: 6,
    title: "Nouveau site web ACDEV en ligne",
    date: "2026-05-11",
    resume: "Lancement de notre nouveau site web pour mieux communiquer sur nos actions et faciliter les dons en ligne.",
    categorie: "Digital",
    auteur: "Équipe communication"
  }
]

export default function ActualitesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-white border-b border-gray-200 py-20 lg:py-28">
        <div className="container-acdev text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-black mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
            Actualités
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Découvrez nos dernières actions, événements et réussites sur le terrain.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16 lg:py-24">
        <div className="container-acdev">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {actualites.map((article) => (
              <article key={article.id} className="border border-gray-200 bg-white p-6">
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(article.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold text-[#1E40AF] uppercase tracking-wider">
                    {article.categorie}
                  </span>
                  <span className="inline-block w-6 h-0.5 bg-[#DC2626]" />
                </div>

                <h2 className="text-xl font-bold text-black" style={{ fontFamily: 'var(--font-heading)' }}>
                  {article.title}
                </h2>

                <p className="text-gray-700 mt-3">
                  {article.resume}
                </p>

                <div className="flex items-center gap-2 text-sm text-gray-600 mt-6 pt-4 border-t border-gray-200">
                  <User className="h-4 w-4" />
                  <span>Par {article.auteur}</span>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-14">
            <p className="text-gray-700 mb-6">
              Vous souhaitez soutenir une action en particulier ?
            </p>
            <Link href="/nous-soutenir" className="inline-flex items-center gap-2 px-8 py-4 bg-[#DC2626] text-white">
              Faire un don
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
