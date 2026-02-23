import type { Metadata } from "next";
import CompilerPage from "@/components/CompilerPage";

export const metadata: Metadata = {
  title: "HTML Compiler Online",
  description:
    "Use the free online HTML compiler with CSS and JavaScript support. Write code, run live preview, and download your files.",
  alternates: {
    canonical: "/html",
  },
};

export default function HtmlCompilerPage() {
  return <CompilerPage language="html" />;
}
