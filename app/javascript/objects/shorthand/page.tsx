import type { Metadata } from "next";
import Script from "next/script";
import CodeExample from "@/components/CodeExample";

export const metadata: Metadata = {
  title: "JavaScript Object Shorthand - Property and Method Shorthand Syntax",
  description: "Master JavaScript object literal shorthand syntax for properties and methods, including computed property names and practical patterns.",
  keywords: [
    "javascript object shorthand",
    "property shorthand",
    "method shorthand",
    "object literal syntax",
    "computed property names",
    "es6 object features",
    "javascript objects",
    "object destructuring",
    "property names",
    "method definitions"
  ],
  openGraph: {
    title: "JavaScript Object Shorthand Guide",
    description: "Master JavaScript object literal shorthand syntax for properties and methods, including computed property names and practical patterns.",
    url: "/javascript/objects/shorthand",
    type: "article",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Object Shorthand",
    description: "Master JavaScript object literal shorthand syntax for properties and methods, including computed property names and practical patterns.",
    images: ["/og-image.svg"],
  },
  alternates: { canonical: "/javascript/objects/shorthand" },
};

const shorthandSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "JavaScript Object Shorthand - Property and Method Shorthand Syntax",
  "description": "Master JavaScript object literal shorthand syntax for properties and methods, including computed property names and practical patterns.",
  "author": {
    "@type": "Organization",
    "name": "Online JavaScript Compiler"
  },
  "datePublished": "2024-01-01",
  "dateModified": "2024-01-01"
};

export default function ShorthandPage() {
  return (
    <>
      <Script id="shorthand-schema" type="application/ld+json">
        {JSON.stringify(shorthandSchema)}
      </Script>

      <main className="mx-auto max-w-6xl px-3 py-12 sm:px-4">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-8">
          JavaScript Object Shorthand - Property and Method Shorthand Syntax
        </h1>

        <p className="text-lg text-slate-700 mb-8">
          Object shorthand syntax makes object literals shorter and easier to scan. This guide covers
          property shorthand, method shorthand, and computed property names with clear examples and
          practical tips.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">1. Property Shorthand</h2>

          <p className="text-slate-700 mb-4">
            When a variable name matches the property name, you can omit the value. This keeps object
            creation concise without changing behavior.
          </p>

          <CodeExample
            title="Property Shorthand Basics"
            code={`// Long form
const name = 'John';
const age = 30;
const city = 'NYC';

const personLong = {
  name: name,
  age: age,
  city: city
};

// Shorthand
const personShort = {
  name,
  age,
  city
};

console.log(personLong);
console.log(personShort);

// Mixed usage
const id = 123;
const status = 'active';

const user = {
  id,
  name,
  age,
  status: status
};
`}
          />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">2. Method Shorthand</h2>

          <p className="text-slate-700 mb-4">
            Method shorthand removes the function keyword and colon. It is ideal for object methods
            that use this.
          </p>

          <CodeExample
            title="Method Shorthand"
            code={`// Long form
const calculatorLong = {
  value: 0,
  add: function (n) {
    this.value += n;
    return this;
  },
  getValue: function () {
    return this.value;
  }
};

// Shorthand
const calculatorShort = {
  value: 0,
  add(n) {
    this.value += n;
    return this;
  },
  getValue() {
    return this.value;
  }
};

console.log(calculatorShort.add(5).add(3).getValue());
`}
          />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">3. Computed Property Names</h2>

          <p className="text-slate-700 mb-4">
            Computed property names let you build keys dynamically with expressions. Use this for
            config maps, feature flags, or API builders.
          </p>

          <CodeExample
            title="Computed Keys"
            code={`const prefix = 'user';
const id = 42;

const obj = {
  [prefix + '_' + id]: true,
  ['is' + 'Active']: true
};

console.log(obj.user_42);
console.log(obj.isActive);

// Dynamic methods
const action = 'save';
const api = {
  [action + 'User'](data) {
    return { ok: true, data: data };
  }
};

console.log(api.saveUser({ id: 1 }));
`}
          />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">4. Best Practices</h2>

          <ul className="list-disc pl-6 text-slate-700 space-y-2">
            <li>Use shorthand when the variable names are clear and stable.</li>
            <li>Prefer method shorthand for object methods that rely on this.</li>
            <li>Use computed keys sparingly and keep expressions simple.</li>
            <li>Combine shorthand with spread syntax to build objects cleanly.</li>
          </ul>

          <CodeExample
            title="Clean Object Assembly"
            code={`const defaults = { theme: 'light', pageSize: 20 };
const overrides = { pageSize: 50 };
const userId = 7;

const settings = {
  userId,
  ...defaults,
  ...overrides,
  updatedAt: Date.now()
};

console.log(settings);
`}
          />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">Summary</h2>

          <p className="text-lg text-slate-700 mb-6">
            Object shorthand reduces noise while keeping your intent clear. Use property shorthand for
            matching names, method shorthand for object behaviors, and computed keys for dynamic cases.
          </p>

          <div className="bg-slate-50 p-6 rounded-lg mb-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Key Takeaways</h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-medium text-slate-800">Property Shorthand:</h4>
                <p className="text-slate-700">Use variable names directly for concise objects.</p>
              </div>
              <div>
                <h4 className="font-medium text-slate-800">Method Shorthand:</h4>
                <p className="text-slate-700">Write methods without the function keyword.</p>
              </div>
              <div>
                <h4 className="font-medium text-slate-800">Computed Keys:</h4>
                <p className="text-slate-700">Build keys dynamically with expressions.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
