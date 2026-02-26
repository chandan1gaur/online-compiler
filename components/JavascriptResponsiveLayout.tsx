"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import type { ReactNode } from "react";
import JavascriptSidebar from "@/components/JavascriptSidebar";
import { javascriptRoadmapSections, javascriptStartHere } from "@/data/javascriptRoadmap";

function getDefaultOpenSections(pathname: string) {
  const match = javascriptRoadmapSections.find((section) => section.topics.some((topic) => topic.href === pathname));
  return match ? [match.id] : [1];
}

export default function JavascriptResponsiveLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [openSectionIds, setOpenSectionIds] = useState<number[]>(() => getDefaultOpenSections(pathname));

  const startHereLinks = useMemo(
    () => javascriptStartHere.filter((topic): topic is { title: string; href: string } => Boolean(topic.href)),
    []
  );

  const toggleSection = (id: number) => {
    setOpenSectionIds((current) => (current.includes(id) ? current.filter((item) => item !== id) : [...current, id]));
  };

  const getTopicHref = (sectionId: number, title: string, href?: string) => {
    if (sectionId === 1 && href) return href;
    return "/javascript/coming-soon";
  };

  return (
    <section className="mx-auto w-full max-w-[1700px] px-3 py-6 sm:px-4 sm:py-8">
      <div className="mb-2 lg:hidden">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-300 bg-white text-xl font-semibold text-slate-800 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
          aria-label="Open JavaScript menu"
          aria-expanded={isOpen}
          aria-controls="js-mobile-sidebar"
        >
          &#9776;
        </button>
      </div>

      {isOpen ? (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true">
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/35"
            aria-label="Close JavaScript menu"
          />

          <div
            id="js-mobile-sidebar"
            className="relative mr-auto h-full w-[72%] min-w-[280px] max-w-[360px] overflow-y-auto border-r border-slate-300 bg-white"
            onClickCapture={(event) => {
              const target = event.target as HTMLElement;
              if (target.closest("a")) setIsOpen(false);
            }}
          >
            <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-4xl leading-none text-slate-700"
                aria-label="Close menu"
              >
                &times;
              </button>
              <p className="text-base font-semibold text-slate-900">JavaScript Menu</p>
            </div>

            <div className="border-b border-slate-200 px-4 py-3">
              {startHereLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block rounded px-1 py-2 text-sm ${
                    pathname === item.href ? "font-semibold text-slate-900" : "text-slate-700"
                  }`}
                >
                  {item.title}
                </Link>
              ))}
            </div>

            <ul className="pb-3">
              {javascriptRoadmapSections.map((section) => {
                const isOpenSection = openSectionIds.includes(section.id);
                return (
                  <li key={section.id} className="border-b border-slate-200">
                    <button
                      type="button"
                      onClick={() => toggleSection(section.id)}
                      className="flex w-full items-center justify-between px-4 py-4 text-left text-[22px] font-medium text-slate-800"
                      aria-expanded={isOpenSection}
                      aria-controls={`mobile-section-${section.id}`}
                    >
                      <span>{section.title}</span>
                      <span className="text-xl text-slate-700">{isOpenSection ? "⌃" : "⌄"}</span>
                    </button>

                    {isOpenSection ? (
                      <ul id={`mobile-section-${section.id}`} className="border-t border-slate-100 bg-slate-50">
                        {section.topics.map((topic, index) => {
                          const href = getTopicHref(section.id, topic.title, topic.href);
                          const active = section.id === 1 ? pathname === href : pathname === "/javascript/coming-soon";

                          return (
                            <li key={`${section.id}-${topic.title}-${index}`}>
                              <Link
                                href={href}
                                className={`block px-5 py-3 text-base ${active ? "bg-cyan-100 text-cyan-800" : "text-slate-700"}`}
                              >
                                {topic.title}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    ) : null}
                  </li>
                );
              })}
            </ul>

            <div className="px-4 py-4">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-full rounded-md border border-slate-300 bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700"
                aria-label="Close menu"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      ) : null}

      <div className="grid gap-4 lg:grid-cols-[280px_1fr] xl:grid-cols-[310px_1fr]">
        <div className="hidden lg:block lg:sticky lg:top-20 lg:h-fit">
          <JavascriptSidebar />
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-950 sm:p-4">
          {children}
        </div>
      </div>
    </section>
  );
}
