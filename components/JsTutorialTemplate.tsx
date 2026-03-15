import Link from "next/link";
import CodeExample from "@/components/CodeExample";

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
  intro: string | string[];
  why: string | string[];
  sections: Section[];
  examples: Example[];
  mistakes: Mistake[];
  faqs: Faq[];
  related: TopicLink[];
  syntax?: string[];
  comparison?: {
    without: string;
    with: string;
  };
  interviewQuestions?: Faq[];
  practice?: {
    prompt: string;
    starterCode?: string;
    solution?: string;
  };
  tryItYourself?: {
    code?: string;
    label?: string;
    description?: string;
  };
  basicExample?: Example;
  realWorldExample?: Example;
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
  syntax,
  comparison,
  interviewQuestions,
  practice,
  tryItYourself,
  basicExample,
  realWorldExample,
}: Props) {
  const compilerBaseHref = "/javascript/online-compiler";
  const getRunInCompilerHref = (code: string) => `${compilerBaseHref}?run=1&code=${encodeURIComponent(code)}`;
  const introParagraphs = Array.isArray(intro) ? intro : intro.split("\n\n").filter(Boolean);
  const whyParagraphs = Array.isArray(why) ? why : why.split("\n\n").filter(Boolean);

  const resolvedBasicExample = basicExample ?? examples[0];
  const resolvedRealWorldExample = realWorldExample ?? examples[1] ?? examples[0];
  const remainingExamples = examples.slice(2);
  const resolvedInterviewQuestions = interviewQuestions?.length ? interviewQuestions : faqs;
  const syntaxLines = syntax?.length ? syntax : ["// Add syntax lines here."];
  const comparisonWithout = comparison?.without ?? "// Without this feature\n// ...";
  const comparisonWith = comparison?.with ?? "// With this feature\n// ...";
  const practicePrompt =
    practice?.prompt ?? `Practice: Write a short example that uses ${title} and run it in the compiler.`;
  const practiceStarter = practice?.starterCode ?? resolvedBasicExample?.code ?? "console.log('Hello JavaScript');";
  const practiceSolution = practice?.solution;
  const tryItCode = tryItYourself?.code ?? resolvedBasicExample?.code ?? "console.log('Hello JavaScript');";
  const tryItLabel = tryItYourself?.label ?? "Run Code";
  const tryItDescription =
    tryItYourself?.description ?? "Try this example in our JavaScript Compiler and modify it to explore variations.";

  const tocItems = [
    { id: "introduction", label: "Introduction" },
    { id: "why-we-need-it", label: "Why We Need It" },
    { id: "syntax", label: "Syntax" },
    { id: "basic-example", label: "Basic Example" },
    { id: "real-world-example", label: "Real World Example" },
    { id: "use-cases", label: "Multiple Use Cases" },
    { id: "comparison", label: "Comparison" },
    { id: "common-mistakes", label: "Common Mistakes" },
    { id: "interview-questions", label: "Interview Questions" },
    { id: "practice-problem", label: "Practice Problem" },
    { id: "faq", label: "FAQ" },
    { id: "related-topics", label: "Related Topics" },
    { id: "try-it-yourself", label: "Try It Yourself" },
  ];

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
    <section className="w-full font-sans text-slate-900 dark:text-slate-100">
      <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-[radial-gradient(circle_at_top_left,rgba(234,88,12,0.12),transparent_45%),radial-gradient(circle_at_top_right,rgba(14,116,144,0.12),transparent_45%),linear-gradient(135deg,#fff7ed,transparent_55%),linear-gradient(225deg,#ecfeff,transparent_60%)] p-4 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.6)] dark:border-slate-800 dark:bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.18),transparent_40%),radial-gradient(circle_at_top_right,rgba(6,182,212,0.16),transparent_45%),linear-gradient(135deg,rgba(15,23,42,0.9),rgba(2,6,23,0.98))] sm:p-5">
        <div className="pointer-events-none absolute -top-24 right-10 h-48 w-48 rounded-full bg-[conic-gradient(from_180deg,#f97316,#eab308,#06b6d4,#f97316)] opacity-20 blur-3xl dark:opacity-30" />
        <div className="pointer-events-none absolute -bottom-20 left-10 h-48 w-48 rounded-full bg-[radial-gradient(circle,#38bdf8,transparent_70%)] opacity-20 blur-3xl dark:opacity-25" />

        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-700/80 dark:text-orange-200/80">JavaScript Tutorial</p>
        <h1 className="mt-1 font-[var(--font-display)] text-3xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-4xl">{title}</h1>
        <div id="introduction" className="mt-1.5 space-y-1 text-sm leading-relaxed text-slate-700 dark:text-slate-300 sm:text-base">
          {introParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-3 grid gap-3 lg:grid-cols-[1.2fr,0.8fr]">
          <section className="rounded-2xl border border-slate-200/80 bg-white/80 p-3 backdrop-blur dark:border-slate-800/80 dark:bg-slate-900/80 sm:p-4">
            <h2 className="font-[var(--font-display)] text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-slate-900 dark:text-slate-100">Contents</h2>
            <div className="mt-2 grid grid-cols-2 gap-x-3 gap-y-1.5 text-xs leading-snug text-slate-700 dark:text-slate-300 sm:grid-cols-3 sm:text-sm lg:grid-cols-4">
              {tocItems.map((item) => (
                <Link
                  key={item.id}
                  href={`#${item.id}`}
                  className="flex items-center gap-2 rounded-lg border border-transparent px-2 py-0.5 transition hover:border-slate-200 hover:bg-white/90 hover:text-orange-700 dark:hover:border-slate-700 dark:hover:bg-slate-900"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-500/80" />
                  {item.label}
                </Link>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200/80 bg-white/80 p-3 backdrop-blur dark:border-slate-800/80 dark:bg-slate-900/80 sm:p-4">
            <h2 className="font-[var(--font-display)] text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-slate-900 dark:text-slate-100">Quick Actions</h2>
            <div className="mt-3 grid gap-2 sm:flex sm:flex-wrap">
              <Link
                href={compilerBaseHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-orange-200 bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-800 shadow-sm transition hover:-translate-y-0.5 hover:bg-orange-200 dark:border-orange-400/40 dark:bg-orange-500/20 dark:text-orange-100 sm:w-auto"
              >
                Open Compiler
              </Link>
              <Link
                href={getRunInCompilerHref(examples[0]?.code || "console.log('Hello JavaScript');")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-200 bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-800 shadow-sm transition hover:-translate-y-0.5 hover:bg-cyan-200 dark:border-cyan-400/40 dark:bg-cyan-500/20 dark:text-cyan-100 sm:w-auto"
              >
                Run First Example
              </Link>
            </div>
          </section>
        </div>
      </div>

      <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/90 sm:p-6">
        <h2 id="why-we-need-it" className="font-[var(--font-display)] text-lg font-semibold text-slate-900 dark:text-slate-100">Why We Need It</h2>
        <div className="mt-2 space-y-2 text-sm text-slate-700 dark:text-slate-300 sm:text-base">
          {whyParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>

      <section className="mt-5 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/80 sm:p-6">
        <h2 id="syntax" className="font-[var(--font-display)] text-xl font-semibold text-slate-900 dark:text-white">Syntax</h2>
        <pre className="mt-3 overflow-x-auto rounded-xl border border-slate-200 bg-slate-950 p-3 text-[0.72rem] text-slate-100 shadow-inner dark:border-slate-700 sm:p-4 sm:text-xs">
          <code>{syntaxLines.join("\n")}</code>
        </pre>
      </section>

      <section className="mt-5 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/80 sm:p-6">
        <h2 id="basic-example" className="font-[var(--font-display)] text-xl font-semibold text-slate-900 dark:text-white">Basic Example</h2>
        {resolvedBasicExample ? (
          <CodeExample
            index={1}
            title={resolvedBasicExample.title}
            code={resolvedBasicExample.code}
            explanation={resolvedBasicExample.explanation}
          />
        ) : (
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300 sm:text-base">Add a basic example for this tutorial.</p>
        )}
      </section>

      <section className="mt-5 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/80 sm:p-6">
        <h2 id="real-world-example" className="font-[var(--font-display)] text-xl font-semibold text-slate-900 dark:text-white">Real World Example</h2>
        {resolvedRealWorldExample ? (
          <CodeExample
            index={2}
            title={resolvedRealWorldExample.title}
            code={resolvedRealWorldExample.code}
            explanation={resolvedRealWorldExample.explanation}
          />
        ) : (
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300 sm:text-base">Add a real world example for this tutorial.</p>
        )}
      </section>

      <div id="use-cases" className="mt-5 grid gap-4 lg:grid-cols-2">
        <h2 className="font-[var(--font-display)] text-2xl font-semibold tracking-tight text-slate-900 dark:text-white lg:col-span-2">Multiple Use Cases</h2>
        {sections.map((section) => (
          <article key={section.heading} className="h-full rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/80 sm:p-5">
            <h3 className="font-[var(--font-display)] text-lg font-semibold text-slate-900 dark:text-white">{section.heading}</h3>
            <div className="mt-2 space-y-2 text-sm text-slate-700 dark:text-slate-300 sm:text-base">
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

      {remainingExamples.length > 0 ? (
        <section className="mt-6">
          <h2 className="font-[var(--font-display)] text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">More Examples</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {remainingExamples.map((example, idx) => (
              <CodeExample
                key={example.title}
                index={idx + 3}
                title={example.title}
                code={example.code}
                explanation={example.explanation}
              />
            ))}
          </div>
        </section>
      ) : null}

      <section id="comparison" className="mt-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/85 sm:p-6">
        <h2 className="font-[var(--font-display)] text-xl font-semibold text-slate-900 dark:text-white">Comparison</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Without</p>
            <pre className="mt-2 overflow-x-auto rounded-xl border border-slate-200 bg-slate-950 p-3 text-[0.72rem] text-slate-100 shadow-inner dark:border-slate-700 sm:p-4 sm:text-xs">
              <code>{comparisonWithout}</code>
            </pre>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">With</p>
            <pre className="mt-2 overflow-x-auto rounded-xl border border-slate-200 bg-slate-950 p-3 text-[0.72rem] text-slate-100 shadow-inner dark:border-slate-700 sm:p-4 sm:text-xs">
              <code>{comparisonWith}</code>
            </pre>
          </div>
        </div>
      </section>

      <section id="common-mistakes" className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/85">
        <h2 className="font-[var(--font-display)] text-xl font-semibold text-slate-900 dark:text-white">Common Mistakes and Fixes</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {mistakes.map((item) => (
            <article key={item.title} className="rounded-xl border border-slate-200 bg-slate-50 p-4 shadow-sm dark:border-slate-700 dark:bg-slate-950/70">
              <h3 className=" font-semibold text-slate-900 dark:text-slate-100">{item.title}</h3>
              <p className="mt-1  text-slate-700 dark:text-slate-300">{item.fix}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="interview-questions" className="mt-6">
        <h2 className="font-[var(--font-display)] text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">Interview Questions</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {resolvedInterviewQuestions.map((item) => (
            <article key={item.q} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/85">
              <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">{item.q}</h3>
              <p className="mt-2  text-slate-700 dark:text-slate-300">{item.a}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="practice-problem" className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/85">
        <h2 className="font-[var(--font-display)] text-xl font-semibold text-slate-900 dark:text-white">Practice Problem</h2>
        <p className="mt-2  text-slate-700 dark:text-slate-300">{practicePrompt}</p>
        <pre className="mt-3 overflow-x-auto rounded-xl border border-slate-200 bg-slate-950 p-4 text-xs text-slate-100 shadow-inner dark:border-slate-700">
          <code>{practiceStarter}</code>
        </pre>
        {practiceSolution ? (
          <div className="mt-3">
            <p className=" font-semibold text-slate-900 dark:text-slate-100">One Possible Solution</p>
            <pre className="mt-2 overflow-x-auto rounded-xl border border-slate-200 bg-slate-950 p-4 text-xs text-slate-100 shadow-inner dark:border-slate-700">
              <code>{practiceSolution}</code>
            </pre>
          </div>
        ) : null}
      </section>

      <section id="faq" className="mt-6">
        <h2 className="font-[var(--font-display)] text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">Frequently Asked Questions</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {faqs.map((item) => (
            <article key={item.q} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/85">
              <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">{item.q}</h3>
              <p className="mt-2  text-slate-700 dark:text-slate-300">{item.a}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="related-topics" className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950/70">
        <h2 className="font-[var(--font-display)] text-xl font-semibold text-slate-900 dark:text-white">Related JavaScript Topics</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {related.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full border border-slate-300 bg-white px-3 py-1.5  font-medium text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-100 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </section>

      <section id="try-it-yourself" className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/85">
        <h2 className="font-[var(--font-display)] text-xl font-semibold text-slate-900 dark:text-white">Try It Yourself</h2>
        <p className="mt-2  text-slate-700 dark:text-slate-300">{tryItDescription}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          <Link
            href={getRunInCompilerHref(tryItCode)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-emerald-600/60 bg-emerald-100 px-4 py-2  font-semibold text-emerald-800 shadow-sm transition hover:-translate-y-0.5 hover:bg-emerald-200 dark:border-emerald-500/60 dark:bg-emerald-500/20 dark:text-emerald-200 dark:hover:bg-emerald-500/30"
          >
            {tryItLabel}
          </Link>
          <Link
            href={compilerBaseHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2  font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            Open Compiler
          </Link>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </section>
  );
}
