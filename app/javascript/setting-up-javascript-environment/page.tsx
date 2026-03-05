import type { Metadata } from "next";
import Link from "next/link";
import CodeExample from "@/components/CodeExample";

export const metadata: Metadata = {
  title: "Setting Up a JavaScript Development Environment - Complete Guide",
  description:
    "Complete guide to setting up JavaScript development: browser, Node.js, npm, VS Code, Git, environment variables, linting, formatting, and modern tooling.",
  keywords: [
    "javascript development environment",
    "setup javascript",
    "install node.js",
    "npm setup",
    "vscode javascript",
    "javascript tools",
    "development workflow",
  ],
  openGraph: {
    title: "JavaScript Development Environment Setup",
    description: "Complete guide to setting up professional JavaScript development environments.",
    url: "/javascript/setting-up-javascript-environment",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Environment Setup",
  },
  alternates: { canonical: "/javascript/setting-up-javascript-environment" },
};

const sections = [
  {
    heading: "Where JavaScript Runs: Environments Explained",
    paragraphs: [
      "JavaScript runs in two primary environments: browsers (frontend) and servers (Node.js backend). Your setup depends on what you want to build.",
      "Browser JavaScript: Writes interactive websites, animations, form validation. Runs in user's browser after page loads. No special setup needed beyond a text editor and browser.",
      "Server JavaScript (Node.js): Builds APIs, handles databases, processes files. Runs on your computer or cloud server. Requires Node.js installation and npm for dependency management.",
      "Modern development is full-stack: same language everywhere. Frontend code uses JavaScript in browser, backend uses JavaScript via Node.js. This means one language for the entire application.",
    ],
    examples: [
      {
        title: "Browser vs Server JavaScript",
        code: "// BROWSER - Runs in user's browser after page loads\n// index.html\n<script>\n  console.log(\"Browser JavaScript\");\n  const btn = document.querySelector(\"button\");\n  btn?.addEventListener(\"click\", () => {\n    console.log(\"Button clicked!\");\n  });\n</script>\n\n// SERVER - Runs on your machine or cloud\n// app.js (Node.js)\nconsole.log(\"Server JavaScript\");\nconst express = require(\"express\");\nconst app = express();\n\napp.listen(3000, () => {\n  console.log(\"Server running on port 3000\");\n});",
        explanation: "Browser JavaScript handles interactivity in the page. Server JavaScript handles data processing, storage, and API requests.",
      },
    ],
  },
  {
    heading: "Part 1: Browser Development - Easiest Starting Point",
    paragraphs: [
      "Browser development is the easiest way to start. You need only a browser and a text editor - nothing to install.",
      "Chrome, Firefox, Edge, and Safari all support JavaScript. Chrome DevTools are among the best for learning and debugging.",
      "Write HTML file, add JavaScript, open in browser, and test. Perfect for learning fundamentals and building interactive features.",
    ],
    examples: [
      {
        title: "Your First Browser JavaScript File",
        code: "<!-- index.html (save this file) -->\n<!DOCTYPE html>\n<html>\n<head>\n  <title>My JavaScript</title>\n</head>\n<body>\n  <h1>Welcome to JavaScript</h1>\n  <button id=\"myBtn\">Click Me</button>\n\n  <!-- Internal script (good for learning) -->\n  <script>\n    console.log(\"Hello from JavaScript!\");\n    \n    const btn = document.getElementById(\"myBtn\");\n    btn.addEventListener(\"click\", () => {\n      console.log(\"Button was clicked!\");\n      alert(\"You clicked the button!\");\n    });\n  </script>\n</body>\n</html>\n\n<!-- Open this file in your browser and check Developer Tools (F12) -->\n<!-- Click the button and see console output -->",
        explanation: "Save as HTML file, open in browser with double-click or right-click Open With.",
      },
      {
        title: "External JavaScript File (Recommended Structure)",
        code: "<!-- index.html -->\n<!DOCTYPE html>\n<html>\n<head>\n  <title>My App</title>\n</head>\n<body>\n  <h1>My JavaScript App</h1>\n  <button id=\"myBtn\">Click Me</button>\n\n  <!-- External script (cleaner) -->\n  <script src=\"app.js\"></script>\n</body>\n</html>\n\n// app.js (separate file)\nconsole.log(\"App loaded!\");\n\nconst btn = document.getElementById(\"myBtn\");\nbtn.addEventListener(\"click\", () => {\n  console.log(\"Button clicked from external file\");\n});\n\n// Browser DevTools\n// 1. Press F12 to open DevTools\n// 2. Click Console tab\n// 3. Run JavaScript live: console.log(\"test\")\n// 4. Click button to see event handling",
        explanation: "External scripts keep HTML clean and JavaScript organized. Use this structure for real projects.",
      },
    ],
  },
  {
    heading: "Part 2: Install Node.js for Backend Development",
    paragraphs: [
      "Node.js lets you run JavaScript outside the browser - on servers, for APIs, for scripts, for build tools.",
      "Node.js includes npm (Node Package Manager) for installing libraries and frameworks. Essential for modern workflows.",
      "Download LTS (Long-Term Support) version from nodejs.org. It's stable and widely supported in production.",
    ],
    examples: [
      {
        title: "Install and Verify Node.js",
        code: "// Windows/Mac/Linux: Download from https://nodejs.org/\n// Choose LTS version (Recommended for Most Users)\n\n// After installation, verify in terminal/command prompt:\nnode --version      // Shows version: v18.0.0 (or similar)\nnpm --version       // Shows version: 8.0.0 (or similar)\n\n// If commands not recognized:\n// - On Windows: Restart Command Prompt or System\n// - On Mac/Linux: Restart Terminal\n\n// Test Node.js works:\nnode -e \"console.log('Node.js works!')\"\n\n// Output: Node.js works!",
        explanation: "LTS versions are stable and recommended. Check versions to confirm installation succeeded.",
      },
    ],
  },
  {
    heading: "Part 3: Understanding npm (Node Package Manager)",
    paragraphs: [
      "npm comes with Node.js and manages project dependencies - libraries and frameworks your code needs.",
      "package.json is your project's manifest. It lists dependencies, scripts, and project metadata.",
      "npm install reads package.json and downloads all dependencies to node_modules folder.",
    ],
    examples: [
      {
        title: "Initialize and Use npm",
        code: "// Create project folder and navigate to it\nmkdir my-project\ncd my-project\n\n// Initialize npm (creates package.json)\nnpm init -y\n\n// Install a package (example: Express.js server framework)\nnpm install express\n\n// Create app.js\nconst express = require(\"express\");\nconst app = express();\n\napp.get(\"/\", (req, res) => {\n  res.send(\"Hello from Express!\");\n});\n\napp.listen(3000, () => {\n  console.log(\"Server running on http://localhost:3000\");\n});\n\n// Run it\nnode app.js",
        explanation: "npm init creates package.json. npm install adds packages. node_modules stores actual code.",
      },
    ],
  },
  {
    heading: "Part 4: Visual Studio Code Setup (Recommended Editor)",
    paragraphs: [
      "VS Code is free, lightweight, and highly customizable. It's the most popular JavaScript editor among professionals.",
      "Features include: IntelliSense (auto-completion), debugging, Git integration, terminal, extensions marketplace.",
      "Recommended extensions: ES7+ React Snippets, Prettier (auto-formatting), ESLint (code quality), Git Graph, Thunder Client.",
    ],
    examples: [
      {
        title: "VS Code Setup Steps",
        code: "// 1. Download and install from https://code.visualstudio.com/\n// 2. Install recommended extensions (Ctrl+Shift+X):\n//    - ES7+ React/Redux/React-Native snippets\n//    - Prettier - Code formatter\n//    - ESLint\n// 3. Open your project folder (File > Open Folder)\n// 4. Create JavaScript file: script.js\n// 5. Run with Terminal > New Terminal\n\n// VS Code Keyboard Shortcuts:\n// Ctrl+`     Open terminal\n// Ctrl+Shift+P    Command palette\n// Ctrl+G          Go to line\n// Ctrl+/          Comment/uncomment",
        explanation: "VS Code provides excellent JavaScript support with extensions and built-in terminal.",
      },
    ],
  },
  {
    heading: "Part 5: Version Control with Git",
    paragraphs: [
      "Git tracks your code changes. Essential for teamwork and backing up your code.",
      "GitHub.com is where developers upload and share code. Free public repos.",
      "Learn basic commands: git init, git add, git commit, git push.",
    ],
    examples: [
      {
        title: "Git Basics Setup",
        code: "// Install Git from https://git-scm.com/\n\n// Configure Git (first time only)\ngit config --global user.name \"Your Name\"\ngit config --global user.email \"your.email@example.com\"\n\n// In your project folder:\ngit init              // Initialize repo\ngit add .             // Stage all changes\ngit commit -m \"Initial commit\"  // Save snapshot\n\n// Create account on GitHub.com, then:\ngit remote add origin https://github.com/yourname/reponame.git\ngit push -u origin main   // Upload to GitHub\n\n// Daily workflow:\ngit add .             // Stage changes\ngit commit -m \"Added feature X\"  // Commit with message\ngit push              // Upload to GitHub",
        explanation: "Git and GitHub are industry standard for version control and collaboration.",
      },
    ],
  },
  {
    heading: "Part 6: Environment Variables and .env Files",
    paragraphs: [
      "Environment variables store secrets (API keys, database passwords) outside code.",
      "Create .env file with KEY=value pairs. Access with process.env.KEY in Node.js.",
      "Never commit .env to Git. Add .env to .gitignore.",
    ],
    examples: [
      {
        title: "Environment Variables Setup",
        code: "// Create .env file in project root\n// .env\nDATABASE_URL=postgresql://user:pass@localhost/mydb\nAPI_KEY=abc123xyz789\nPORT=3000\nNODE_ENV=development\n\n// Node.js app.js\nconst apiKey = process.env.API_KEY;\nconst dbUrl = process.env.DATABASE_URL;\nconst port = process.env.PORT || 3000;\n\nconsole.log(\"Using API Key:\", apiKey);\nconsole.log(\"Database:\", dbUrl);\n\n// Install dotenv package to auto-load .env\nnpm install dotenv\n\n// At top of app.js\nrequire(\"dotenv\").config();",
        explanation: "Store secrets in .env, never in source code. Use .gitignore to prevent accidental uploads.",
      },
    ],
  },
  {
    heading: "Part 7: Debugging and Developer Tools",
    paragraphs: [
      "Browser DevTools are essential for debugging. Press F12 or Ctrl+Shift+I to open.",
      "Console: View logs and run JavaScript live. Debugger: Step through code, set breakpoints. Network: See API calls.",
      "Node.js debugging: Use --inspect flag or VS Code debugger with launch.json configuration.",
    ],
    examples: [
      {
        title: "Using Browser DevTools and Debugging",
        code: "// Browser console commands\nconsole.log(\"Regular message\");        // Info\nconsole.error(\"Error message\");        // Red error\nconsole.warn(\"Warning message\");       // Yellow warning\nconsole.table([...]);                  // Format as table\nconsole.time(\"label\");                 // Start timer\nconsole.timeEnd(\"label\");              // End timer, show elapsed\n\n// Debugging in code\nconst data = [1, 2, 3];\ndebugger;  // Execution pauses here when DevTools open\ndata.push(4);\n\n// Browser DevTools\n// 1. Press F12 to open DevTools\n// 2. Click Console tab to view logs\n// 3. Set breakpoints by clicking line numbers\n// 4. Run code and step through line by line",
        explanation: "DevTools Console, Debugger, and Network tabs are invaluable for development and troubleshooting.",
      },
    ],
  },
  {
    heading: "Part 8: Recommended Project Structure",
    paragraphs: [
      "Good folder structure improves maintainability, helps teammates understand code, and scales with project growth.",
      "Separate concerns: components, styles, utilities, tests, data, assets. Not everything should be in one file.",
      "This structure evolves: small projects stay simple, larger projects add more organization.",
    ],
    examples: [
      {
        title: "Modern JavaScript Project Structure",
        code: "// Recommended structure for Node.js/React projects:\nmy-project/\n├── src/\n│   ├── components/       (React components)\n│   ├── pages/            (Route pages)\n│   ├── utils/            (Helper functions)\n│   ├── styles/           (CSS/styling)\n│   ├── data/             (Constants, mock data)\n│   ├── app.js            (Main app file)\n│   └── index.js          (Entry point)\n├── public/               (Static assets)\n│   ├── images/\n│   ├── fonts/\n│   └── favicon.ico\n├── tests/                (Test files)\n├── .env                  (Secrets - not in Git)\n├── .gitignore            (Git exclusions)\n├── package.json          (Project manifest)\n└── README.md             (Documentation)",
        explanation: "Organized structure makes projects maintainable and professional.",
      },
    ],
  },
  {
    heading: "Part 9: Linting and Code Formatting",
    paragraphs: [
      "Linters check code quality and catch errors (ESLint). Formatters auto-fix code style (Prettier).",
      "These prevent bugs, enforce team standards, and improve code consistency automatically.",
      "Configure in package.json or separate config files like .eslintrc.json and .prettierrc.",
    ],
    examples: [
      {
        title: "Setup ESLint and Prettier",
        code: "// Install ESLint (checks for bugs)\nnpm install --save-dev eslint\nnpx eslint --init\n\n// Install Prettier (code formatter)\nnpm install --save-dev prettier\n\n// Create .prettierrc\n{\n  \"semi\": true,\n  \"singleQuote\": false,\n  \"trailingComma\": \"es5\"\n}\n\n// Add scripts to package.json\n{\n  \"scripts\": {\n    \"lint\": \"eslint .\",\n    \"format\": \"prettier --write .\"\n  }\n}\n\n// Run linting\nnpm run lint\n\n// Auto-format code\nnpm run format",
        explanation: "ESLint catches bugs. Prettier auto-formats. Together they ensure consistent, clean code.",
      },
    ],
  },
  {
    heading: "Part 10: Common Setup Mistakes and Solutions",
    paragraphs: [
      "New developers often face similar setup issues. Here are quick fixes for common problems that might save you hours of frustration.",
    ],
    examples: [
      {
        title: "Troubleshooting Common Setup Issues",
        code: "// Issue 1: 'node is not recognized'\nSolution: Node.js not installed or not in PATH\n✓ Download Node.js from nodejs.org\n✓ Choose LTS version\n✓ Restart Terminal after install\n✓ Verify: node --version\n\n// Issue 2: 'npm command not found'\nSolution: npm comes with Node.js\n✓ Reinstall Node.js (includes npm)\n✓ Restart Terminal\n✓ Check: npm --version\n\n// Issue 3: 'Port 3000 already in use'\nSolution: Another app using same port\n✓ Change port in code: app.listen(3001)\n✓ Or kill process: Windows - netstat -ano | findstr :3000\n\n// Issue 4: 'Module not found: Cannot find module X'\nSolution: Package not installed\n✓ Run: npm install\n✓ Check package.json has dependency\n✓ Restart your app\n\n// Issue 5: 'EACCES permission denied'\nSolution: npm permissions issue (Mac/Linux)\n✓ mkdir ~/.npm-global\n✓ npm config set prefix '~/.npm-global'\n✓ Add ~/.npm-global/bin to PATH",
        explanation: "Setup issues usually have simple solutions. Search error message online - someone's solved it before.",
      },
    ],
  },
  {
    heading: "Part 11: Initial Setup Checklist",
    paragraphs: [
      "Use this checklist to ensure your development environment is complete and ready for real projects. Go through each item to build confidence.",
    ],
    examples: [
      {
        title: "Complete Setup Verification Checklist",
        code: "// MANDATORY (Required for any development)\n☐ Install Node.js LTS from nodejs.org\n☐ Verify: node --version and npm --version\n☐ Install Visual Studio Code from code.visualstudio.com\n☐ Create a project folder\n☐ Initialize with: npm init -y\n\n// RECOMMENDED (For professional work)\n☐ Install Git from git-scm.com\n☐ Configure: git config --global user.name/email\n☐ Create GitHub account\n☐ Learn basic Git commands\n\n// VS CODE EXTENSIONS\n☐ ES7+ React/Redux snippets\n☐ Prettier - Code formatter\n☐ ESLint\n☐ Thunder Client (optional)\n\n// PROJECT CONFIGURATION\n☐ Create .env file for secrets\n☐ Create .gitignore (add .env, node_modules)\n☐ Install dependencies: npm install\n☐ Create .eslintrc and .prettierrc\n\n// LEARNING ACHIEVEMENTS\n☐ Run JavaScript in browser (DevTools)\n☐ Run JavaScript with Node.js\n☐ Use npm to install a package\n☐ Commit code with Git\n☐ Push to GitHub\n\n// NEXT STEPS\nYou're ready to learn: Variables, Functions, Loops, and Objects!",
        explanation: "This checklist ensures you have a professional, complete setup ready for learning and building.",
      },
    ],
  },
];

