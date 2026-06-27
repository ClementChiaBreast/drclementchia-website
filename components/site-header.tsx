"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  ["Breast Conservation", "/breast-conservation"], ["Clinical Work", "/clinical-work"], ["Innovation", "/innovation"],
  ["Research", "/research"], ["Electives", "/teaching"], ["Fellowship", "/fellowship"], ["Media & Articles", "/media-articles"],
];

export function SiteHeader() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  return <header className="relative z-50 border-b hairline bg-[var(--cream)]">
    <div className="page-shell flex h-[82px] items-center justify-between">
      <Link href="/" className="group shrink-0" onClick={() => setOpen(false)}>
        <span className="serif block text-[21px] leading-none tracking-[-.03em]">Clement Chia</span>
        <span className="mt-1 block text-[11px] font-bold uppercase leading-4 tracking-[.12em]">Breast conservation surgeon-innovator</span>
      </Link>
      <nav className="hidden items-center gap-4 xl:flex">
        {links.map(([label, href]) => <Link key={href} href={href} className={`whitespace-nowrap text-xs font-bold uppercase tracking-[.07em] transition-colors hover:text-[var(--coral)] ${path === href ? "border-b border-current pb-1" : ""}`}>{label}</Link>)}
      </nav>
      <Link href="/contact" className="hidden shrink-0 whitespace-nowrap rounded-full bg-[var(--ink)] px-5 py-3 text-xs font-bold uppercase tracking-[.12em] !text-white transition-transform hover:-translate-y-0.5 xl:block">Contact</Link>
      <button className="flex h-10 w-10 items-center justify-center rounded-full border hairline xl:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu"><span className="text-xl">{open ? "×" : "≡"}</span></button>
    </div>
    {open && <div className="absolute inset-x-0 top-full border-b hairline bg-[var(--cream)] px-5 py-6 shadow-xl xl:hidden">
      {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)} className="serif block border-b hairline py-3 text-2xl">{label}</Link>)}
      <Link href="/contact" onClick={() => setOpen(false)} className="mt-5 block rounded-full bg-[var(--ink)] px-5 py-4 text-center text-xs font-bold uppercase tracking-widest !text-white">Contact</Link>
    </div>}
  </header>;
}
