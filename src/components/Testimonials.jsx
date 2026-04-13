import { mateeData } from "../data/mateeData";

export default function Testimonials() {
  const { brand, testimonials } = mateeData;

  return (
    <section
      id="testimonials"
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: "#faf7f3" }}
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(${brand.colors.primary} 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10" style={{ backgroundColor: brand.colors.accent }} />
            <span
              className="text-xs tracking-[0.4em] uppercase font-semibold"
              style={{ color: brand.colors.accent }}
            >
              Client Love
            </span>
            <div className="h-px w-10" style={{ backgroundColor: brand.colors.accent }} />
          </div>
          <h2
            className="font-serif text-4xl md:text-5xl"
            style={{ color: brand.colors.primary }}
          >
            What They <span className="italic">Say</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={t.id}
              className={`p-8 relative group hover:shadow-lg transition-shadow duration-300 ${
                idx % 2 === 0 ? "bg-white" : ""
              }`}
              style={
                idx % 2 !== 0
                  ? { backgroundColor: brand.colors.primary }
                  : { border: `1px solid #ede8e0` }
              }
            >
              {/* Quote icon */}
              <i
                className="fa-solid fa-quote-left text-3xl mb-5 block"
                style={{ color: idx % 2 === 0 ? brand.colors.accent : "rgba(212,175,55,0.4)" }}
              />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <i
                    key={i}
                    className="fa-solid fa-star text-xs"
                    style={{ color: brand.colors.accent }}
                  />
                ))}
              </div>

              <p
                className={`text-base leading-relaxed mb-6 font-serif italic ${
                  idx % 2 !== 0 ? "text-white/90" : "text-gray-700"
                }`}
              >
                "{t.text}"
              </p>

              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                  style={{
                    backgroundColor:
                      idx % 2 === 0 ? brand.colors.primary : "rgba(255,255,255,0.15)",
                  }}
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p
                    className={`font-semibold text-sm ${
                      idx % 2 !== 0 ? "text-white" : ""
                    }`}
                    style={idx % 2 === 0 ? { color: brand.colors.primary } : {}}
                  >
                    {t.name}
                  </p>
                  <p
                    className={`text-xs tracking-widest ${
                      idx % 2 !== 0 ? "text-white/50" : "text-gray-400"
                    }`}
                  >
                    {t.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
