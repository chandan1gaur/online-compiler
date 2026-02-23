import Link from "next/link";
import Home from "@/components/Home";

type CompilerPageProps = {
  language: "html" | "javascript";
};

type Topic = {
  title: string;
  description: string;
  code: string;
  takeaway: string;
};

type CompilerContent = {
  badge: string;
  title: string;
  intro: string;
  aboutTitle: string;
  aboutText: string;
  features: string[];
  steps: string[];
  exampleTitle: string;
  exampleCode: string;
  errorsTitle: string;
  errors: { title: string; fix: string }[];
  basicTopics: Topic[];
  advancedTopics: Topic[];
  faq: { q: string; a: string }[];
};

const htmlContent: CompilerContent = {
  badge: "HTML Coding Workspace",
  title: "HTML, CSS and JavaScript Compiler Online",
  intro:
    "Write markup, styles, and scripts together and preview output instantly. This page includes beginner and advanced HTML topics with practical code so learners can move from basics to real UI patterns.",
  aboutTitle: "About This HTML Compiler",
  aboutText:
    "This compiler gives you a browser-based frontend workspace where index.html, styles.css, and script.js are available together. It is ideal for testing layout ideas, learning semantic markup, and validating interaction snippets quickly.",
  features: [
    "Edit HTML, CSS, and JavaScript in one workspace",
    "Live preview for rapid visual feedback",
    "Download generated code output",
    "Useful for classes, tutorials, and UI experiments",
  ],
  steps: [
    "Write page structure in index.html.",
    "Add design rules in styles.css.",
    "Attach interactions in script.js.",
    "Press Run to render the latest output.",
  ],
  exampleTitle: "Starter Example: Semantic Article Card",
  exampleCode: `<article class=\"post\">\n  <h2>Build Responsive Components</h2>\n  <p>Practice semantic HTML with clean structure.</p>\n  <a href=\"#\">Read more</a>\n</article>\n\n<style>\n.post {\n  max-width: 420px;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 16px;\n  font-family: system-ui, sans-serif;\n}\n.post a { color: #0ea5e9; text-decoration: none; }\n</style>`,
  errorsTitle: "Common HTML/CSS/JS Errors and Fixes",
  errors: [
    {
      title: "Preview not updating",
      fix: "Click Run after edits and verify there are no syntax errors in script output.",
    },
    {
      title: "Styles not applied",
      fix: "Check class names and selector spelling. Confirm style rules target the correct element.",
    },
    {
      title: "Script logic failing",
      fix: "Use console logs and validate that queried DOM elements exist before accessing properties.",
    },
  ],
  basicTopics: [
    {
      title: "Semantic Layout Basics",
      description:
        "Use semantic tags to improve readability and accessibility. Search engines also understand structure better with meaningful tags.",
      code: `<header><h1>Online Compiler</h1></header>\n<main>\n  <section>\n    <h2>Welcome</h2>\n    <p>Learn frontend quickly.</p>\n  </section>\n</main>\n<footer>Copyright 2026</footer>`,
      takeaway: "Prefer header, main, section, article, and footer instead of generic div-only layouts.",
    },
    {
      title: "Forms and Basic Validation",
      description:
        "HTML form attributes provide immediate client-side checks before any backend integration.",
      code: `<form>\n  <label>Email</label>\n  <input type=\"email\" required placeholder=\"name@example.com\" />\n  <button type=\"submit\">Submit</button>\n</form>`,
      takeaway: "Use input types and required attributes to improve user experience quickly.",
    },
    {
      title: "Responsive Grid Introduction",
      description:
        "Build simple responsive cards using CSS Grid with auto-fit and minmax.",
      code: `<div class=\"grid\">\n  <div>Card 1</div><div>Card 2</div><div>Card 3</div>\n</div>\n<style>\n.grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));\n  gap: 12px;\n}\n.grid > div { padding: 10px; border: 1px solid #ddd; }\n</style>`,
      takeaway: "Auto-fit grids are a fast way to support mobile, tablet, and desktop layouts.",
    },
    {
      title: "DOM Click Interaction",
      description:
        "Connect a button with a DOM update using minimal JavaScript.",
      code: `<button id=\"countBtn\">Clicked 0 times</button>\n<script>\nlet count = 0;\nconst btn = document.getElementById('countBtn');\nbtn.addEventListener('click', () => {\n  count += 1;\n  btn.textContent = 'Clicked ' + count + ' times';\n});\n</script>`,
      takeaway: "Start with small event-driven interactions and grow complexity gradually.",
    },
  ],
  advancedTopics: [
    {
      title: "Accessible Modal Pattern",
      description:
        "A modal should manage keyboard focus and include ARIA attributes for better accessibility.",
      code: `<button id=\"open\">Open</button>\n<div id=\"modal\" role=\"dialog\" aria-modal=\"true\" hidden>\n  <p>Modal content</p>\n  <button id=\"close\">Close</button>\n</div>\n<script>\nconst modal = document.getElementById('modal');\nopen.onclick = () => modal.hidden = false;\nclose.onclick = () => modal.hidden = true;\n</script>`,
      takeaway: "Advanced UI patterns should include accessibility behavior, not only visuals.",
    },
    {
      title: "CSS Custom Properties and Theme Switch",
      description:
        "Use CSS variables for scalable design systems and dynamic theming.",
      code: `:root { --bg: #ffffff; --text: #0f172a; }\n[data-theme=\"dark\"] { --bg: #0f172a; --text: #e2e8f0; }\nbody { background: var(--bg); color: var(--text); }\n\n<button onclick=\"document.body.dataset.theme='dark'\">Dark</button>`,
      takeaway: "Variables reduce repetition and make large style updates safer.",
    },
    {
      title: "Component-style Reusability",
      description:
        "Create reusable UI blocks by templating repeated HTML and data mapping in script.",
      code: `const users = ['Asha', 'Ravi', 'Nina'];\nconst list = users.map((u) => \`<li class=\"user\">\${u}</li>\`).join('');\ndocument.body.innerHTML = \`<ul>\${list}</ul>\`;`,
      takeaway: "Template generation helps scale from static pages to dynamic interfaces.",
    },
    {
      title: "Performance Basics with Lazy Assets",
      description:
        "Improve page speed using image lazy loading and reduced script work on initial paint.",
      code: `<img src=\"hero.jpg\" alt=\"Hero\" loading=\"lazy\" />\n<script>\nwindow.addEventListener('load', () => {\n  // defer non-critical logic here\n});\n</script>`,
      takeaway: "Good performance improves both user experience and SEO signals.",
    },
  ],
  faq: [
    {
      q: "Can I run HTML, CSS, and JavaScript together?",
      a: "Yes. You can edit all three files and run them in the same live preview environment.",
    },
    {
      q: "Is this compiler free for learning web development?",
      a: "Yes. This tool is free for practice, learning, and frontend experimentation.",
    },
    {
      q: "Can I use this on mobile or tablet?",
      a: "Yes. The interface is responsive and works on desktop, tablet, and mobile screens.",
    },
  ],
};

