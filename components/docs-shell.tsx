import Link from "next/link";
import type { ReactNode } from "react";
import { navItems } from "@/data/site";

export function DocsShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <header className="section-shell py-6">
        <div className="surface flex flex-col gap-5 px-6 py-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <Link href="/docs" className="font-serif text-3xl text-forest">
              Commonwealth Bank
            </Link>
            <p className="mt-1 text-xs uppercase tracking-[0.28em] text-slate">
              Established 1881 · New York
            </p>
          </div>
          <nav className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.22em] text-slate">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 transition hover:bg-forest hover:text-ivory"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer className="section-shell py-12">
        <div className="surface grid gap-8 px-8 py-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="font-serif text-3xl text-forest">Commonwealth Bank</p>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate">
              Commonwealth Bank is a fictional financial institution presented
              as a wholly owned banking subsidiary of R. W. Radwill & Co. for
              demonstration purposes. References to products, governance,
              financial results, and history on this site are illustrative.
            </p>
          </div>
          <div className="space-y-3 text-sm leading-7 text-slate">
            <p>
              Legal disclosures, governance references, and holding company
              statements reflect the public identity of Commonwealth Bank and
              the longstanding stewardship of R. W. Radwill & Co.
            </p>
            <p>
              Member FDIC. Equal Housing Lender. Not an offer to sell or a
              solicitation to purchase securities in any jurisdiction.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
