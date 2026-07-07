import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Mahadev Book | 24/7 WhatsApp Support",
  description:
    "Contact Mahadev Book 24/7 via WhatsApp for instant Mahadev Book ID creation, deposits, withdrawals & support at mahadevreal.site.",
  alternates: { canonical: "https://mahadevreal.site/contact" },
  openGraph: {
    title: "Contact Mahadev Book | 24/7 WhatsApp Support",
    description: "Contact Mahadev Book 24/7 via WhatsApp for instant ID creation and support.",
    url: "https://mahadevreal.site/contact",
    siteName: "Mahadev Book",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Mahadev Book | 24/7 Support",
    description: "24/7 WhatsApp support at Mahadev Book.",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
