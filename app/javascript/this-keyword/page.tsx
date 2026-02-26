import type { Metadata } from "next";
import JsTutorialTemplate from "@/components/JsTutorialTemplate";

export const metadata: Metadata = {
  title: "JavaScript this Keyword Tutorial",
  description:
    "Deep guide to JavaScript this keyword across objects, functions, arrow functions, call/apply/bind.",
  keywords: [
    "javascript this keyword",
    "this binding",
    "function context",
    "call apply bind",
    "js tutorial",
  ],
  alternates: { canonical: "/javascript/this-keyword" },
};

export default function JavascriptThisKeywordPage() {
  return (
    <JsTutorialTemplate
      title="JavaScript this Keyword: Context, Binding, and Real Behavior"
      intro="The value of this depends on how a function is called, not where it is written."
      why="Misunderstanding this causes many method bugs, callback issues, and interview confusion."
      sections={[
        {
          heading: "Context Rules for this",
          paragraphs: [
            "In object methods, this usually points to the calling object.",
            "In regular standalone function calls, this is undefined in strict mode.",
            "Arrow functions do not create their own this and inherit lexical this from outer scope.",
          ],
        },
        {
          heading: "Explicit Binding with call/apply/bind",
          paragraphs: [
            "call invokes function immediately with explicit this and comma-separated args.",
            "apply is similar but accepts argument array.",
            "bind returns a new function with permanently bound this context.",
          ],
        },
      ]}
      examples={[
        {
          title: "Method vs Arrow in Object",
          code: `const user = {
  name: "Asha",
  normal() {
    return this.name;
  },
  arrow: () => this?.name,
};

console.log(user.normal()); // Asha
console.log(user.arrow());  // usually undefined`,
          explanation: "Arrow inherits outer this and is not ideal for object methods requiring dynamic context.",
        },
        {
          title: "call and apply",
          code: `function greet(city) {
  return "Hi " + this.name + " from " + city;
}
const person = { name: "Ravi" };
console.log(greet.call(person, "Pune"));
console.log(greet.apply(person, ["Delhi"]));`,
          explanation: "Both call and apply set this explicitly for invocation.",
        },
        {
          title: "bind for Callback Safety",
          code: `const profile = {
  name: "Nina",
  show() {
    console.log(this.name);
  },
};

const safeShow = profile.show.bind(profile);
safeShow();`,
          explanation: "bind prevents context loss when passing methods around.",
        },
      ]}
      mistakes={[
        {
          title: "Using arrow functions as object methods",
          fix: "Use method shorthand or regular function when this is needed.",
        },
        {
          title: "Losing this in callbacks",
          fix: "Use bind, wrapper functions, or class field arrows carefully.",
        },
        {
          title: "Assuming this equals function owner always",
          fix: "Remember invocation style determines this value.",
        },
      ]}
      faqs={[
        {
          q: "Does this refer to current function?",
          a: "No. this refers to calling context, which can vary.",
        },
        {
          q: "When to use bind?",
          a: "Use bind when passing methods as callbacks and preserving object context is necessary.",
        },
        {
          q: "Arrow function this vs normal function this?",
          a: "Arrow uses lexical this from outer scope; normal function gets dynamic this based on call site.",
        },
        {
          q: "Is this asked in interviews often?",
          a: "Yes, this binding questions are very common in JavaScript interviews.",
        },
      ]}
      related={[
        { label: "Functions", href: "/javascript/functions" },
        { label: "Objects", href: "/javascript/objects" },
        { label: "Interview Questions", href: "/javascript/interview-questions" },
        { label: "JavaScript Compiler", href: "/javascript/online-compiler" },
      ]}
    />
  );
}