const jsContent: CompilerContent = {
  badge: "JavaScript Playground",
  title: "JavaScript Compiler Online",
  intro:
    "Run JavaScript code online without local setup. This learning section covers core syntax, ES6 features, closures, promises, async/await, generators, throttling, and practical debugging patterns with example code.",
  aboutTitle: "About This JavaScript Compiler",
  aboutText:
    "This compiler focuses on fast JavaScript execution directly in the browser. It is useful for interview preparation, concept revision, and testing utility logic before moving code into larger applications. You can practice both beginner and advanced topics on the same page and compare output in real time.",
  features: [
    "Run JavaScript instantly in browser",
    "View runtime output and error messages",
    "Fast iteration with Ctrl/Cmd + Enter",
    "Download script file for reuse",
  ],
  steps: [
    "Select JavaScript mode.",
    "Write code in main.js.",
    "Click Run or press Ctrl/Cmd + Enter.",
    "Check output and fix errors quickly.",
  ],
  exampleTitle: "Starter Example: Score Summary",
  exampleCode: `const scores = [45, 78, 91, 60];\nconst passed = scores.filter((s) => s >= 60);\nconst summary = passed.map((s) => ({\n  score: s,\n  grade: s >= 90 ? 'A' : 'B'\n}));\n\nconsole.log(summary);`,
  errorsTitle: "Common JavaScript Errors and Fixes",
  errors: [
    {
      title: "Unexpected token",
      fix: "Check brackets, commas, and quotes near the reported line number.",
    },
    {
      title: "ReferenceError is not defined",
      fix: "Declare variables before usage and verify naming consistency.",
    },
    {
      title: "TypeError on method calls",
      fix: "Confirm value types before calling map, split, toLowerCase, or similar methods.",
    },
  ],
  basicTopics: [
    {
      title: "var, let, and const",
      description:
        "These three keywords define variable scope and mutability. Use const for fixed references, let for reassignment, and avoid var in modern code unless legacy behavior is required.",
      code: `var oldWay = 'function-scoped';\nlet counter = 1;\nconst appName = 'Online Compiler';\n\ncounter += 1;\nconsole.log(oldWay, counter, appName);`,
      takeaway: "Prefer const by default, use let for changing values, and limit var usage.",
    },
    {
      title: "Data Types and Type Checks",
      description:
        "Understanding string, number, boolean, object, and undefined helps you avoid TypeError issues while writing conditions and function logic.",
      code: `const user = 'Asha';\nconst score = 92;\nconst active = true;\nconst settings = { theme: 'light' };\n\nconsole.log(typeof user, typeof score, typeof active, typeof settings);`,
      takeaway: "Check value types before calling methods or doing complex operations.",
    },
    {
      title: "Functions and Parameters",
      description:
        "Functions let you reuse logic and keep scripts organized. Start with named functions and then move to arrow functions where suitable.",
      code: `function greet(name) {\n  return 'Hello, ' + name;\n}\n\nconst multiply = (a, b) => a * b;\nconsole.log(greet('Developer'), multiply(4, 5));`,
      takeaway: "Small reusable functions make code easier to test and maintain.",
    },
    {
      title: "Conditionals and Loops",
      description:
        "Control flow helps create dynamic behavior based on user input or data state.",
      code: `for (let i = 1; i <= 5; i++) {\n  if (i % 2 === 0) console.log(i, 'even');\n  else console.log(i, 'odd');\n}`,
      takeaway: "Combine conditionals and loops for practical data checks and formatting.",
    },
    {
      title: "Arrays and Core Methods",
      description:
        "map, filter, and reduce are core tools for transforming collections. These methods are heavily used in modern frontend development.",
      code: `const prices = [199, 499, 799, 999];\nconst discounted = prices.map((p) => p * 0.9);\nconst premium = discounted.filter((p) => p > 500);\nconst total = premium.reduce((sum, p) => sum + p, 0);\n\nconsole.log(discounted, premium, total);`,
      takeaway: "Use method chains for readable data processing.",
    },
    {
      title: "Object Basics and Optional Chaining",
      description:
        "Objects store structured data. Optional chaining helps safely access nested properties without runtime crashes.",
      code: `const profile = {\n  name: 'Ravi',\n  address: { city: 'Pune' }\n};\n\nconsole.log(profile.address?.city);\nconsole.log(profile.company?.name); // undefined safely`,
      takeaway: "Optional chaining prevents crashes when data is missing.",
    },
  ],
  advancedTopics: [
    {
      title: "Closures",
      description:
        "A closure remembers variables from its outer scope even after the outer function returns. Closures are useful for private state and factory functions.",
      code: `function createCounter() {\n  let count = 0;\n  return function () {\n    count += 1;\n    return count;\n  };\n}\n\nconst next = createCounter();\nconsole.log(next(), next(), next());`,
      takeaway: "Closures are essential for encapsulation and controlled state.",
    },
    {
      title: "Promises",
      description:
        "Promises represent asynchronous outcomes and help avoid deeply nested callbacks. Learn resolve, reject, then, catch, and finally.",
      code: `function fetchScore() {\n  return new Promise((resolve) => {\n    setTimeout(() => resolve(88), 500);\n  });\n}\n\nfetchScore()\n  .then((score) => console.log('Score:', score))\n  .catch((err) => console.error(err))\n  .finally(() => console.log('Done'));`,
      takeaway: "Promises are the foundation for modern async flows.",
    },
    {
      title: "Async and Await",
      description:
        "async/await provides cleaner asynchronous code on top of promises. Always wrap awaited operations in try/catch when failure is possible.",
      code: `async function loadUser() {\n  try {\n    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');\n    const user = await response.json();\n    console.log(user.name);\n  } catch (error) {\n    console.error('Request failed', error);\n  }\n}\n\nloadUser();`,
      takeaway: "Use async/await for readable async code and explicit error handling.",
    },
    {
      title: "ES6 Features: Destructuring, Spread, Template Literals",
      description:
        "ES6 syntax reduces boilerplate and improves readability. These features are standard in modern JavaScript codebases.",
      code: `const person = { name: 'Nina', role: 'Engineer', city: 'Jaipur' };\nconst { name, ...rest } = person;\nconst next = { ...rest, active: true };\nconst message = 'User ' + name + ' is active: ' + next.active;\n\nconsole.log(message, next);`,
      takeaway: "Use modern syntax for clearer, shorter code.",
    },
    {
      title: "Throttle Function",
      description:
        "Throttling limits how often a function runs within a time window. It is useful for scroll and resize events.",
      code: `function throttle(fn, delay = 200) {\n  let last = 0;\n  return (...args) => {\n    const now = Date.now();\n    if (now - last >= delay) {\n      last = now;\n      fn(...args);\n    }\n  };\n}\n\nconst onScroll = throttle(() => console.log('scroll event'), 300);\nwindow.addEventListener('scroll', onScroll);`,
      takeaway: "Throttle improves performance by reducing event flood.",
    },
    {
      title: "Debounce Function",
      description:
        "Debounce waits until the user stops triggering events for a period. It is ideal for search input and auto-save features.",
      code: `function debounce(fn, delay = 300) {\n  let timer;\n  return (...args) => {\n    clearTimeout(timer);\n    timer = setTimeout(() => fn(...args), delay);\n  };\n}\n\nconst onSearch = debounce((query) => console.log('Search:', query), 300);`,
      takeaway: "Use debounce for delayed execution after user inactivity.",
    },
    {
      title: "Generator Functions",
      description:
        "Generators can pause and resume execution using yield. They are useful for custom iterators and controlled sequence generation.",
      code: `function* idGenerator() {\n  let id = 1;\n  while (id <= 3) {\n    yield id;\n    id += 1;\n  }\n}\n\nconst gen = idGenerator();\nconsole.log(gen.next().value, gen.next().value, gen.next().value);`,
      takeaway: "Generators provide fine-grained control over iteration flow.",
    },
    {
      title: "Error Handling Strategy",
      description:
        "Production code should fail gracefully. Wrap risky logic with try/catch and return predictable fallback values.",
      code: `function parseSettings(raw) {\n  try {\n    return JSON.parse(raw);\n  } catch (error) {\n    return { error: 'Invalid JSON settings', fallback: true };\n  }\n}\n\nconsole.log(parseSettings('{invalid}'));`,
      takeaway: "Defensive error handling improves reliability and debugging.",
    },
  ],
  faq: [
    {
      q: "Can I test JavaScript quickly without setup?",
      a: "Yes. This page is built for instant JavaScript execution in your browser.",
    },
    {
      q: "Does this page show JavaScript runtime errors?",
      a: "Yes. Runtime issues and console messages are shown in the preview output.",
    },
    {
      q: "Can I use this page on mobile and tablet?",
      a: "Yes. The interface uses responsive layouts so it remains usable across device sizes.",
    },
    {
      q: "Does this page cover closures, promises, async await, and ES6 topics?",
      a: "Yes. This page includes practical examples for closures, promises, async/await, ES6 syntax, throttling, generators, and more.",
    },
  ],
};

