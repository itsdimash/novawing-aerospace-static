import "../globals.css";
import { fontVars } from "../fonts";
import { rootMetadata } from "@/lib/metadata";

export const metadata = rootMetadata("zh");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" className={fontVars}>
      <body className="font-body bg-bg text-ink antialiased">{children}</body>
    </html>
  );
}
