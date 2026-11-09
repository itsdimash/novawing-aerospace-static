import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { tools } from "@/data/products";
import { jsonLd, productDescription, productPath, site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return tools.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = tools.find((item) => item.slug === slug);
  if (!product) notFound();

  const description = productDescription(product);
  const summary = description.length > 160 ? `${description.slice(0, 157).trimEnd()}…` : description;
  const url = productPath(product);

  return {
    title: product.name,
    description: summary,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: site.name,
      title: product.name,
      description: summary,
      url,
      images: product.image ? [{ url: product.image, alt: product.name }] : [],
    },
    twitter: {
      card: product.image ? "summary_large_image" : "summary",
      title: product.name,
      description: summary,
      images: product.image ? [product.image] : [],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = tools.find((item) => item.slug === slug);
  if (!product) notFound();

  const description = productDescription(product);
  const url = `${site.url}${productPath(product)}`;
  const brand = product.specs.find((spec) => ["Brand", "Equipment Brand"].includes(spec.label));
  const enquiry = `mailto:${site.email}?subject=${encodeURIComponent(`Enquiry: ${product.name}`)}&body=${encodeURIComponent(`Hello Aviorafly,\n\nI would like to ask about ${product.name}.\n${url}\n\nPlease confirm availability, currency, and delivery options.\n`)}`;

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
            ...(product.image ? { image: `${site.url}${product.image}` } : {}),
            ...(brand ? { brand: { "@type": "Brand", name: brand.value } } : {}),
            additionalProperty: product.specs
              .filter((spec) => spec.label !== "Price (incl. VAT)")
              .map((spec) => ({ "@type": "PropertyValue", name: spec.label, value: spec.value })),
          },
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: site.name, item: `${site.url}/` },
              { "@type": "ListItem", position: 2, name: product.name, item: url },
            ],
          },
        ],
      }) }} />
      <Navbar />
      <main id="top" className="mx-auto max-w-6xl px-6 pb-20 pt-28 md:pb-28 md:pt-36">
        <nav aria-label="Breadcrumb" className="mb-10 flex flex-wrap gap-2 text-sm text-ink-muted">
          <Link href="/" className="text-ink hover:underline">Aviorafly</Link>
          <span aria-hidden="true">/</span>
          <Link href="/#tools" className="text-ink hover:underline">Catalog</Link>
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
            <p className="mt-6 text-base leading-relaxed text-ink">{description}</p>
            {typeof product.price === "number" && (
              <p className="mt-6 text-2xl text-ink">${product.price.toLocaleString("en-US")}</p>
            )}
            <a href={enquiry} className="mt-8 inline-flex min-h-11 items-center bg-blueprint px-6 py-3 text-sm font-semibold text-bg transition-colors hover:bg-blueprint-dim focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blueprint">
              Ask about this product
            </a>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">Contact our team to confirm availability and delivery options.</p>
          </div>
        </div>
        <section aria-labelledby="specifications" className="mt-16 md:mt-24">
          <h2 id="specifications" className="font-display text-2xl font-semibold text-ink">Product specifications</h2>
          <dl className="mt-6 grid gap-3 md:grid-cols-2">
            {product.specs.map((spec) => (
              <div key={spec.label} className="bg-surface p-5">
                <dt className="text-sm text-ink-muted">{spec.label}</dt>
                <dd className="mt-2 break-words text-base leading-relaxed text-ink">{spec.value}</dd>
              </div>
            ))}
          </dl>
        </section>
        <Link href="/#tools" className="mt-12 inline-block text-ink underline underline-offset-4">Browse the full catalog</Link>
      </main>
      <Footer />
    </>
  );
}
