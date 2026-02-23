import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Free Online HTML CSS JavaScript Compiler | Write & Run Code Live",
  description:
    "Write, edit, and run HTML, CSS, and JavaScript code instantly in your browser. A free online compiler with live preview for web developers and learners.",
  keywords:
    "online compiler, html compiler, css compiler, javascript compiler, code editor, live code editor, web development tools, html css js editor, online ide, web playground, code sandbox, run code online, free coding tool, learn html css javascript",
  authors: [
    {
      name: "Online Compiler Team",
    },
  ],
  alternates: {
    canonical: "https://www.codecompileronline.com",
  },
  viewport: "width=device-width, initial-scale=1",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Online HTML CSS JavaScript Compiler",
  description:
    "Write, edit, and run HTML, CSS, and JavaScript code instantly in your browser. A free online compiler with live preview for web developers and learners.",
  url: "https://www.codecompileronline.com",
  applicationCategory: "DeveloperApplication",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  author: {
    "@type": "Organization",
    name: "Online Compiler Team",
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
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={String(metadata.description ?? '')} />
        <meta name="google-site-verification" content="PUT_GOOGLE_VERIFICATION_TOKEN_HERE" />
        {/* Open Graph / Social */}
        <meta property="og:title" content={String(metadata.title ?? '')} />
        <meta property="og:description" content={String(metadata.description ?? '')} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.codecompileronline.com" />
        <meta property="og:image" content="/og-image.svg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={String(metadata.title ?? '')} />
        <meta name="twitter:description" content={String(metadata.description ?? '')} />
        <meta name="twitter:image" content="/og-image.svg" />
        {/* Google Analytics (GA4) placeholder - replace G-XXXXXXXX with your Measurement ID */}
       <script async src="https://www.googletagmanager.com/gtag/js?id=G-VS86CGQM03"></script>
<script
  dangerouslySetInnerHTML={{
    __html: `window.dataLayer = window.dataLayer || [];
function gtag(){window.dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-VS86CGQM03');`,
  }}
/>
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/logo-icon.svg" type="image/svg+xml" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Google Tag Manager (noscript) placeholder - replace GTM-XXXXXX with your GTM id */}
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXX" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }} />
        </noscript>
        <div style={{minHeight: 'calc(100vh - 120px)'}}>
          {children}
        </div>
        <footer style={{ padding: '0.5rem', textAlign: 'center'}}>
          <div style={{maxWidth: 980, margin: '0 auto', display: 'flex', gap: '0.6rem', justifyContent: 'center', flexWrap: 'wrap'}}>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms & Conditions</a>
            <a href="/about">About Us</a>
            <a href="/contact">Contact Page</a>
            <a href="/sitemap.xml">Sitemap</a>
            <a href="/">Home</a>
          </div>
          <div style={{marginTop: 6, color: '#666', fontSize: 12}}>© {new Date().getFullYear()} Online Compiler</div>
        </footer>
      </body>
    </html>
  );
}
