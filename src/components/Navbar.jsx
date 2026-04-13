import { useState, useEffect } from "react";
import { mateeData } from "../data/mateeData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Home", "Collections", "Why Us", "Testimonials", "Contact"];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#F9F6F2]/95 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex flex-col leading-none">
          <span
            className="font-serif text-2xl tracking-widest"
            style={{ color: "#1B4332" }}
          >
            MATEE
          </span>
          <span className="text-[10px] tracking-[0.3em] uppercase" style={{ color: "#D4AF37" }}>
            Creations
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase().replace(" ", "-")}`}
                className="text-xs tracking-[0.2em] uppercase font-medium transition-colors duration-200 hover:text-[#D4AF37]"
                style={{ color: "#1B4332" }}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href={mateeData.brand.socials.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="hidden md:flex items-center gap-2 px-5 py-2.5 text-xs tracking-widest uppercase font-semibold text-white transition-opacity hover:opacity-80"
          style={{ backgroundColor: "#1B4332" }}
        >
          <i className="fa-brands fa-whatsapp text-sm" />
          Order Now
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden text-2xl"
          style={{ color: "#1B4332" }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FontAwesomeIcon icon={faXmark}/> : <FontAwesomeIcon icon={faBars}/>}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#F9F6F2] shadow-xl border-t border-[#D4AF37]/20 py-6 px-8 flex flex-col gap-5">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(" ", "-")}`}
              onClick={() => setMenuOpen(false)}
              className="text-sm tracking-widest uppercase font-medium"
              style={{ color: "#1B4332" }}
            >
              {link}
            </a>
          ))}
          <a
            href={mateeData.brand.socials.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="mt-2 flex items-center justify-center gap-2 py-3 text-xs tracking-widest uppercase font-semibold text-white"
            style={{ backgroundColor: "#1B4332" }}
          >
            <i className="fa-brands fa-whatsapp" /> Order on WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
}
