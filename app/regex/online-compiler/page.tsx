import type { Metadata } from "next";
import RegexPlayground from "@/components/RegexPlayground";

export const metadata: Metadata = {
  title: "Regex Tester & Debugger | Test Regular Expressions Online",
  description:
    "Test and debug regular expressions instantly. Visual regex tester with real-time matching, capture groups, and detailed explanations. Perfect for learning regex patterns.",
  keywords: [
    "regex tester",
    "regular expression",
    "regex debugger",
    "pattern matching",
    "regex playground",
    "test regex online",
    "email validation",
  ],
  openGraph: {
    title: "Regex Tester & Debugger | Test Regular Expressions Online",
    description:
      "Test and debug regular expressions with live matching and visual feedback. Perfect for learning regex patterns and testing email, phone, and URL patterns.",
    url: "/regex/online-compiler",
    type: "article",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Regex Tester & Debugger",
    description:
      "Test and debug regular expressions with live matching and visual feedback.",
    images: ["/og-image.svg"],
  },
  alternates: { canonical: "/regex/online-compiler" },
};

export default function RegexOnlineCompilerPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <RegexPlayground />
      
      <section className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-3xl font-bold mt-8 mb-4">Regular Expression Tester & Debugger</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Our regex tester is an online tool for testing, debugging, and learning regular expressions. Write a regex pattern and test text, then instantly see which parts match, view captured groups, and understand how your pattern works. Perfect for developers validating email addresses, phone numbers, URLs, and complex text patterns. See real-time feedback with color-coded matches and detailed information about capture groups.
        </p>

        <h2 className="text-3xl font-bold mt-8 mb-4">Why Learn Regular Expressions?</h2>
        <div className="grid md:grid-cols-2 gap-6 my-6">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-2">🔍 Pattern Matching</h3>
            <p className="text-gray-700">Regular expressions are powerful tools for finding, validating, and manipulating text. Used in almost every programming language for pattern matching and text processing.</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-2">✔️ Data Validation</h3>
            <p className="text-gray-700">Validate email addresses, phone numbers, URLs, passwords, and custom formats. Regex makes validation easier and more reliable than manual string checking.</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-2">📝 Text Processing</h3>
            <p className="text-gray-700">Extract data from text, replace patterns, parse structured data, and manipulate strings efficiently. Regex is essential for data extraction and transformation.</p>
          </div>
          <div className="bg-orange-50 p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-2">💼 Professional Skill</h3>
            <p className="text-gray-700">Regular expressions are tested in coding interviews and required for many development roles. Mastering regex makes you a more versatile developer.</p>
          </div>
        </div>

        <h2 className="text-3xl font-bold mt-8 mb-4">Common Regex Patterns to Understand</h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700 mb-6">
          <li><strong>Email Validation</strong> - Matches valid email addresses with pattern containing word characters, @ symbol, and domain</li>
          <li><strong>Phone Numbers</strong> - Pattern for XXX-XXX-XXXX format using <code>\d</code> to match digits and hyphens</li>
          <li><strong>URLs</strong> - Matches web addresses starting with http:// or https:// followed by domain and extension</li>
          <li><strong>Passwords</strong> - Requires at least one uppercase letter, one digit, and minimum 8 characters using positive lookahead assertions</li>
          <li><strong>Hex Colors</strong> - Matches 3 or 6 digit hex color codes preceded by # symbol (e.g., #FF5733 or #ABC)</li>
          <li><strong>Date Format</strong> - Matches dates in YYYY-MM-DD format with verification that each part uses correct number of digits</li>
        </ul>

        <h2 className="text-3xl font-bold mt-8 mb-4">How to Use Our Regex Tester</h2>
        <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-6">
          <li><strong>Enter Your Pattern</strong> - Type or paste a regular expression into the pattern field (e.g., `/\d+/` matches numbers)</li>
          <li><strong>Enter Test Text</strong> - Paste the text you want to test the pattern against in the test string field</li>
          <li><strong>View Real-Time Results</strong> - Matches appear highlighted in color immediately as you type</li>
          <li><strong>Check Capture Groups</strong> - See detailed information about captured groups below the results</li>
          <li><strong>Adjust Flags</strong> - Use flags like `g` (global), `i` (case-insensitive), `m` (multiline) to refine your pattern</li>
          <li><strong>Learn and Iterate</strong> - Experiment with different patterns to understand how they work</li>
        </ol>

        <h2 className="text-3xl font-bold mt-8 mb-4">Regex Flags Explained</h2>
        <div className="bg-gray-50 p-6 rounded-lg space-y-3 mb-6">
          <p className="text-gray-700"><strong>g (Global)</strong> - Find all matches, not just the first one</p>
          <p className="text-gray-700"><strong>i (Ignore Case)</strong> - Pattern matching is case-insensitive (A and a are treated the same)</p>
          <p className="text-gray-700"><strong>m (Multiline)</strong> - Treat ^ and $ as line boundaries instead of string boundaries</p>
          <p className="text-gray-700"><strong>s (Dotall)</strong> - Make . match newline characters as well</p>
        </div>

        <h2 className="text-3xl font-bold mt-8 mb-4">Regex Character Classes</h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700 mb-6">
          <li><strong>\d</strong> - Any digit (0-9)</li>
          <li><strong>\D</strong> - Any non-digit character</li>
          <li><strong>\w</strong> - Any word character (letters, digits, underscore)</li>
          <li><strong>\W</strong> - Any non-word character</li>
          <li><strong>\s</strong> - Any whitespace character (space, tab, newline)</li>
          <li><strong>\S</strong> - Any non-whitespace character</li>
          <li><strong>[abc]</strong> - Any character in the set (a, b, or c)</li>
          <li><strong>[^abc]</strong> - Any character NOT in the set</li>
        </ul>

        <h2 className="text-3xl font-bold mt-8 mb-4">Perfect For</h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li>Developers validating user input in web forms</li>
          <li>Data processing and text extraction tasks</li>
          <li>Learning regex fundamentals with instant feedback</li>
          <li>Debugging regex patterns that aren't working correctly</li>
          <li>Interview preparation for coding positions</li>
          <li>Quickly testing patterns before using in production code</li>
        </ul>
      </section>
    </main>
  );
}
