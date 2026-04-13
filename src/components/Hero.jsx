import { mateeData } from "../data/mateeData";

export default function Hero() {
  const { brand } = mateeData;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: brand.colors.bg }}
    >
      {/* Decorative background elements */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-5"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, ${brand.colors.primary} 0, ${brand.colors.primary} 1px, transparent 0, transparent 50%)`,
          backgroundSize: "20px 20px",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-10 blur-3xl"
        style={{ backgroundColor: brand.colors.accent }}
      />

      <div className="max-w-7xl mx-auto px-6 w-full pt-28 pb-16 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12" style={{ backgroundColor: brand.colors.accent }} />
            <span
              className="text-xs tracking-[0.4em] uppercase font-semibold"
              style={{ color: brand.colors.accent }}
            >
              Handcrafted Luxury
            </span>
          </div>

          <h1
            className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight mb-6"
            style={{ color: brand.colors.primary }}
          >
            {brand.heroHeading.split(",").map((part, i) => (
              <span key={i} className={i === 1 ? "italic" : ""}>
                {i > 0 ? "," : ""}
                {part}
              </span>
            ))}
          </h1>

          <p className="text-base md:text-lg leading-relaxed mb-10 max-w-md text-gray-600">
            {brand.heroDescription}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#collections"
              className="px-8 py-4 text-sm tracking-widest uppercase font-semibold text-white transition-transform hover:scale-105 shadow-lg"
              style={{ backgroundColor: brand.colors.primary }}
            >
              Explore Collections
            </a>
            <a
              href={brand.socials.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 text-sm tracking-widest uppercase font-semibold border-2 transition-all hover:text-white flex items-center gap-2"
              style={{
                borderColor: brand.colors.accent,
                color: brand.colors.accent,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = brand.colors.accent;
                e.currentTarget.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = brand.colors.accent;
              }}
            >
              <i className="fa-brands fa-whatsapp" />
              Consult Us
            </a>
          </div>

          {/* Stats */}
          <div className="mt-14 flex gap-10 border-t pt-8" style={{ borderColor: "#e5e0d8" }}>
            {[
              { value: "500+", label: "Pieces Crafted" },
              { value: "12+", label: "Countries Served" },
              { value: "100%", label: "Made to Measure" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="text-3xl font-serif font-bold"
                  style={{ color: brand.colors.primary }}
                >
                  {stat.value}
                </div>
                <div className="text-xs tracking-widest uppercase text-gray-500 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Visual placeholder / editorial layout */}
        <div className="relative hidden md:flex items-center justify-center">
          <div
            className="w-80 h-[480px] rounded-sm shadow-2xl flex items-center justify-center relative overflow-hidden"
            style={{ backgroundColor: brand.colors.primary }}
          >
            <div className="text-center px-8">
              <i
                className="fa-solid fa-scissors text-7xl mb-6 opacity-30"
                style={{ color: brand.colors.accent }}
              />
              <p
                className="font-serif italic text-2xl leading-relaxed opacity-60"
                style={{ color: brand.colors.accent }}
              >
                "Fashion fades, style is eternal."
              </p>
              <p className="text-white/40 text-xs mt-4 tracking-widest uppercase">
                Add your product images
              </p>
            </div>
            {/* Decorative corners */}
            <div
              className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2"
              style={{ borderColor: brand.colors.accent }}
            />
            <div
              className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2"
              style={{ borderColor: brand.colors.accent }}
            />
          </div>
          {/* Floating badge */}
          <div
            className="absolute -bottom-4 -left-4 px-6 py-4 shadow-xl"
            style={{ backgroundColor: brand.colors.accent }}
          >
            <p className="text-white text-xs tracking-widest uppercase font-semibold">
              ✦ Bespoke & Made to Order
            </p>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="text-xs tracking-widest uppercase text-gray-400">Scroll</div>
        <i className="fa-solid fa-chevron-down text-gray-400 text-xs" />
      </div>
    </section>
  );
}
