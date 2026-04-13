import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { mateeData } from "../data/mateeData";

export default function WhyUs() {
  const { brand, whyChooseUs } = mateeData;

  return (
    <section
      id="why-us"
      className="py-24"
      style={{ backgroundColor: brand.colors.primary }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10" style={{ backgroundColor: brand.colors.accent }} />
            <span
              className="text-xs tracking-[0.4em] uppercase font-semibold"
              style={{ color: brand.colors.accent }}
            >
              Our Promise
            </span>
            <div className="h-px w-10" style={{ backgroundColor: brand.colors.accent }} />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-white">
            Why Choose <span className="italic">Matee?</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUs.map((item, idx) => (
            <div
              key={item.id}
              className="relative p-8 border border-white/10 group hover:border-[#D4AF37]/60 transition-all duration-300 cursor-default"
            >
              {/* Index number */}
              <span
                className="absolute top-4 right-5 font-serif text-5xl font-bold opacity-10 group-hover:opacity-20 transition-opacity"
                style={{ color: brand.colors.accent }}
              >
                {String(idx + 1).padStart(2, "0")}
              </span>

              <div
                className="w-14 h-14 flex items-center justify-center mb-6 text-2xl transition-colors duration-300"
                style={{ backgroundColor: "rgba(212,175,55,0.15)", color: brand.colors.accent }}
              >
                <i className={item.icon} ><FontAwesomeIcon icon={item.icon}/></i>
              </div>

              <h3 className="text-white font-serif text-xl mb-3">{item.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>

              <div
                className="mt-6 h-0.5 w-0 group-hover:w-full transition-all duration-500"
                style={{ backgroundColor: brand.colors.accent }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
