import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Online HTML CSS JavaScript Compiler",
  description:
    "Use a free online HTML, CSS, and JavaScript compiler with instant live preview. Build snippets fast, test ideas, and download your code.",
  keywords: ["online compiler", "html compiler", "css compiler", "javascript compiler", "code editor", "live code editor", "web development tools"],
  openGraph: {
    title: "Free Online HTML CSS JavaScript Compiler",
    description:
      "Use a free online HTML, CSS, and JavaScript compiler with instant live preview. Build snippets fast, test ideas, and download your code.",
    url: "https://www.codecompileronline.com",
    type: "website",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Online HTML CSS JavaScript Compiler",
    description:
      "Use a free online HTML, CSS, and JavaScript compiler with instant live preview. Build snippets fast, test ideas, and download your code.",
    images: ["/og-image.svg"],
  },
  alternates: {
    canonical: "/",
  },
};

const toolCards = [
  {
    title: "HTML Compiler",
    description: "Write and run HTML quickly with live output.",
    href: "/html/online-compiler",
    image: "/tools/html.svg",
  },
  {
    title: "CSS Compiler",
    description: "Test CSS styling and layout updates instantly.",
    href: "/html/online-compiler",
    image: "/tools/css.svg",
  },
  {
    title: "JavaScript Compiler",
    description: "Run JavaScript code and debug output in real time.",
    href: "/javascript/online-compiler",
    image: "/tools/javascript.svg",
  },
  {
    title: "Regex Tester",
    description: "Validate regex patterns against sample text quickly.",
    href: "/regex/online-compiler",
    image: "/tools/regex.svg",
  },
  {
    title: "JSON/YAML/XML Formatter",
    description: "Format and validate payloads for cleaner debugging.",
    href: "/formatter/online-compiler",
    image: "/tools/formatter.svg",
  },
];

const valuePoints = [
  "No installation required",
  "Instant run and preview",
  "Mobile, tablet, desktop ready",
  "Built for learning and practice",
];

const quickStartSteps = [
  "Open a tool from the cards below.",
  "Write or paste code in the editor.",
  "Add input lines if your script uses prompt().",
  "Click Run and inspect output immediately.",
];

const quickLaunchLinks = [
  { label: "HTML", href: "/html/online-compiler" },
  { label: "CSS", href: "/html/online-compiler" },
  { label: "JavaScript", href: "/javascript/online-compiler" },
  { label: "Regex", href: "/regex/online-compiler" },
  { label: "Formatter", href: "/formatter/online-compiler" },
];

type TutorialCard = {
  title: string;
  description: string;
  href?: string;
  comingSoon?: boolean;
};

const tutorials: TutorialCard[] = [
   {
    title: "JavaScript Core and Advanced Tutorial",
    description: "Practice variables, arrays, closures, promises, async/await, and generators.",
    href: "/javascript",
  },
  {
    title: "HTML + CSS Basics Tutorial",
    description: "Learn tags, layout blocks, forms, and responsive CSS with runnable examples.",
    comingSoon: true,
  },
 
  {
    title: "Regex and Formatter Tutorial",
    description: "Master pattern matching and clean JSON/YAML/XML data with guided examples.",
    comingSoon: true,
  },
];

const homeFaq = [
  {
    q: "Is this online compiler free to use?",
    a: "Yes. HTML, CSS, JavaScript, formatter, and regex tools are available for free.",
  },
  {
    q: "Do I need to install software before coding?",
    a: "No. Everything runs in your browser.",
  },
  {
    q: "Can I use this on mobile and tablet?",
    a: "Yes. The layout is optimized for mobile, tablet, and desktop.",
  },
];

