import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyUs from "./components/WhyUs";
import Collections from "./components/Collections";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-sans antialiased">
      <Navbar />
      <Hero />
      <WhyUs />
      <Collections />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
