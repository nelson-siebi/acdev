import { PageHero } from "@/components/common/PageHero";
import {
  FileText,
  Download,
  ExternalLink,
  BookOpen,
  Video,
  Phone,
} from "lucide-react";

const ressources = [
  {
    id: 1,
    title: "Plan d'Action Triennal 2026-2028",
    type: "PDF",
    description:
      "Document stratégique complet détaillant les 4 programmes d'intervention d'ACDEV pour les trois prochaines années.",
    size: "2.4 MB",
    date: "Janvier 2026",
  },
  {
    id: 2,
    title: "Rapport d'activités 2024-2025",
    type: "PDF",
    description:
      "Bilan annuel de nos actions : chiffres clés, témoignages et perspectives.",
    size: "1.8 MB",
    date: "Décembre 2025",
  },
  {
    id: 3,
    title: "Guide de prévention des VBG",
    type: "PDF",
    description:
      "Document pédagogique pour identifier et prévenir les violences basées sur le genre.",
    size: "850 KB",
    date: "Mis à jour régulièrement",
  },
  {
    id: 4,
    title: "Lignes directrices médias",
    type: "PDF",
    description:
      "Recommandations pour une couverture médiatique éthique des cas de violence.",
    size: "420 KB",
    date: "Juin 2024",
  },
];

const liensUtiles = [
  {
    title: "Ministère de la Promotion de la Femme",
    url: "#",
    description: "Politiques et programmes gouvernementaux",
  },
  {
    title: "OIT Cameroun",
    url: "#",
    description: "Organisation Internationale du Travail",
  },
  {
    title: "IOM Cameroun",
    url: "#",
    description: "Organisation Internationale pour les Migrations",
  },
  {
    title: "CRTV",
    url: "#",
    description: "Cameroon Radio Television - Média partenaire",
  },
];

const services = [
  {
    icon: Phone,
    title: "Ligne d'écoute",
    description: "Support téléphonique pour les victimes de violences",
    contact: "À venir",
  },
  {
    icon: BookOpen,
    title: "Documentation juridique",
    description: "Accès aux textes sur les droits des femmes et enfants",
    contact: "Sur demande",
  },
  {
    icon: Video,
    title: "Formation en ligne",
    description: "Modules e-learning sur la prévention des VBG",
    contact: "En développement",
  },
];

export default function RessourcesPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHero
        badge="Documentation et accompagnement"
        title="Ressources"
        description="Documents, liens utiles et services destinés aux femmes, aux jeunes, aux professionnels et au grand public."
        image="/maria-lupan-HI9Gw0On60Q-unsplash.jpg"
        accentColor="#1E40AF"
      />

      {/* Documents */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-acdev">
          <h2
            className="text-3xl font-bold mb-8"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Documents à télécharger
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {ressources.map((doc) => (
              <div key={doc.id} className="border border-gray-200 bg-white p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1E40AF] flex items-center justify-center shrink-0 text-white">
                    <FileText className="h-6 w-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3
                      className="text-lg font-bold text-black"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {doc.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mt-2">
                      <span className="px-2 py-0.5 border border-gray-200 text-black text-xs font-medium">
                        {doc.type}
                      </span>
                      <span>{doc.size}</span>
                      <span>•</span>
                      <span>{doc.date}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mt-4">{doc.description}</p>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-black text-white"
                  aria-label={`Télécharger ${doc.title}`}
                >
                  <Download className="h-4 w-4" />
                  Télécharger
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-24 bg-white border-t border-gray-200">
        <div className="container-acdev">
          <h2
            className="text-3xl font-bold mb-8"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Services aux femmes
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <div key={idx} className="border border-gray-200 bg-white p-6">
                <div className="w-12 h-12 bg-black flex items-center justify-center mb-4 text-white">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-black">
                  {service.title}
                </h3>
                <p className="text-gray-700 text-sm mt-2">
                  {service.description}
                </p>
                <p className="text-sm font-semibold text-[#16A34A] mt-4">
                  {service.contact}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Liens utiles */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-acdev">
          <h2
            className="text-3xl font-bold mb-8"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Liens utiles
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {liensUtiles.map((lien, idx) => (
              <a
                key={idx}
                href={lien.url === "#" ? undefined : lien.url}
                target={lien.url === "#" ? undefined : "_blank"}
                rel={lien.url === "#" ? undefined : "noopener noreferrer"}
                aria-disabled={lien.url === "#"}
                className={`flex items-center gap-4 p-4 border border-gray-200 ${lien.url === "#" ? "opacity-60 cursor-not-allowed" : ""}`}
              >
                <div className="w-10 h-10 bg-gray-100 flex items-center justify-center">
                  <ExternalLink className="h-5 w-5 text-gray-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-black">{lien.title}</h3>
                  <p className="text-sm text-gray-700">{lien.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
