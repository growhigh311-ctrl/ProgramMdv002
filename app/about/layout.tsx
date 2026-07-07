import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Mahadev Book | India's Trusted Betting Platform Since 2018",
  description:
    "Learn about Mahadev Book — India's trusted online betting platform since 2018. Secure UPI betting, 24/7 support & instant Mahadev Book ID creation.",
  alternates: { canonical: "https://mahadevreal.site/about" },
  openGraph: {
    title: "About Mahadev Book | Trusted Betting Platform Since 2018",
    description:
      "Mahadev Book — India's trusted online betting platform since 2018. Secure UPI betting, 1.2M+ verified users & 24/7 support.",
    url: "https://mahadevreal.site/about",
    siteName: "Mahadev Book",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Mahadev Book | Trusted Betting Platform Since 2018",
    description: "India's trusted online betting platform since 2018.",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
