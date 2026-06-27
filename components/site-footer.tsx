"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Arrow, CrossMark } from "./icons";

export function SiteFooter() {
  const pathname = usePathname();
  const isTeachingPage = pathname === "/teaching";
  const cta = isTeachingPage
    ? {
        eyebrow: "Teaching, LOTTE and Innovation Electives",
        headline: "Learn through patients. Think across disciplines.",
        highlight: "Build for better care.",
        href: "/teaching#teaching-electives",
        label: "Explore teaching & elective opportunities",
      }
    : {
        eyebrow: "Breast conservation through surgery, education and innovation",
        headline: "Preserve what matters.",
        highlight: "Improve what is possible.",
        href: "/breast-conservation",
        label: "Explore breast conservation",
      };

  return <footer className="bg-[var(--ink)] text-[var(--cream)]">
    <div className="page-shell grid gap-12 py-16 md:grid-cols-[1.3fr_.7fr] md:py-24">
      <div>
        <p className="eyebrow text-[var(--lime)]">{cta.eyebrow}</p>
        <h2 className="serif mt-6 max-w-3xl text-[clamp(2.7rem,5vw,5.6rem)] leading-[.93] tracking-[-.045em]">{cta.headline} <i className="font-normal text-[var(--coral-bright)]">{cta.highlight}</i></h2>
        <Link href={cta.href} className="mt-10 inline-flex items-center gap-5 border-b border-[var(--lime)] pb-2 text-xs font-bold uppercase tracking-[.16em]">{cta.label} <Arrow className="h-5 w-5" /></Link>
      </div>
      <div className="flex flex-col justify-between border-l border-white/15 pl-7">
        <CrossMark className="h-14 w-14 text-[var(--lime)]" />
        <div className="mt-16 grid grid-cols-2 gap-4 text-sm">
          {[["About","/about"],["Breast conservation","/breast-conservation"],["Clinical work","/clinical-work"],["Innovation","/innovation"],["Research","/research"],["Electives","/teaching"],["Media & articles","/media-articles"],["Contact","/contact"]].map(([l,h]) => <Link key={h} href={h} className="text-[#e2e8e3] transition-colors hover:text-white">{l}</Link>)}
        </div>
      </div>
    </div>
    <div className="page-shell flex flex-col gap-3 border-t border-white/25 py-6 text-[11px] font-semibold uppercase leading-5 tracking-[.12em] text-[#d5ddd7] sm:flex-row sm:justify-between"><span>© {new Date().getFullYear()} Dr Clement Chia</span><span>Khoo Teck Puat Hospital · NHG Health</span></div>
  </footer>;
}
