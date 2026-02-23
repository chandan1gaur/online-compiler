import type { Metadata } from "next";
import RegexPlayground from "@/components/RegexPlayground";

export const metadata: Metadata = {
  title: "Regex Tester and Parser Playground",
  description:
    "Test and debug regular expressions online with match lists, groups, and parsed JSON output in real time.",
  alternates: {
    canonical: "/regex",
  },
};

export default function RegexPage() {
  return <RegexPlayground />;
}
