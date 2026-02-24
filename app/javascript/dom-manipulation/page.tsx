import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "JavaScript DOM Manipulation Tutorial",
  description:
    "Learn DOM selection, updates, class handling, and dynamic rendering in JavaScript with examples.",
  alternates: { canonical: "/javascript/dom-manipulation" },
};

export default function JavascriptDomManipulationPage() {
  return (
    <JsTutorialTemplate
      title="JavaScript DOM Manipulation: Selecting, Updating, Rendering"
      intro="DOM manipulation lets JavaScript update page structure, styles, and content dynamically."
      why="Interactive websites rely on DOM operations for input handling, validation messages, and real-time UI updates."
      sections={[
        {
          heading: "Selecting Elements Safely",
          paragraphs: [
            "Use querySelector for single element and querySelectorAll for NodeList collections.",
            "Check for null before manipulating selected elements to prevent runtime errors.",
            "Prefer semantic selectors and data attributes for robust targeting.",
          ],
        },
        {
          heading: "Updating Content and Classes",
          paragraphs: [
            "Use textContent for plain text insertion and innerHTML only when trusted HTML is intended.",
            "ClassList API (add/remove/toggle/contains) is cleaner than manual className concatenation.",
            "Batch updates when possible to reduce layout thrashing in complex UI updates.",
          ],
        },
      ]}
      examples={[
        {
          title: "Query and Content Update",
          code: `const heading = document.querySelector("#title");
if (heading) {
  heading.textContent = "Updated from JavaScript";
}`,
          explanation: "textContent is safe for plain text updates.",
        },
        {
          title: "Class Toggle for Theme",
          code: `const btn = document.querySelector("#toggleBtn");
btn?.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});`,
          explanation: "classList toggle is a common and clean UI pattern.",
        },
        {
          title: "Render Dynamic List",
          code: `const list = document.querySelector("#skills");
const data = ["HTML", "CSS", "JavaScript"];
if (list) {
  list.innerHTML = data.map((item) => \`<li>\${item}</li>\`).join("");
}`,
          explanation: "Quick rendering pattern for small static-safe content.",
        },
      ]}
      mistakes={[
        {
          title: "Using innerHTML with untrusted data",
          fix: "Use textContent or sanitize inputs before HTML injection.",
        },
        {
          title: "Not checking element existence",
          fix: "Guard with null checks or optional chaining before mutation.",
        },
        {
          title: "Frequent style writes in loops",
          fix: "Batch changes with classes and minimal repaint triggers.",
        },
      ]}
      faqs={[
        {
          q: "querySelector or getElementById?",
          a: "Both are fine. querySelector is flexible with CSS selectors; getElementById is specific and simple for ID lookups.",
        },
        {
          q: "Is innerHTML always bad?",
          a: "No, but unsafe with untrusted input due to XSS risk.",
        },
        {
          q: "How to improve DOM update performance?",
          a: "Minimize frequent reflows, batch updates, and use classes instead of inline style changes.",
        },
        {
          q: "Should I use framework or vanilla DOM?",
          a: "For learning and small tools, vanilla is great. Larger apps often benefit from framework abstractions.",
        },
      ]}
      related={[
        { label: "Events", href: "/javascript/events" },
        { label: "Error Handling", href: "/javascript/error-handling" },
        { label: "JavaScript Compiler", href: "/javascript/online-compiler" },
      ]}
    />
  );
}
