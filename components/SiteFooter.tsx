import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-950/80">
      <div className="mx-auto flex w-full max-w-[1500px] flex-col gap-4 px-3 py-8 sm:px-4">
        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-300">
          <Link href="/html/online-compiler" className="hover:text-slate-900 dark:hover:text-white">
            HTML Compiler
          </Link>
          <Link href="/javascript/online-compiler" className="hover:text-slate-900 dark:hover:text-white">
            JavaScript Compiler
          </Link>
          <Link href="/formatter/online-compiler" className="hover:text-slate-900 dark:hover:text-white">
            JSON/YAML/XML Formatter
          </Link>
          <Link href="/regex/online-compiler" className="hover:text-slate-900 dark:hover:text-white">
            Regex Tester
          </Link>
          <Link href="/privacy" className="hover:text-slate-900 dark:hover:text-white">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-slate-900 dark:hover:text-white">
            Terms & Conditions
          </Link>
          <Link href="/about" className="hover:text-slate-900 dark:hover:text-white">
            About
          </Link>
          <Link href="/contact" className="hover:text-slate-900 dark:hover:text-white">
            Contact
          </Link>
          <Link href="/sitemap.xml" className="hover:text-slate-900 dark:hover:text-white">
            Sitemap
          </Link>
        </div>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Copyright {new Date().getFullYear()} Online Compiler. Build, test, and share front-end snippets instantly.
        </p>
      </div>
    </footer>
  );
}
