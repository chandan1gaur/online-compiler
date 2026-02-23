"use client";

import { useMemo, useState } from "react";
import yaml from "js-yaml";

type FormatKind = "json" | "yaml" | "xml";
type Topic = {
  title: string;
  description: string;
  code: string;
  takeaway: string;
};

const starterSamples: Record<FormatKind, string> = {
  json: '{\n  "name": "Online Compiler",\n  "features": ["JSON", "YAML", "XML"],\n  "active": true\n}',
  yaml: "name: Online Compiler\nfeatures:\n  - JSON\n  - YAML\n  - XML\nactive: true\n",
  xml: '<root>\n<name>Online Compiler</name>\n<features>\n<item>JSON</item>\n<item>YAML</item>\n<item>XML</item>\n</features>\n<active>true</active>\n</root>',
};

const basicTopics: Topic[] = [
  {
    title: "JSON Formatting Basics",
    description:
      "JSON requires strict syntax. Keys and string values need double quotes, arrays use square brackets, and objects use curly braces.",
    code: `{\n  "user": "chandan",\n  "skills": ["html", "css", "javascript"],\n  "active": true\n}`,
    takeaway: "Use strict quoting and commas correctly to avoid JSON parse errors.",
  },
  {
    title: "YAML Key-Value Structure",
    description:
      "YAML relies on indentation instead of braces. It is common in CI pipelines, Kubernetes files, and config documents.",
    code: `app: online-compiler\nversion: 1.0\nenabled: true\nfeatures:\n  - formatter\n  - regex`,
    takeaway: "Keep indentation consistent with spaces to prevent broken YAML structures.",
  },
  {
    title: "XML Element and Attribute Syntax",
    description:
      "XML uses start and end tags and can include attributes. Every opened tag must be closed correctly.",
    code: `<project name=\"online-compiler\">\n  <feature type=\"tool\">formatter</feature>\n  <feature type=\"tool\">regex</feature>\n</project>`,
    takeaway: "Always match opening and closing tags for valid XML parsing.",
  },
  {
    title: "Copy-Paste API Payload Cleanup",
    description:
      "Incoming payloads from APIs are often minified. Formatter tools help make them readable for debugging and team reviews.",
    code: `{\"id\":12,\"name\":\"Demo\",\"roles\":[\"admin\",\"editor\"],\"meta\":{\"country\":\"IN\"}}`,
    takeaway: "Formatting payloads first helps you debug faster and avoid missing nested keys.",
  },
];

const advancedTopics: Topic[] = [
  {
    title: "Nested Object Validation Workflow",
    description:
      "Complex objects can hide subtle structure errors. Validate each layer from top-level keys to deeply nested arrays.",
    code: `{\n  "order": {\n    "id": "A100",\n    "items": [\n      { "sku": "P1", "qty": 2 },\n      { "sku": "P2", "qty": 1 }\n    ]\n  }\n}`,
    takeaway: "Inspect nested paths step by step instead of scanning entire payload at once.",
  },
  {
    title: "YAML Lists and Nested Maps",
    description:
      "Advanced YAML often combines lists and maps. Proper indentation and grouping are critical for deployment configs.",
    code: `services:\n  web:\n    image: nginx\n    ports:\n      - \"80:80\"\n  api:\n    image: node:20\n    environment:\n      NODE_ENV: production`,
    takeaway: "Visual hierarchy in YAML is logic hierarchy; one indentation mistake changes meaning.",
  },
  {
    title: "XML Namespaces and Structure Consistency",
    description:
      "In larger XML documents, namespaces and consistent node hierarchy reduce conflicts and parsing ambiguity.",
    code: `<ns:catalog xmlns:ns=\"https://example.com/schema\">\n  <ns:item id=\"1\">\n    <ns:name>Formatter</ns:name>\n  </ns:item>\n</ns:catalog>`,
    takeaway: "Namespaces are useful when integrating XML from multiple providers.",
  },
  {
    title: "Validation Before Database Insert",
    description:
      "Before writing imported payloads to a database, format and validate structure to catch malformed fields early.",
    code: `{\n  "importedAt": "2026-02-23T10:00:00Z",\n  "records": [\n    { "id": 1, "status": "ok" },\n    { "id": 2, "status": "ok" }\n  ]\n}`,
    takeaway: "Formatted validation saves downstream cleanup and prevents data integrity issues.",
  },
];

