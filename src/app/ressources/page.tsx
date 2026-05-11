import { FileText, Download, ExternalLink, BookOpen, Video, Phone } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const ressources = [
  {
    id: 1,
    title: "Plan d'Action Triennal 2026-2028",
    type: "PDF",
    description: "Document stratégique complet détaillant les 4 programmes d'intervention d'ACDEV pour les trois prochaines années.",
    size: "2.4 MB",
    date: "Janvier 2026"
  },
  {
    id: 2,
    title: "Rapport d'activités 2024-2025",
    type: "PDF",
    description: "Bilan annuel de nos actions : chiffres clés, témoignages et perspectives.",
    size: "1.8 MB",
    date: "Décembre 2025"
  },
  {
    id: 3,
    title: "Guide de prévention des VBG",
    type: "PDF",
    description: "Document pédagogique pour identifier et prévenir les violences basées sur le genre.",
    size: "850 KB",
    date: "Mis à jour régulièrement"
  },
  {
    id: 4,
    title: "Lignes directrices médias",
    type: "PDF",
    description: "Recommandations pour une couverture médiatique éthique des cas de violence.",
    size: "420 KB",
    date: "Juin 2024"
  }
]

const liensUtiles = [
  { title: "Ministère de la Promotion de la Femme", url: "#", description: "Politiques et programmes gouvernementaux" },
  { title: "OIT Cameroun", url: "#", description: "Organisation Internationale du Travail" },
  { title: "IOM Cameroun", url: "#", description: "Organisation Internationale pour les Migrations" },
  { title: "CRTV", url: "#", description: "Cameroon Radio Television - Média partenaire" }
]

const services = [
  { icon: Phone, title: "Ligne d'écoute", description: "Support téléphonique pour les victimes de violences", contact: "À venir" },
  { icon: BookOpen, title: "Documentation juridique", description: "Accès aux textes sur les droits des femmes et enfants", contact: "Sur demande" },
  { icon: Video, title: "Formation en ligne", description: "Modules e-learning sur la prévention des VBG", contact: "En développement" }
]

export default function RessourcesPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] py-20 lg:py-28">
        <div className="container-acdev text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-montserrat)' }}>
            Ressources
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Documents téléchargeables, liens utiles et services à destination des professionnels et du grand public.
          </p>
        </div>
      </section>

      {/* Documents */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-acdev">
          <h2 className="text-3xl font-bold mb-8" style={{ fontFamily: 'var(--font-montserrat)' }}>
            Documents à télécharger
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {ressources.map((doc) => (
              <Card key={doc.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center shrink-0">
                      <FileText className="h-6 w-6 text-[var(--primary)]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-lg mb-1" style={{ fontFamily: 'var(--font-montserrat)' }}>
                        {doc.title}
                      </CardTitle>
                      <div className="flex items-center gap-3 text-sm text-[var(--muted-foreground)]">
                        <span className="px-2 py-0.5 bg-red-100 text-red-600 rounded text-xs font-medium">
                          {doc.type}
                        </span>
                        <span>{doc.size}</span>
                        <span>•</span>
                        <span>{doc.date}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-[var(--muted-foreground)] mb-4">
                    {doc.description}
                  </p>
                  <Button variant="outline" className="gap-2 w-full sm:w-auto">
                    <Download className="h-4 w-4" />
                    Télécharger
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-24 bg-[var(--muted)]">
        <div className="container-acdev">
          <h2 className="text-3xl font-bold mb-8" style={{ fontFamily: 'var(--font-montserrat)' }}>
            Services aux femmes
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-[var(--secondary)]/10 flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-[var(--secondary)]" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[var(--muted-foreground)] text-sm mb-3">
                    {service.description}
                  </p>
                  <p className="text-sm font-medium text-[var(--primary)]">
                    {service.contact}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Liens utiles */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-acdev">
          <h2 className="text-3xl font-bold mb-8" style={{ fontFamily: 'var(--font-montserrat)' }}>
            Liens utiles
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {liensUtiles.map((lien, idx) => (
              <a
                key={idx}
                href={lien.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg border border-[var(--border)] hover:border-[var(--primary)] hover:bg-[var(--primary)]/5 transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-[var(--muted)] flex items-center justify-center group-hover:bg-[var(--primary)]/10">
                  <ExternalLink className="h-5 w-5 text-[var(--muted-foreground)] group-hover:text-[var(--primary)]" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-[var(--foreground)] group-hover:text-[var(--primary)]">
                    {lien.title}
                  </h3>
                  <p className="text-sm text-[var(--muted-foreground)]">
                    {lien.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
