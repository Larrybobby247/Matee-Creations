import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { mateeData } from "../data/mateeData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  const { brand } = mateeData;

  return (
    <section id="contact" className="py-24" style={{ backgroundColor: brand.colors.bg }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10" style={{ backgroundColor: brand.colors.accent }} />
              <span
                className="text-xs tracking-[0.4em] uppercase font-semibold"
                style={{ color: brand.colors.accent }}
              >
                Get in Touch
              </span>
            </div>
            <h2
              className="font-serif text-4xl md:text-5xl mb-5"
              style={{ color: brand.colors.primary }}
            >
              Start Your <span className="italic">Journey</span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-10">
              {brand.contactDescription}
            </p>

            <div className="space-y-5">
              {/* WhatsApp */}
              {brand.socials.phone.map((ph) => (
                <a
                  key={ph}
                  href={`https://wa.me/${ph.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div
                    className="w-12 h-12 flex items-center justify-center text-white flex-shrink-0 transition-transform group-hover:scale-110"
                    style={{ backgroundColor: "#25D366" }}
                  >
                    <i className=" text-xl"><FontAwesomeIcon icon={faWhatsapp}/></i>
                  </div>
                  <div>
                    <p className="text-xs tracking-widest uppercase text-gray-400 mb-0.5">WhatsApp</p>
                    <p
                      className="font-medium text-sm group-hover:underline"
                      style={{ color: brand.colors.primary }}
                    >
                      {ph}
                    </p>
                  </div>
                </a>
              ))}

              {/* Email */}
              <a
                href={`mailto:${brand.socials.email}`}
                className="flex items-center gap-4 group"
              >
                <div
                  className="w-12 h-12 flex items-center justify-center text-white flex-shrink-0 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: brand.colors.primary }}
                >
                  <i className=" text-xl"><FontAwesomeIcon icon={faEnvelope}/></i>
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase text-gray-400 mb-0.5">Email</p>
                  <p
                    className="font-medium text-sm group-hover:underline"
                    style={{ color: brand.colors.primary }}
                  >
                    {brand.socials.email}
                  </p>
                </div>
              </a>
            </div>

            {/* Socials */}
            <div className="flex gap-4 mt-10">
              {[
                { href: brand.socials.instagram, icon: faInstagram, label: "Instagram" },
                { href: brand.socials.facebook, icon: faFacebook, label: "Facebook" },
                { href: brand.socials.whatsapp, icon: faWhatsapp, label: "WhatsApp" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 flex items-center justify-center border text-lg transition-all hover:text-white hover:border-transparent"
                  style={{ borderColor: brand.colors.primary, color: brand.colors.primary }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = brand.colors.primary;
                    e.currentTarget.style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = brand.colors.primary;
                  }}
                >
                  <i className={s.icon}><FontAwesomeIcon icon={s.icon}/></i>
                </a>
              ))}
            </div>
          </div>

          {/* Right: CTA card */}
          <div
            className="p-10 text-center relative overflow-hidden"
            style={{ backgroundColor: brand.colors.primary }}
          >
            <div
              className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-10"
              style={{ backgroundColor: brand.colors.accent }}
            />
            <i
              className="fa-solid fa-scissors text-4xl mb-6 block"
              style={{ color: brand.colors.accent }}
            />
            <h3 className="font-serif text-3xl text-white mb-4">
              Ready for your<br />
              <span className="italic" style={{ color: brand.colors.accent }}>
                custom piece?
              </span>
            </h3>
            <p className="text-white/60 text-sm mb-8 leading-relaxed">
              Every garment begins with a conversation. Tell us your vision, your measurements, and your event — we'll take care of the rest.
            </p>
            <a
              href={brand.socials.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm tracking-widest uppercase font-semibold transition-opacity hover:opacity-80 text-white"
              style={{ backgroundColor: brand.colors.accent }}
            >
              <i className="fa-brands fa-whatsapp" />
              Chat on WhatsApp
            </a>
            <p className="text-white/30 text-xs mt-5 tracking-widest uppercase">
              Free Consultation · No Commitment
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
