import type { ReactNode } from "react";
import JavascriptSidebar from "@/components/JavascriptSidebar";

export default function JavascriptLayout({ children }: { children: ReactNode }) {
  return (
    <section className="mx-auto w-full max-w-[1700px] px-3 py-6 sm:px-4 sm:py-8">
      <div className="grid gap-4 lg:grid-cols-[280px_1fr] xl:grid-cols-[310px_1fr]">
        <div className="lg:sticky lg:top-20 lg:h-fit">
          <JavascriptSidebar />
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-950 sm:p-4">{children}</div>
      </div>
    </section>
  );
}
