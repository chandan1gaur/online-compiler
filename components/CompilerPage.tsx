import Home from "@/components/Home";

type CompilerPageProps = {
  language: "html" | "javascript";
};

export default function CompilerPage({ language }: CompilerPageProps) {
  const isHtml = language === "html";

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
    </section>
  );
}
