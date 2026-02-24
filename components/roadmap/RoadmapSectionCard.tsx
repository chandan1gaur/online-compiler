import Link from "next/link";
import type { RoadmapSection } from "@/data/javascriptRoadmap";
import LevelBadge from "@/components/roadmap/LevelBadge";

type Props = {
  section: RoadmapSection;
};

export default function RoadmapSectionCard({ section }: Props) {
  return (
    <article id={`module-${section.id}`} className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900">
      <div className="flex flex-wrap items-center gap-2">
        <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">Module {section.id}</p>
        <LevelBadge level={section.level} />
      </div>
      <h2 className="mt-2 text-xl font-semibold text-slate-900 dark:text-slate-100">{section.title}</h2>
      <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{section.topics.length} topics</p>

      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
        {section.topics.map((topic) => (
          <li key={`${section.id}-${topic.title}`} className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-800">
            {topic.href ? (
              <Link href={topic.href} className="font-medium text-cyan-700 hover:underline dark:text-cyan-300">
                {topic.title}
              </Link>
            ) : (
              <span className="text-slate-700 dark:text-slate-200">
                {topic.title}
                <span className="ml-2 text-xs text-slate-500 dark:text-slate-400">(planned)</span>
              </span>
            )}
          </li>
        ))}
      </ul>
    </article>
  );
}
