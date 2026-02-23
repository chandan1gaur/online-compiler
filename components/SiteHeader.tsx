import Link from "next/link";
import Image from "next/image";

const navItems = [
  { href: "/#features", label: "Features" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/html", label: "HTML Compiler" },
  { href: "/javascript", label: "JavaScript Compiler" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold text-slate-900">
          <Image src="/logo-icon.svg" alt="Online Compiler logo" width={32} height={32} priority />
          <span>Online Compiler</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-5 text-sm text-slate-700 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-slate-900">
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/html"
          className="rounded-md bg-slate-900 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-slate-700"
        >
          Start Coding
        </Link>
      </div>
    </header>
  );
}
