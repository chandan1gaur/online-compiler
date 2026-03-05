import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "Var vs Let vs Const — JavaScript Variable Guide",
  description:
    "Learn the practical differences between var, let, and const in JavaScript. Scope, hoisting, temporal dead zone, best practices, and runnable examples for modern code.",
  keywords: [
    "var let const",
    "javascript variables",
    "temporal dead zone",
    "hoisting",
    "javascript tutorial",
    "js variables guide",
  ],
  openGraph: {
    title: "Var vs Let vs Const — JavaScript Variable Guide",
    description:
      "Learn the practical differences between var, let, and const in JavaScript with examples, pitfalls, and best practices.",
    url: "/javascript/variables/var-let-const",
    type: "article",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Var vs Let vs Const — JavaScript Variable Guide",
    description:
      "Learn the practical differences between var, let, and const in JavaScript with examples, pitfalls, and best practices.",
    images: ["/og-image.svg"],
  },
  alternates: { canonical: "/javascript/variables/var-let-const" },
};

export default function VarLetConstPage() {
  return (
    <JsTutorialTemplate
      title="Var vs Let vs Const — Practical JavaScript Guide"
      intro="This guide explains `var`, `let`, and `const` with clear rules, runnable examples, and best practices to write safer and more predictable JavaScript."
      why="Choosing the correct declaration prevents bugs related to scope, hoisting, and accidental reassignment — essential for clean, maintainable code."
      sections={[
        {
          heading: "Quick summary: when to use which",
          paragraphs: [
            "`const` — use it by default for values that should not be reassigned. It provides clearer intent and reduces accidental bugs.",
            "`let` — use when you need to reassign, such as loop counters or stateful variables.",
            "`var` — function-scoped and legacy; avoid in modern code unless maintaining old codebases.",
          ],
        },
        {
          heading: "Hoisting and Temporal Dead Zone (TDZ)",
          paragraphs: [
            "Declarations are hoisted differently: `var` is hoisted and initialized with `undefined`, so accessing it before declaration returns `undefined` instead of throwing.",
            "`let` and `const` are hoisted but not initialized. Accessing them before declaration throws a `ReferenceError` — this is called the temporal dead zone.",
            "TDZ catches many accidental early accesses and is a helpful safety feature in modern JavaScript.",
          ],
        },
        {
          heading: "Block vs Function Scope",
          paragraphs: [
            "`let` and `const` are block-scoped — they live inside `{}` blocks (for, if, while, etc.). `var` is function-scoped and can escape block boundaries unexpectedly.",
            "Prefer block-scoped declarations to avoid accidental globals and subtle loop bugs.",
          ],
        },
        {
          heading: "`const` doesn’t make objects immutable",
          paragraphs: [
            "`const` prevents reassignment of the binding, but object properties can still change.",
            "Use `Object.freeze()` or immutable update patterns when you need deep immutability.",
          ],
        },
        {
          heading: "Best practices and migration",
          paragraphs: [
            "Start with `const` as the default and switch to `let` only when reassignment is necessary.",
            "Avoid using `var` in new code; migrate legacy `var` to `let`/`const` as part of refactors.",
            "Keep variable lifetimes small and prefer descriptive names to make intent obvious.",
          ],
        },
      ]}
      examples={[
        {
          title: "Block scope vs function scope",
          code: `if (true) {
  var oldWay = "visible outside block";
  let modernWay = "only inside block";
}

console.log(oldWay); // works
// console.log(modernWay); // ReferenceError` ,
          explanation: "`var` leaks outside block; `let` does not — use block scope for predictable variables.",
        },
        {
          title: "Temporal Dead Zone example",
          code: `function demo() {
  // console.log(x); // ReferenceError for let/const
  let x = 10;
  console.log(x);
}
demo();`,
          explanation: "Accessing `let`/`const` before declaration throws due to TDZ — helps avoid accidental early access.",
        },
        {
          title: "const with object mutation",
          code: `const config = { mode: "light" };
config.mode = "dark"; // allowed
console.log(config.mode);

// config = {}; // TypeError if uncommented`,
          explanation: "`const` locks the binding but not the internal object — mutate properties carefully.",
        },
      ]}
      mistakes={[
        {
          title: "Using `var` in loops leads to closure bugs",
          fix: "Use `let` for loop variables so each iteration gets a fresh binding.",
        },
        {
          title: "Expecting `const` to be immutable",
          fix: "Use `Object.freeze` or create new objects for immutable updates when needed.",
        },
        {
          title: "Accessing `let`/`const` before declaration",
          fix: "Declare variables at the top of their block or avoid early access to prevent TDZ errors.",
        },
      ]}
      faqs={[
        {
          q: "Should I always use `const`?",
          a: "Yes — prefer `const` by default and use `let` when you need to reassign. This makes code intent clearer and reduces bugs.",
        },
        {
          q: "Can `const` values change?",
          a: "The binding cannot be reassigned, but object or array contents can change. Use immutability helpers when you need immutable state.",
        },
        {
          q: "Why avoid `var` in modern code?",
          a: "`var` is function-scoped and can lead to unexpected behavior due to hoisting and leakage outside blocks. `let`/`const` are safer and clearer.",
        },
      ]}
      related={[
        { label: "Functions", href: "/javascript/functions" },
        { label: "Closures", href: "/javascript/closures" },
        { label: "JavaScript Compiler", href: "/javascript/online-compiler" },
        { label: "Variables overview", href: "/javascript/variables" },
      ]}
    />
  );
}
