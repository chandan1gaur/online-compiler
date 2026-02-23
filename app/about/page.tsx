import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Online Compiler",
  description:
    "Learn about Online Compiler, our mission, product goals, and how we support developers and learners.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">About Online Compiler</h1>
      <p className="mt-4 text-slate-700">
        Online Compiler is a browser-based coding tool that helps learners and developers write, test, and share
        frontend code quickly.
      </p>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Our Mission</h2>
        <p className="text-slate-700">
          We focus on fast access, simple workflows, and practical functionality so users can move from idea to running
          code in seconds.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Who Uses This Platform</h2>
        <p className="text-slate-700">
          Students, instructors, interviewers, and frontend engineers use Online Compiler for demos, rapid prototyping,
          and concept validation.
        </p>
      </section>

      <section className="mt-8 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Contact</h2>
        <p className="text-slate-700">
          Support: <a className="text-cyan-700 hover:underline" href="mailto:chandan2gaur@gmail.com">chandan2gaur@gmail.com</a>
        </p>
      </section>
    </main>
  );
}
