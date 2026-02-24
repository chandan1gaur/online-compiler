import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "JavaScript Async Await Tutorial",
  description:
    "Deep tutorial on async await with sequential vs parallel execution, error handling, and production-safe patterns.",
  alternates: { canonical: "/javascript/async-await" },
};

export default function JavascriptAsyncAwaitPage() {
  return (
    <JsTutorialTemplate
      title="JavaScript Async Await: From Basics to Production Patterns"
      intro="async/await makes asynchronous code easier to read and maintain. It is built on promises and is widely used in modern JavaScript."
      why="Most apps depend on async operations such as API calls and storage reads. Async/await clarity reduces error-prone callback chains."
      sections={[
        {
          heading: "Core Async Await Rules",
          paragraphs: [
            "An async function always returns a promise.",
            "await pauses inside async functions until promise settles. Rejections throw errors at await line.",
            "Use try/catch for explicit error handling and predictable user-facing behavior.",
          ],
        },
        {
          heading: "Sequential vs Parallel Execution",
          paragraphs: [
            "Sequential await is readable and best when second task depends on first output.",
            "If tasks are independent, Promise.all should be preferred for parallel speed.",
          ],
        },
      ]}
      examples={[
        {
          title: "Sequential Flow with Try/Catch",
          code: `async function loadUserPosts(userId) {
  try {
    const userRes = await fetch("https://jsonplaceholder.typicode.com/users/" + userId);
    const user = await userRes.json();

    const postRes = await fetch("https://jsonplaceholder.typicode.com/posts?userId=" + userId);
    const posts = await postRes.json();

    console.log(user.name, posts.length);
  } catch (error) {
    console.error("Load failed:", error.message);
  }
}

loadUserPosts(1);`,
          explanation: "Readable flow where the second request depends on userId.",
        },
        {
          title: "Parallel with Promise.all",
          code: `async function loadDashboard() {
  try {
    const [usersRes, postsRes] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users"),
      fetch("https://jsonplaceholder.typicode.com/posts"),
    ]);
    const [users, posts] = await Promise.all([usersRes.json(), postsRes.json()]);
    console.log(users.length, posts.length);
  } catch (error) {
    console.error("Dashboard error:", error.message);
  }
}

loadDashboard();`,
          explanation: "Parallel requests reduce total waiting time for independent calls.",
        },
        {
          title: "Safe Fallback Return",
          code: `async function loadConfig() {
  try {
    const res = await fetch("/api/config");
    if (!res.ok) throw new Error("Config request failed");
    return await res.json();
  } catch {
    return { theme: "light", beta: false };
  }
}

loadConfig().then(console.log);`,
          explanation: "Fallback patterns avoid complete UI breakage.",
        },
      ]}
      mistakes={[
        {
          title: "await outside async function",
          fix: "Wrap logic in async function or supported top-level module context.",
        },
        {
          title: "Missing try/catch for awaited calls",
          fix: "Use try/catch or handle rejection with .catch.",
        },
        {
          title: "Sequential awaits for independent tasks",
          fix: "Use Promise.all when tasks do not depend on each other.",
        },
      ]}
      faqs={[
        {
          q: "Is async/await better than promises?",
          a: "It is usually easier to read. Under the hood it still uses promises.",
        },
        {
          q: "Can I use await inside for loop?",
          a: "Yes, but execution becomes sequential. Use Promise.all for parallel behavior where safe.",
        },
        {
          q: "What happens when awaited promise rejects?",
          a: "An error is thrown at await line and should be handled in try/catch.",
        },
        {
          q: "Should async functions always return data?",
          a: "They return promises by default; return explicit data shape for consistency.",
        },
      ]}
      related={[
        { label: "Promises", href: "/javascript/promises" },
        { label: "Array Methods", href: "/javascript/array-methods" },
        { label: "Interview Questions", href: "/javascript/interview-questions" },
        { label: "JavaScript Compiler", href: "/javascript/online-compiler" },
      ]}
    />
  );
}
