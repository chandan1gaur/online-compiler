"use client";

import { useMemo, useState } from "react";
import yaml from "js-yaml";

type FormatKind = "json" | "yaml" | "xml";

const starterSamples: Record<FormatKind, string> = {
  json: '{\n  "name": "Online Compiler",\n  "features": ["JSON", "YAML", "XML"],\n  "active": true\n}',
  yaml: "name: Online Compiler\nfeatures:\n  - JSON\n  - YAML\n  - XML\nactive: true\n",
  xml: '<root>\n<name>Online Compiler</name>\n<features>\n<item>JSON</item>\n<item>YAML</item>\n<item>XML</item>\n</features>\n<active>true</active>\n</root>',
};

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
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
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
            <pre className="h-[420px] overflow-auto bg-slate-950 p-3 font-mono text-xs text-cyan-100">
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
      </div>
    </section>
  );
}
