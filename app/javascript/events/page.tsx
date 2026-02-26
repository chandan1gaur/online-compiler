import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "JavaScript Events Tutorial",
  description:
    "Master JavaScript events, event listeners, bubbling, delegation, and form handling with examples.",
  keywords: [
    "javascript events",
    "event handling",
    "dom events",
    "bubbling delegation",
    "js tutorial",
  ],
  alternates: { canonical: "/javascript/events" },
};

export default function JavascriptEventsPage() {
  return (
    <JsTutorialTemplate
      title="JavaScript Events: Listeners, Bubbling, and Delegation"
      intro="Events connect user actions with JavaScript logic. Reliable event handling is key to interactive applications."
      why="Poor event handling causes duplicate listeners, memory leaks, and difficult-to-debug UI behavior."
      sections={[
        {
          heading: "Event Listeners and Event Object",
          paragraphs: [
            "Use addEventListener for modular event registration and cleaner separation of concerns.",
            "Event object provides details like target, key, clientX, preventDefault, and stopPropagation.",
            "Always remove listeners when required in long-lived components to avoid leaks.",
          ],
        },
        {
          heading: "Bubbling and Event Delegation",
          paragraphs: [
            "Events bubble from child to parent unless propagation is stopped.",
            "Delegation attaches one listener to parent and handles child interactions efficiently.",
            "Delegation is useful for dynamic lists where child nodes are added/removed at runtime.",
          ],
        },
      ]}
      examples={[
        {
          title: "Basic Click Listener",
          code: `const btn = document.querySelector("#saveBtn");
btn?.addEventListener("click", (event) => {
  console.log("Clicked:", event.type);
});`,
          explanation: "Core listener setup for interaction handling.",
        },
        {
          title: "Form Submit with preventDefault",
          code: `const form = document.querySelector("#signupForm");
form?.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Form validation and submit logic here");
});`,
          explanation: "prevents full page reload for custom submit flow.",
        },
        {
          title: "Event Delegation on List",
          code: `const list = document.querySelector("#todoList");
list?.addEventListener("click", (e) => {
  const target = e.target as HTMLElement;
  if (target.matches("button.remove")) {
    target.closest("li")?.remove();
  }
});`,
          explanation: "Single parent listener handles all current/future child buttons.",
        },
      ]}
      mistakes={[
        {
          title: "Attaching many duplicate listeners",
          fix: "Use delegation or ensure listener registration happens once.",
        },
        {
          title: "Ignoring event propagation behavior",
          fix: "Understand bubbling/capturing and stop propagation only when needed.",
        },
        {
          title: "Not cleaning listeners in dynamic UIs",
          fix: "Remove listeners during teardown to avoid memory and behavior issues.",
        },
      ]}
      faqs={[
        {
          q: "What is event bubbling?",
          a: "It is event propagation from target element up through parent elements.",
        },
        {
          q: "When should I use event delegation?",
          a: "Use it for large or dynamic lists to reduce listeners and improve performance.",
        },
        {
          q: "Difference between preventDefault and stopPropagation?",
          a: "preventDefault blocks default browser action; stopPropagation blocks event travel in DOM.",
        },
        {
          q: "Can one element have multiple listeners for same event?",
          a: "Yes, and they execute in registration order unless removed.",
        },
      ]}
      related={[
        { label: "DOM Manipulation", href: "/javascript/dom-manipulation" },
        { label: "this Keyword", href: "/javascript/this-keyword" },
        { label: "JavaScript Compiler", href: "/javascript/online-compiler" },
      ]}
    />
  );
}
