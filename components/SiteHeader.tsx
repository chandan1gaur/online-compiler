import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "@/components/ThemeToggle";

const navItems = [
  { href: "/#features", label: "Features" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/html/online-compiler", label: "HTML Compiler" },
  { href: "/javascript/online-compiler", label: "JavaScript Compiler" },
  { href: "/formatter/online-compiler", label: "Formatter" },
  { href: "/regex/online-compiler", label: "Regex Tester" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/80 dark:border-slate-700 dark:bg-slate-950/80">
      <div className="mx-auto flex w-full max-w-[1500px] items-center justify-between px-3 py-3 sm:px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold text-slate-900 dark:text-slate-100">
          <Image src="/logo-icon.svg" alt="Online Compiler logo" width={32} height={32} priority />
          <span className="text-sm sm:text-base">Online Compiler</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-5 text-sm text-slate-700 dark:text-slate-300 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-slate-900 dark:hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="/html/online-compiler"
            className="rounded-md bg-slate-900 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-slate-700 dark:bg-cyan-600 dark:hover:bg-cyan-500 sm:text-sm"
          >
            Start Coding
          </Link>
        </div>
      </div>

      <nav aria-label="Primary mobile" className="border-t border-slate-200 px-3 py-2 dark:border-slate-700 md:hidden">
        <div className="flex gap-2 overflow-x-auto whitespace-nowrap pb-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-medium text-slate-700 transition hover:bg-slate-100 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
