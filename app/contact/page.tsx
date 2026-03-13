import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Contact Online Compiler - Support, Business & Security",
  description:
    "Contact Online Compiler for technical support, business partnerships, security reports, and general inquiries. Get help with our online coding platform.",
  keywords: [
    "contact online compiler",
    "support",
    "business inquiry",
    "security report",
    "technical help",
    "partnership",
  ],
  alternates: {
    canonical: "/contact",
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "mainEntity": {
    "@type": "Organization",
    "name": "Online Compiler",
    "url": "https://www.codecompileronline.com",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "contactType": "customer support",
        "email": "chandan2gaur@gmail.com",
        "availableLanguage": "English",
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "18:00",
          "timeZone": "America/New_York"
        }
      },
      {
        "@type": "ContactPoint",
        "contactType": "business inquiries",
        "email": "chandan2gaur@gmail.com",
        "availableLanguage": "English"
      },
      {
        "@type": "ContactPoint",
        "contactType": "security issues",
        "email": "chandan2gaur@gmail.com",
        "availableLanguage": "English"
      }
    ]
  }
};

export default function ContactPage() {
  return (
    <>
      <Script id="contact-schema" type="application/ld+json">
        {JSON.stringify(contactSchema)}
      </Script>
      <main className="mx-auto max-w-6xl px-3 py-12 sm:px-4">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Contact Us</h1>
      <p className="mt-4 text-slate-700">
        Get in touch with the Online Compiler team. We're here to help with support questions, feedback,
        business inquiries, and technical issues. Our team responds to all inquiries within 2 business days.
      </p>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">General Support</h2>
        <p className="text-slate-700">
          For questions about using the platform, bug reports, or feature requests, contact our support team.
        </p>
        <p className="text-slate-700">
          Email: <a className="text-cyan-700 hover:underline" href="mailto:chandan2gaur@gmail.com">chandan2gaur@gmail.com</a>
        </p>
        <p className="text-slate-700">
          Please include details about your browser, operating system, and steps to reproduce any issues.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Security & Abuse Reports</h2>
        <p className="text-slate-700">
          If you discover a security vulnerability or encounter abusive content, please report it immediately.
          We take security seriously and will investigate all reports promptly.
        </p>
        <p className="text-slate-700">
          Security Email: <a className="text-cyan-700 hover:underline" href="mailto:chandan2gaur@gmail.com">chandan2gaur@gmail.com</a>
        </p>
        <p className="text-slate-700">
          For responsible disclosure, please allow us time to address the issue before public disclosure.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Business & Partnerships</h2>
        <p className="text-slate-700">
          Interested in partnerships, integrations, or business opportunities? We'd love to hear from you.
          Whether you're an educational institution, company, or fellow developer, let's explore collaboration.
        </p>
        <p className="text-slate-700">
          Business Email: <a className="text-cyan-700 hover:underline" href="mailto:chandan2gaur@gmail.com">chandan2gaur@gmail.com</a>
        </p>
        <p className="text-slate-700">
          Include details about your organization and the nature of your inquiry.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Educational Partnerships</h2>
        <p className="text-slate-700">
          Schools, universities, and coding bootcamps can request special access or custom features for their programs.
          We offer discounted enterprise plans and custom integrations for educational institutions.
        </p>
        <p className="text-slate-700">
          Education Email: <a className="text-cyan-700 hover:underline" href="mailto:chandan2gaur@gmail.com">chandan2gaur@gmail.com</a>
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Press & Media</h2>
        <p className="text-slate-700">
          For press releases, interviews, or media inquiries about Online Compiler, please contact our team.
          We're happy to discuss our platform, technology, and impact on coding education.
        </p>
        <p className="text-slate-700">
          Media Email: <a className="text-cyan-700 hover:underline" href="mailto:chandan2gaur@gmail.com">chandan2gaur@gmail.com</a>
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Response Time & Availability</h2>
        <p className="text-slate-700">
          We aim to respond to all inquiries within 2 business days. For urgent security issues,
          we prioritize responses within 24 hours. Our support hours are Monday through Friday, 9 AM to 6 PM EST.
        </p>
        <p className="text-slate-700">
          For the fastest response, please check our <a href="/faq" className="text-cyan-700 hover:underline">FAQ section</a> first,
          as many common questions are answered there.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Community & Feedback</h2>
        <p className="text-slate-700">
          We value community feedback and actively work to improve our platform based on user suggestions.
          Share your ideas for new features, report bugs, or suggest improvements - every contribution helps make
          Online Compiler better for everyone.
        </p>
        <p className="text-slate-700">
          Visit our <a href="/about" className="text-cyan-700 hover:underline">About page</a> to learn more about our mission and values.
        </p>
      </section>
    </main>
    </>
  );
}
