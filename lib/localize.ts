import type { Product } from "@/data/products";
import { zh } from "@/data/products.zh";
import type { Lang } from "@/lib/i18n";

/** English product data is the source of truth; Chinese text overlays it by slug. */
export function localizeProduct(product: Product, lang: Lang): Product {
  if (lang !== "zh") return product;
  const t = zh[product.slug];
  return t ? { ...product, name: t.name, tagline: t.tagline, description: t.description, specs: t.specs } : product;
}

/** Value of the English-named spec, read from the localized spec list (same order). */
export function localizedSpec(en: Product, localized: Product, label: string): string | undefined {
  const i = en.specs.findIndex((spec) => spec.label === label);
  return i >= 0 ? localized.specs[i]?.value : undefined;
}
