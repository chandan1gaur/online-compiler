import { javascriptRoadmapSections, javascriptStartHere } from "@/data/javascriptRoadmap";

export type TutorialNavItem = {
  label: string;
  href: string;
};

export type TutorialNavGroup = {
  title: string;
  items: TutorialNavItem[];
};

const publishedLessons: TutorialNavItem[] = Array.from(
  new Map(
    javascriptRoadmapSections
      .flatMap((section) => section.topics)
      .filter((topic): topic is { title: string; href: string } => Boolean(topic.href))
      .map((topic) => [topic.href, { label: topic.title, href: topic.href }])
  ).values()
);

const roadmapModules: TutorialNavItem[] = javascriptRoadmapSections.map((section) => ({
  label: `${section.id}. ${section.title}`,
  href: `/javascript#module-${section.id}`,
}));

export const javascriptNav: TutorialNavGroup[] = [
  {
    title: "Start Here",
    items: javascriptStartHere
      .filter((topic): topic is { title: string; href: string } => Boolean(topic.href))
      .map((topic) => ({ label: topic.title, href: topic.href })),
  },
  { title: "Published Lessons", items: publishedLessons },
  { title: "Roadmap Modules", items: roadmapModules },
];
