import type { Metadata } from "next";
import CompilerPage from "@/components/CompilerPage";

export const metadata: Metadata = {
  title: "JavaScript Online Compiler | Run JavaScript Code in Browser",
  description:
    "Write, test, and run JavaScript code instantly in your browser. Interactive JavaScript online compiler with live output and error handling.",
  keywords: [
    "javascript compiler",
    "online javascript editor",
    "run javascript online",
    "javascript playground",
    "web-based ide",
  ],
  openGraph: {
    title: "JavaScript Online Compiler | Run JavaScript Code in Browser",
    description:
      "Write, test, and run JavaScript code instantly in your browser. Interactive JavaScript online compiler with live output.",
    url: "/javascript/online-compiler",
    type: "article",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Online Compiler",
    description:
      "Write, test, and run JavaScript code instantly in your browser.",
    images: ["/og-image.svg"],
  },
  alternates: { canonical: "/javascript/online-compiler" },
};

export default function JavascriptOnlineCompilerPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <CompilerPage
        language="javascript"
      />
      
      <section className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-3xl font-bold mt-8 mb-4">What is a JavaScript Online Compiler?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Our JavaScript online compiler is a web-based IDE that lets you write, execute, and test JavaScript code instantly without needing to install any software or set up a development environment. Perfect for beginners learning JavaScript, experienced developers testing code snippets, and students preparing for interviews. The compiler supports all modern JavaScript features including ES6+, async/await, destructuring, and more.
        </p>

        <h2 className="text-3xl font-bold mt-8 mb-4">Why Use Our JavaScript Compiler?</h2>
        <div className="grid md:grid-cols-2 gap-6 my-6">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-2">🚀 Instant Execution</h3>
            <p className="text-gray-700">Write JavaScript code and see results immediately. No compilation time, no installation required. Just click run and watch your code execute in real-time with instant feedback and error messages.</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-2">📚 Learn JavaScript</h3>
            <p className="text-gray-700">Perfect for beginners. Experiment with syntax, test concepts, and understand how JavaScript works. Our compiler provides clear error messages to help you debug and learn from mistakes quickly.</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-2">🎯 Interview Prep</h3>
            <p className="text-gray-700">Practice coding problems, test algorithms, and verify solutions in real-time. No need for a full IDE during interview prep. Test your logic and confirm output before submitting answers.</p>
          </div>
          <div className="bg-orange-50 p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-2">⚡ Full ES6+ Support</h3>
            <p className="text-gray-700">Use modern JavaScript features like arrow functions, promises, async/await, classes, destructuring, template literals, and the spread operator. All the features modern JavaScript developers use daily.</p>
          </div>
        </div>

        <h2 className="text-3xl font-bold mt-8 mb-4">Getting Started</h2>
        <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-6">
          <li><strong>Write Your Code</strong> - Enter JavaScript code in the editor on the left. Use standard JavaScript syntax.</li>
          <li><strong>Click Run</strong> - Press the "Run Code" button to execute your JavaScript instantly.</li>
          <li><strong>View Output</strong> - See console output, results, and any error messages on the right side.</li>
          <li><strong>Iterate</strong> - Modify your code and run again. Experiment freely with no limits.</li>
        </ol>

        <h2 className="text-3xl font-bold mt-8 mb-4">Common Use Cases</h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700 mb-6">
          <li><strong>Algorithm Testing</strong> - Test sorting algorithms, recursive functions, and data structure operations</li>
          <li><strong>Learning Syntax</strong> - Understand how array methods, string manipulation, and loops work</li>
          <li><strong>Debugging</strong> - Isolate issues by running simplified code snippets with console.log statements</li>
          <li><strong>Interview Practice</strong> - Solve LeetCode-style problems and verify your solutions work correctly</li>
          <li><strong>Code Experiments</strong> - Test new libraries, understand JavaScript concepts, or prototype quick ideas</li>
        </ul>

        <h2 className="text-3xl font-bold mt-8 mb-4">Tips for Using the Compiler</h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li><strong>Use console.log()</strong> - Print values to the console to track variables and debug your code</li>
          <li><strong>Test Edge Cases</strong> - Run your functions with different inputs to ensure they handle all scenarios</li>
          <li><strong>Read Error Messages</strong> - Our compiler provides helpful error messages to identify problems quickly</li>
          <li><strong>Save Your Code</strong> - Copy-paste your working code to your projects or development environment</li>
          <li><strong>Explore ES6+ Features</strong> - Experiment with modern JavaScript syntax like async/await and destructuring</li>
        </ul>
      </section>
    </main>
  );
}
