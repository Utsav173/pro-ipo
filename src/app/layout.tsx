import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const geistSans = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: "300",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pro-ipo.vercel.app"),
  title: {
    default: "Live IPO GMP Data - IPO GMP PRO",
    template: "%s | IPO GMP PRO",
  },
  description:
    "Get the latest live IPO Grey Market Premium (GMP) data, estimated listing prices, IPO analysis and detailed insights for upcoming and ongoing IPOs in India. Stay informed on market sentiment and potential gains with real-time GMP updates.",
  keywords: [
    "IPO",
    "GMP",
    "Grey Market Premium",
    "Initial Public Offering",
    "IPO Listing Price",
    "IPO Analysis",
    "Live IPO GMP",
    "Upcoming IPOs India",
    "Real-Time GMP Data",
    "IPO Grey Market",
    "IPO Investment",
    "IPO Calendar",
    "IPO News",
    "IPO Tracker",
    "Expected Listing Gains",
    "Share Market News",
    "Indian Stock Market",
    "Stock Trading",
    "Investment Opportunities",
    "Stock Market Analysis",
  ],
  authors: [{ name: "IPO GMP Pro Team" }],
  creator: "IPO GMP Pro Team",
  publisher: "IPO GMP Pro Team",
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  alternates: {
    canonical: "https://pro-ipo.vercel.app",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    title: "Live IPO GMP Data - IPO GMP PRO",
    description:
      "Stay updated with real-time Grey Market Premium (GMP) data, IPO analysis, and essential details for informed trading & investing.",
    url: "https://pro-ipo.vercel.app",
    siteName: "IPO GMP PRO",
    images: [
      {
        url: "/icon-192x192.png",
        width: 1200,
        height: 630,
        alt: "IPO GMP PRO Dashboard",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Live IPO GMP Data - IPO GMP PRO",
    description:
      "Track real-time Grey Market Premium (GMP) and IPO data for all major listings in Indian share markets",
    images: ["/icon-192x192.png"],
    creator: "@proipo",
    site: "@proipo",
  },
  verification: {
    google: "4b4H3hr3KG4V1J6eRzWhNZDf84yIPAcR1x32o0EpF8U",
  },
  other: {
    "google-site-verification": "4b4H3hr3KG4V1J6eRzWhNZDf84yIPAcR1x32o0EpF8U",
  },
  icons: {
    icon: [
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    title: "Pro-IPO",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
