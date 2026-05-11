export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-16 border-b border-gray-200">
        <div className="container-acdev">
          <h1 className="text-4xl font-bold text-black" style={{ fontFamily: "var(--font-heading)" }}>
            Mentions légales
          </h1>
          <p className="text-gray-700 mt-4 max-w-3xl">
            Cette page est en cours de rédaction. Pour toute demande, contactez-nous.
          </p>
          <a className="inline-block mt-6 text-[#1E40AF] underline" href="mailto:inside_development@yahoo.com">
            inside_development@yahoo.com
          </a>
        </div>
      </section>

      <section className="py-12">
        <div className="container-acdev">
          <div className="border border-gray-200 p-8">
            <p className="text-gray-700">
              ACDEV — Association au Cœur du Développement
            </p>
            <p className="text-gray-700 mt-2">Cameroun — Littoral, Est, Centre</p>
          </div>
        </div>
      </section>
    </div>
  )
}
