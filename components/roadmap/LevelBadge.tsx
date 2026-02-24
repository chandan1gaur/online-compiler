import type { RoadmapLevel } from "@/data/javascriptRoadmap";
import { roadmapLevelMeta } from "@/data/javascriptRoadmap";

type Props = {
  level: RoadmapLevel;
};

export default function LevelBadge({ level }: Props) {
  const meta = roadmapLevelMeta[level];

  return <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${meta.classes}`}>{meta.label}</span>;
}
