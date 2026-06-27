import Link from "next/link";
import { Arrow, Orbit } from "./icons";

export function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Link href={href} className="inline-flex items-center gap-3 border-b-2 border-current pb-1 text-xs font-bold uppercase leading-5 tracking-[.12em] transition-[gap,color] hover:gap-5 hover:text-[var(--coral)]">{children}<Arrow className="h-4 w-4" /></Link>;
}

export function PageHero({ number, eyebrow, title, italic, intro }: { number: string; eyebrow: string; title: string; italic?: string; intro: string }) {
  return <section className="page-shell grid min-h-[570px] border-x hairline lg:grid-cols-[1fr_320px]">
    <div className="flex flex-col justify-between px-5 py-14 sm:px-10 lg:py-20">
      <div className="flex items-center gap-3"><span className="text-[var(--coral)]">{number}</span><span className="eyebrow">{eyebrow}</span></div>
      <h1 className="display my-16 max-w-5xl">{title} {italic && <i className="block font-normal text-[var(--coral)]">{italic}</i>}</h1>
      <p className="max-w-2xl text-base leading-7 text-[var(--ink-2)] sm:text-lg">{intro}</p>
    </div>
    <div className="relative hidden overflow-hidden border-l hairline dot-grid lg:block"><div className="pointer-events-none absolute inset-x-0 top-10 bottom-36 flex items-center justify-center px-6"><Orbit className="block w-full max-w-[270px] text-[var(--ink)] opacity-75"/></div><div className="absolute bottom-10 left-8 right-8 border-t hairline pt-4 text-[11px] font-semibold uppercase leading-6 tracking-[.12em]">Breast conservation<br/>Surgery · Education<br/>Research · Innovation</div></div>
  </section>;
}

export function FeatureGrid({ items }: { items: { index: string; title: string; text: string }[] }) {
  return <section className="page-shell grid border-x border-t hairline md:grid-cols-3">{items.map((item) => <article key={item.index} className="min-h-[300px] border-b hairline p-7 md:border-r md:p-9 last:border-r-0">
    <span className="text-xs font-bold text-[var(--coral)]">{item.index}</span><h3 className="serif mt-14 text-3xl leading-[1.08] tracking-[-.03em]">{item.title}</h3><p className="muted mt-5 max-w-sm text-[15px] leading-7">{item.text}</p>
  </article>)}</section>;
}

export function PullQuote({ children }: { children: React.ReactNode }) {
  return <section className="bg-[var(--lime)] py-24 sm:py-32"><div className="page-shell"><p className="serif mx-auto max-w-5xl text-center text-[clamp(2.3rem,5vw,5.2rem)] leading-[1.02] tracking-[-.04em]">“{children}”</p></div></section>;
}
