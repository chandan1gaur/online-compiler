import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "Setting Up a JavaScript Development Environment (Complete Guide)",
  description:
    "Complete guide to setting up JavaScript for browser development, Node.js backend, VS Code, npm, Git, environment variables, and modern frontend tooling.",
  keywords: [
    "javascript development environment setup",
    "setup javascript",
    "install node js",
    "javascript setup for beginners",
    "vscode javascript setup",
    "npm setup",
    "next js environment setup",
  ],
  openGraph: {
    title: "Setting Up a JavaScript Development Environment (Complete Guide)",
    description:
      "Complete guide to setting up JavaScript for browser development, Node.js backend, VS Code, npm, Git, environment variables, and modern frontend tooling.",
    url: "/javascript/setting-up-javascript-environment",
    type: "article",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Setting Up a JavaScript Development Environment (Complete Guide)",
    description:
      "Complete guide to setting up JavaScript for browser development, Node.js backend, VS Code, npm, Git, environment variables, and modern frontend tooling.",
    images: ["/og-image.svg"],
  },
  alternates: { canonical: "/javascript/setting-up-javascript-environment" },
};

export default function SettingUpJavascriptEnvironmentPage() {
  return (
    <JsTutorialTemplate
      title="Setting Up a JavaScript Development Environment (Complete Guide)"
      intro="Setting up the right JavaScript environment is the first step toward becoming a productive developer. Whether you are building interactive websites, backend APIs, full-stack applications, or mobile apps, a proper setup helps you write, test, and debug efficiently."
      why="A clean and professional setup reduces friction, improves debugging speed, and prepares you for real production workflows."
      sections={[
        {
          heading: "Understanding Where JavaScript Runs",
          paragraphs: ["JavaScript runs in two primary environments, and your setup depends on what you want to build."],
          bullets: ["Browser: Frontend development", "Server (Node.js): Backend development"],
        },
        {
          heading: "Part 1: Browser Development Setup",
          paragraphs: ["This is the easiest starting path for beginners."],
          bullets: [
            "Install a modern browser (Chrome, Firefox, Edge). Chrome is commonly preferred for DevTools.",
            "Open Developer Tools (F12 or Right click -> Inspect) and use Console.",
            "Create index.html and run inline JavaScript to verify execution.",
            "Move scripts to external file (script.js) for clean project structure.",
          ],
        },
        {
          heading: "Part 2: Node.js Setup for Backend Development",
          paragraphs: ["If you want APIs, servers, or database-driven apps, install Node.js."],
          bullets: [
            "Install Node.js LTS from official Node.js website.",
            "Verify installation with: node -v and npm -v.",
            "Create app.js and run with: node app.js.",
            "Initialize project with npm init -y and install dependencies with npm install.",
          ],
        },
        {
          heading: "Understanding npm (Node Package Manager)",
          paragraphs: ["npm is included with Node.js and is used to install and manage dependencies."],
          bullets: [
            "Popular libraries and frameworks include Express.js, React, and Next.js.",
            "Since your project uses React/Next.js tooling, npm is core to daily development.",
          ],
        },
        {
          heading: "Part 3: Install a Professional Code Editor",
          paragraphs: ["Visual Studio Code is highly recommended for JavaScript development."],
          bullets: [
            "Free, lightweight, and highly customizable",
            "Recommended extensions: ES7+ React Snippets, Prettier, ESLint, GitLens",
          ],
        },
        {
          heading: "Part 4: Essential Professional Tools",
          paragraphs: ["Modern development also needs versioning and environment consistency tools."],
          bullets: [
            "Git for version control (verify with git --version).",
            "Package managers: npm, Yarn, pnpm.",
            "Node version managers: nvm (Mac/Linux), nvm-windows (Windows).",
          ],
        },
        {
          heading: "Part 5: Modern Frontend Project Setup",
          paragraphs: ["Production-grade frontend projects typically use framework scaffolding and tooling."],
          bullets: [
            "Create React app: npx create-react-app my-app",
            "Create Next.js app: npx create-next-app my-app",
            "Common build tools: Webpack, Vite",
            "Recommended stack: Node LTS, VS Code, Git, ESLint + Prettier, TypeScript, env configuration",
          ],
        },
        {
          heading: "Part 6: Environment Variables Setup",
          paragraphs: [
            "Environment variables keep sensitive values like API keys outside source code.",
          ],
          bullets: [
            "Create .env file and add keys (example: API_KEY=123456).",
            "Access in Node.js using process.env.API_KEY.",
            "In Next.js, public variables must use NEXT_PUBLIC_ prefix.",
          ],
        },
        {
          heading: "Part 7: Recommended Folder Structure",
          paragraphs: ["A clean structure improves maintainability and team collaboration."],
          bullets: ["project/", "src/", "public/", "package.json", ".env", "README.md"],
        },
        {
          heading: "Common Issues and Fixes",
          paragraphs: [],
          bullets: [
            "Node not recognized -> Restart system or check PATH configuration.",
            "npm install fails -> Run npm cache clean --force and retry.",
            "Port already in use -> Stop conflicting process or change app port.",
          ],
        },
        {
          heading: "Final Setup Checklist",
          paragraphs: [],
          bullets: [
            "Install a modern browser",
            "Install Node.js (LTS)",
            "Install Visual Studio Code",
            "Learn DevTools basics",
            "Initialize a Node project",
            "Use Git for version control",
            "Build small practice projects",
            "Explore React and Next.js",
          ],
        },
        {
          heading: "Final Thoughts",
          paragraphs: [
            "Browser JavaScript helps you build interactive user interfaces.",
            "Node.js lets you build scalable backend systems.",
            "Combined together, they enable full-stack JavaScript development with one language across the entire stack.",
          ],
        },
      ]}
      examples={[
        {
          title: "Browser Console Check",
          code: `console.log("Hello JavaScript!");`,
          explanation: "Run this in browser DevTools Console to verify JavaScript execution quickly.",
        },
        {
          title: "External Script Setup",
          code: `<!-- index.html -->
<script src="script.js"></script>

// script.js
console.log("External JS File Loaded");`,
          explanation: "Use external script files to keep code organized and scalable.",
        },
        {
          title: "Run JavaScript with Node.js",
          code: `// app.js
console.log("Running JS with Node!");

// terminal
node app.js`,
          explanation: "This confirms Node runtime setup for backend/server-side JavaScript.",
        },
        {
          title: "Environment Variable Example",
          code: `// .env
API_KEY=123456

// Node.js
console.log(process.env.API_KEY);

// Next.js (client-safe variable)
// NEXT_PUBLIC_API_KEY=123456`,
          explanation:
            "Use env files to manage configuration safely and avoid hardcoding secrets in source code.",
        },
      ]}
      mistakes={[
        {
          title: "Skipping tooling setup",
          fix: "Install Node LTS, VS Code, Git, and lint/format tools before large projects.",
        },
        {
          title: "Keeping all code inline in HTML",
          fix: "Move JavaScript to external files for maintainability.",
        },
        {
          title: "Hardcoding secrets in source code",
          fix: "Store keys in .env and use runtime environment variables.",
        },
      ]}
      faqs={[
        {
          q: "Do I need Node.js for frontend JavaScript?",
          a: "For plain browser scripts, no. For modern frameworks and build tooling, yes.",
        },
        {
          q: "Should I install Node.js Current or LTS?",
          a: "Use LTS for stability in most development and production workflows.",
        },
        {
          q: "Which editor is best for JavaScript?",
          a: "VS Code is a popular and practical choice with strong ecosystem support.",
        },
        {
          q: "Why are environment variables important?",
          a: "They keep sensitive configuration outside code and support safer deployment practices.",
        },
      ]}
      related={[
        { label: "Introduction to JavaScript", href: "/javascript" },
        { label: "How JavaScript Works", href: "/javascript/how-javascript-works" },
        { label: "Browser vs Node.js", href: "/javascript/javascript-in-browser-vs-nodejs" },
        { label: "JavaScript Compiler", href: "/javascript/online-compiler" },
      ]}
    />
  );
}
