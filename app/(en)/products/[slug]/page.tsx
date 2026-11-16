import type { Metadata } from "next";
import ProductView from "@/components/ProductView";
import { productMetadata, productParams } from "@/lib/metadata";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return productParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return productMetadata(slug, "en");
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  return <ProductView slug={slug} lang="en" />;
}