function TopicCard({ topic }: { topic: Topic }) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-900">{topic.title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-700">{topic.description}</p>
      <pre className="mt-3 overflow-x-auto rounded-md code-paper bg-white border border-slate-200 p-3 text-xs text-slate-800">
        <code>{topic.code}</code>
      </pre>
      <p className="mt-3 text-sm text-slate-600">
        <span className="font-semibold text-slate-800">Key takeaway:</span> {topic.takeaway}
      </p>
    </article>
  );
}

export default function CompilerPage({ language }: CompilerPageProps) {
  const isHtml = language === "html";
  const content = isHtml ? htmlContent : jsContent;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <section className="mx-auto w-full max-w-[1500px] px-3 py-8 sm:px-4 sm:py-10">
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700">{content.badge}</p>
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">{content.title}</h1>
        <p className="mt-2 max-w-4xl text-sm text-slate-600 sm:text-base">{content.intro}</p>
      </div>

      <Home initialMode={isHtml ? "html" : "js"} />

      <section className="mt-8 grid gap-4 lg:grid-cols-2">
        <article className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">{content.aboutTitle}</h2>
          <p className="mt-2 text-sm leading-6 text-slate-700">{content.aboutText}</p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
            {content.features.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="text-xl font-semibold text-slate-900">How to Use</h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-slate-700">
            {content.steps.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
          <p className="mt-4 text-sm text-slate-600">
            Use the <Link href="/formatter" className="text-cyan-700 hover:underline">formatter</Link> for JSON/YAML/XML cleanup and the <Link href="/regex" className="text-cyan-700 hover:underline">regex tester</Link> for parsing and validation workflows.
          </p>
        </article>
      </section>

      <section className="mt-8 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">{content.exampleTitle}</h2>
        <p className="mt-2 text-sm text-slate-700">Try this starter snippet and modify it in the compiler above.</p>
        <pre className="mt-3 overflow-x-auto rounded-md code-paper bg-white border border-slate-200 p-3 text-xs text-slate-800">
          <code>{content.exampleCode}</code>
        </pre>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">Basic Topics with Examples</h2>
        <p className="mt-2 text-sm text-slate-600">Start with foundations before moving to advanced implementation patterns.</p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {content.basicTopics.map((topic) => (
            <TopicCard key={topic.title} topic={topic} />
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">Advanced Topics with Examples</h2>
        <p className="mt-2 text-sm text-slate-600">Apply production-oriented patterns for performance, structure, and maintainability.</p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {content.advancedTopics.map((topic) => (
            <TopicCard key={topic.title} topic={topic} />
          ))}
        </div>
      </section>

      <section className="mt-8 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-xl font-semibold text-slate-900">{content.errorsTitle}</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {content.errors.map((item) => (
            <article key={item.title} className="rounded-lg border border-slate-200 bg-slate-50 p-3">
              <h3 className="text-sm font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-700">{item.fix}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-3">
        {content.faq.map((item) => (
          <article key={item.q} className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-base font-semibold text-slate-900">{item.q}</h2>
            <p className="mt-2 text-sm text-slate-700">{item.a}</p>
          </article>
        ))}
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </section>
  );
}
