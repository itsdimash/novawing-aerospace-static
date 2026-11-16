import type { MetadataRoute } from "next";
import { tools } from "@/data/products";
import { productPath, site } from "@/lib/site";

// Every page exists in English and Chinese; each entry lists both so search engines pair them.
function pair(en: string, zh: string): MetadataRoute.Sitemap {
  const alternates = { languages: { en, "zh-CN": zh } };
  const lastModified = new Date();
  return [
    { url: en, lastModified, alternates },
    { url: zh, lastModified, alternates },
  ];
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...pair(`${site.url}/`, `${site.url}/zh`),
    ...tools.flatMap((product) =>
      pair(`${site.url}${productPath(product, "en")}`, `${site.url}${productPath(product, "zh")}`),
    ),
  ];
}
