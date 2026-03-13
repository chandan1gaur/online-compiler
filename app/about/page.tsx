import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "About Online Compiler - Mission, Features & Technology",
  description:
    "Learn about Online Compiler's mission to democratize coding education. Discover our features, technology stack, and how we serve developers worldwide.",
  keywords: [
    "about online compiler",
    "coding platform mission",
    "web development tools",
    "javascript editor",
    "coding education",
    "online ide",
  ],
  alternates: {
    canonical: "/about",
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "mainEntity": {
    "@type": "Organization",
    "name": "Online Compiler",
    "description": "Browser-based coding platform for HTML, CSS, and JavaScript development and learning",
    "url": "https://www.codecompileronline.com",
    "foundingDate": "2024",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "email": "chandan2gaur@gmail.com"
    },
    "sameAs": [
      "https://github.com/chandan1gaur"
    ]
  }
};

export default function AboutPage() {
  return (
    <>
      <Script id="about-schema" type="application/ld+json">
        {JSON.stringify(aboutSchema)}
      </Script>
      <main className="mx-auto max-w-6xl px-3 py-12 sm:px-4">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">About Online Compiler</h1>
      <p className="mt-4 text-slate-700">
        Online Compiler is a browser-based coding tool that helps learners and developers write, test, and share
        frontend code quickly. Our platform provides an instant coding environment with live preview, making it perfect
        for learning, prototyping, and debugging.
      </p>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Our Mission</h2>
        <p className="text-slate-700">
          We focus on fast access, simple workflows, and practical functionality so users can move from idea to running
          code in seconds. Our goal is to democratize coding education and make web development accessible to everyone,
          from complete beginners to experienced developers.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">What We Offer</h2>
        <ul className="list-disc space-y-2 pl-5 text-slate-700">
          <li><strong>Live Code Editor:</strong> Write HTML, CSS, and JavaScript with real-time preview</li>
          <li><strong>Instant Execution:</strong> Run your code immediately without setup or installation</li>
          <li><strong>Learning Resources:</strong> Comprehensive tutorials and examples for all skill levels</li>
          <li><strong>Free Access:</strong> No registration required, completely free to use</li>
          <li><strong>Cross-Platform:</strong> Works on any device with a modern web browser</li>
        </ul>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Who Uses This Platform</h2>
        <p className="text-slate-700">
          Students, instructors, interviewers, and frontend engineers use Online Compiler for demos, rapid prototyping,
          and concept validation. Whether you're learning your first programming language or testing complex web
          applications, our platform adapts to your needs.
        </p>
        <p className="text-slate-700">
          Educators use it for teaching web development concepts, interviewers assess candidates' coding skills,
          and developers quickly test ideas before implementing them in larger projects.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Our Technology</h2>
        <p className="text-slate-700">
          Built with modern web technologies including React, Next.js, and Monaco Editor (the same editor used by
          Visual Studio Code), our platform delivers a professional coding experience directly in your browser.
          We prioritize performance, security, and user experience in everything we build.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Privacy & Security</h2>
        <p className="text-slate-700">
          Your code runs entirely in your browser - we don't store or execute your code on our servers. This ensures
          your intellectual property remains private and secure. We use industry-standard security practices to
          protect your data and maintain a safe learning environment.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Get Started</h2>
        <p className="text-slate-700">
          Ready to start coding? <a href="/" className="text-cyan-700 hover:underline">Try our online compiler</a> now.
          No setup required - just start writing code and see results instantly.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Contact</h2>
        <p className="text-slate-700">
          Support: <a className="text-cyan-700 hover:underline" href="mailto:chandan2gaur@gmail.com">chandan2gaur@gmail.com</a>
        </p>
        <p className="text-slate-700">
          For business inquiries, partnerships, or technical support, feel free to reach out. We value your feedback
          and are always looking for ways to improve our platform.
        </p>
      </section>
    </main>
    </>
  );
}
