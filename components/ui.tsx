import Link from "next/link";
import { clsx } from "clsx";
import type { ReactNode } from "react";

export function SectionIntro({
  eyebrow,
  title,
  text,
  invert = false,
}: {
  eyebrow: string;
  title: string;
  text: string;
  invert?: boolean;
}) {
  return (
    <div className="max-w-3xl space-y-5">
      <p className={clsx("eyebrow", invert && "text-ivory/70")}>{eyebrow}</p>
      <h2 className={clsx("subheadline", invert && "text-ivory")}>{title}</h2>
      <p className={clsx("body-copy", invert && "text-ivory/70")}>{text}</p>
    </div>
  );
}

export function PrimaryButton({
  href,
  children,
  variant = "light",
}: {
  href: string;
  children: ReactNode;
  variant?: "light" | "dark";
}) {
  return (
    <Link
      href={href}
      className={clsx(
        "inline-flex items-center rounded-full px-6 py-3 text-sm uppercase tracking-[0.24em] transition duration-300",
        variant === "light"
          ? "bg-forest text-ivory hover:bg-emerald"
          : "bg-brass text-ink hover:bg-[#c9a961]"
      )}
    >
      {children}
    </Link>
  );
}

export function InfoCard({
  title,
  text,
  href,
}: {
  title: string;
  text: string;
  href?: string;
}) {
  const content = (
    <div className="surface h-full p-8 transition duration-300 hover:-translate-y-1">
      <div className="gold-rule mb-6" />
      <h3 className="font-serif text-2xl text-ink">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-slate">{text}</p>
      {href ? (
        <p className="mt-6 text-xs uppercase tracking-[0.3em] text-forest">
          Explore division
        </p>
      ) : null}
    </div>
  );

  return href ? <Link href={href}>{content}</Link> : content;
}

export function StatCard({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="surface p-7">
      <div className="font-serif text-4xl text-forest">{value}</div>
      <div className="mt-3 text-sm uppercase tracking-[0.24em] text-slate">
        {label}
      </div>
    </div>
  );
}

export function TimelineItem({
  year,
  title,
  text,
}: {
  year: string;
  title: string;
  text: string;
}) {
  return (
    <div className="grid gap-4 border-t border-ink/10 py-6 md:grid-cols-[140px_1fr]">
      <div className="font-serif text-3xl text-brass">{year}</div>
      <div>
        <h3 className="font-serif text-2xl text-ink">{title}</h3>
        <p className="mt-3 text-base leading-7 text-slate">{text}</p>
      </div>
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  text,
  aside,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  text: string;
  aside?: ReactNode;
  dark?: boolean;
}) {
  return (
    <section className="section-shell pt-16 sm:pt-20">
      <div
        className={clsx(
          "grid gap-10 overflow-hidden rounded-[2.5rem] border px-8 py-12 sm:px-12 lg:grid-cols-[1.4fr_0.8fr] lg:py-16",
          dark
            ? "border-white/10 bg-[linear-gradient(135deg,#0f1e19,#1a2d26,#0d1613)] text-ivory"
            : "border-black/5 bg-marble-grid"
        )}
      >
        <div className="space-y-6">
          <p className={clsx("eyebrow", dark && "text-ivory/70")}>{eyebrow}</p>
          <h1 className={clsx("headline max-w-4xl", dark && "text-ivory")}>
            {title}
          </h1>
          <p className={clsx("body-copy max-w-2xl", dark && "text-ivory/70")}>
            {text}
          </p>
        </div>
        <div className="flex items-end">{aside}</div>
      </div>
    </section>
  );
}

export function ImagePlaceholder({
  label,
  tone = "light",
}: {
  label: string;
  tone?: "light" | "dark";
}) {
  return (
    <div
      className={clsx(
        "relative min-h-[260px] overflow-hidden rounded-[2rem] border",
        tone === "light"
          ? "border-black/5 bg-[linear-gradient(160deg,rgba(18,54,41,0.08),rgba(255,255,255,0.85),rgba(181,150,74,0.12))]"
          : "border-white/10 bg-[linear-gradient(160deg,rgba(181,150,74,0.16),rgba(22,34,28,0.9),rgba(9,14,12,1))]"
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(181,150,74,0.18),transparent_32%),linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[length:auto,28px_28px,28px_28px]" />
      <div className="absolute inset-x-6 bottom-6">
        <p
          className={clsx(
            "text-xs uppercase tracking-[0.32em]",
            tone === "light" ? "text-slate" : "text-ivory/60"
          )}
        >
          {label}
        </p>
      </div>
    </div>
  );
}

export function DataTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="surface overflow-hidden">
      <table className="min-w-full divide-y divide-ink/10 text-left text-sm">
        <thead className="bg-forest text-ivory">
          <tr>
            {headers.map((header) => (
              <th key={header} className="px-6 py-4 font-medium tracking-[0.2em] uppercase">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-ink/10">
          {rows.map((row, index) => (
            <tr key={`${row[0]}-${index}`}>
              {row.map((cell) => (
                <td key={cell} className="px-6 py-4 text-slate">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function ExecutiveCard({
  name,
  title,
  bio,
}: {
  name: string;
  title: string;
  bio: string;
}) {
  return (
    <div className="surface p-8">
      <div className="mb-6 h-40 rounded-[1.5rem] bg-[linear-gradient(160deg,rgba(18,54,41,0.12),rgba(255,255,255,0.8),rgba(181,150,74,0.16))]" />
      <p className="font-serif text-2xl text-ink">{name}</p>
      <p className="mt-2 text-xs uppercase tracking-[0.28em] text-forest">{title}</p>
      <p className="mt-4 text-sm leading-7 text-slate">{bio}</p>
    </div>
  );
}
