import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "Comments in JavaScript (Complete Guide)",
  description:
    "Learn single-line comments, multi-line comments, and JSDoc in JavaScript with best practices, common mistakes, and real-world examples.",
  keywords: [
    "comments in javascript",
    "javascript single line comment",
    "javascript multiline comment",
    "javascript jsdoc",
    "javascript documentation comments",
    "javascript comment best practices",
    "learn javascript comments",
  ],
  openGraph: {
    title: "Comments in JavaScript (Complete Guide)",
    description:
      "Learn single-line comments, multi-line comments, and JSDoc in JavaScript with best practices, common mistakes, and real-world examples.",
    url: "/javascript/comments-in-javascript",
    type: "article",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Comments in JavaScript (Complete Guide)",
    description:
      "Learn single-line comments, multi-line comments, and JSDoc in JavaScript with best practices, common mistakes, and real-world examples.",
    images: ["/og-image.svg"],
  },
  alternates: { canonical: "/javascript/comments-in-javascript" },
};

export default function CommentsInJavascriptPage() {
  return (
    <JsTutorialTemplate
      title="Comments in JavaScript (Complete Guide)"
      intro="Comments in JavaScript are non-executable lines used to explain, document, or temporarily disable code. They are ignored by the JavaScript engine but are essential for readability, maintainability, and collaboration."
      why="Whether you build small scripts or large applications in React/Next.js, effective comments are a professional habit that improves team velocity and code clarity."
      sections={[
        {
          heading: "What Are Comments in JavaScript?",
          paragraphs: ["A comment is text in code that the engine ignores during execution."],
          bullets: [
            "Explain what code does",
            "Describe logic and intent",
            "Document functions/modules",
            "Help other developers understand implementation",
            "Temporarily disable lines during debugging",
          ],
        },
        {
          heading: "Types of Comments in JavaScript",
          paragraphs: ["JavaScript supports three main comment styles:"],
          bullets: [
            "Single-line comments (//)",
            "Multi-line comments (/* */)",
            "Documentation comments (JSDoc: /** */)",
          ],
        },
        {
          heading: "Single-Line Comments (//)",
          paragraphs: ["Single-line comments begin with // and apply to the rest of that line."],
          bullets: [
            "Use for quick notes",
            "Use for one-line explanations",
            "Useful during fast debugging",
          ],
        },
        {
          heading: "Multi-Line Comments (/* */)",
          paragraphs: ["Multi-line comments span across lines and are useful for longer descriptions."],
          bullets: [
            "Use for detailed explanation",
            "Use for temporarily commenting blocks",
            "Always close the comment properly",
          ],
        },
        {
          heading: "Documentation Comments (JSDoc)",
          paragraphs: [
            "JSDoc comments provide structured metadata for functions/classes and improve tooling support in editors.",
          ],
          bullets: [
            "Better IntelliSense and type hints",
            "Auto-generated documentation support",
            "High value in larger team codebases",
          ],
        },
        {
          heading: "Why Comments Are Important",
          paragraphs: [],
          bullets: [
            "Improve readability",
            "Help during debugging",
            "Improve team collaboration",
            "Capture business logic context",
          ],
        },
        {
          heading: "Keyboard Shortcuts (VS Code)",
          paragraphs: [],
          bullets: [
            "Single-line comment: Ctrl + / (Windows), Cmd + / (Mac)",
            "Multi-line comment: Shift + Alt + A (selected lines)",
          ],
        },
        {
          heading: "Best Practices for Writing Comments",
          paragraphs: [],
          bullets: [
            "Write meaningful comments, not obvious ones",
            "Explain why, not only what",
            "Keep comments updated with code changes",
            "Use clear grammar and concise language",
            "Document complex logic and business rules",
          ],
        },
        {
          heading: "When Not to Use Comments",
          paragraphs: [
            "Avoid commenting obvious lines that are already clear from good naming and structure.",
            "Prefer expressive code first, then comments where necessary.",
          ],
        },
        {
          heading: "Common Mistakes with Comments",
          paragraphs: [],
          bullets: [
            "Forgetting to close multi-line comments",
            "Leaving outdated comments after refactors",
            "Over-commenting every line",
            "Commenting broken code instead of fixing root cause",
          ],
        },
        {
          heading: "Summary",
          paragraphs: [
            "Comments do not affect execution, but they improve readability, debugging, collaboration, and documentation quality.",
            "Three key styles: single-line (//), multi-line (/* */), and JSDoc (/** */).",
            "Mature developers prioritize clear code and add comments where they bring real value.",
          ],
        },
      ]}
      examples={[
        {
          title: "Single-Line Comment",
          code: `// This is a single-line comment
console.log("Hello World"); // Prints greeting message

let total = 100; // Initial total amount`,
          explanation: "Everything after // on the same line is ignored by JavaScript.",
        },
        {
          title: "Multi-Line Comment",
          code: `/*
  This is a multi-line comment.
  It can span multiple lines.
*/
console.log("Learning JavaScript");

/*
  Calculate final price
  after applying discount and tax
*/
let finalPrice = price - discount + tax;`,
          explanation: "Use this format for longer explanations or temporary block-level disabling.",
        },
        {
          title: "JSDoc Comment",
          code: `/**
 * Adds two numbers
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function add(a, b) {
  return a + b;
}`,
          explanation: "JSDoc improves editor hints and documentation quality in professional projects.",
        },
        {
          title: "Professional Real-World Example",
          code: `"use strict";

/**
 * Calculates discount based on user type
 * @param {string} userType
 * @param {number} price
 * @returns {number}
 */
function calculateDiscount(userType, price) {
  // Premium users get 20% discount
  if (userType === "premium") {
    return price * 0.8;
  }

  // Regular users get 10% discount
  return price * 0.9;
}`,
          explanation: "Demonstrates strict mode, JSDoc, and meaningful logic comments together.",
        },
      ]}
      mistakes={[
        {
          title: "Commenting obvious code",
          fix: "Prefer expressive naming and clean structure; comment only where extra context is needed.",
        },
        {
          title: "Outdated comments after code changes",
          fix: "Update comments during refactors to avoid misleading documentation.",
        },
        {
          title: "Unclosed block comment",
          fix: "Always close /* ... */ properly to avoid syntax errors.",
        },
      ]}
      faqs={[
        {
          q: "Do comments affect JavaScript execution speed?",
          a: "No. Comments are ignored by the engine and do not execute.",
        },
        {
          q: "Should I comment every line of code?",
          a: "No. Comment intent and complex logic, not obvious statements.",
        },
        {
          q: "When should I use JSDoc?",
          a: "Use JSDoc for shared modules, utility functions, and larger codebases where API clarity matters.",
        },
        {
          q: "Can comments help during debugging?",
          a: "Yes. Temporarily disabling lines and adding context comments can speed up debugging.",
        },
      ]}
      related={[
        { label: "JavaScript Syntax", href: "/javascript/javascript-syntax" },
        { label: "Writing First Program", href: "/javascript/writing-your-first-javascript-program" },
        { label: "Functions", href: "/javascript/functions" },
        { label: "How JavaScript Works", href: "/javascript/how-javascript-works" },
        { label: "JavaScript Compiler", href: "/javascript/online-compiler" },
      ]}
    />
  );
}
