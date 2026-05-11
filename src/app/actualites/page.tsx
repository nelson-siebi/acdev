import { Calendar, ArrowRight, User } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
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

const categories = ["Toutes", "Institutionnel", "Programme II", "Programme III", "Partenariat", "Digital"]

export default function ActualitesPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] py-20 lg:py-28">
        <div className="container-acdev text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-montserrat)' }}>
            Actualités
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Découvrez nos dernières actions, événements et réussites sur le terrain.
          </p>
        </div>
      </section>

      {/* Filtres */}
      <section className="py-8 bg-white border-b border-[var(--border)]">
        <div className="container-acdev">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  cat === "Toutes"
                    ? "bg-[var(--primary)] text-white"
                    : "bg-[var(--muted)] text-[var(--muted-foreground)] hover:bg-[var(--primary)]/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16 lg:py-24">
        <div className="container-acdev">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {actualites.map((article) => (
              <Card key={article.id} className="group hover:shadow-lg transition-all flex flex-col">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-2 text-sm text-[var(--muted-foreground)] mb-3">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(article.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                  </div>
                  <span className="inline-block px-3 py-1 bg-[var(--primary)]/10 text-[var(--primary)] text-xs font-semibold rounded-full mb-3">
                    {article.categorie}
                  </span>
                  <CardTitle className="text-xl group-hover:text-[var(--primary)] transition-colors" style={{ fontFamily: 'var(--font-montserrat)' }}>
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <CardDescription className="text-base mb-4 flex-1">
                    {article.resume}
                  </CardDescription>
                  <div className="flex items-center gap-2 text-sm text-[var(--muted-foreground)] pt-4 border-t border-[var(--border)]">
                    <User className="h-4 w-4" />
                    <span>Par {article.auteur}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination simulée */}
          <div className="flex justify-center gap-2 mt-12">
            <Button variant="outline" size="sm" disabled>Précédent</Button>
            <Button variant="default" size="sm" className="bg-[var(--primary)]">1</Button>
            <Button variant="outline" size="sm">2</Button>
            <Button variant="outline" size="sm">Suivant</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
