import type { Metadata, Viewport } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";

const BASE_URL = "https://mahadevreal.site";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  applicationName: "Mahadev Book",
  title: {
    default: "Mahadev Book | Mahadev Book ID | India's Trusted Betting Platform",
    template: "%s | Mahadev Book",
  },
  description:
    "Join Mahadev Book for secure betting on cricket, casino & more. Fast login, UPI deposits & 24/7 support. Get your Mahadev Book ID instantly at mahadevreal.site.",
  keywords: [
    "Mahadev Book",
    "Mahadev Book ID",
    "Mahadev Book Login",
    "Mahadev Book Register",
    "Buy Mahadev Book ID",
    "Mahadev Betting App",
    "Mahadev Cricket ID",
    "Mahadev Online",
    "Mahadev Book Official",
  ],
  authors: [{ name: "Mahadev Book", url: BASE_URL }],
  creator: "Mahadev Book",
  publisher: "Mahadev Book",
  alternates: { canonical: BASE_URL },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "y6dTdhcQjnE1OhAO05-wDoZFwJwj_PCo0c-hDNYjve8",
  },
  openGraph: {
    title: "Mahadev Book | India's Most Trusted Online Betting Platform",
    description:
      "Join Mahadev Book for secure betting on cricket, casino & more. Fast login, UPI deposits & 24/7 support.",
    url: BASE_URL,
    siteName: "Mahadev Book",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Mahadev Book — India's Trusted Betting Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahadev Book | India's Most Trusted Online Betting Platform",
    description: "Join Mahadev Book for secure betting. Fast UPI deposits & 24/7 support.",
    creator: "@mahadevbook",
    site: "@mahadevbook",
  },
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
    apple: [{ url: "/favicon.ico", sizes: "180x180", type: "image/x-icon" }],
    shortcut: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#050505" },
    { media: "(prefers-color-scheme: light)", color: "#050505" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Mahadev Book",
    url: BASE_URL,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      availableLanguage: ["English", "Hindi"],
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Mahadev Book",
    url: BASE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: `${BASE_URL}/?s={search_term_string}` },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html
      lang="en-IN"
      className={`${outfit.variable} ${playfair.variable} h-full antialiased dark`}
      style={{ colorScheme: "dark" }}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#050505] text-zinc-100 font-sans selection:bg-violet-500/20 selection:text-violet-300">
        <Navbar />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
