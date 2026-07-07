import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mahadev Betting App | Download Mahadev Book App for Android & iOS",
  description:
    "Download the official Mahadev Betting App for Android & iOS. Live cricket betting, casino games, UPI deposits & instant withdrawals on mahadevreal.site.",
  alternates: { canonical: "https://mahadevreal.site/mahadev-betting-app" },
  openGraph: {
    title: "Mahadev Betting App | Download for Android & iOS",
    description: "Official Mahadev Betting App — live cricket, casino games, UPI deposits & instant withdrawals.",
    url: "https://mahadevreal.site/mahadev-betting-app",
    siteName: "Mahadev Book",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahadev Betting App | Download Now",
    description: "Official Mahadev Betting App for Android & iOS.",
  },
};

export default function MahadevBettingAppLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
