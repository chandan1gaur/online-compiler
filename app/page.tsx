import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Online HTML CSS JavaScript Compiler",
  description:
    "Use a free online HTML, CSS, and JavaScript compiler with instant live preview. Build snippets fast, test ideas, and download your code.",
  alternates: {
    canonical: "/",
  },
};

const featureItems = [
  {
    title: "Instant Live Preview",
    description: "Run your code with one click and see results immediately in the preview panel.",
  },
  {
    title: "HTML + CSS + JavaScript",
    description: "Switch modes quickly and build complete front-end snippets in a single browser tab.",
  },
  {
    title: "No Setup Required",
    description: "Start coding directly in the browser without installing packages or editors.",
  },
  {
    title: "Download Code",
    description: "Export your generated snippet and continue development in your local project.",
  },
];

export default function Page() {
  return (
    <>
      <section className="border-b border-slate-200 bg-gradient-to-br from-slate-50 via-white to-cyan-50">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 md:grid-cols-2 md:py-20">
          <div>
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-700">
              Free Web Playground
            </p>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              Online HTML, CSS & JavaScript Compiler
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-700 sm:text-lg">
              Write, test, and share front-end code in seconds. Online Compiler helps developers and learners run code
              faster with a clean interface and live output.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/html"
                className="rounded-md bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
              >
                Open HTML Compiler
              </Link>
              <Link
                href="/javascript"
                className="rounded-md bg-cyan-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-cyan-700"
              >
                Open JavaScript Compiler
              </Link>
              <Link
                href="/#features"
                className="rounded-md border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
              >
                Explore Features
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">Why developers use this tool</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              <li>Fast workflow for prototyping user interfaces</li>
              <li>Useful for learning DOM, styling, and scripting concepts</li>
              <li>Simple environment for interview and classroom demos</li>
              <li>Responsive preview in a secure iframe sandbox</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Core Features</h2>
        <p className="mt-3 max-w-3xl text-slate-700">
          A practical browser-based coding platform focused on speed, reliability, and accessibility for modern web
          development.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {featureItems.map((item) => (
            <article key={item.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="how-it-works" className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">How It Works</h2>
          <div className="mt-7 grid gap-4 md:grid-cols-3">
            <article className="rounded-xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700">Step 1</p>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">Write</h3>
              <p className="mt-1 text-sm text-slate-700">Create HTML, CSS, and JavaScript snippets using the editor tabs.</p>
            </article>
            <article className="rounded-xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700">Step 2</p>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">Run</h3>
              <p className="mt-1 text-sm text-slate-700">Execute your code instantly to inspect behavior and visual output.</p>
            </article>
            <article className="rounded-xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700">Step 3</p>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">Download</h3>
              <p className="mt-1 text-sm text-slate-700">Export your compiled snippet and continue development anywhere.</p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
