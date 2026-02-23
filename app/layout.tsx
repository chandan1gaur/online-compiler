import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import CookieConsent from "@/components/CookieConsent";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://www.codecompileronline.com";
const siteTitle = "Online Compiler - Free HTML, CSS & JavaScript Editor";
const siteDescription =
  "Build and run HTML, CSS, and JavaScript instantly in your browser. Fast, free, and beginner-friendly online compiler with live preview.";
const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ||  "G-VS86CGQM03";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Online Compiler",
  },
  description: siteDescription,
  keywords: [
    "online compiler",
    "html editor",
    "css editor",
    "javascript editor",
    "web playground",
    "live code preview",
    "frontend coding tool",
  ],
  authors: [{ name: "Online Compiler Team" }],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Online Compiler",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Online Compiler preview card",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og-image.svg"],
  },
  icons: {
    icon: [{ url: "/logo-icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/icon-192x192.svg" }],
  },
  manifest: "/manifest.json",
  ...(googleVerification
    ? {
        verification: {
          google: googleVerification,
        },
      }
    : {}),
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: "Online Compiler",
      url: siteUrl,
      description: siteDescription,
      inLanguage: "en-US",
    },
    {
      "@type": "SoftwareApplication",
      name: "Online Compiler",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      url: siteUrl,
      description: siteDescription,
    },
    {
      "@type": "Organization",
      name: "Online Compiler",
      url: siteUrl,
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "chandan2gaur@gmail.com",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-white text-slate-900 antialiased`}>
        <Script id="theme-init" strategy="beforeInteractive">
          {`try {
  var saved = localStorage.getItem('oc-theme');
  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (saved === 'dark' || (!saved && prefersDark)) {
    document.documentElement.classList.add('dark');
  }
} catch (e) {}`}
        </Script>
        <Script id="schema-org" type="application/ld+json">
          {JSON.stringify(structuredData)}
        </Script>
        <ThemeProvider>
          <SiteHeader />
          <main className="min-h-[calc(100vh-144px)]">{children}</main>
          <SiteFooter />
          <CookieConsent gaMeasurementId={gaMeasurementId} />
        </ThemeProvider>
      </body>
    </html>
  );
}
