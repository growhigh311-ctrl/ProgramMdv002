import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Mahadev Book — Common Questions Answered",
  description:
    "Get answers to frequently asked questions about Mahadev Book ID, login, deposits, withdrawals, and betting on mahadevreal.site.",
  alternates: { canonical: "https://mahadevreal.site/faq" },
  openGraph: {
    title: "FAQ | Mahadev Book — Common Questions Answered",
    description: "Frequently asked questions about Mahadev Book ID, login, deposits, and betting.",
    url: "https://mahadevreal.site/faq",
    siteName: "Mahadev Book",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ | Mahadev Book",
    description: "Common questions about Mahadev Book ID, login, and betting.",
  },
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
