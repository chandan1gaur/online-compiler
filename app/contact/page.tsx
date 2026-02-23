import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Online Compiler",
  description:
    "Contact Online Compiler for support, legal requests, business inquiries, and security reporting.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-3 py-12 sm:px-4">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Contact</h1>
      <p className="mt-4 text-slate-700">For help, abuse reports, or business requests, contact us using the channels below.</p>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Support</h2>
        <p className="text-slate-700">
          Email: <a className="text-cyan-700 hover:underline" href="mailto:chandan2gaur@gmail.com">chandan2gaur@gmail.com</a>
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Security</h2>
        <p className="text-slate-700">
          Report vulnerabilities or abuse to <a className="text-cyan-700 hover:underline" href="mailto:chandan2gaur@gmail.com">chandan2gaur@gmail.com</a>.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Business and Partnerships</h2>
        <p className="text-slate-700">
          For collaboration requests, email <a className="text-cyan-700 hover:underline" href="mailto:chandan2gaur@gmail.com">chandan2gaur@gmail.com</a>.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Response Time</h2>
        <p className="text-slate-700">We aim to respond within 2 business days.</p>
      </section>
    </main>
  );
}