function formatXml(xml: string): string {
  const parser = new DOMParser();
  const doc = parser.parseFromString(xml, "application/xml");
  const parseError = doc.querySelector("parsererror");
  if (parseError) {
    throw new Error(parseError.textContent || "Invalid XML input");
  }

  const serializer = new XMLSerializer();

  const walk = (node: Node, depth: number): string => {
    const indent = "  ".repeat(depth);
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent?.trim() || "";
      return text ? `${indent}${text}\n` : "";
    }
    if (node.nodeType !== Node.ELEMENT_NODE) return "";

    const element = node as Element;
    const attrs = Array.from(element.attributes)
      .map((attr) => `${attr.name}="${attr.value}"`)
      .join(" ");
    const openTag = attrs.length ? `<${element.tagName} ${attrs}>` : `<${element.tagName}>`;

    const childNodes = Array.from(element.childNodes);
    const hasElementChild = childNodes.some((child) => child.nodeType === Node.ELEMENT_NODE);
    const textOnlyContent = element.textContent?.trim() || "";

    if (!hasElementChild && textOnlyContent) {
      return `${indent}${openTag}${textOnlyContent}</${element.tagName}>\n`;
    }

    let output = `${indent}${openTag}\n`;
    for (const child of childNodes) {
      output += walk(child, depth + 1);
    }
    output += `${indent}</${element.tagName}>\n`;
    return output;
  };

  return serializer
    .serializeToString(doc.documentElement)
    .replace(/></g, ">\n<")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean).length
    ? walk(doc.documentElement, 0).trim()
    : xml;
}

