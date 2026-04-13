import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEarthAfrica, faGem, faRulerCombined } from "@fortawesome/free-solid-svg-icons";
import Product1 from '../assets/product1.webp';
import Product2 from '../assets/product2.webp';
import Product3 from '../assets/product3.webp';
import Product4 from '../assets/product4.webp';
import Product5 from '../assets/product5.webp';
import Product6 from '../assets/product6.webp';
import Product7 from '../assets/product7.webp';
import Product8 from '../assets/product8.webp';
import Product9 from '../assets/product9.webp';
import Product10 from '../assets/product10.webp';

export const mateeData = {
  brand: {
    name: "Matee Creations",
    heroHeading: "Timeless Craftsmanship, Made Specifically for You",
    heroDescription: "Specializing in handcrafted, one-of-a-kind outfits made to measure. We believe fashion should be as unique as the individual wearing it.",
    contactDescription: "Ready for your next custom piece? Reach out to start your consultation.",
    footerDescription: "A celebration of individuality and craftsmanship. Dedicated to slow fashion and sustainable luxury that lasts a lifetime.",
    colors: { primary: "#1B4332", accent: "#D4AF37", bg: "#F9F6F2" },
    socials: {
      instagram: "https://instagram.com/matee_creations1",
      whatsapp: "https://wa.me/2348132779389",
      facebook: "https://facebook.com",
      email: "tobilolam@gmail.com",
      phone: ["+234 813 277 9389", "+234 811 253 2938"]
    }
  },
  categories: [
    { id: "rtw", name: "Ready-to-Wear" },
    { id: "bespoke", name: "Bespoke & Custom" },
    { id: "bridal", name: "Bridal & Reception" },
    { id: "corporate", name: "Corporate Chic" }
  ],
  whyChooseUs: [
    { id: 1, icon: faRulerCombined, title: "Perfect Fit", description: "Crafted to your exact measurements for a flattering silhouette." },
    { id: 2, icon: faGem, title: "Luxury Craftsmanship", description: "Intricate hand-beading and high-end luxury fabrics." },
    { id: 3, icon: faEarthAfrica, title: "Global Shipping", description: "Luxury African fashion delivered to your doorstep worldwide." },
    { id: 4, icon: faWhatsapp, title: "Expert Consultation", description: "Direct access to our design team for styling and fabric choice." }
  ],
  products: [
    { id: 1, name: "Batishe Set", image: Product1, description: "Kampala two piece mixed with touch of red.", arrival: "top", category: "Ready-to-Wear", price: 10000, customizable: true, fabric: "Silk Chiffon", tags: ["Best Seller"] },
    { id: 2, name: "Simi Corperate Dress", image: Product2, description: "Two different piece of ankara made with love, given a corperate look.", arrival: "top", category: "Ready-to-Wear", price: 8000, customizable: false, fabric: "Crepe", tags: ["New Arrival"] },
    { id: 3, name: "Adunni Dress", image: Product3, description: "Kampala mixed with asooke kafton", arrival: "top", category: "Bridal", price: 10000, customizable: true, fabric: "French Lace", tags: ["Bespoke"] },
    { id: 4, name: "Madam Bimbo Dress", image: Product4, description: "", arrival: "regular", category: "Ready-to-Wear", price: 15000, customizable: false, fabric: "Kampala/Asooke", tags: ["Value"] },
    { id: 5, name: "Ginika Dress", image: Product5, description: "Kampala Bubu Top and short pants made with love.", arrival: "regular", category: "Corporate Chic", price: 13000, customizable: true, fabric: "Pure Silk", tags: ["Timeless"] },
    { id: 6, name: "Abolade Dress", image: Product6, description: "Kampala file mixed with asooke.", arrival: "regular", category: "Ready-to-Wear", price: 10000, customizable: true, fabric: "Adire", tags: ["Afrocentric"] },
    { id: 7, name: "Vivian two piece", image: Product7, description: "2 pieces (Kimono jacket and short pants) cutton material.", arrival: "regular", category: "Ready-to-Wear", price: 10000, customizable: false, fabric: "Mikado Silk", tags: ["Elegant"] },
    { id: 8, name: "Vanessa Dress", image: Product8, description: "Introducing our chic and versatile short mini gown- the perfect blend of style and comfort!", arrival: "regular", category: "Ready-to-Wear", price: 8000, customizable: false, fabric: "Satin", tags: ["Chic"] },
    { id: 9, name: "Precious Dress", image: Product9, description: "Bubu in crepe material", arrival: "regular", category: "Ready-to-Wear", price: 9000, customizable: false, fabric: "Crepe", tags: ["Print"] },
    { id: 10, name: "Maya Crop Shirt", image: Product10, description: "Stand out with this standart green ankara crop shirt.", arrival: "top", category: "Bridal", price: 5000, customizable: true, fabric: "Mikado", tags: ["Premium"] },
  ],
  testimonials: [
    { id: 1, name: "Adesua O.", location: "London, UK", text: "The fit of my reception dress was impeccable. Fast shipping to the UK!", stars: 5 },
    { id: 2, name: "Chinelo M.", location: "Lagos, Nigeria", text: "My go-to for corporate chic. Matee Creations never misses with tailoring.", stars: 5 },
    { id: 3, name: "Sarah J.", location: "Houston, USA", text: "The WhatsApp consultation made ordering from overseas so easy. 10/10 fabric.", stars: 5 },
    { id: 4, name: "Fatima B.", location: "Abuja, Nigeria", text: "The Chi set fits like a glove. Received my order same-day in Abuja!", stars: 5 }
  ]
};
