import type { ReactNode } from "react";
import JavascriptResponsiveLayout from "@/components/JavascriptResponsiveLayout";

export default function JavascriptLayout({ children }: { children: ReactNode }) {
  return <JavascriptResponsiveLayout>{children}</JavascriptResponsiveLayout>;
}
