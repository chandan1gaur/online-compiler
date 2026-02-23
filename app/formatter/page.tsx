import type { Metadata } from "next";
import FormatterTool from "@/components/FormatterTool";

export const metadata: Metadata = {
  title: "JSON YAML XML Formatter and Validator",
  description:
    "Free online JSON, YAML, and XML formatter and validator. Validate syntax, format data, and debug structured payloads.",
  alternates: {
    canonical: "/formatter",
  },
};

export default function FormatterPage() {
  return <FormatterTool />;
}
