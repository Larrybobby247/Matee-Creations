import { useState } from "react";
import { mateeData } from "../data/mateeData";

const formatPrice = (price) =>
  price == null
    ? "Price on Request"
    : `₦${price.toLocaleString()}`;

function ProductCard({ product }) {
  const { brand } = mateeData;

  return (
    <div className="group relative overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-400 flex flex-col">
      {/* Image area */}
      <div
        className="relative overflow-hidden h-72 flex items-center justify-center"
        style={{ backgroundColor: "#f0ebe3" }}
      >
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        ) : (
          <div className="flex flex-col items-center gap-3 opacity-30">
            <i className="fa-solid fa-shirt text-5xl" style={{ color: brand.colors.primary }} />
            <span className="text-xs tracking-widest uppercase text-gray-400">
              {product.fabric}
            </span>
          </div>
        )}

        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-[10px] tracking-widest uppercase font-bold text-white"
              style={{ backgroundColor: brand.colors.primary }}
            >
              {tag}
            </span>
          ))}
        </div>

        {product.customizable && (
          <div
            className="absolute top-3 right-3 px-2.5 py-1 text-[10px] tracking-widest uppercase font-bold"
            style={{ backgroundColor: brand.colors.accent, color: "white" }}
          >
            Customizable
          </div>
        )}

        {/* Hover overlay */}
        <div
          className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: "linear-gradient(to top, rgba(27,67,50,0.85) 0%, transparent 60%)" }}
        >
          <a
            href={mateeData.brand.socials.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="w-full py-3 text-center text-xs tracking-widest uppercase font-semibold text-white border border-white/50 hover:bg-white hover:text-[#1B4332] transition-colors flex items-center justify-center gap-2"
          >
            <i className="fa-brands fa-whatsapp" /> Order via WhatsApp
          </a>
        </div>
      </div>

      {/* Info */}
      <div className="p-5 flex flex-col flex-1">
        <span className="text-[10px] tracking-widest uppercase text-gray-400 mb-1">
          {product.category} · {product.fabric}
        </span>
        <h3
          className="font-serif text-lg mb-1 leading-snug"
          style={{ color: brand.colors.primary }}
        >
          {product.name}
        </h3>
        <p className="text-gray-500 text-sm mb-4 flex-1">{product.description}</p>
        <div className="flex items-center justify-between mt-auto">
          <span
            className="font-serif text-lg font-semibold"
            style={{ color: product.price ? brand.colors.primary : brand.colors.accent }}
          >
            {formatPrice(product.price)}
          </span>
          <a
            href={`mailto:${mateeData.brand.socials.email}?subject=Inquiry: ${product.name}`}
            className="text-xs tracking-widest uppercase text-gray-400 hover:text-[#D4AF37] transition-colors"
          >
            Enquire →
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Collections() {
  const { brand, categories, products } = mateeData;
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? products
      : products.filter((p) =>
          p.category.toLowerCase().includes(
            categories.find((c) => c.id === activeCategory)?.name.split(" ")[0].toLowerCase() || ""
          )
        );

  const topArrivals = products.filter((p) => p.arrival === "top");

  return (
    <section id="collections" className="py-24" style={{ backgroundColor: brand.colors.bg }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10" style={{ backgroundColor: brand.colors.accent }} />
            <span
              className="text-xs tracking-[0.4em] uppercase font-semibold"
              style={{ color: brand.colors.accent }}
            >
              Our Work
            </span>
            <div className="h-px w-10" style={{ backgroundColor: brand.colors.accent }} />
          </div>
          <h2
            className="font-serif text-4xl md:text-5xl"
            style={{ color: brand.colors.primary }}
          >
            The <span className="italic">Collections</span>
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[{ id: "all", name: "All Pieces" }, ...categories].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 text-xs tracking-widest uppercase font-semibold border transition-all duration-200 ${
                activeCategory === cat.id
                  ? "text-white border-transparent"
                  : "text-gray-500 border-gray-300 hover:border-[#1B4332] hover:text-[#1B4332]"
              }`}
              style={
                activeCategory === cat.id
                  ? { backgroundColor: brand.colors.primary }
                  : {}
              }
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Featured Banner */}
        {activeCategory === "all" && (
          <div
            className="mb-10 p-6 border-l-4 flex items-center gap-4"
            style={{
              borderColor: brand.colors.accent,
              backgroundColor: "rgba(212,175,55,0.06)",
            }}
          >
            <i
              className="fa-solid fa-star text-xl"
              style={{ color: brand.colors.accent }}
            />
            <div>
              <p
                className="text-xs tracking-widest uppercase font-bold mb-0.5"
                style={{ color: brand.colors.accent }}
              >
                Top Arrivals
              </p>
              <p className="text-sm text-gray-600">
                {topArrivals.map((p) => p.name).join(" · ")}
              </p>
            </div>
          </div>
        )}

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <p className="text-gray-500 mb-5 text-sm">
            Don't see what you're looking for? We do fully bespoke commissions.
          </p>
          <a
            href={brand.socials.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 text-sm tracking-widest uppercase font-semibold text-white transition-opacity hover:opacity-80"
            style={{ backgroundColor: brand.colors.primary }}
          >
            <i className="fa-brands fa-whatsapp text-base" />
            Start a Custom Order
          </a>
        </div>
      </div>
    </section>
  );
}