const mistakes = [
  {
    title: "Installing wrong Node.js version",
    fix: "Use LTS (Long-Term Support), not Current. LTS is stable for production.",
  },
  {
    title: "Storing secrets in source code",
    fix: "Use .env files for API keys, passwords. Add .env to .gitignore.",
  },
  {
    title: "Skipping version control (Git)",
    fix: "Learn Git early. Version control is essential in professional development.",
  },
  {
    title: "Not organizing code in folders",
    fix: "Structure code from the start: src/, utils/, components/. Prevents chaos later.",
  },
  {
    title: "Installing packages globally unnecessarily",
    fix: "Use npm install (local) instead of npm install -g. Makes projects portable.",
  },
];

const faqs = [
  {
    q: "Do I need Node.js for frontend JavaScript?",
    a: "For plain browser-only scripts, no. For modern frameworks (React, Next.js) and build tools, yes. They need Node.js for development, though browsers still run the final code.",
  },
  {
    q: "Should I use NPM, Yarn, or pnpm?",
    a: "npm is built-in with Node.js and most popular. Yarn and pnpm are alternatives that solve specific problems but npm works great for most projects.",
  },
  {
    q: "Why is LTS recommended over Current?",
    a: "LTS (Long-Term Support) is stable, well-tested, and widely deployed. Current has latest features but less stability. Use LTS unless you need specific new features.",
  },
  {
    q: "What's the difference between package.json and package-lock.json?",
    a: "package.json lists dependencies you specify. package-lock.json locks exact versions installed to ensure reproducible installs across team/machines.",
  },
  {
    q: "Should I commit node_modules to Git?",
    a: "No. Add node_modules/ to .gitignore. It's huge and others can npm install to get it. Your package-lock.json ensures they get same versions.",
  },
  {
    q: "How do I switch between Node.js versions?",
    a: "Use nvm (Mac/Linux) or nvm-windows (Windows). Lets you switch versions: nvm use 16.0.0. Essential if projects require different versions.",
  },
  {
    q: "Why should I use a code formatter like Prettier?",
    a: "Prettier auto-formats code structure (spacing, indentation, quotes). Removes style debates, ensures consistency, saves time fixing formatting manually.",
  },
  {
    q: "What should I put in .env vs .env.example?",
    a: ".env has actual secrets (never commit). .env.example is template (safe to commit) showing what variables exist. Team members copy .env.example to .env and fill with their values.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function SettingUpJavascriptEnvironmentPage() {
  return (
    <section className="w-full text-slate-900 dark:text-slate-100">
      <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-white p-5 dark:border-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700 dark:text-cyan-300">
          JavaScript Tutorial
        </p>
        <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          Setting Up Your JavaScript Development Environment
        </h1>
        <p className="mt-3 text-sm text-slate-700 dark:text-slate-300 sm:text-base">
          Complete guide to professional JavaScript development setup: Node.js, npm, VS Code, Git, environment variables, and modern tooling. Browser development to full-stack workflows.
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          <Link
            href="/javascript/online-compiler"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-md border border-cyan-600/60 bg-cyan-100 px-3 py-2 text-sm font-semibold text-cyan-800 hover:bg-cyan-200 dark:border-cyan-500/60 dark:bg-cyan-500/20 dark:text-cyan-200 dark:hover:bg-cyan-500/30"
          >
            Open Compiler
          </Link>
        </div>
      </div>

      <div className="mt-4 rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/90">
        <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Why this matters</p>
        <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">
          A proper development environment increases productivity, prevents frustration, and teaches professional workflows. Good setup habits from day one make you more effective and prepared for real job development.
        </p>
      </div>

      <div className="mt-6 space-y-6">
        {sections.map((section) => (
          <article
            key={section.heading}
            className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/80"
          >
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">{section.heading}</h2>
            {section.paragraphs.map((p, idx) => (
              <p key={idx} className="mt-2 text-sm text-slate-700 dark:text-slate-300">
                {p}
              </p>
            ))}
            {section.examples && section.examples.length > 0 && (
              <div className="mt-4 space-y-4">
                {section.examples.map((ex) => (
                  <CodeExample
                    key={ex.title}
                    title={ex.title}
                    code={ex.code}
                    explanation={ex.explanation}
                  />
                ))}
              </div>
            )}
          </article>
        ))}

        <article className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/80">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Common Mistakes</h2>
          <ul className="mt-2 ml-4 list-disc text-sm text-slate-700 dark:text-slate-300">
            {mistakes.map((m, idx) => (
              <li key={idx}>
                <strong>{m.title}:</strong> {m.fix}
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900/80">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Frequently Asked Questions</h2>
          {faqs.map((item) => (
            <div key={item.q} className="mt-2">
              <p className="font-medium text-sm text-slate-900 dark:text-white">{item.q}</p>
              <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">{item.a}</p>
            </div>
          ))}
        </article>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </section>
  );
}
