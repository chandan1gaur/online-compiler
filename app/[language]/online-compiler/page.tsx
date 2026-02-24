import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CompilerPage from "@/components/CompilerPage";
import FormatterTool from "@/components/FormatterTool";
import RegexPlayground from "@/components/RegexPlayground";

type SupportedLanguage = "html" | "javascript" | "formatter" | "regex";

const supportedLanguages: SupportedLanguage[] = ["html", "javascript", "formatter", "regex"];

type PageProps = {
  params: Promise<{ language: string }>;
  searchParams: Promise<{ code?: string | string[]; run?: string | string[] }>;
};

function isSupportedLanguage(language: string): language is SupportedLanguage {
  return supportedLanguages.includes(language as SupportedLanguage);
}

export async function generateStaticParams() {
  return supportedLanguages.map((language) => ({ language }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { language } = await params;
  if (!isSupportedLanguage(language)) {
    return {};
  }

  if (language === "html") {
    return {
      title: "HTML Compiler Online",
      description:
        "Use the free online HTML compiler with CSS and JavaScript support. Write code, run live preview, and download your files.",
      alternates: { canonical: "/html/online-compiler" },
    };
  }

  if (language === "javascript") {
    return {
      title: "JavaScript Compiler Online",
      description:
        "Run JavaScript online in your browser with instant output and a lightweight coding interface. No installation required.",
      alternates: { canonical: "/javascript/online-compiler" },
    };
  }

  if (language === "formatter") {
    return {
      title: "JSON YAML XML Formatter and Validator",
      description:
        "Free online JSON, YAML, and XML formatter and validator. Validate syntax, format data, and debug structured payloads.",
      alternates: { canonical: "/formatter/online-compiler" },
    };
  }

  return {
    title: "Regex Tester and Parser Playground",
    description:
      "Test and debug regular expressions online with match lists, groups, and parsed JSON output in real time.",
    alternates: { canonical: "/regex/online-compiler" },
  };
}

export default async function OnlineCompilerByLanguagePage({ params, searchParams }: PageProps) {
  const { language } = await params;
  const query = await searchParams;

  if (!isSupportedLanguage(language)) {
    notFound();
  }

  const codeParam = Array.isArray(query.code) ? query.code[0] : query.code;
  const runParam = Array.isArray(query.run) ? query.run[0] : query.run;
  const autoRun = runParam === "1";

  if (language === "html") return <CompilerPage language="html" initialCode={codeParam} autoRun={autoRun} />;
  if (language === "javascript") return <CompilerPage language="javascript" initialCode={codeParam} autoRun={autoRun} />;
  if (language === "formatter") return <FormatterTool />;
  return <RegexPlayground />;
}
