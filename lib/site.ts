import type { Product } from "@/data/products";
import { productHref, type Lang } from "@/lib/i18n";

export const site = {
  name: "Aviorafly",
  url: "https://aviorafly.com",
  title: "SKYFORGE RC Aircraft Kits, FPV Drones & Parts | Aviorafly",
  description:
    "Explore SKYFORGE RC aircraft kits, model airplanes, FPV drones, brushless motors, and aeromodelling materials at Aviorafly, plus batteries and workshop tools. Find products by name, brand, or article number (SKF-…) and contact our team.",
  keywords: ["SKYFORGE", "SKYFORGE RC aircraft kit", "SKYFORGE FPV drone", "RC airplane kits", "FPV drone parts", "aeromodelling materials", "Aviorafly"],
  // Registered company name; shown in the footer and structured data once set.
  legalName: undefined as string | undefined,
};

export function productPath(product: Product, lang: Lang = "en"): string {
  return productHref(product.slug, lang);
}

const priceNumberFormat = new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 });

// Preserve the catalog's historical dollar notation until the currency code is confirmed.
export function formatProductPrice(product: Product): string | undefined {
  return product.price === undefined ? undefined : `$${priceNumberFormat.format(product.price)}`;
}

export function productDescription(product: Product, _lang: Lang = "en"): string {
  return product.description;
}

export function brandOf(product: Product): string | undefined {
  return product.specs.find((spec) => ["Brand", "Equipment Brand"].includes(spec.label))?.value;
}

// Search-result description: name, brand and article number first, then specs.
// `product` may be localized; pass the brand read from the English product.
export function metaDescription(product: Product, lang: Lang = "en", brand?: string): string {
  const zh = lang === "zh";
  const ids = [
    brand ? `${zh ? "品牌：" : "Brand: "}${brand}` : "",
    product.sku ? `${zh ? "货号：" : "Article: "}${product.sku}` : "",
  ].filter(Boolean).join(zh ? "。" : ". ");
  const body = productDescription(product, lang);
  const rest = body.startsWith(product.name) ? body.slice(product.name.length).replace(/^[.。\s]+/, "") : body;
  return [product.name, ids, rest].filter(Boolean).join(zh ? "。" : ". ").replace(zh ? /。{2,}/g : /\.{2,}/g, zh ? "。" : ".");
}

export function jsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
