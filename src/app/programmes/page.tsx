import { Users, Scale, Briefcase, Smartphone, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const programmes = [
  {
    id: 1,
    numero: "I",
    icon: Users,
    title: "Renforcement institutionnel",
    objective: "Renforcer le cadre institutionnel et améliorer les connaissances de l'équipe",
    budget: "500 000 FCFA/an",
    periode: "2026-2028",
    activites: [
      "Formation en genre et droits humains des femmes",
      "Formation traite et trafic",
      "NTIC et gestion de projets",
      "Gestion et suivi des projets"
    ],
    indicateurs: [
      "80% des membres formés en genre et DHF",
      "80% des membres formés aux techniques de gestion"
    ],
    color: "from-blue-500 to-blue-600",
    lightColor: "bg-blue-50",
    textColor: "text-blue-600"
  },
  {
    id: 2,
    numero: "II",
    icon: Scale,
    title: "Droits de l'Homme, femmes & enfants",
    objective: "Favoriser l'accessibilité à l'information et protéger les couches vulnérables",
    budget: "1 000 000+ FCFA/an",
    periode: "2026-2028",
    activites: [
      "Éducation aux droits de la femme et de l'enfant",
      "Sensibilisation violences sexuelles et VBG",
      "Pique-nique éducatif santé reproductive",
      "Hygiène menstruelle"
    ],
    indicateurs: [
      "2000+ jeunes sensibilisés/an",
      "60% de jeunes filles édifiées sur leurs droits"
    ],
    color: "from-orange-500 to-orange-600",
    lightColor: "bg-orange-50",
    textColor: "text-orange-600"
  },
  {
    id: 3,
    numero: "III",
    icon: Briefcase,
    title: "Autonomisation économique",
    objective: "Améliorer les conditions financières des femmes et jeunes filles démunies",
    budget: "3 500 000 FCFA/an",
    periode: "2026-2028",
    activites: [
      "Appui technique aux AGR",
      "Appui financier aux jeunes filles mères",
      "Insertion socioéconomique",
      "Lutte contre la pauvreté"
    ],
    indicateurs: [
      "50% de jeunes filles mères bénéficiaires",
      "Accroissement de l'indépendance financière"
    ],
    color: "from-green-500 to-green-600",
    lightColor: "bg-green-50",
    textColor: "text-green-600"
  },
  {
    id: 6,
    numero: "VI",
    icon: Smartphone,
    title: "Digital & Cohésion sociale",
    objective: "Renforcer la connaissance des jeunes sur les nouveaux médias sociaux",
    budget: "Variable",
    periode: "2026-2028",
    activites: [
      "Sensibilisation usage médias sociaux",
      "Communication pour la paix",
      "Ateliers formation jeunes",
      "Accompagnement digital"
    ],
    indicateurs: [
      "Jeunes sensibilisés aux risques",
      "Promotion de la communication interculturelle"
    ],
    color: "from-purple-500 to-purple-600",
    lightColor: "bg-purple-50",
    textColor: "text-purple-600"
  }
]

export default function ProgrammesPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] py-20 lg:py-28">
        <div className="container-acdev text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-montserrat)' }}>
            Nos programmes d'intervention
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Plan d'action triennal 2026-2028 : quatre axes stratégiques pour transformer 
            la vie des femmes et des enfants au Cameroun.
          </p>
        </div>
      </section>

      {/* Programmes */}
      <section className="py-16 lg:py-24">
        <div className="container-acdev">
          <div className="space-y-12">
            {programmes.map((programme, idx) => (
              <Card key={programme.id} className={`overflow-hidden ${idx % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                <div className="grid lg:grid-cols-2">
                  {/* Image/Color side */}
                  <div className={`bg-gradient-to-br ${programme.color} p-8 lg:p-12 flex flex-col justify-center text-white`}>
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 mb-6">
                      <programme.icon className="h-8 w-8" />
                    </div>
                    <div className="text-6xl font-bold opacity-20 mb-2">{programme.numero}</div>
                    <h2 className="text-2xl lg:text-3xl font-bold mb-4" style={{ fontFamily: 'var(--font-montserrat)' }}>
                      {programme.title}
                    </h2>
                    <p className="text-white/90 text-lg">{programme.objective}</p>
                  </div>

                  {/* Content side */}
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center gap-4 mb-6">
                      <span className={`px-4 py-2 rounded-full ${programme.lightColor} ${programme.textColor} font-semibold text-sm`}>
                        Budget : {programme.budget}
                      </span>
                      <span className="px-4 py-2 rounded-full bg-gray-100 text-gray-600 font-medium text-sm">
                        {programme.periode}
                      </span>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h3 className="font-semibold text-[var(--foreground)] mb-3">Activités principales</h3>
                        <ul className="space-y-2">
                          {programme.activites.map((activite, i) => (
                            <li key={i} className="flex items-start gap-3 text-[var(--muted-foreground)]">
                              <ArrowRight className={`h-5 w-5 ${programme.textColor} mt-0.5 shrink-0`} />
                              <span>{activite}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-semibold text-[var(--foreground)] mb-3">Indicateurs de suivi</h3>
                        <ul className="space-y-2">
                          {programme.indicateurs.map((indicateur, i) => (
                            <li key={i} className="flex items-start gap-3 text-[var(--muted-foreground)]">
                              <div className={`w-2 h-2 rounded-full ${programme.textColor.replace('text-', 'bg-')} mt-2 shrink-0`} />
                              <span>{indicateur}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="text-lg text-[var(--muted-foreground)] mb-6">
              Soutenez nos actions pour transformer la vie des femmes et des enfants au Cameroun.
            </p>
            <Link href="/nous-soutenir">
              <Button size="lg" className="gap-2">
                Soutenir nos programmes
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
