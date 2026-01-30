import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#10b981",
};

export const metadata: Metadata = {
  title: {
    default: "CBM Calculator - Free Container Volume & Weight Tool",
    template: "%s | CBM Calculator",
  },
  description: "Calculate CBM, Kg, and container loading for sea and air freight. Supports metric and imperial units with smart packing suggestions.",
  keywords: ["CBM Calculator", "Cubic Meter Calculator", "Freight Calculator", "Shipping Volume", "Container Load", "Air Freight Volumetric Weight"],
  authors: [{ name: "FreightCBM Team" }],
  creator: "FreightCBM",
  publisher: "FreightCBM",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://cbm-calculator.com"),
  openGraph: {
    title: "CBM Calculator - Free Container Volume & Weight Tool",
    description: "Calculate CBM, Kg, and container loading for sea and air freight.",
    url: "https://cbm-calculator.com",
    siteName: "CBM Calculator",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CBM Calculator - Free Container Volume & Weight Tool",
    description: "Calculate CBM, Kg, and container loading for sea and air freight.",
    creator: "@FreightCBM",
  },
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
    google: "v4PDInxssBktOZ_6E-iw5HztoZhZSJSNOHtL_PhMYIM",
  },
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "CBM Calculator",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
