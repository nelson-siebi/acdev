type PageHeroProps = {
  title: string;
  description: string;
  badge?: string;
  image?: string;
  accentColor?: string;
};

export function PageHero({
  title,
  description,
  badge,
  image = "/kevin-bonilla-GE5T26wd3QM-unsplash.jpg",
  accentColor = "#DC2626",
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-black border-b border-gray-200">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-linear-to-r from-black/85 via-black/65 to-black/35" />
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative container-acdev py-24 lg:py-32">
        <div className="max-w-3xl">
          {badge ? (
            <span
              className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-white text-sm mb-5 border-l-4"
              style={{ borderLeftColor: accentColor }}
            >
              {badge}
            </span>
          ) : null}

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {title}
          </h1>

          <p className="text-lg lg:text-xl text-white/85 max-w-2xl">
            {description}
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-14 lg:h-20">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 78 C 280 70, 480 35, 720 55 C 960 75, 1160 80, 1440 58 V 100 H 0 Z"
            fill="white"
          />
          <path
            d="M0 72 C 280 64, 480 29, 720 49 C 960 69, 1160 74, 1440 52"
            stroke={accentColor}
            strokeWidth="3"
            fill="none"
          />
        </svg>
      </div>
    </section>
  );
}
