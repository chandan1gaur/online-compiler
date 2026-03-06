import type { Metadata } from "next";
import Link from "next/link";
import CodeExample from "@/components/CodeExample";

export const metadata: Metadata = {
  title: "JavaScript Spread & Rest - Use Cases, Syntax, and Examples",
  description: "Learn how to use the ES6 spread operator and rest parameters for arrays, objects, and function arguments with clear examples and best practices.",
  keywords: [
    "javascript spread operator",
    "rest parameters",
    "es6 spread",
    "spread in arrays",
    "spread in objects",
    "rest syntax",
    "function rest parameters",
    "javascript spread rest examples",
    "clone array javascript",
    "merge objects javascript",
  ],
  openGraph: {
    title: "JavaScript Spread & Rest - Use Cases, Syntax, and Examples",
    description: "Learn how to use the ES6 spread operator and rest parameters for arrays, objects, and function arguments with clear examples and best practices.",
    url: "/javascript/es6/spread-rest",
    type: "article",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Spread & Rest Tutorial",
    description: "Comprehensive guide on using the ES6 spread operator and rest parameters in JavaScript.",
    images: ["/og-image.svg"],
  },
  alternates: { canonical: "/javascript/es6/spread-rest" },
};

const sections = [
  {
    heading: "What is the Spread Operator?",
    paragraphs: [
      "The spread operator (...) allows an iterable such as an array or string to be expanded in places where zero or more arguments or elements are expected. It's a concise syntax introduced in ES6 that makes cloning and merging easier.",
      "Spread works with arrays, objects, and function calls. It 'spreads' individual elements or properties into a new container.",
    ],
    examples: [
      {
        title: "Basic Array Spread",
        code: `const colors = ['red', 'green'];
const moreColors = [...colors, 'blue'];
console.log(moreColors); // ['red', 'green', 'blue']`,
        explanation: "Use spread to expand an existing array into a new one, allowing easy insertion of elements.",
      },
    ],
  },
  {
    heading: "Spread with Arrays",
    paragraphs: [
      "Spread makes it simple to copy arrays, concatenate them, or convert iterable objects into arrays.",
    ],
    examples: [
      {
        title: "Clone an Array",
        code: `const original = [1, 2, 3];
const clone = [...original];
clone.push(4);
console.log(original); // [1, 2, 3]
console.log(clone);    // [1, 2, 3, 4]`,
        explanation: "Spreading into a new array creates a shallow copy without linking to the original."
      },
      {
        title: "Merge Arrays",
        code: `const a = [1, 2];
const b = [3, 4];
const merged = [...a, ...b];
console.log(merged); // [1, 2, 3, 4]`,
        explanation: "Combine multiple arrays cleanly without using concat()."
      },
      {
        title: "Convert Iterable to Array",
        code: `const str = 'hello';
const chars = [...str];
console.log(chars); // ['h','e','l','l','o']`,
        explanation: "Spread can convert strings or other iterables into arrays."
      },
    ],
  },
  {
    heading: "Spread with Objects",
    paragraphs: [
      "Since ES2018, objects support spread syntax. You can clone objects, merge them, or override properties using spread.",
    ],
    examples: [
      {
        title: "Clone an Object",
        code: `const user = { name: 'Alice', age: 25 };
const clone = { ...user };
clone.age = 26;
console.log(user.age); // 25
console.log(clone.age); // 26`,
        explanation: "Object spread creates a shallow copy of the original object."
      },
      {
        title: "Merge/Object Override",
        code: `const defaults = { theme: 'light', lang: 'en' };
const prefs = { lang: 'es' };
const config = { ...defaults, ...prefs };
console.log(config); // { theme: 'light', lang: 'es' }`,
        explanation: "Later spreads override earlier properties, making it easy to apply defaults."
      },
      {
        title: "Add or Remove Properties",
        code: `const base = { a: 1, b: 2 };
const extended = { ...base, c: 3 };
const withoutB = (({ b, ...rest }) => rest)(base);
console.log(extended); // { a: 1, b: 2, c: 3 }
console.log(withoutB); // { a: 1 }`,
        explanation: "Spread and destructuring/rest can add or omit properties in new object creations."
      },
    ],
  },
  {
    heading: "Rest Parameters",
    paragraphs: [
      "Rest syntax also uses \"...\" but in function parameters or destructuring patterns to collect multiple values into a single array or object.",
    ],
    examples: [
      {
        title: "Function with Rest Parameters",
        code: `function multiply(factor, ...numbers) {
  return numbers.map(n => n * factor);
}

console.log(multiply(2, 1, 2, 3)); // [2, 4, 6]`,
        explanation: "Rest parameters gather the remaining arguments into an array. Only the last parameter may be a rest parameter."
      },
      {
        title: "Array Destructuring with Rest",
        code: `const [first, ...rest] = [10, 20, 30, 40];
console.log(first); // 10
console.log(rest);  // [20, 30, 40]`,
        explanation: "Rest collects remaining array elements during destructuring."
      },
      {
        title: "Object Destructuring with Rest",
        code: `const { a, ...others } = { a: 1, b: 2, c: 3 };
console.log(a);      // 1
console.log(others); // { b: 2, c: 3 }`,
        explanation: "Rest in object destructuring gathers remaining properties into a new object."
      },
    ],
  },
  {
    heading: "Spread vs Rest",
    paragraphs: [
      "Though they look identical, spread 'expands' values while rest 'collects' them. Context determines which behavior you get. In arrays/objects literals use spread, in function parameters or destructuring use rest.",
    ],
  },
  {
    heading: "Common Mistakes and Gotchas",
    paragraphs: [],
    examples: [
      {
        title: "Shallow Copy Only",
        code: `const nested = [{ x: 1 }];
const copy = [...nested];
copy[0].x = 2;
console.log(nested[0].x); // 2  (changed!)`,
        explanation: "Spread only performs a shallow copy; nested objects are still shared. Use structuredClone or deep copy when needed."
      },
      {
        title: "Using Rest Not as Last Parameter",
        code: `function test(...args, extra) {
  // SyntaxError: Rest parameter must be last
}`,
        explanation: "Rest parameter must be the last parameter in a function definition."
      },
      {
        title: "Forgetting to Use Spread When Cloning",
        code: `const a = [1,2,3];
const b = a; // reference copy
b.push(4);
console.log(a); // [1,2,3,4]  // mutated!`,
        explanation: "Assigning directly copies by reference; use [...a] to clone."
      },
    ],
  },
  {
    heading: "FAQ",
    paragraphs: [],
    examples: [],
  },
];

