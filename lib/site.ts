import type { Product } from "@/data/products";

export const site = {
  name: "Aviorafly",
  url: "https://aviorafly.com",
  title: "Aviorafly | FPV Drones, RC Aircraft & Model Kits",
  description:
    "Explore FPV drones, drone batteries and parts, RC aircraft, model kits, and workshop tools at Aviorafly. Browse product specifications and contact our team.",
  email: "wongofficialryan@gmail.com",
};

export function productPath(product: Product): string {
  return `/products/${product.slug}`;
}

export function productDescription(product: Product): string {
  if (!product.description.startsWith("A piece of ")) {
    return product.description;
  }

  const details = product.specs
    .filter((spec) => !["Brand", "Equipment Brand", "Department", "Price (incl. VAT)"].includes(spec.label))
    .slice(0, 3)
    .map((spec) => `${spec.label}: ${spec.value}`);

  return [product.name, ...details].join(". ");
}

export function jsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
