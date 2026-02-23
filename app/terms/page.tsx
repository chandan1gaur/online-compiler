import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Terms and Conditions for using Online Compiler, including acceptable use, content rules, and limitations.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Terms and Conditions</h1>
      <p className="mt-2 text-sm text-slate-500">Last updated: February 23, 2026</p>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">1. Acceptance of Terms</h2>
        <p className="text-slate-700">
          By using Online Compiler, you agree to these Terms and Conditions and all applicable laws.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">2. Service Description</h2>
        <p className="text-slate-700">
          Online Compiler provides browser-based coding tools for HTML, CSS, and JavaScript experimentation and
          learning.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">3. Acceptable Use</h2>
        <ul className="list-disc space-y-2 pl-5 text-slate-700">
          <li>You must not use the platform for illegal, abusive, or harmful activity.</li>
          <li>You must not attempt to disrupt, overload, or compromise service security.</li>
          <li>You are responsible for code or content you create, upload, or execute.</li>
        </ul>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">4. Intellectual Property</h2>
        <p className="text-slate-700">
          The service interface, branding, and original platform materials belong to Online Compiler or licensors.
          Users retain ownership of their own code unless otherwise agreed.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">5. Availability and Changes</h2>
        <p className="text-slate-700">
          We may update, suspend, or discontinue parts of the service at any time to improve quality, security, or
          compliance.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">6. Disclaimer</h2>
        <p className="text-slate-700">
          The service is provided as is and as available without warranties of any kind.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">7. Limitation of Liability</h2>
        <p className="text-slate-700">
          To the maximum extent permitted by law, Online Compiler is not liable for indirect, incidental, or
          consequential damages arising from use of the service.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">8. Contact</h2>
        <p className="text-slate-700">
          Questions about these terms can be sent to <a className="text-cyan-700 hover:underline" href="mailto:chandan2gaur@gmail.com">chandan2gaur@gmail.com</a>.
        </p>
      </section>
    </main>
  );
}
