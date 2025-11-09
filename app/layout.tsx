import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCallButton } from "@/components/FloatingCallButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.rmmsop.com'),
  title: {
    default: "RMM Service of Process - Professional Process Serving in Oklahoma",
    template: "%s | RMM Service of Process"
  },
  description: "Professional process serving and legal document delivery services in Oklahoma. Serving Cleveland, Canadian, McClain, and Grady counties. NAPPS member since 2024.",
  keywords: [
    "process server Oklahoma",
    "Cleveland County process server",
    "Canadian County process server",
    "McClain County process server",
    "Grady County process server",
    "Blanchard process server",
    "legal document delivery Oklahoma",
    "court filing services",
    "skip tracing Oklahoma",
    "private investigations Oklahoma",
    "NAPPS member Oklahoma"
  ],
  authors: [{ name: "Ryley McGee" }],
  creator: "Ryley McGee",
  publisher: "RMM Service of Process",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.rmmsop.com",
    siteName: "RMM Service of Process",
    title: "RMM Service of Process - Professional Process Serving in Oklahoma",
    description: "Professional process serving and legal document delivery services in Oklahoma. Serving Cleveland, Canadian, McClain, and Grady counties.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "RMM Service of Process"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "RMM Service of Process - Professional Process Serving in Oklahoma",
    description: "Professional process serving and legal document delivery services in Oklahoma.",
    images: ["/images/og-image.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "RMM Service of Process",
  "image": "https://www.rmmsop.com/images/logo.png",
  "@id": "https://www.rmmsop.com",
  "url": "https://www.rmmsop.com",
  "telephone": "(405) 605-9364",
  "email": "rmmsop@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "308 Summer Oaks Drive",
    "addressLocality": "Blanchard",
    "addressRegion": "OK",
    "postalCode": "73010",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 35.1387,
    "longitude": -97.6578
  },
  "areaServed": [
    {
      "@type": "State",
      "name": "Oklahoma"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Cleveland County"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Canadian County"
    },
    {
      "@type": "AdministrativeArea",
      "name": "McClain County"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Grady County"
    }
  ],
  "founder": {
    "@type": "Person",
    "name": "Ryley McGee",
    "jobTitle": "Professional Process Server",
    "url": "https://www.linkedin.com/in/ryley-mcgee-014a8556"
  },
  "memberOf": [
    {
      "@type": "Organization",
      "name": "National Association of Professional Process Servers (NAPPS)",
      "url": "https://napps.org"
    },
    {
      "@type": "Organization",
      "name": "Oklahoma Process Servers and Private Investigators Association (OKPPSA)",
      "url": "https://www.okppsa.org"
    }
  ],
  "serviceType": [
    "Process Serving",
    "Court Filing",
    "Certified Registered Service",
    "Private Investigations",
    "Skip Tracing"
  ],
  "hasCredential": "NAPPS Member, OKPPSA Member, Serving Since 2015",
  "description": "RMM Service of Process provides professional process serving and legal document delivery services in Oklahoma since 2015, specializing in Cleveland, Canadian, McClain, and Grady counties. Contact Ryley for reliable, timely, and confidential service.",
  "foundingDate": "2015",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "08:00",
    "closes": "18:00"
  },
  "priceRange": "$$",
  "sameAs": [
    "https://www.facebook.com/rmmsop",
    "https://www.rmmsop.com",
    "https://www.okppsa.org/business-directory/ryley-mcgee/",
    "https://napps.org/Process-Servers/Oklahoma/Oklahoma%20City",
    "https://linktr.ee/rmmsop",
    "https://www.linkedin.com/in/ryley-mcgee-014a8556"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "1",
    "bestRating": "5",
    "worstRating": "1"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} bg-gray-50`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <FloatingCallButton />
      </body>
    </html>
  );
}
