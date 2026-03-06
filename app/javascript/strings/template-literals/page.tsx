import type { Metadata } from "next";
import Script from "next/script";
import CodeExample from "@/components/CodeExample";
import Link from "next/link";

export const metadata: Metadata = {
  title: "JavaScript Template Literals - Interpolation & Tagged Templates",
  description: "Explore JavaScript template literals with interpolation, multi-line strings, tagged templates, and best practices for clean string formatting.",
  keywords: [
    "template literals",
    "javascript template literals",
    "string interpolation",
    "multiline strings",
    "tagged templates",
    "ES6 strings",
    "backticks",
    "raw strings",
    "nested template literals",
  ],
  openGraph: {
    title: "JavaScript Template Literals Guide",
    description: "Learn how to use template literals for cleaner string interpolation, multi-line output, and advanced tagging in JavaScript.",
    url: "/javascript/strings/template-literals",
    type: "article",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Template Literals Tutorial",
    description: "Complete guide to ES6 template literals: syntax, interpolation, tagged templates, and more.",
    images: ["/og-image.svg"],
  },
  alternates: { canonical: "/javascript/strings/template-literals" },
};

const sections = [
  {
    heading: "Why Use Template Literals?",
    paragraphs: [
      "Template literals, introduced in ES6, provide a powerful and readable way to work with strings in JavaScript. They use backticks (``) instead of quotes and enable interpolation, multi-line text, and tagged templates.",
      "Compared to traditional string concatenation with `+`, template literals are easier to write and maintain, especially when embedding variables or expressions.",
    ],
    examples: [
      {
        title: "Basic Interpolation",
        code: `const name = 'Alice';
const greeting = \`Hello, \${name}!\`;
console.log(greeting); // Hello, Alice!`,
        explanation: "Use `${...}` inside backticks to insert variables or expressions directly into strings.",
      },
    ],
  },
  {
    heading: "Multi-Line Strings",
    paragraphs: [
      "Template literals preserve whitespace and line breaks, making it simple to write multi-line strings without escape characters.",
    ],
    examples: [
      {
        title: "Creating a Multi-Line String",
        code: `const poem = \`Roses are red
Violets are blue
Template literals make
Multi-line easy to do.\`;

console.log(poem);`,
        explanation: "Backticks allow you to write strings that span multiple lines naturally.",
      },
    ],
  },
  {
    heading: "Expression Embedding",
    paragraphs: [
      "You can embed any JavaScript expression inside a template literal. The expression is evaluated and its result inserted into the string.",
    ],
    examples: [
      {
        title: "Embed Expressions",
        code: `const a = 5;
const b = 10;
console.log(\`Fifteen is \${a + b} and not \${2 * a + b}.\`);
// Output: Fifteen is 15 and not 20.`,
        explanation: "Expressions inside `${}` can be arithmetic, function calls, ternary operators, etc.",
      },
    ],
  },
  {
    heading: "Tagged Template Literals",
    paragraphs: [
      "Tagged templates allow you to customize how template literals are processed by passing them to a function. The tag function receives an array of string literals and values, enabling advanced processing such as localization, escaping, or styling.",
    ],
    examples: [
      {
        title: "Basic Tag Function",
        code: `function highlight(strings, ...values) {
  return strings.reduce((result, str, i) =>
    \`\${result}<span class="highlight">\${str}\${values[i] || ''}</span>\`,
    ''
  );
}

const user = 'Bob';
const tagged = highlight\`Hello, \${user}!\`; // calls highlight
console.log(tagged);`,
        explanation: "The tag function can manipulate or escape values before constructing the final string.",
      },
      {
        title: "Safe HTML Escaping with Tags",
        code: `function safeHTML(strings, ...values) {
  const escape = (str) =>
    str.replace(/&/g, '&amp;')
       .replace(/</g, '&lt;')
       .replace(/>/g, '&gt;');

  return strings.reduce((acc, str, i) =>
    acc + str + (values[i] ? escape(values[i]) : ''),
    ''
  );
}

const userInput = '<script>alert(1)</script>';
const message = safeHTML\`User said: \${userInput}\`;
console.log(message);
// Output: User said: &lt;script&gt;alert(1)&lt;/script&gt;`,
        explanation: "Tagged templates enable custom escaping to prevent XSS attacks when inserting untrusted values into HTML.",
      },
    ],
  },
  {
    heading: "Raw Strings",
    paragraphs: [
      "You can access the raw string content (without processing escape sequences) using the `String.raw` tag or by defining your own tag.",
    ],
    examples: [
      {
        title: "Using String.raw",
        code: `console.log(String.raw\`First line\\nSecond line\`);
// Output: First line\\nSecond line (no actual newline)`,
        explanation: "`String.raw` returns the string exactly as typed, useful for regex patterns or file paths.",
      },
    ],
  },
  {
    heading: "Nesting Template Literals",
    paragraphs: [
      "You can nest template literals inside expressions for dynamic content generation.",
    ],
    examples: [
      {
        title: "Nested Literal Example",
        code: `const name = 'Alice';
const inner = \`inner \${name}\`;
const outer = \`outer \${inner}\`;
console.log(outer); // outer inner Alice`,
        explanation: "Nested template literals evaluate from inside out, allowing complex string composition.",
      },
    ],
  },
  {
    heading: "Common Mistakes",
    paragraphs: [],
    examples: [
      {
        title: "Using Quotes Instead of Backticks",
code: `const failing = "Hello \${name}"; // \${name} won't interpolate
// Use backticks: \\\`Hello \${name}\\\``,
        explanation: "Template syntax only works with backticks, not with single or double quotes.",
      },
      {
        title: "Forgetting to Escape Backticks",
        code: `const text = \`This is a \`quote\`; // escape backtick with \``,
        explanation: "Backticks inside template literals must be escaped with \`.",
      },
    ],
  },
  {
    heading: "Best Practices",
    paragraphs: [],
    examples: [
      {
        title: "Prefer Template Literals for Readability",
        code: `const msg = \`User: \${user.name}, Role: \${user.role}\`;`,
        explanation: "Template literals improve readability compared to concatenation, especially with multiple variables.",
      },
      {
        title: "Use Tags for Sanitization and Localization",
        code: `// tag functions help apply localization or escape
const localized = i18n\`Welcome, \${user}\`;`,
        explanation: "Tagged templates are ideal for processing dynamic content before rendering.",
      },
    ],
  },
];

