import type { Metadata } from "next";
import { tools } from "@/data/products";
import { OG_LOCALE, ui, type Lang } from "@/lib/i18n";
import { localizeProduct } from "@/lib/localize";
import { brandOf, metaDescription, productPath, site } from "@/lib/site";

const langUrl = (path: string, lang: Lang): string =>
  lang === "zh" ? `/zh${path === "/" ? "" : path}` : path;

/** Canonical plus hreflang alternates for a page that exists in both languages. */
export function alternatesFor(path: string, lang: Lang): NonNullable<Metadata["alternates"]> {
  return {
    canonical: langUrl(path, lang),
    languages: { en: langUrl(path, "en"), "zh-CN": langUrl(path, "zh"), "x-default": langUrl(path, "en") },
  };
}

export function rootMetadata(lang: Lang): Metadata {
  const t = ui[lang].seo;
  const url = `${site.url}${lang === "zh" ? "/zh" : ""}`;
  return {
    metadataBase: new URL(site.url),
    title: { default: t.title, template: `%s | ${site.name}` },
    description: t.description,
    keywords: t.keywords,
    openGraph: { type: "website", siteName: site.name, title: t.title, description: t.description, url, locale: OG_LOCALE[lang] },
    twitter: { card: "summary", title: t.title, description: t.description },
  };
}

export function homeMetadata(lang: Lang): Metadata {
  return { alternates: alternatesFor("/", lang) };
}

export function productParams(): { slug: string }[] {
  return tools.map(({ slug }) => ({ slug }));
}

export function productMetadata(slug: string, lang: Lang): Metadata {
  const base = tools.find((item) => item.slug === slug);
  if (!base) return {};
  const product = localizeProduct(base, lang);
  const description = metaDescription(product, lang, brandOf(base));
  const summary = description.length > 160 ? `${description.slice(0, 157).trimEnd()}…` : description;
  const title = product.sku ? `${product.name} — ${product.sku}` : product.name;
  const url = productPath(product, lang);
  return {
    title,
    description: summary,
    alternates: alternatesFor(`/products/${slug}`, lang),
    openGraph: {
      type: "website",
      siteName: site.name,
      title,
      description: summary,
      url,
      locale: OG_LOCALE[lang],
      images: product.image ? [{ url: product.image, alt: product.name }] : [],
    },
    twitter: {
      card: product.image ? "summary_large_image" : "summary",
      title,
      description: summary,
      images: product.image ? [product.image] : [],
    },
  };
}
