import { ArrowRight } from "lucide-react";
import Link from "next/link";

const actionsSoutien = [
  {
    titre: "Développement des AGR",
    description:
      "Appuyer les femmes et les jeunes filles dans le développement d’activités génératrices de revenus pour renforcer leur autonomie.",
  },
  {
    titre: "Soutien aux jeunes filles mères célibataires",
    description:
      "Accompagner les jeunes filles mères célibataires à travers l’écoute, l’orientation, la formation et l’insertion socioéconomique.",
  },
  {
    titre: "Formation et coaching des jeunes",
    description:
      "Organiser des ateliers de formation, de coaching en développement de business et d’orientation professionnelle.",
  },
  {
    titre: "Protection des enfants",
    description:
      "Lancer des sensibilisations sur les violences sur mineures, les enlèvements et la traite des enfants.",
  },
  {
    titre: "Protection des femmes vulnérables",
    description:
      "Soutenir les initiatives en faveur de la protection, de l’accompagnement et de la dignité des femmes vulnérables.",
  },
  {
    titre: "Plaidoyer et changement social",
    description:
      "Mener des actions de plaidoyer pour améliorer les conditions de vie des femmes, des jeunes et des communautés vulnérables.",
  },
];

const formesSoutien = [
  "Faire un don selon vos moyens",
  "Offrir du matériel ou des ressources utiles aux activités",
  "Soutenir une formation ou un atelier",
  "Mettre votre expertise au service des jeunes et des femmes",
  "Devenir membre ou partenaire d’ACDEV",
];

export default function NousSoutenirPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-white border-b border-gray-200 py-16 lg:py-20">
        <div className="container-acdev">
          <h1
            className="text-4xl lg:text-5xl font-bold text-black mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Soutenez nos actions
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl">
            Votre contribution aide ACDEV à accompagner les femmes, les jeunes
            filles mères célibataires, les enfants et les communautés
            vulnérables au Cameroun.
          </p>
        </div>
      </section>

      {/* Actions à soutenir */}
      <section className="py-16 lg:py-24">
        <div className="container-acdev">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <div>
              <span className="text-[#DC2626] font-semibold text-sm uppercase tracking-wider">
                Domaines prioritaires
              </span>
              <h2
                className="text-3xl lg:text-4xl font-bold text-black mt-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Ce que votre soutien rend possible
              </h2>
            </div>
            <p className="text-gray-700 max-w-xl">
              Chaque soutien contribue directement au renforcement des actions
              de terrain, à la prévention des violences et à l’autonomisation
              des bénéficiaires.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
            {actionsSoutien.map((action, index) => (
              <div key={index} className="bg-white p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 flex items-center justify-center bg-[#DC2626] text-white font-bold text-sm">
                    {index + 1}
                  </span>
                  <span className="inline-block w-8 h-0.5 bg-[#1E40AF]" />
                </div>
                <h3
                  className="text-xl font-bold text-black mb-3"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {action.titre}
                </h3>
                <p className="text-gray-700">{action.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comment soutenir */}
      <section className="py-16 lg:py-20 bg-white border-y border-gray-200">
        <div className="container-acdev">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-[#16A34A] font-semibold text-sm uppercase tracking-wider">
                Participer
              </span>
              <h2
                className="text-3xl font-bold text-black mt-2 mb-4"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Comment nous soutenir ?
              </h2>
              <p className="text-gray-700">
                Vous pouvez contribuer selon vos possibilités. ACDEV vous
                orientera vers la forme de soutien la plus adaptée aux besoins
                actuels des programmes.
              </p>
            </div>

            <div className="border border-gray-200 bg-white p-8">
              <ul className="space-y-4">
                {formesSoutien.map((forme) => (
                  <li
                    key={forme}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <span className="mt-2 w-2 h-2 bg-[#16A34A] shrink-0" />
                    <span>{forme}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-4">
                  Pour connaître les modalités de contribution, contactez ACDEV
                  directement.
                </p>
                <a
                  href="mailto:inside_development@yahoo.com"
                  className="inline-flex items-center gap-2 px-6 py-4 bg-[#DC2626] text-white"
                >
                  Écrire à ACDEV
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Devenir membre */}
      <section className="py-16 bg-black text-white">
        <div className="container-acdev text-center">
          <h2
            className="text-3xl font-bold mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Rejoignez ACDEV
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Vous souhaitez vous engager durablement ? Devenez membre et prenez
            part aux actions de développement, de protection et de plaidoyer.
          </p>
          <Link
            href="/devenir-membre"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black"
          >
            Voir les options d’adhésion
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 border-t border-gray-200">
        <div className="container-acdev">
          <div className="max-w-2xl mx-auto text-center">
            <h2
              className="text-2xl font-bold text-black mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Contactez-nous
            </h2>
            <p className="text-gray-700 mb-8">
              Pour toute question sur les dons, le partenariat ou l’adhésion.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:inside_development@yahoo.com"
                className="block text-[#1E40AF] underline text-lg"
              >
                inside_development@yahoo.com
              </a>
              <p className="text-gray-700">Cameroun — Littoral, Est, Centre</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
