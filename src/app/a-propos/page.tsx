import { Heart, Users, Target, Award } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

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
    <div className="min-h-screen bg-[var(--background)]">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] py-20 lg:py-28">
        <div className="container-acdev text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-montserrat)' }}>
            À propos d'ACDEV
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Association au Cœur du Développement - Engagée pour la promotion d'un développement 
            social inclusif, équitable et durable au Cameroun depuis 2012.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-acdev">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-14 h-14 rounded-full bg-[var(--primary)]/10 flex items-center justify-center mb-4">
                  <Target className="h-7 w-7 text-[var(--primary)]" />
                </div>
                <CardTitle style={{ fontFamily: 'var(--font-montserrat)' }}>Notre Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[var(--muted-foreground)]">
                  Contribuer à rendre le monde meilleur pour les femmes, les enfants et toutes les personnes vulnérables.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-14 h-14 rounded-full bg-[var(--secondary)]/10 flex items-center justify-center mb-4">
                  <Heart className="h-7 w-7 text-[var(--secondary)]" />
                </div>
                <CardTitle style={{ fontFamily: 'var(--font-montserrat)' }}>Notre Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[var(--muted-foreground)]">
                  Promotion des droits humains, prévention des violences basées sur le genre, 
                  autonomisation des femmes et enfants.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-14 h-14 rounded-full bg-[var(--accent)]/10 flex items-center justify-center mb-4">
                  <Award className="h-7 w-7 text-[var(--accent)]" />
                </div>
                <CardTitle style={{ fontFamily: 'var(--font-montserrat)' }}>Nos Valeurs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap justify-center gap-2">
                  {["Amour", "Respect", "Solidarité"].map((v) => (
                    <span key={v} className="px-3 py-1 bg-[var(--muted)] rounded-full text-sm text-[var(--foreground)]">
                      {v}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Équipe */}
      <section className="py-16 lg:py-24 bg-[var(--muted)]">
        <div className="container-acdev">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ fontFamily: 'var(--font-montserrat)' }}>
            Notre équipe
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {equipe.map((membre, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-[var(--primary)]/10 flex items-center justify-center mb-4">
                    <Users className="h-8 w-8 text-[var(--primary)]" />
                  </div>
                  <CardTitle className="text-lg">{membre.nom}</CardTitle>
                  <p className="text-sm text-[var(--primary)] font-medium">{membre.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-[var(--muted-foreground)]">{membre.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partenaires */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-acdev">
          <h2 className="text-3xl font-bold text-center mb-4" style={{ fontFamily: 'var(--font-montserrat)' }}>
            Nos partenaires
          </h2>
          <p className="text-center text-[var(--muted-foreground)] mb-12 max-w-2xl mx-auto">
            ACDEV collaborer avec des organisations nationales et internationales pour maximiser son impact.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {partenaires.map((partenaire) => (
              <div
                key={partenaire}
                className="px-6 py-3 bg-[var(--muted)] rounded-lg text-[var(--foreground)] font-medium hover:bg-[var(--primary)]/10 transition-colors"
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
