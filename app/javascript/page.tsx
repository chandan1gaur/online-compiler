import type { Metadata } from "next";
import CompilerPage from "@/components/CompilerPage";

export const metadata: Metadata = {
  title: "JavaScript Compiler Online",
  description:
    "Run JavaScript online in your browser with instant output and a lightweight coding interface. No installation required.",
  alternates: {
    canonical: "/javascript",
  },
};

export default function JavaScriptCompilerPage() {
  return <CompilerPage language="javascript" />;
}
