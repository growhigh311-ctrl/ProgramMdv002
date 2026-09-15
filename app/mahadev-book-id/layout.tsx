import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mahadev Book ID | Get Official Mahadev Book ID Instantly",
  description:
    "Get your official Mahadev Book ID instantly via WhatsApp. Secure cricket gaming, casino games, UPI deposits & 24/7 support at mahadevreal.site.",
  alternates: { canonical: "https://mahadevreal.site/mahadev-book-id" },
  openGraph: {
    title: "Mahadev Book ID | Get Your Official Gaming Account",
    description: "Get your official Mahadev Book ID instantly — secure gaming, UPI deposits & 24/7 support.",
    url: "https://mahadevreal.site/mahadev-book-id",
    siteName: "Mahadev Book",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahadev Book ID | Get Your Official Gaming Account",
    description: "Get your Mahadev Book ID instantly at mahadevreal.site.",
  },
};

export default function MahadevBookIdLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
