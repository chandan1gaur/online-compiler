import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "JavaScript Strings Tutorial",
  description:
    "Learn JavaScript string methods, template literals, slicing, searching, and text processing patterns.",
  keywords: [
    "javascript strings",
    "string methods",
    "template literals",
    "text processing",
    "js tutorial",
  ],
  alternates: { canonical: "/javascript/strings" },
};

export default function JavascriptStringsPage() {
  return (
    <JsTutorialTemplate
      title="JavaScript Strings: Methods, Templates, and Text Processing"
      intro="String handling is critical for form validation, parsing, search features, and output formatting."
      why="Most user data and API payload content are text-heavy. Robust string handling improves reliability and user experience."
      sections={[
        {
          heading: "String Basics and Template Literals",
          paragraphs: [
            "Strings are immutable in JavaScript. Methods return new strings rather than changing original values.",
            "Template literals with backticks simplify interpolation and multiline output.",
            "Use trim and normalization for user input before validation checks.",
          ],
        },
        {
          heading: "Common String Methods",
          paragraphs: [
            "Use includes, startsWith, and endsWith for quick checks.",
            "slice and substring extract portions of text for parsing logic.",
            "split and join convert between strings and arrays for transformation tasks.",
          ],
        },
      ]}
      examples={[
        {
          title: "Template Literal Output",
          code: `const name = "Chandan";
const score = 92;
const message = \`Student: \${name}, Score: \${score}\`;
console.log(message);`,
          explanation: "Template literals improve readability over string concatenation.",
        },
        {
          title: "Input Normalization",
          code: `const raw = "  JavaScript Tutorial  ";
const normalized = raw.trim().toLowerCase();
console.log(normalized); // javascript tutorial`,
          explanation: "Normalize user input before comparison and filtering.",
        },
        {
          title: "Parsing with split and join",
          code: `const csv = "html,css,javascript";
const skills = csv.split(",");
console.log(skills);
console.log(skills.join(" | "));`,
          explanation: "Useful for tag parsing and tokenization workflows.",
        },
      ]}
      mistakes={[
        {
          title: "Assuming string methods mutate original value",
          fix: "Assign method output to new variables.",
        },
        {
          title: "Skipping trim before validation",
          fix: "Trim input first to avoid false validation mismatches.",
        },
        {
          title: "Using regex for simple checks unnecessarily",
          fix: "Prefer includes/startsWith/endsWith for basic matching.",
        },
      ]}
      faqs={[
        {
          q: "Are JavaScript strings mutable?",
          a: "No. String operations return new strings.",
        },
        {
          q: "When should I use template literals?",
          a: "Use them for dynamic interpolation and multiline strings.",
        },
        {
          q: "slice vs substring difference?",
          a: "Both extract portions, but they handle negative indexes and argument order differently.",
        },
        {
          q: "How do I replace all occurrences?",
          a: "Use replaceAll for direct cases, or global regex with replace for advanced patterns.",
        },
      ]}
      related={[
        { label: "Regex Tester", href: "/regex/online-compiler" },
        { label: "Operators", href: "/javascript/operators" },
        { label: "Interview Questions", href: "/javascript/interview-questions" },
        { label: "JavaScript Compiler", href: "/javascript/online-compiler" },
      ]}
    />
  );
}
