import Link from "next/link";

type Section = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

type Example = {
  title: string;
  code: string;
  explanation: string;
};

type Faq = {
  q: string;
  a: string;
};

type Mistake = {
  title: string;
  fix: string;
};

type TopicLink = {
  label: string;
  href: string;
};

type Props = {
  title: string;
  intro: string;
  why: string;
  sections: Section[];
  examples: Example[];
  mistakes: Mistake[];
  faqs: Faq[];
  related: TopicLink[];
};

export default function JsTutorialTemplate({
  title,
  intro,
  why,
  sections,
  examples,
  mistakes,
  faqs,
  related,
}: Props) {
  const compilerBaseHref = "/javascript/online-compiler";
  const getRunInCompilerHref = (code: string) => `${compilerBaseHref}?run=1&code=${encodeURIComponent(code)}`;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <section className="w-full text-slate-900 dark:text-slate-100">
      <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-white p-5 dark:border-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700 dark:text-cyan-300">JavaScript Tutorial</p>
        <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">{title}</h1>
        <p className="mt-3 text-sm text-slate-700 dark:text-slate-300 sm:text-base">{intro}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          <Link
            href={compilerBaseHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-md border border-cyan-600/60 bg-cyan-100 px-3 py-2 text-sm font-semibold text-cyan-800 hover:bg-cyan-200 dark:border-cyan-500/60 dark:bg-cyan-500/20 dark:text-cyan-200 dark:hover:bg-cyan-500/30"
          >
            Open Compiler
          </Link>
          <Link
            href={getRunInCompilerHref(examples[0]?.code || "console.log('Hello JavaScript');")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-md border border-emerald-600/60 bg-emerald-100 px-3 py-2 text-sm font-semibold text-emerald-800 hover:bg-emerald-200 dark:border-emerald-500/60 dark:bg-emerald-500/20 dark:text-emerald-200 dark:hover:bg-emerald-500/30"
          >
            Run First Example
          </Link>
        </div>
      </div>

      <div className="mt-4 rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/90">
        <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Why this matters</p>
        <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">{why}</p>
      </div>

      <div className="mt-6 space-y-4">
        {sections.map((section) => (
          <article key={section.heading} className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/80">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">{section.heading}</h2>
            <div className="mt-2 space-y-2 text-sm text-slate-700 dark:text-slate-300">
              {section.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
              {section.bullets && section.bullets.length > 0 ? (
                <ul className="list-disc space-y-1 pl-5">
                  {section.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          </article>
        ))}
      </div>

      <section className="mt-8">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Code Examples</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {examples.map((example) => (
            <article key={example.title} className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900/85">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-base font-semibold text-slate-900 dark:text-white">{example.title}</h3>
                <div className="flex gap-2">
                  <Link
                    href={compilerBaseHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md border border-slate-300 px-2 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800"
                  >
                    Open
                  </Link>
                  <Link
                    href={getRunInCompilerHref(example.code)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md border border-emerald-600/60 bg-emerald-100 px-2 py-1 text-xs font-semibold text-emerald-800 hover:bg-emerald-200 dark:border-emerald-500/60 dark:bg-emerald-500/20 dark:text-emerald-200 dark:hover:bg-emerald-500/30"
                  >
                    Run
                  </Link>
                </div>
              </div>
              <pre className="mt-3 overflow-x-auto rounded-md border border-slate-200 bg-slate-950 p-3 text-xs text-slate-100 dark:border-slate-700">
                <code>{example.code}</code>
              </pre>
              <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">{example.explanation}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-8 rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/85">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Common Mistakes and Fixes</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {mistakes.map((item) => (
            <article key={item.title} className="rounded-lg border border-slate-200 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-950/70">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">{item.title}</h3>
              <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">{item.fix}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Frequently Asked Questions</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {faqs.map((item) => (
            <article key={item.q} className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/85">
              <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">{item.q}</h3>
              <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">{item.a}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950/70">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Related JavaScript Topics</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {related.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </section>
  );
}
