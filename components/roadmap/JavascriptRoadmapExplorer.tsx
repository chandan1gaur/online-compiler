"use client";

import { useMemo, useState } from "react";
import type { RoadmapLevel } from "@/data/javascriptRoadmap";
import { javascriptRoadmapSections, javascriptRoadmapTopicCount } from "@/data/javascriptRoadmap";
import RoadmapSectionCard from "@/components/roadmap/RoadmapSectionCard";

const allLevels: Array<RoadmapLevel | "all"> = ["all", "beginner", "intermediate", "advanced"];

export default function JavascriptRoadmapExplorer() {
  const [query, setQuery] = useState("");
  const [level, setLevel] = useState<RoadmapLevel | "all">("all");

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();

    return javascriptRoadmapSections
      .filter((section) => (level === "all" ? true : section.level === level))
      .map((section) => {
        if (!term) return section;
        const matchesSection = section.title.toLowerCase().includes(term);
        const topics = section.topics.filter((topic) => topic.title.toLowerCase().includes(term));
        if (matchesSection) return section;
        return { ...section, topics };
      })
      .filter((section) => section.topics.length > 0);
  }, [level, query]);

  return (
    <section className="w-full">
      <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
          JavaScript Roadmap
        </h1>
        <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
          Single-source roadmap for beginner to advanced JavaScript. Add or edit topics once in `data/javascriptRoadmap.ts`.
        </p>

        <div className="mt-4 grid gap-3 md:grid-cols-[1fr_auto]">
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search sections or topics"
            className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-cyan-500 focus:ring-2 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
          />
          <div className="flex flex-wrap gap-2">
            {allLevels.map((item) => {
              const isActive = item === level;
              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => setLevel(item)}
                  className={`rounded-md border px-3 py-2 text-sm font-medium ${
                    isActive
                      ? "border-cyan-700 bg-cyan-700 text-white"
                      : "border-slate-300 bg-white text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
                  }`}
                >
                  {item === "all" ? "All Levels" : item[0].toUpperCase() + item.slice(1)}
                </button>
              );
            })}
          </div>
        </div>

        <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
          {javascriptRoadmapSections.length} modules, {javascriptRoadmapTopicCount} topics total
        </p>
      </div>

      <div className="mt-6 space-y-4">
        {filtered.length > 0 ? (
          filtered.map((section) => <RoadmapSectionCard key={section.id} section={section} />)
        ) : (
          <p className="rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
            No modules matched your search/filter.
          </p>
        )}
      </div>
    </section>
  );
}