export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeFaq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <>
      <section className="relative bg-gradient-to-br from-cyan-50 to-white dark:from-cyan-900 dark:to-slate-900 border-b border-slate-200 dark:border-slate-700">
        <div className="mx-auto w-full max-w-[1400px] px-3 py-16 sm:px-4 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* left column: text & actions */}
            <div className="text-center lg:text-left">
              <h1 className="mx-auto lg:mx-0 max-w-3xl text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 sm:text-6xl">
                Run HTML, CSS &amp; JavaScript Code Instantly
              </h1>
              <p className="mt-4 mx-auto lg:mx-0 max-w-2xl text-xl text-slate-700 dark:text-slate-300">
                Write, run, and preview code in your browser – free and no signup
                required. Plus tutorials, interview questions, and handy web tools.
              </p>
              <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
                <Link
                  href="/html/online-compiler"
                  className="rounded-md bg-slate-900 px-5 py-3 text-base font-semibold text-white transition hover:bg-slate-700"
                >
                  Start Coding
                </Link>
                <Link
                  href="/javascript"
                  className="rounded-md border border-slate-300 px-5 py-3 text-base font-semibold text-slate-800 transition hover:bg-slate-100 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-700"
                >
                  View Tutorials
                </Link>
              </div>
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 max-w-xl mx-auto lg:mx-0">
                {valuePoints.map((point) => (
                  <div
                    key={point}
                    className="flex items-center gap-2 rounded-lg bg-white px-4 py-3 shadow-sm text-sm text-slate-800 dark:bg-slate-900 dark:text-slate-200"
                  >
                    <svg
                      className="h-5 w-5 text-cyan-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {point}
                  </div>
                ))}
              </div>
            </div>

            {/* right column: screenshot */}
            <div className="flex justify-center lg:justify-end">
              <Image
                src="/compiler-preview.svg"
                alt="Compiler preview"
                width={600}
                height={360}
                className="w-full max-w-md rounded-xl shadow-lg animate-fade-in"
              />
            </div>
          </div>
        </div>
      </section>

      {/* trust banner */}
      <div className="bg-slate-100 dark:bg-slate-800 py-4">
        <p className="text-center text-sm text-slate-700 dark:text-slate-300">
          Trusted by <strong>20,000+</strong> developers and students worldwide
        </p>
      </div>

      {/* featured topics */}
      <section className="mx-auto w-full max-w-[1500px] px-3 py-14 sm:px-4">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 text-center">
          Popular Tutorials
        </h2>
        <p className="mt-2 text-center text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
          Jump straight into the most requested JavaScript topics.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: 'Arrays', href: '/javascript/arrays' },
            { title: 'Functions', href: '/javascript/functions' },
            { title: 'Promises', href: '/javascript/promises' },
          ].map((topic) => (
            <Link
              key={topic.href}
              href={topic.href}
              className="group block rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-slate-700 dark:bg-slate-900"
            >
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                {topic.title}
              </h3>
              <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
                Detailed tutorials with examples and interactive code.
              </p>
              <span className="mt-4 inline-block text-sm font-semibold text-cyan-700 group-hover:underline">
                Explore →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section id="tools" className="mx-auto w-full max-w-[1500px] px-3 py-10 sm:px-4 sm:py-14">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Compiler and Tool Pages</h2>
        <p className="mt-2 max-w-3xl text-slate-700 dark:text-slate-300">
          Open any tool directly from the image cards.
        </p>

        <div className="mt-5 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 md:mt-8 md:grid md:gap-4 md:overflow-visible md:pb-0 md:snap-none md:grid-cols-2 xl:grid-cols-5">
          {toolCards.map((tool) => (
            <Link
              key={tool.title}
              href={tool.href}
              className="group min-w-[84%] snap-start overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-700 dark:bg-slate-900 md:min-w-0"
            >
              <Image
                src={tool.image}
                alt={`${tool.title} preview`}
                width={640}
                height={360}
                className="h-auto w-full border-b border-slate-200 dark:border-slate-700"
              />
              <div className="p-4">
                <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">{tool.title}</h3>
                <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">{tool.description}</p>
                <span className="mt-3 inline-flex text-sm font-semibold text-cyan-700 group-hover:underline">Open Tool</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-900/70">
        <div className="mx-auto w-full max-w-[1500px] px-3 py-10 sm:px-4 sm:py-14">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">How It Works</h2>
          <p className="mt-2 max-w-3xl text-slate-700 dark:text-slate-300">
            Simple workflow for new users and learners.
          </p>
          <div className="mt-4 space-y-2 sm:hidden">
            {quickStartSteps.map((step, idx) => (
              <div key={step} className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
                <span className="mr-2 font-semibold text-cyan-700">Step {idx + 1}</span>
                {step}
              </div>
            ))}
          </div>
          <div className="mt-6 hidden gap-4 sm:grid md:grid-cols-2 lg:grid-cols-4">
            {quickStartSteps.map((step, idx) => (
              <article
                key={step}
                className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700">Step {idx + 1}</p>
                <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">{step}</p>
              </article>
            ))}
          </div>
          <div className="mt-5 rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900">
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Need formatted data and pattern checks? Use{" "}
              <Link href="/formatter/online-compiler" className="font-semibold text-cyan-700 hover:underline">
                Formatter
              </Link>{" "}
              and{" "}
              <Link href="/regex/online-compiler" className="font-semibold text-cyan-700 hover:underline">
                Regex Tester
              </Link>{" "}
              with your compiler workflow.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1500px] px-3 py-10 sm:px-4 sm:py-14">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Tutorials</h2>
        <p className="mt-2 max-w-3xl text-slate-700 dark:text-slate-300">
          Start learning directly on compiler pages with topic-wise explanations and code.
        </p>
        <div className="mt-5 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 md:mt-6 md:grid md:gap-4 md:overflow-visible md:pb-0 md:snap-none md:grid-cols-3">
          {tutorials.map((item) => (
            <article key={item.title} className="min-w-[88%] snap-start rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900 md:min-w-0 md:p-5">
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{item.title}</h3>
                {item.comingSoon ? (
                  <span className="rounded-full border border-amber-300 bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-800 dark:border-amber-700 dark:bg-amber-900/40 dark:text-amber-200">
                    Coming Soon
                  </span>
                ) : null}
              </div>
              <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">{item.description}</p>
              {item.href ? (
                <Link href={item.href} className="mt-3 inline-flex text-sm font-semibold text-cyan-700 hover:underline">
                  Start Tutorial
                </Link>
              ) : (
                <span className="mt-3 inline-flex cursor-not-allowed text-sm font-semibold text-slate-500 dark:text-slate-400">
                  Coming Soon
                </span>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1500px] px-3 py-10 sm:px-4 sm:py-14">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Frequently Asked Questions</h2>
        <div className="mt-5 space-y-3 md:mt-6 md:grid md:gap-4 md:space-y-0 md:grid-cols-3">
          {homeFaq.map((item) => (
            <article key={item.q} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{item.q}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300">{item.a}</p>
            </article>
          ))}
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
