import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

// JSON-LD structured data
const websiteStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  url: 'https://ipo-gmo-pro.pages.dev',
  name: 'IPO GMP Pro',
  description:
    'Get the latest live IPO Grey Market Premium (GMP) data, estimated listing prices, and detailed analysis for upcoming IPOs.',
  publisher: {
    '@type': 'Organization',
    name: 'IPO GMP Pro Team',
    url: 'https://ipo-gmo-pro.pages.dev',
    logo: {
      '@type': 'ImageObject',
      url: `https://ipo-gmo-pro.pages.dev/vite.svg`,
      width: '300',
      height: '300',
    },
  },
};

const listStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'WebPage',
        name: 'Live IPO GMP Data',
        description:
          'Live IPO GMP Data with Realtime analysis, estimated listing and historical data',
        url: 'https://ipo-gmo-pro.pages.dev',
      },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://ipo-gmo-pro.pages.dev'),
  title: {
    default: 'Live IPO GMP Data - IPO GMP PRO',
    template: '%s | IPO GMP PRO',
  },
  description:
    'Get the latest live IPO Grey Market Premium (GMP) data, estimated listing prices, IPO analysis and detailed insights for upcoming and ongoing IPOs in India. Stay informed on market sentiment and potential gains with real-time GMP updates.',
  keywords: [
    'IPO',
    'GMP',
    'Grey Market Premium',
    'Initial Public Offering',
    'IPO Listing Price',
    'IPO Analysis',
    'Live IPO GMP',
    'Upcoming IPOs India',
    'Real-Time GMP Data',
    'IPO Grey Market',
    'IPO Investment',
    'IPO Calendar',
    'IPO News',
    'IPO Tracker',
    'Expected Listing Gains',
    'Share Market News',
    'Indian Stock Market',
    'Stock Trading',
    'Investment Opportunities',
    'Stock Market Analysis',
  ],
  authors: [{ name: 'IPO GMP Pro Team' }],
  creator: 'IPO GMP Pro Team',
  publisher: 'IPO GMP Pro Team',
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  alternates: {
    canonical: 'https://ipo-gmo-pro.pages.dev',
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
    type: 'website',
    title: 'Live IPO GMP Data - IPO GMP PRO',
    description:
      'Stay updated with real-time Grey Market Premium (GMP) data, IPO analysis, and essential details for informed trading & investing.',
    url: 'https://ipo-gmo-pro.pages.dev',
    siteName: 'IPO GMP PRO',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'IPO GMP PRO Dashboard',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Live IPO GMP Data - IPO GMP PRO',
    description:
      'Track real-time Grey Market Premium (GMP) and IPO data for all major listings in Indian share markets',
    images: ['/og-image.jpg'],
    creator: '@ipogmppro',
    site: '@ipogmppro',
  },
  verification: {
    google: '7WEWZI28_fbmUQfGV37ois2UF9yKxQX0VMCDZjP6Z7E',
  },
  other: {
    'google-site-verification': '7WEWZI28_fbmUQfGV37ois2UF9yKxQX0VMCDZjP6Z7E',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