const faqs = [
  {
    q: "What's the difference between spread and rest?",
    a: "Spread expands values in places like array literals or function calls, while rest collects multiple items into an array or object. The same ... syntax behaves differently depending on context.",
  },
  {
    q: "Can I use spread with strings?",
    a: "Yes, strings are iterable. Using [...'hello'] produces ['h','e','l','l','o'].",
  },
  {
    q: "Does spread perform a deep copy?",
    a: "No, spread only creates shallow copies. Nested objects or arrays are still references to the originals.",
  },
  {
    q: "Can I use rest in arrow functions?",
    a: "Yes, rest parameters work in any function, including arrow functions, as long as they are last in the parameter list.",
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

export default function SpreadRestPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-6 text-center">
          JavaScript Spread & Rest Operator
        </h1>
        <p className="text-lg mb-8 text-center">
          Explore how the ES6 spread operator and rest syntax simplify working with arrays, objects, and function arguments.
        </p>

        {sections.map((section, idx) => (
          <div key={idx} className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">{section.heading}</h2>
            {section.paragraphs.map((p, pidx) => (
              <p key={pidx} className="mb-4 text-gray-700 dark:text-gray-300">
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
              { label: "Destructuring", href: "/javascript/es6/destructuring" },
              { label: "Arrow Functions", href: "/javascript/es6/arrow-functions" },
              { label: "Spread & Rest", href: "/javascript/es6/spread-rest" },
              { label: "Array Methods", href: "/javascript/arrays/array-methods" },
              { label: "Objects", href: "/javascript/objects" },
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
            <li>Spread expands iterable values into new arrays or objects</li>
            <li>Rest collects multiple elements into a single array or object</li>
            <li>Both use the same ... syntax but behave differently based on context</li>
            <li>Spread creates shallow copies; nested data is still referenced</li>
            <li>Rest parameters must appear last in a function signature</li>
            <li>Use spread for cloning/merging and rest for function arguments or destructuring</li>
          </ul>
        </div>
      </div>
    </>
  );
}