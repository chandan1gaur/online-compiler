"use client";

import { useState } from "react";
import Script from "next/script";

type CookieConsentProps = {
  gaMeasurementId?: string;
};

const CONSENT_KEY = "oc-cookie-consent";

export default function CookieConsent({ gaMeasurementId }: CookieConsentProps) {
  const [consent, setConsent] = useState<"granted" | "denied" | null>(() => {
    if (typeof window === "undefined") return null;
    try {
      const saved = localStorage.getItem(CONSENT_KEY);
      return saved === "granted" || saved === "denied" ? saved : null;
    } catch {
      return null;
    }
  });

  const acceptAll = () => {
    try {
      localStorage.setItem(CONSENT_KEY, "granted");
    } catch {}
    setConsent("granted");
  };

  const rejectAll = () => {
    try {
      localStorage.setItem(CONSENT_KEY, "denied");
    } catch {}
    setConsent("denied");
  };

  const canLoadAnalytics = consent === "granted" && gaMeasurementId;

  return (
    <>
      {canLoadAnalytics ? (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`} strategy="afterInteractive" />
          <Script id="gtag-init" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){window.dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaMeasurementId}', { anonymize_ip: true });`}
          </Script>
        </>
      ) : null}

      {consent === null ? (
        <aside
          className="fixed bottom-3 left-3 right-3 z-50 rounded-xl border border-slate-200 bg-white p-4 shadow-xl sm:left-auto sm:max-w-md"
          role="dialog"
          aria-label="Cookie consent"
        >
          <p className="text-sm font-semibold text-slate-900">Your privacy choices</p>
          <p className="mt-2 text-sm text-slate-600">
            We use optional analytics cookies to improve site quality. You can accept or reject these cookies.
          </p>
          <div className="mt-3 flex gap-2">
            <button
              onClick={acceptAll}
              className="rounded-md bg-slate-900 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-slate-700"
            >
              Accept
            </button>
            <button
              onClick={rejectAll}
              className="rounded-md border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
            >
              Reject
            </button>
          </div>
        </aside>
      ) : null}
    </>
  );
}
