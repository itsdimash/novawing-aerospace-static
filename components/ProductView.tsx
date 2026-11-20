import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { tools } from "@/data/products";
import { anchor, homePath, ui, type Lang } from "@/lib/i18n";
import { localizeProduct, localizedSpec } from "@/lib/localize";
import { brandOf, jsonLd, productDescription, productPath, site } from "@/lib/site";

export default function ProductView({ slug, lang }: { slug: string; lang: Lang }) {
  const base = tools.find((item) => item.slug === slug);
  if (!base) notFound();

  const t = ui[lang].product;
  const product = localizeProduct(base, lang);
  const description = productDescription(product, lang);
  const url = `${site.url}${productPath(product, lang)}`;
  const homeUrl = `${site.url}${lang === "zh" ? "/zh" : "/"}`;
  // Brand and department are read from the English record; the Chinese spec list has the same order.
  const brandName = brandOf(base);
  const department = localizedSpec(base, product, "Department");
  const colon = lang === "zh" ? "：" : ": ";

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Product",
            "@id": `${url}#product`,
            name: product.name,
            description,
            url,
            ...(product.sku ? { sku: product.sku } : {}),
            ...(product.image ? { image: `${site.url}${product.image}` } : {}),
            ...(brandName ? { brand: { "@type": "Brand", name: brandName } } : {}),
            ...(department ? { category: department } : {}),
            additionalProperty: product.specs
              .map((spec) => ({ "@type": "PropertyValue", name: spec.label, value: spec.value })),
          },
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: site.name, item: homeUrl },
              { "@type": "ListItem", position: 2, name: product.name, item: url },
            ],
          },
        ],
      }) }} />
      <Navbar lang={lang} />
      <main id="top" className="mx-auto max-w-6xl px-6 pb-20 pt-28 md:pb-28 md:pt-36">
        <nav aria-label="Breadcrumb" className="mb-10 flex flex-wrap gap-2 text-sm text-ink-muted">
          <Link href={homePath(lang)} className="text-ink hover:underline">{t.home}</Link>
          <span aria-hidden="true">/</span>
          <Link href={anchor(lang, "tools")} className="text-ink hover:underline">{t.catalog}</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{product.name}</span>
        </nav>
        <div className={`grid items-start gap-10 ${product.image ? "md:grid-cols-2 md:gap-16" : "max-w-3xl"}`}>
          {product.image && (
            <div className="relative aspect-square bg-surface">
              <Image src={product.image} alt={product.name} fill priority sizes="(min-width: 768px) 50vw, 100vw" className="object-contain p-6" />
            </div>
          )}
          <div>
            <h1 className="break-words font-display text-3xl font-semibold leading-tight text-ink md:text-4xl">{product.name}</h1>
            {(brandName || product.sku) && (
              <p className="mt-3 text-sm text-ink-muted">
                {brandName && <>{t.brand}{colon}<span className="font-semibold text-ink">{brandName}</span></>}
                {brandName && product.sku && " · "}
                {product.sku && <>{t.article}{colon}<span className="font-semibold text-ink">{product.sku}</span></>}
              </p>
            )}
            <p className="mt-6 text-base leading-relaxed text-ink">{description}</p>
            <Link href={anchor(lang, "contact")} className="mt-8 inline-flex min-h-11 items-center bg-blueprint px-6 py-3 text-sm font-semibold text-bg transition-colors hover:bg-blueprint-dim focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blueprint">
              {t.ask}
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">{t.askNote}</p>
          </div>
        </div>
        <section aria-labelledby="specifications" className="mt-16 md:mt-24">
          <h2 id="specifications" className="font-display text-2xl font-semibold text-ink">{t.specs}</h2>
          <dl className="mt-6 grid gap-3 md:grid-cols-2">
            {product.specs.map((spec) => (
              <div key={spec.label} className="bg-surface p-5">
                <dt className="text-sm text-ink-muted">{spec.label}</dt>
                <dd className="mt-2 break-words text-base leading-relaxed text-ink">{spec.value}</dd>
              </div>
            ))}
          </dl>
        </section>
        <Link href={anchor(lang, "tools")} className="mt-12 inline-block text-ink underline underline-offset-4">{t.back}</Link>
      </main>
      <Footer lang={lang} />
    </>
  );
}