const faqs = [
  {
    q: "What is a template literal?",
    a: "A template literal is a string enclosed by backticks that can contain embedded expressions and supports multi-line text.",
  },
  {
    q: "How do I interpolate a variable?",
    a: "Include the variable inside `${}` within a template literal, e.g. `Hello, ${name}!`.",
  },
  {
    q: "Can I use template literals for multi-line strings?",
    a: "Yes, template literals preserve line breaks without needing `\n` escape sequences.",
  },
  {
    q: "What is a tagged template?",
    a: "A tagged template passes a template literal to a function (the tag) for custom processing of its parts.",
  },
  {
    q: "Does `String.raw` work with template literals?",
    a: "Yes, `String.raw` is a built-in tag that returns the raw string text without interpreting escape sequences.",
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

export default function TemplateLiteralsPage() {
  return (
    <>
      <Script
        id="json-ld-template-literals"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'JavaScript Template Literals - Interpolation & Tagged Templates',
            description: 'Explore JavaScript template literals with interpolation, multi-line strings, tagged templates, and best practices for clean string formatting.',
            author: {
              '@type': 'Organization',
              name: 'Online JavaScript Compiler',
            },
            datePublished: '2024-01-01',
            dateModified: '2024-01-01',
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-4xl mx-auto px-4 pt-0 pb-6">
        <h1 className="text-4xl font-bold mb-6 text-center">
          JavaScript Template Literals
        </h1>
        <p className="text-lg mb-8 text-center">
          Learn how template literals simplify string creation, interpolation, and advanced formatting in modern JavaScript.
        </p>

        {sections.map((section, idx) => (
          <div key={idx} className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">{section.heading}</h2>
            {section.paragraphs.map((p, pi) => (
              <p key={pi} className="mb-4 text-gray-700 dark:text-gray-300">
                {p}
              </p>
            ))}
            {section.examples && section.examples.length > 0 && (
              <div className="space-y-6">
                {section.examples.map((ex, exIdx) => (
                  <CodeExample
                    key={exIdx}
                    title={ex.title}
                    code={ex.code}
                    explanation={ex.explanation}
                  />
                ))}
              </div>
            )}
          </div>
        ))}

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Related Topics</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Strings Overview", href: "/javascript/strings" },
              { label: "ES6 Features", href: "/javascript/es6" },
              { label: "Template Literals", href: "/javascript/strings/template-literals" },
              { label: "Tagged Templates", href: "/javascript/strings/tagged-templates" },
              { label: "Interpolated Expressions", href: "/javascript/expressions" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Key Takeaways</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Use backticks to create template literals</li>
    <li>Embed variables and expressions with {`\${...}`}</li>
            <li>Template literals support multi-line strings naturally</li>
            <li>Tagged templates let you preprocess strings (e.g. for escaping)</li>
            <li>`String.raw` returns raw, uninterpreted text</li>
            <li>Prefer template literals over concatenation for readability</li>
          </ul>
        </div>
      </div>
    </>
  );
}