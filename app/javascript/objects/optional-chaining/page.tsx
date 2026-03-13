import type { Metadata } from "next";
import Script from "next/script";
import CodeExample from "@/components/CodeExample";

export const metadata: Metadata = {
  title: "JavaScript Optional Chaining (?.) - Safe Property Access",
  description: "Learn JavaScript optional chaining for safe property and method access with clear syntax, common patterns, and best practices.",
  keywords: [
    "javascript optional chaining",
    "optional chaining operator",
    "safe property access",
    "null safety",
    "javascript null checking",
    "es2020 features",
    "property access",
    "javascript operators",
    "safe navigation",
    "null reference handling"
  ],
  openGraph: {
    title: "JavaScript Optional Chaining (?.) Guide",
    description: "Learn JavaScript optional chaining for safe property and method access with clear syntax, common patterns, and best practices.",
    url: "/javascript/objects/optional-chaining",
    type: "article",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Optional Chaining",
    description: "Learn JavaScript optional chaining for safe property and method access with clear syntax, common patterns, and best practices.",
    images: ["/og-image.svg"],
  },
  alternates: { canonical: "/javascript/objects/optional-chaining" },
};

const optionalChainingSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "JavaScript Optional Chaining (?.) - Safe Property Access",
  "description": "Learn JavaScript optional chaining for safe property and method access with clear syntax, common patterns, and best practices.",
  "author": {
    "@type": "Organization",
    "name": "Online JavaScript Compiler"
  },
  "datePublished": "2024-01-01",
  "dateModified": "2024-01-01"
};

export default function OptionalChainingPage() {
  return (
    <>
      <Script id="optional-chaining-schema" type="application/ld+json">
        {JSON.stringify(optionalChainingSchema)}
      </Script>

      <main className="mx-auto max-w-6xl px-3 py-12 sm:px-4">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-8">
          JavaScript Optional Chaining (?.) - Safe Property Access
        </h1>

        <p className="text-lg text-slate-700 mb-8">
          Optional chaining helps you access nested properties and call methods safely without throwing
          errors when values are null or undefined. It makes defensive code shorter and easier to read.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">1. Core Syntax</h2>

          <p className="text-slate-700 mb-4">
            Use optional chaining before a property, a bracket access, or a function call. If the value
            is null or undefined, the expression stops and returns undefined.
          </p>

          <CodeExample
            title="Optional Chaining Basics"
            code={`const user = {
  profile: {
    name: 'John',
    address: { city: 'NYC' }
  }
};

// Safe property access
const city = user?.profile?.address?.city;

// Safe array access
const first = user?.roles?.[0];

// Safe method call
const upper = user?.profile?.name?.toUpperCase?.();

console.log(city);
console.log(first);
console.log(upper);
`}
          />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">2. Common Patterns</h2>

          <p className="text-slate-700 mb-4">
            Optional chaining pairs well with nullish coalescing to provide defaults and keep UI code clean.
          </p>

          <CodeExample
            title="Defaults and UI Friendly Values"
            code={`const apiUser = null;

const name = apiUser?.name ?? 'Guest';
const email = apiUser?.profile?.email ?? 'No email';

const items = apiUser?.cart?.items ?? [];
const count = items.length;

console.log(name, email, count);
`}
          />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">3. With Functions and Events</h2>

          <p className="text-slate-700 mb-4">
            Optional chaining can protect method calls and event handlers. It prevents errors if a callback
            or object is missing.
          </p>

          <CodeExample
            title="Safe Calls"
            code={`const handlers = {
  onSave(data) {
    return { ok: true, data: data };
  }
};

const result = handlers?.onSave?.({ id: 1 });
console.log(result);

const maybeHandler = null;
maybeHandler?.('data');
`}
          />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">4. Pitfalls and Tips</h2>

          <ul className="list-disc pl-6 text-slate-700 space-y-2">
            <li>Optional chaining only stops on null or undefined, not on other falsy values.</li>
            <li>Do not use optional chaining on the left side of an assignment.</li>
            <li>Use nullish coalescing to provide defaults instead of logical OR.</li>
            <li>Keep chains short and consider extracting variables for clarity.</li>
          </ul>

          <CodeExample
            title="Fuzzy Values"
            code={`const config = { retries: 0 };

// Correct: 0 is valid
const retries = config?.retries ?? 3;

// Wrong: this would replace 0
const retriesWrong = config?.retries || 3;

console.log(retries, retriesWrong);
`}
          />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">Summary</h2>

          <p className="text-lg text-slate-700 mb-6">
            Optional chaining keeps property access safe and concise. Use it to protect nested access,
            method calls, and UI data paths, and combine it with nullish coalescing for defaults.
          </p>

          <div className="bg-slate-50 p-6 rounded-lg mb-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Key Takeaways</h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-medium text-slate-800">Syntax:</h4>
                <p className="text-slate-700">obj?.prop, obj?.[key], func?.(args)</p>
              </div>
              <div>
                <h4 className="font-medium text-slate-800">Behavior:</h4>
                <p className="text-slate-700">Stops evaluation on null or undefined and returns undefined.</p>
              </div>
              <div>
                <h4 className="font-medium text-slate-800">Best Pair:</h4>
                <p className="text-slate-700">Use ?? to provide safe defaults.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
