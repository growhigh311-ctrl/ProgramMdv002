import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mahadev Gaming App | Download Mahadev Book App for Android & iOS",
  description:
    "Download the official Mahadev Gaming App for Android & iOS. Live cricket gaming, casino games, UPI deposits & instant withdrawals on mahadevreal.site.",
  alternates: { canonical: "https://mahadevreal.site/mahadev-gaming-app" },
  openGraph: {
    title: "Mahadev Gaming App | Download for Android & iOS",
    description: "Official Mahadev Gaming App — live cricket, casino games, UPI deposits & instant withdrawals.",
    url: "https://mahadevreal.site/mahadev-gaming-app",
    siteName: "Mahadev Book",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahadev Gaming App | Download Now",
    description: "Official Mahadev Gaming App for Android & iOS.",
  },
};

export default function MahadevBettingAppLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
