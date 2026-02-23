import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Online Compiler. Learn what data we collect, how we use it, and your choices.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-6xl px-3 py-12 sm:px-4">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Privacy Policy</h1>
      <p className="mt-2 text-sm text-slate-500">Last updated: February 23, 2026</p>
      <p className="mt-4 text-slate-700">
        This Privacy Policy describes how Online Compiler (we, our, us) collects, uses, and protects
        information when you use https://www.codecompileronline.com.
      </p>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">1. Information We Collect</h2>
        <p className="text-slate-700">We may collect the following categories of data:</p>
        <ul className="list-disc space-y-2 pl-5 text-slate-700">
          <li>Usage data such as pages visited, browser type, and approximate location.</li>
          <li>Device and technical information including operating system and performance metrics.</li>
          <li>Code snippets stored in your browser local storage for editor persistence.</li>
        </ul>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">2. How We Use Information</h2>
        <ul className="list-disc space-y-2 pl-5 text-slate-700">
          <li>To provide and improve compiler features and page performance.</li>
          <li>To detect misuse, abuse, security incidents, and policy violations.</li>
          <li>To measure traffic and product quality via analytics tools.</li>
        </ul>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">3. Cookies and Similar Technologies</h2>
        <p className="text-slate-700">
          We may use cookies and similar technologies for analytics, performance monitoring, and fraud prevention.
          Third-party services may also set cookies based on your consent and browser settings.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">4. Third-Party Services</h2>
        <p className="text-slate-700">
          We may use third-party providers such as analytics and advertising networks. These providers have their own
          privacy practices and may process data under their own terms.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">5. Data Retention</h2>
        <p className="text-slate-700">
          We retain information for as long as needed for service delivery, security, legal compliance, and legitimate
          business purposes.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">6. Your Rights</h2>
        <p className="text-slate-700">
          Depending on your location, you may have rights to access, update, delete, or restrict processing of personal
          data. Contact us to request assistance.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">7. Children</h2>
        <p className="text-slate-700">
          This service is not directed to children under 13. If you believe a child provided personal data, contact us
          so we can take appropriate action.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">8. Contact</h2>
        <p className="text-slate-700">
          For privacy-related requests, email <a className="text-cyan-700 hover:underline" href="mailto:chandan2gaur@gmail.com">chandan2gaur@gmail.com</a>.
        </p>
      </section>
    </main>
  );
}
