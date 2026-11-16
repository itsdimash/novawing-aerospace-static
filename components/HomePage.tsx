import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductsSection from "@/components/ProductsSection";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { tools } from "@/data/products";
import { HTML_LANG, ui, type Lang } from "@/lib/i18n";
import { localizeProduct } from "@/lib/localize";
import { brandOf, jsonLd, productPath, site } from "@/lib/site";

// All site copy lives in lib/i18n.ts (English and Chinese) and data/products*.ts.
// To change any of it, edit those files directly and redeploy -- there's no CMS or admin dashboard behind this site.
const brands = Array.from(new Set(tools.map(brandOf).filter((name): name is string => Boolean(name))));

export default function HomePage({ lang }: { lang: Lang }) {
  const t = ui[lang];
  const products = tools.map((product) => localizeProduct(product, lang));
  const base = lang === "zh" ? `${site.url}/zh` : site.url;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": `${site.url}/#organization`,
              name: site.name,
              ...(site.legalName ? { legalName: site.legalName } : {}),
              url: site.url,
              email: site.email,
              description: t.seo.description,
              brand: brands.map((name) => ({ "@type": "Brand", name })),
            },
            {
              "@type": "WebSite",
              "@id": `${base}/#website`,
              name: site.name,
              url: lang === "zh" ? base : `${site.url}/`,
              inLanguage: HTML_LANG[lang],
              publisher: { "@id": `${site.url}/#organization` },
            },
            {
              "@type": "ItemList",
              "@id": `${base}/#catalog`,
              name: lang === "zh" ? `${site.name} 产品目录` : `${site.name} catalog`,
              itemListElement: products.map((product, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: product.name,
                url: `${site.url}${productPath(product, lang)}`,
              })),
            },
          ],
        }) }}
      />
      <Navbar lang={lang} />
      <main>
        <Hero lang={lang} headline={t.hero.headline} subhead={t.hero.subhead} />
        <ProductsSection
          id="tools"
          eyebrow={t.catalog.eyebrow}
          title={t.catalog.title}
          description={t.catalog.description}
          products={products}
          lang={lang}
          accent="steel"
          tone="bg"
        />
        <About lang={lang} />
        <Contact
          headline={t.contact.headline}
          description={t.contact.description}
          email={site.email}
          address={t.contact.address}
          lang={lang}
        />
      </main>
      <Footer lang={lang} />
    </>
  );
}
