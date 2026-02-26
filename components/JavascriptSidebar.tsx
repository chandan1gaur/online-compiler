"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { javascriptRoadmapSections, javascriptStartHere, roadmapLevelMeta } from "@/data/javascriptRoadmap";

function getDefaultOpenSections(pathname: string) {
  return javascriptRoadmapSections
    .filter((section) => section.topics.some((topic) => topic.href === pathname))
    .map((section) => section.id);
}

export default function JavascriptSidebar() {
  const pathname = usePathname();
  const [openSectionIds, setOpenSectionIds] = useState<number[]>(() => getDefaultOpenSections(pathname));

  const toggleSection = (id: number) => {
    setOpenSectionIds((current) => (current.includes(id) ? current.filter((item) => item !== id) : [...current, id]));
  };

  return (
    <aside className="max-h-[calc(100vh-6.5rem)] overflow-y-auto rounded-xl border border-slate-200 bg-white p-4 pr-2 dark:border-slate-800 dark:bg-slate-950">
      <p className="text-sm font-bold text-slate-900 dark:text-slate-100">JavaScript Tutorial Index</p>
      <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">Beginner to advanced roadmap</p>

      <nav className="mt-4 space-y-4" aria-label="JavaScript tutorial navigation and roadmap">
        <section>
          <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-500">Start Here</h2>
          <ul className="mt-2 space-y-1">
            {javascriptStartHere
              .filter((topic): topic is { title: string; href: string } => Boolean(topic.href))
              .map((item) => {
                const active = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`block rounded-md px-2 py-1.5 text-sm transition ${
                        active
                          ? "bg-cyan-100 text-cyan-800 dark:bg-cyan-950/50 dark:text-cyan-200"
                          : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-900"
                      }`}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
          </ul>
        </section>

        <section>
          <h2 className="text-xs font-semibold uppercase tracking-wide text-slate-500">Roadmap Categories</h2>
          <ul className="mt-2 space-y-2">
            {javascriptRoadmapSections.map((section) => {
              const isOpen = openSectionIds.includes(section.id);
              const levelMeta = roadmapLevelMeta[section.level];

              return (
                <li key={section.id} className="rounded-lg border border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/50">
                  <button
                    type="button"
                    onClick={() => toggleSection(section.id)}
                    className="flex w-full items-center justify-between gap-2 rounded-lg px-2 py-2 text-left hover:bg-slate-100 dark:hover:bg-slate-900"
                    aria-expanded={isOpen}
                    aria-controls={`roadmap-section-${section.id}`}
                  >
                    <div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                        {section.id}. {section.title}
                      </p>
                      <p className={`mt-1 inline-flex rounded-full px-2 py-0.5 text-[11px] font-medium ${levelMeta.classes}`}>
                        {levelMeta.label}
                      </p>
                    </div>
                    <span className="text-xs text-slate-600 dark:text-slate-400">{isOpen ? "Hide" : "Show"}</span>
                  </button>

                  {isOpen ? (
                    <ul id={`roadmap-section-${section.id}`} className="space-y-1 border-t border-slate-200 p-2 dark:border-slate-800">
                      {section.topics.map((topic, index) => {
                        if (topic.href) {
                          const isFundamentalsSection = section.id === 1;
                          const targetHref = isFundamentalsSection ? topic.href : "/javascript/coming-soon";
                          const active = isFundamentalsSection
                            ? pathname === targetHref
                            : pathname === "/javascript/coming-soon";
                          return (
                            <li key={`${section.id}-${topic.title}-${index}`}>
                              <Link
                                href={targetHref}
                                className={`block rounded-md px-2 py-1.5 text-sm transition ${
                                  active
                                    ? "bg-cyan-100 text-cyan-800 dark:bg-cyan-950/50 dark:text-cyan-200"
                                    : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-900"
                                }`}
                              >
                                {topic.title}
                              </Link>
                            </li>
                          );
                        }

                        return (
                          <li key={`${section.id}-${topic.title}-${index}`}>
                            <span className="block rounded-md px-2 py-1.5 text-sm text-slate-600 dark:text-slate-400">{topic.title}</span>
                          </li>
                        );
                      })}
                    </ul>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </section>
      </nav>
    </aside>
  );
}
