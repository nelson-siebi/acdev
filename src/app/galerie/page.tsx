import { PageHero } from "@/components/common/PageHero";
import Image from "next/image";

const galerie = [
  {
    image: "/kevin-bonilla-GE5T26wd3QM-unsplash.jpg",
    titre: "Sensibilisation communautaire",
    categorie: "Protection",
    description:
      "Actions de proximité pour prévenir les violences, informer les familles et renforcer la protection des personnes vulnérables.",
  },
  {
    image: "/maria-lupan-HI9Gw0On60Q-unsplash.jpg",
    titre: "Accompagnement des femmes",
    categorie: "Autonomisation",
    description:
      "Soutien, orientation et accompagnement des femmes vulnérables vers plus d’autonomie et de dignité.",
  },
  {
    image: "/microsoft-copilot-pqMPnPo4_ZA-unsplash.jpg",
    titre: "Formation des jeunes",
    categorie: "Coaching",
    description:
      "Ateliers de formation, coaching en développement de business et orientation professionnelle des jeunes.",
  },
  {
    image: "/kevin-bonilla-GE5T26wd3QM-unsplash.jpg",
    titre: "Protection des enfants",
    categorie: "Prévention",
    description:
      "Sensibilisation sur les violences sur mineures, les enlèvements et la traite des enfants.",
  },
  {
    image: "/maria-lupan-HI9Gw0On60Q-unsplash.jpg",
    titre: "Initiatives solidaires",
    categorie: "Terrain",
    description:
      "Mobilisation communautaire en faveur de la protection des femmes vulnérables et des familles.",
  },
  {
    image: "/microsoft-copilot-pqMPnPo4_ZA-unsplash.jpg",
    titre: "Plaidoyer et changement social",
    categorie: "Engagement",
    description:
      "Actions de plaidoyer pour améliorer les conditions de vie des femmes, des jeunes et des communautés.",
  },
];

export default function GaleriePage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHero
        badge="Images du terrain"
        title="Galerie"
        description="Découvrez quelques moments forts des actions, formations, sensibilisations et initiatives portées par ACDEV auprès des communautés."
        image="/maria-lupan-HI9Gw0On60Q-unsplash.jpg"
        accentColor="#DC2626"
      />

      <section className="py-16 lg:py-24">
        <div className="container-acdev">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <div>
              <span className="text-[#1E40AF] font-semibold text-sm uppercase tracking-wider">
                Nos actions en images
              </span>
              <h2
                className="text-3xl lg:text-4xl font-bold text-black mt-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Moments forts d’ACDEV
              </h2>
            </div>
            <p className="text-gray-700 max-w-xl">
              Cette galerie présente les activités de sensibilisation,
              d’accompagnement, de formation et de plaidoyer menées auprès des
              femmes, des jeunes et des enfants.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galerie.map((item, index) => (
              <article
                key={`${item.titre}-${index}`}
                className="group border border-gray-200 bg-white overflow-hidden"
              >
                <div className="relative aspect-4/3 overflow-hidden bg-gray-100">
                  <Image
                    src={item.image}
                    alt={item.titre}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#DC2626]">
                      {item.categorie}
                    </span>
                    <span className="inline-block w-8 h-0.5 bg-[#1E40AF]" />
                  </div>
                  <h3
                    className="text-xl font-bold text-black mb-3"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {item.titre}
                  </h3>
                  <p className="text-gray-700 text-sm">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-black text-white">
        <div className="container-acdev text-center">
          <h2
            className="text-3xl font-bold mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Vous avez des photos ACDEV ?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Les images actuelles peuvent être remplacées par les vraies photos
            des activités, ateliers, campagnes et événements de l’association.
          </p>
          <a
            href="mailto:inside_development@yahoo.com"
            className="inline-flex items-center px-8 py-4 bg-white text-black"
          >
            Envoyer des images
          </a>
        </div>
      </section>
    </div>
  );
}
