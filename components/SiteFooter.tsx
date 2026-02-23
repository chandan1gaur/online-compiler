import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 sm:px-6">
        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
          <Link href="/html" className="hover:text-slate-900">
            HTML Compiler
          </Link>
          <Link href="/javascript" className="hover:text-slate-900">
            JavaScript Compiler
          </Link>
          <Link href="/privacy" className="hover:text-slate-900">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-slate-900">
            Terms & Conditions
          </Link>
          <Link href="/about" className="hover:text-slate-900">
            About
          </Link>
          <Link href="/contact" className="hover:text-slate-900">
            Contact
          </Link>
          <Link href="/sitemap.xml" className="hover:text-slate-900">
            Sitemap
          </Link>
        </div>
        <p className="text-sm text-slate-500">
          Copyright {new Date().getFullYear()} Online Compiler. Build, test, and share front-end snippets instantly.
        </p>
      </div>
    </footer>
  );
}
