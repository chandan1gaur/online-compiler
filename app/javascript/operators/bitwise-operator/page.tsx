import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "JavaScript Bitwise Operators: &, |, ^, ~, <<, >>, >>>",
  description:
    "Understand JavaScript bitwise operators with examples for flags, masks, shifts, and performance-aware use cases.",
  keywords: [
    "javascript bitwise operators",
    "bitwise and",
    "bitwise or",
    "bitwise xor",
    "bitwise shift",
    "bitwise not",
  ],
  openGraph: {
    title: "JavaScript Bitwise Operators",
    description:
      "Understand JavaScript bitwise operators with examples for flags, masks, shifts, and performance-aware use cases.",
    url: "/javascript/operators/bitwise-operator",
    type: "article",
    images: ["/og-operators-bitwise.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Bitwise Operators",
    description:
      "Understand JavaScript bitwise operators with examples for flags, masks, shifts, and performance-aware use cases.",
    images: ["/og-operators-bitwise.svg"],
  },
  alternates: { canonical: "/javascript/operators/bitwise-operator" },
};

const sections = [
  {
    heading: "Working with Flags",
    paragraphs: [
      "Bitwise operators are great for flags and permissions. Each bit can represent a feature on/off.",
      "Use `|` to add flags, `&` to test them, and `^` to toggle.",
    ],
  },
  {
    heading: "Shifts and Multipliers",
    paragraphs: [
      "Left shift (`<<`) multiplies by powers of two. Right shift (`>>`) divides by powers of two while keeping the sign.",
      "Unsigned right shift (`>>>`) fills with zero on the left and treats numbers as unsigned 32-bit integers.",
    ],
  },
  {
    heading: "Performance and Constraints",
    paragraphs: [
      "Bitwise operators convert values to 32-bit integers. This can be fast but may lose precision with large numbers.",
      "Avoid bitwise ops on floating-point values unless you know the conversion is safe.",
    ],
  },
  {
    heading: "Real-World Uses",
    paragraphs: [
      "Feature toggles, permissions, caching strategies, and graphics work commonly use bitwise logic.",
      "They are powerful but less readable, so use them when the benefit is clear.",
    ],
  },
];

const examples = [
  {
    title: "Bitwise AND / OR",
    code: `const READ = 1;  // 0001\nconst WRITE = 2; // 0010\nconst EXEC = 4;  // 0100\n\nlet perms = READ | WRITE; // 0011\nconst canWrite = (perms & WRITE) !== 0;\n\nconsole.log(perms, canWrite);`,
    explanation: "Use bitwise OR to set flags and AND to check them.",
  },
  {
    title: "Toggle with XOR",
    code: `const DARK = 1; // 0001\nlet flags = 0;\n\nflags ^= DARK; // toggle on\nflags ^= DARK; // toggle off\n\nconsole.log(flags);`,
    explanation: "XOR flips bits: on becomes off, off becomes on.",
  },
  {
    title: "Shift Operations",
    code: `console.log(5 << 1);  // 10 (1010)\nconsole.log(8 >> 1);  // 4\nconsole.log(-8 >>> 1); // large unsigned number`,
    explanation: "Shifts multiply/divide by powers of two, or zero-fill with >>>.",
  },
  {
    title: "Bitwise NOT",
    code: `console.log(~5); // -6\n\n// Useful for quick index checks\nconst idx = "hello".indexOf("e");\nconsole.log(~idx); // non-zero means found`,
    explanation: "Bitwise NOT flips all bits. It can be used in clever patterns, though readability matters.",
  },
];

const mistakes = [
  { title: "Forgetting 32-bit conversion", fix: "Bitwise ops coerce to 32-bit ints. Avoid on large numbers." },
  { title: "Using bitwise for readability", fix: "Prefer clear boolean logic unless you need flags or masks." },
  { title: "Mixing floats with bitwise", fix: "Bitwise ops drop fractional parts." },
  { title: "Assuming >>> preserves sign", fix: "Unsigned shift always fills with zeros and treats numbers as unsigned." },
];

const faqs = [
  {
    q: "Why does ~5 equal -6?",
    a: "Bitwise NOT flips all bits. In two's complement, that results in -(n+1).",
  },
  {
    q: "Are bitwise operators fast?",
    a: "They are optimized but only helpful when you actually need bit-level manipulation.",
  },
  {
    q: "What is the difference between >> and >>>?",
    a: ">> keeps the sign bit; >>> shifts in zeros and treats the number as unsigned.",
  },
  {
    q: "When should I use bitwise flags?",
    a: "When you need compact, fast permission or feature toggles.",
  },
];

const related = [
  { label: "Logical Operators", href: "/javascript/operators/logical-operator" },
  { label: "Assignment Operators", href: "/javascript/operators/assignment-operator" },
  { label: "Operator Precedence", href: "/javascript/operators/precedence-operator" },
  { label: "Data Types", href: "/javascript/variables/data-types" },
];

export default function JavascriptBitwiseOperatorsPage() {
  return (
    <JsTutorialTemplate
      title="JavaScript Bitwise Operators"
      intro={[
        "Bitwise operators work directly with the binary representation of numbers. They are powerful for flags, masks, and low-level optimizations.",
        "Because they coerce numbers to 32-bit integers, you should use them carefully and intentionally.",
      ]}
      why={[
        "Bitwise logic can reduce memory usage and make permission checks fast, but it can also hide intent.",
        "Knowing when and how to use bitwise operators helps you balance performance and readability.",
      ]}
      syntax={[
        "a & b   // AND",
        "a | b   // OR",
        "a ^ b   // XOR",
        "~a      // NOT",
        "a << b  // left shift",
        "a >> b  // right shift (sign-preserving)",
        "a >>> b // unsigned right shift",
      ]}
      examples={examples}
      sections={sections}
      comparison={{
        without: `// Without flags\nconst canRead = true;\nconst canWrite = true;\nconst canExec = false;`,
        with: `// With flags\nconst READ = 1;\nconst WRITE = 2;\nconst EXEC = 4;\nlet perms = READ | WRITE;\nconst canExec = (perms & EXEC) !== 0;`,
      }}
      mistakes={mistakes}
      interviewQuestions={[
        { q: "What happens to numbers in bitwise operations?", a: "They are converted to 32-bit signed integers." },
        { q: "How do you check if a flag is set?", a: "Use AND: (flags & FLAG) !== 0." },
        { q: "Difference between >> and >>>?", a: ">> preserves sign; >>> shifts in zeros and treats as unsigned." },
      ]}
      practice={{
        prompt: "Practice: Create READ, WRITE, and DELETE flags and check if a user has DELETE permission.",
        starterCode: `const READ = 1;\nconst WRITE = 2;\nconst DELETE = 4;\nlet perms = READ | WRITE;\n// TODO: check if DELETE is enabled\n`,
        solution: `const READ = 1;\nconst WRITE = 2;\nconst DELETE = 4;\nlet perms = READ | WRITE;\nconst canDelete = (perms & DELETE) !== 0;\nconsole.log(canDelete);`,
      }}
      faqs={faqs}
      related={related}
      tryItYourself={{
        code: examples[0].code,
        label: "Run Bitwise Demo",
        description: "Run the flag examples and toggle bits to see how permissions change.",
      }}
    />
  );
}
