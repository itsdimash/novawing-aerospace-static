import HomePage from "@/components/HomePage";
import { homeMetadata } from "@/lib/metadata";

export const metadata = homeMetadata("zh");

export default function Home() {
  return <HomePage lang="zh" />;
}
