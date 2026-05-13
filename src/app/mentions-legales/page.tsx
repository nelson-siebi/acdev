import { PageHero } from "@/components/common/PageHero";

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHero
        badge="Informations officielles"
        title="Mentions légales"
        description="Retrouvez les informations légales relatives à ACDEV et à l’utilisation de ce site web."
        image="/microsoft-copilot-pqMPnPo4_ZA-unsplash.jpg"
        accentColor="#1E40AF"
      />

      <section className="py-12">
        <div className="container-acdev">
          <div className="border border-gray-200 p-8">
            <p className="text-gray-700">
              ACDEV — Association au Cœur du Développement
            </p>
            <p className="text-gray-700 mt-2">
              Cameroun — Littoral, Est, Centre
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
