import type { MetadataRoute } from "next";
import { tools } from "@/data/products";
import { productPath, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${site.url}/` },
    ...tools.map((product) => ({ url: `${site.url}${productPath(product)}` })),
  ];
}
