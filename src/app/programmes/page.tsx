import { Users, Scale, Briefcase, Smartphone, ArrowRight } from "lucide-react"
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
    color: "#1E40AF"
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
    color: "#DC2626"
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
    color: "#16A34A"
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
    color: "#1E40AF"
  }
]

export default function ProgrammesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-white border-b border-gray-200 py-20 lg:py-28">
        <div className="container-acdev text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-black mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
            Nos programmes d'intervention
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Plan d'action triennal 2026-2028 : quatre axes stratégiques pour transformer 
            la vie des femmes et des enfants au Cameroun.
          </p>
        </div>
      </section>

      {/* Programmes */}
      <section className="py-16 lg:py-24">
        <div className="container-acdev">
          <div className="space-y-10">
            {programmes.map((programme, idx) => (
              <div key={programme.id} className="border border-gray-200 bg-white">
                <div className="p-8 lg:p-12 border-b border-gray-200">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 flex items-center justify-center text-white" style={{ backgroundColor: programme.color }}>
                      <programme.icon className="h-6 w-6" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-baseline gap-3">
                        <span className="text-sm font-semibold" style={{ color: programme.color }}>
                          Programme {programme.numero}
                        </span>
                        <span className="inline-block w-6 h-0.5" style={{ backgroundColor: programme.color }} />
                      </div>
                      <h2 className="text-2xl lg:text-3xl font-bold text-black mt-2" style={{ fontFamily: 'var(--font-heading)' }}>
                        {programme.title}
                      </h2>
                      <p className="text-gray-700 mt-3">{programme.objective}</p>
                    </div>
                  </div>
                </div>

                <div className="p-8 lg:p-12">
                  <div className="grid md:grid-cols-2 gap-10">
                    <div>
                      <p className="text-sm font-semibold text-black">Budget</p>
                      <p className="text-gray-700 mt-1">{programme.budget}</p>
                      <p className="text-sm font-semibold text-black mt-6">Période</p>
                      <p className="text-gray-700 mt-1">{programme.periode}</p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-black mb-3">Activités principales</h3>
                      <ul className="space-y-2">
                        {programme.activites.map((activite, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-700">
                            <span className="mt-2 w-2 h-0.5" style={{ backgroundColor: programme.color }} />
                            <span>{activite}</span>
                          </li>
                        ))}
                      </ul>

                      <h3 className="font-semibold text-black mb-3 mt-8">Indicateurs de suivi</h3>
                      <ul className="space-y-2">
                        {programme.indicateurs.map((indicateur, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-700">
                            <span className="mt-2 w-2 h-2" style={{ backgroundColor: programme.color }} />
                            <span>{indicateur}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="text-lg text-gray-700 mb-6">
              Soutenez nos actions pour transformer la vie des femmes et des enfants au Cameroun.
            </p>
            <Link href="/nous-soutenir" className="inline-flex items-center gap-2 px-8 py-4 bg-[#DC2626] text-white">
              Soutenir nos programmes
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
