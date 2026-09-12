import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductsSection from "@/components/ProductsSection";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { tools } from "@/data/products";

// All site copy lives here in code. To change any of it, edit this file
// directly and redeploy -- there's no CMS or admin dashboard behind this site.
const content = {
  heroHeadline: "Everything behind the build.",
  heroSubhead:
    "Aviorafly stocks model kits, airframes, FPV drone parts, and workshop tools for builders who read spec sheets for fun — from SKYFORGE prefab kits to the tools that finish them.",
  toolsTitle: "The full catalog.",
  toolsDescription:
    "Model kits, airframes, FPV drone parts, and the tools and materials that go into building and finishing every one of them.",
  contactHeadline: "Talk to the team.",
  contactDescription:
    "Questions about a build, stock levels, or a bulk order for a launch day or classroom — reach out and someone will get back to you directly.",
  email: "wongofficialryan@gmail.com",
  address: "RM 2902, 29/F, HO KING COMMERCIAL CENTRE, 2-16 FA YUEN STREET, MONGKOK, KOWLOON HK",
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero headline={content.heroHeadline} subhead={content.heroSubhead} />
        <ProductsSection
          id="tools"
          eyebrow="Full catalog"
          title={content.toolsTitle}
          description={content.toolsDescription}
          products={tools}
          accent="steel"
          tone="bg"
        />
        <About />
        <Contact
          headline={content.contactHeadline}
          description={content.contactDescription}
          email={content.email}
          address={content.address}
        />
      </main>
      <Footer />
    </>
  );
}
