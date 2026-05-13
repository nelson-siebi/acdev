import { PageHero } from "@/components/common/PageHero";

export default function ConfidentialitePage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHero
        badge="Protection des données"
        title="Politique de confidentialité"
        description="Découvrez comment ACDEV s’engage à respecter la confidentialité des informations et la protection des données des visiteurs."
        image="/kevin-bonilla-GE5T26wd3QM-unsplash.jpg"
        accentColor="#16A34A"
      />

      <section className="py-12">
        <div className="container-acdev">
          <div className="border border-gray-200 p-8">
            <h2 className="text-lg font-semibold text-black">Contact</h2>
            <p className="text-gray-700 mt-2">
              Email : inside_development@yahoo.com
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
