import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { mateeData } from "../data/mateeData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  const { brand, categories } = mateeData;
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "#111" }} className="text-white/70">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-2">
          <div className="mb-4">
            <span
              className="font-serif text-3xl tracking-widest text-white block"
            >
              MATEE
            </span>
            <span
              className="text-xs tracking-[0.35em] uppercase"
              style={{ color: brand.colors.accent }}
            >
              Creations
            </span>
          </div>
          <p className="text-sm leading-relaxed max-w-xs mt-4">
            {brand.footerDescription}
          </p>
          <div className="flex gap-4 mt-6">
            {[
              { href: brand.socials.instagram, icon: faInstagram },
              { href: brand.socials.facebook, icon: faFacebook },
              { href: brand.socials.whatsapp, icon: faWhatsapp },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 border border-white/20 flex items-center justify-center text-sm hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors"
              >
                <i className={s.icon} ><FontAwesomeIcon icon={s.icon}/></i>
              </a>
            ))}
          </div>
        </div>

        {/* Collections */}
        <div>
          <h4
            className="text-xs tracking-[0.3em] uppercase font-semibold mb-5"
            style={{ color: brand.colors.accent }}
          >
            Collections
          </h4>
          <ul className="space-y-3 text-sm">
            {categories.map((cat) => (
              <li key={cat.id}>
                <a
                  href="#collections"
                  className="hover:text-white transition-colors hover:underline"
                >
                  {cat.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4
            className="text-xs tracking-[0.3em] uppercase font-semibold mb-5"
            style={{ color: brand.colors.accent }}
          >
            Contact
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a href={`mailto:${brand.socials.email}`} className="hover:text-white transition-colors">
                {brand.socials.email}
              </a>
            </li>
            {brand.socials.phone.map((p) => (
              <li key={p}>
                <a href={`tel:${p}`} className="hover:text-white transition-colors">
                  {p}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 px-6 text-center text-xs text-white/30 tracking-widest uppercase">
        © {year} Matee Creations · All Rights Reserved · Slow Fashion · Sustainable Luxury
      </div>
    </footer>
  );
}