export default function FormatterTool() {
  const [kind, setKind] = useState<FormatKind>("json");
  const [input, setInput] = useState(starterSamples.json);
  const [output, setOutput] = useState("");
  const [message, setMessage] = useState("Ready to validate and format.");
  const [isError, setIsError] = useState(false);

  const placeholder = useMemo(() => {
    if (kind === "json") return "Paste JSON here...";
    if (kind === "yaml") return "Paste YAML here...";
    return "Paste XML here...";
  }, [kind]);

  const onKindChange = (next: FormatKind) => {
    setKind(next);
    setInput(starterSamples[next]);
    setOutput("");
    setIsError(false);
    setMessage("Ready to validate and format.");
  };

  const validateAndFormat = () => {
    try {
      let formatted = "";
      if (kind === "json") {
        const parsed = JSON.parse(input);
        formatted = JSON.stringify(parsed, null, 2);
      } else if (kind === "yaml") {
        const parsed = yaml.load(input);
        formatted = yaml.dump(parsed, { indent: 2, noRefs: true, lineWidth: 100 });
      } else {
        formatted = formatXml(input);
      }

      setOutput(formatted);
      setIsError(false);
      setMessage(`${kind.toUpperCase()} is valid.`);
    } catch (error) {
      const text = error instanceof Error ? error.message : "Invalid input";
      setOutput("");
      setIsError(true);
      setMessage(text);
    }
  };

  const resetCurrent = () => {
    setInput(starterSamples[kind]);
    setOutput("");
    setIsError(false);
    setMessage("Reset sample loaded.");
  };

  return (
    <section className="mx-auto w-full max-w-[1500px] px-3 py-10 sm:px-4">
      <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-cyan-50 p-6 shadow-lg">
        <div className="mb-5 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">JSON, YAML & XML Formatter</h1>
            <p className="mt-1 text-sm text-slate-600">Validate, prettify, and debug structured data instantly.</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {(["json", "yaml", "xml"] as const).map((item) => (
              <button
                key={item}
                onClick={() => onKindChange(item)}
                className={`rounded-md px-3 py-1.5 text-sm font-semibold transition ${
                  kind === item ? "bg-slate-900 text-white" : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-100"
                }`}
              >
                {item.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-4 flex flex-wrap items-center gap-2">
          <button
            onClick={validateAndFormat}
            className="rounded-md bg-cyan-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-cyan-700"
          >
            Validate + Format
          </button>
          <button
            onClick={resetCurrent}
            className="rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            Reset Sample
          </button>
          <p className={`text-sm ${isError ? "text-red-600" : "text-emerald-700"}`}>{message}</p>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <article className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700">
              Input
            </div>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={placeholder}
              className="h-[420px] w-full resize-y bg-white p-3 font-mono text-sm text-slate-900 outline-none"
              spellCheck={false}
            />
          </article>

          <article className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700">
              Formatted Output
            </div>
            <pre className="h-[420px] overflow-auto code-paper bg-white border border-slate-200 p-3 font-mono text-xs text-slate-800">
              {output || "Run validation to see formatted output here."}
            </pre>
          </article>
        </div>

        <section className="mt-8 grid gap-4 md:grid-cols-2">
          <article className="rounded-xl border border-slate-200 bg-white p-4">
            <h2 className="text-lg font-semibold text-slate-900">Why use this formatter?</h2>
            <p className="mt-2 text-sm text-slate-700">
              Use this online formatter to clean structured payloads before debugging API requests, config files, and
              data exports.
            </p>
          </article>
          <article className="rounded-xl border border-slate-200 bg-white p-4">
            <h2 className="text-lg font-semibold text-slate-900">Supported formats</h2>
            <p className="mt-2 text-sm text-slate-700">
              JSON validation with pretty print, YAML parsing with indentation, and XML syntax checks with formatted
              output.
            </p>
          </article>
        </section>

        <section className="mt-6 rounded-xl border border-slate-200 bg-white p-4">
          <h2 className="text-lg font-semibold text-slate-900">Common Formatting Errors</h2>
          <div className="mt-3 grid gap-3 md:grid-cols-3">
            <article className="rounded-lg border border-slate-200 bg-slate-50 p-3">
              <h3 className="text-sm font-semibold text-slate-900">Invalid JSON token</h3>
              <p className="mt-2 text-sm text-slate-700">Check commas, quotes, and trailing commas in objects or arrays.</p>
            </article>
            <article className="rounded-lg border border-slate-200 bg-slate-50 p-3">
              <h3 className="text-sm font-semibold text-slate-900">YAML indentation issue</h3>
              <p className="mt-2 text-sm text-slate-700">Use consistent spaces for nested keys and list items.</p>
            </article>
            <article className="rounded-lg border border-slate-200 bg-slate-50 p-3">
              <h3 className="text-sm font-semibold text-slate-900">XML parse error</h3>
              <p className="mt-2 text-sm text-slate-700">Ensure opening and closing tags match and attribute quotes are valid.</p>
            </article>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Basic Topics with Examples</h2>
          <p className="mt-2 text-sm text-slate-600">
            Learn core formatting concepts for JSON, YAML, and XML before handling production payloads.
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {basicTopics.map((topic) => (
              <article key={topic.title} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">{topic.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">{topic.description}</p>
                <pre className="mt-3 overflow-x-auto rounded-md code-paper bg-white border border-slate-200 p-3 text-xs text-slate-800">
                  <code>{topic.code}</code>
                </pre>
                <p className="mt-3 text-sm text-slate-600">
                  <span className="font-semibold text-slate-800">Key takeaway:</span> {topic.takeaway}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Advanced Topics with Examples</h2>
          <p className="mt-2 text-sm text-slate-600">
            Apply structured validation practices for larger, nested, and integration-heavy data workflows.
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {advancedTopics.map((topic) => (
              <article key={topic.title} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">{topic.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">{topic.description}</p>
                <pre className="mt-3 overflow-x-auto rounded-md code-paper bg-white border border-slate-200 p-3 text-xs text-slate-800">
                  <code>{topic.code}</code>
                </pre>
                <p className="mt-3 text-sm text-slate-600">
                  <span className="font-semibold text-slate-800">Key takeaway:</span> {topic.takeaway}
                </p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
