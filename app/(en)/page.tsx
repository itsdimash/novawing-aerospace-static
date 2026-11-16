import HomePage from "@/components/HomePage";
import { homeMetadata } from "@/lib/metadata";

export const metadata = homeMetadata("en");

export default function Home() {
  return <HomePage lang="en" />;
}
