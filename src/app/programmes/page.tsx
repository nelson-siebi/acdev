import { PageHero } from "@/components/common/PageHero";
import { Users, Scale, Briefcase, Smartphone, ArrowRight } from "lucide-react";
import Link from "next/link";

const programmes = [
  {
    id: 1,
    numero: "I",
    icon: Users,
    title: "Renforcement institutionnel",
    objective:
      "Renforcer le cadre institutionnel et améliorer les connaissances de l’équipe",
    periode: "2026-2028",
    activites: [
      "Formation en genre et droits humains des femmes",
      "Formation sur la traite, le trafic et la protection des personnes vulnérables",
      "NTIC et gestion de projets",
      "Gestion, suivi et évaluation des projets",
    ],
    indicateurs: [
      "80% des membres formés en genre et DHF",
      "80% des membres formés aux techniques de gestion",
    ],
    color: "#1E40AF",
  },
  {
    id: 2,
    numero: "II",
    icon: Scale,
    title: "Droits de l'Homme, femmes & enfants",
    objective:
      "Favoriser l’accessibilité à l’information et protéger les femmes, les jeunes et les enfants vulnérables",
    periode: "2026-2028",
    activites: [
      "Lancement des sensibilisations sur les violences sur mineures",
      "Prévention des enlèvements et de la traite des enfants",
      "Soutien aux initiatives en faveur de la protection des femmes vulnérables",
      "Plaidoyer pour le changement et l’amélioration des conditions de vie des femmes et des jeunes",
    ],
    indicateurs: [
      "2000+ jeunes sensibilisés/an",
      "60% de jeunes filles édifiées sur leurs droits",
    ],
    color: "#DC2626",
  },
  {
    id: 3,
    numero: "III",
    icon: Briefcase,
    title: "Autonomisation économique",
    objective:
      "Améliorer les conditions de vie des femmes, jeunes filles mères célibataires et jeunes vulnérables",
    periode: "2026-2028",
    activites: [
      "Appui au développement des AGR",
      "Soutien aux jeunes filles mères célibataires",
      "Ateliers de formation et coaching des jeunes en développement de business",
      "Orientation professionnelle et insertion socioéconomique",
    ],
    indicateurs: [
      "50% de jeunes filles mères bénéficiaires",
      "Accroissement de l'indépendance financière",
    ],
    color: "#16A34A",
  },
  {
    id: 6,
    numero: "VI",
    icon: Smartphone,
    title: "Digital & Cohésion sociale",
    objective:
      "Renforcer les capacités des jeunes et promouvoir la cohésion sociale à travers le digital et l’accompagnement",
    periode: "2026-2028",
    activites: [
      "Ateliers de formation et coaching des jeunes",
      "Développement de business et orientation professionnelle",
      "Sensibilisation à l’usage responsable des médias sociaux",
      "Communication pour la paix et cohésion sociale",
    ],
    indicateurs: [
      "Jeunes sensibilisés aux risques",
      "Promotion de la communication interculturelle",
    ],
    color: "#1E40AF",
  },
];

export default function ProgrammesPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHero
        badge="Plan d’action 2026-2028"
        title="Nos programmes d’intervention"
        description="Quatre axes stratégiques pour transformer la vie des femmes, des jeunes filles mères célibataires, des enfants et des communautés vulnérables au Cameroun."
        image="/kevin-bonilla-GE5T26wd3QM-unsplash.jpg"
        accentColor="#DC2626"
      />

      {/* Programmes */}
      <section className="py-16 lg:py-24">
        <div className="container-acdev">
          <div className="space-y-10">
            {programmes.map((programme) => (
              <div
                key={programme.id}
                className="border border-gray-200 bg-white"
              >
                <div className="p-8 lg:p-12 border-b border-gray-200">
                  <div className="flex items-start gap-5">
                    <div
                      className="w-12 h-12 flex items-center justify-center text-white"
                      style={{ backgroundColor: programme.color }}
                    >
                      <programme.icon className="h-6 w-6" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-baseline gap-3">
                        <span
                          className="text-sm font-semibold"
                          style={{ color: programme.color }}
                        >
                          Programme {programme.numero}
                        </span>
                        <span
                          className="inline-block w-6 h-0.5"
                          style={{ backgroundColor: programme.color }}
                        />
                      </div>
                      <h2
                        className="text-2xl lg:text-3xl font-bold text-black mt-2"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {programme.title}
                      </h2>
                      <p className="text-gray-700 mt-3">
                        {programme.objective}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-8 lg:p-12">
                  <div className="grid md:grid-cols-2 gap-10">
                    <div>
                      <p className="text-sm font-semibold text-black">
                        Période
                      </p>
                      <p className="text-gray-700 mt-1">{programme.periode}</p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-black mb-3">
                        Activités principales
                      </h3>
                      <ul className="space-y-2">
                        {programme.activites.map((activite, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-gray-700"
                          >
                            <span
                              className="mt-2 w-2 h-0.5"
                              style={{ backgroundColor: programme.color }}
                            />
                            <span>{activite}</span>
                          </li>
                        ))}
                      </ul>

                      <h3 className="font-semibold text-black mb-3 mt-8">
                        Indicateurs de suivi
                      </h3>
                      <ul className="space-y-2">
                        {programme.indicateurs.map((indicateur, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-gray-700"
                          >
                            <span
                              className="mt-2 w-2 h-2"
                              style={{ backgroundColor: programme.color }}
                            />
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
              Soutenez nos actions pour transformer la vie des femmes et des
              enfants au Cameroun.
            </p>
            <Link
              href="/nous-soutenir"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#DC2626] text-white"
            >
              Soutenir nos programmes
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
