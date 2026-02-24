import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "JavaScript Topic Coming Soon",
  description: "This JavaScript tutorial topic is coming soon.",
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: "JavaScript Topic Coming Soon",
    description: "This JavaScript tutorial topic is coming soon.",
    url: "/javascript/coming-soon",
    type: "website",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary",
    title: "JavaScript Topic Coming Soon",
    description: "This JavaScript tutorial topic is coming soon.",
    images: ["/og-image.svg"],
  },
  alternates: { canonical: "/javascript/coming-soon" },
};

type ComingSoonPageProps = {
  searchParams: Promise<{ topic?: string | string[] }>;
};

export default async function JavascriptComingSoonPage({ searchParams }: ComingSoonPageProps) {
  const params = await searchParams;
  const topic = Array.isArray(params.topic) ? params.topic[0] : params.topic;

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
      <p className="text-xs font-semibold uppercase tracking-wide text-amber-600 dark:text-amber-300">Coming Soon</p>
      <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">Topic in Progress</h1>
      <p className="mt-3 text-sm text-slate-700 dark:text-slate-300">
        {topic ? (
          <>
            <span className="font-semibold">{topic}</span> is being prepared and will be published soon.
          </>
        ) : (
          "This topic is being prepared and will be published soon."
        )}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        <Link
          href="/javascript"
          className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
        >
          Back to JavaScript
        </Link>
        <Link
          href="/javascript/online-compiler"
          className="rounded-md border border-cyan-600/60 bg-cyan-100 px-3 py-2 text-sm font-semibold text-cyan-800 hover:bg-cyan-200 dark:border-cyan-500/60 dark:bg-cyan-500/20 dark:text-cyan-200 dark:hover:bg-cyan-500/30"
        >
          Open Compiler
        </Link>
      </div>
    </section>
  );
}
