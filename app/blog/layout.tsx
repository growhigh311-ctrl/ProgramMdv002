import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mahadev Book Blog | Cricket Betting Tips & Guides",
  description:
    "Read expert cricket betting tips, Mahadev Book guides, and sports strategies on the official Mahadev Book blog.",
  alternates: { canonical: "https://mahadevreal.site/blog" },
  openGraph: {
    title: "Mahadev Book Blog | Cricket Betting Tips & Guides",
    description: "Expert cricket betting tips and sports guides from Mahadev Book.",
    url: "https://mahadevreal.site/blog",
    siteName: "Mahadev Book",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahadev Book Blog | Cricket Betting Tips",
    description: "Expert cricket betting tips from Mahadev Book.",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
