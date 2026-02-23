import Home from "@/components/Home";

type CompilerPageProps = {
  language: "html" | "javascript";
};

export default function CompilerPage({ language }: CompilerPageProps) {
  const isHtml = language === "html";
  const faq = isHtml
    ? [
        {
          q: "Can I run HTML, CSS, and JavaScript together?",
          a: "Yes. The HTML compiler lets you edit index.html, styles.css, and script.js together with live preview.",
        },
        {
          q: "Can I download my code?",
          a: "Yes. Use the Download button to export your current code output.",
        },
      ]
    : [
        {
          q: "Can I test JavaScript quickly without setup?",
          a: "Yes. The JavaScript compiler runs scripts instantly in your browser.",
        },
        {
          q: "Does it show runtime errors?",
          a: "Yes. Runtime errors and console output are shown in the preview environment.",
        },
      ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <section className="mx-auto max-w-[1400px] px-3 py-10 sm:px-6">
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700">Online Code Editor</p>
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          {isHtml ? "HTML, CSS & JavaScript Compiler" : "JavaScript Compiler"}
        </h1>
        <p className="mt-2 max-w-3xl text-sm text-slate-600 sm:text-base">
          {isHtml
            ? "Build complete frontend snippets with HTML, CSS, and JavaScript in one place."
            : "Write and execute JavaScript quickly with instant runtime output and console capture."}
        </p>
      </div>

      <Home initialMode={isHtml ? "html" : "js"} />

      <section className="mt-8 grid gap-4 md:grid-cols-2">
        {faq.map((item) => (
          <article key={item.q} className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-semibold text-slate-900">{item.q}</h2>
            <p className="mt-2 text-sm text-slate-700">{item.a}</p>
          </article>
        ))}
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </section>
  );
}
