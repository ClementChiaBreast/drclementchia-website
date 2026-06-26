import Link from "next/link";
import Image from "next/image";
import { Arrow, CrossMark } from "@/components/icons";
import { TextLink } from "@/components/primitives";
import { EvidenceSection } from "@/components/evidence-section";

const domains = [
  { n: "01", kind: "patient", title: "For patients", text: "Understand breast-conserving surgery, oncoplastic surgery, partial breast reconstruction and the questions that shape an individual treatment plan.", cta: "Learn about your options", href: "/breast-conservation" },
  { n: "02", kind: "academic", title: "For academics", text: "Explore research in margin assessment, PROMs, Asian breast surgery outcomes and quality of life.", cta: "Explore research themes", href: "/research" },
  { n: "03", kind: "industry", title: "For industry", text: "Collaborate on margin technologies, surgical devices, digital health, imaging, AI, patient education and clinical translation.", cta: "Explore innovation", href: "/innovation" },
];

function AudienceIcon({ kind }: { kind: string }) {
  return <svg viewBox="0 0 72 72" className="h-16 w-16" aria-hidden="true">
    <circle cx="36" cy="36" r="34" fill="var(--lime)" stroke="currentColor" />
    {kind === "patient" && <><path d="M23 36h26M36 23v26" stroke="currentColor" strokeWidth="2.5"/><circle cx="36" cy="36" r="17" fill="none" stroke="var(--coral)" strokeWidth="2"/></>}
    {kind === "academic" && <><path d="m18 30 18-9 18 9-18 9-18-9Z" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M25 35v11c7 5 15 5 22 0V35M54 30v15" fill="none" stroke="currentColor" strokeWidth="2"/></>}
    {kind === "industry" && <><circle cx="36" cy="36" r="11" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M36 17v8M36 47v8M17 36h8M47 36h8M23 23l6 6M43 43l6 6M49 23l-6 6M29 43l-6 6" stroke="var(--coral)" strokeWidth="2.5"/></>}
  </svg>;
}

export default function Home() {
  return <>
    <section className="page-shell grid min-h-[690px] border-x hairline lg:grid-cols-[1fr_34%]">
      <div className="flex flex-col justify-between px-5 pb-10 pt-14 sm:px-10 lg:py-16">
        <div className="flex items-center gap-3"><CrossMark className="h-7 w-7 text-[var(--coral)]"/><span className="eyebrow">Clement Chia · Breast conservation surgeon-innovator</span></div>
        <h1 className="display my-14">Preserve the breast.<br/><span className="circle-word italic">Protect quality of life.</span></h1>
        <div className="grid gap-7 border-t hairline pt-7 md:grid-cols-[1fr_auto] md:items-end">
          <p className="max-w-xl text-base leading-7 text-[var(--ink-2)]">Senior Consultant Breast and Endocrine Surgeon and Head of Breast Surgery at Khoo Teck Puat Hospital, NHG Health. Clement advances breast conservation through oncoplastic surgery, patient education, clinical research and medtech innovation.</p>
          <TextLink href="/breast-conservation">Explore breast conservation</TextLink>
        </div>
      </div>
      <div className="relative min-h-[460px] overflow-hidden border-t hairline subtle-grid lg:min-h-0 lg:border-l lg:border-t-0">
        <div className="absolute inset-6 overflow-hidden rounded-[2rem] border hairline bg-white sm:inset-8">
          <Image src="/images/clement-chia-headshot.jpg" alt="Dr Clement Chia 谢乐勤, breast and endocrine surgeon" fill priority sizes="(min-width: 1024px) 34vw, 100vw" className="object-cover object-[50%_18%]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/35 via-transparent to-transparent" aria-hidden="true"></div>
        </div>
        <div className="absolute left-7 top-7 rounded-full bg-[var(--coral)] px-4 py-2 text-[11px] font-bold uppercase tracking-[.12em] text-white">Surgery · Education · Innovation</div>
        <p className="absolute bottom-6 left-6 right-6 z-10 rounded-2xl border border-white/20 bg-[var(--ink)] px-5 py-4 text-[15px] font-medium leading-7 text-white shadow-lg sm:bottom-8 sm:left-8 sm:right-8">A single clinical mission: help more suitable women preserve the breast and make informed choices, while keeping cancer safety central.</p>
      </div>
    </section>

    <section className="border-y hairline bg-[var(--paper)] py-5"><div className="page-shell flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-[11px] font-bold uppercase leading-5 tracking-[.12em] sm:justify-between"><span>Breast conservation</span><span className="text-[var(--coral)]">✦</span><span>Oncoplastic breast surgery</span><span className="text-[var(--coral)]">✦</span><span>Partial breast reconstruction</span><span className="text-[var(--coral)]">✦</span><span>Shared decision-making</span></div></section>

    <section className="page-shell py-24 sm:py-32">
      <div className="grid gap-10 lg:grid-cols-[.62fr_1.38fr]"><div><p className="eyebrow text-[var(--coral)]">Three pathways, one mission</p><p className="muted mt-5 max-w-xs text-[15px] leading-7">Breast conservation connects patient care, academic evidence and clinician-led technology translation.</p></div><h2 className="section-title">Breast conservation through <i className="font-normal text-[var(--coral)]">surgery, education and innovation.</i></h2></div>
      <div className="mt-16 grid border-l border-t hairline md:grid-cols-3">{domains.map((d) => <article key={d.n} className="group flex min-h-[430px] flex-col justify-between overflow-hidden border-b border-r hairline bg-[var(--paper)] p-7 transition-[background-color,transform] hover:-translate-y-1 hover:bg-[var(--lime)]/40"><div className="flex items-start justify-between gap-4"><span className="text-xs font-bold text-[var(--coral)]">{d.n}</span><AudienceIcon kind={d.kind}/></div><div><h3 className="serif text-4xl leading-[1.05] tracking-[-.04em]">{d.title}</h3><p className="muted mt-5 text-[15px] leading-7">{d.text}</p><Link href={d.href} className="mt-8 inline-flex items-center gap-3 border-b-2 border-current pb-1 text-xs font-bold uppercase tracking-[.1em] transition-[gap,color] group-hover:gap-5 group-hover:text-[var(--coral)]">{d.cta}<Arrow className="h-4 w-4" /></Link></div></article>)}</div>
    </section>

    <EvidenceSection compact />

    <section className="bg-[var(--coral)] py-20 text-white sm:py-28"><div className="page-shell grid items-end gap-10 lg:grid-cols-[1.3fr_.7fr]"><h2 className="serif text-[clamp(2.8rem,6vw,6.5rem)] leading-[.92] tracking-[-.05em]">Breast conservation starts with <i className="font-normal text-[var(--cream)]">the right conversation.</i></h2><div><p className="text-sm leading-6">Every cancer, breast and person is different. Shared decision-making means understanding breast conservation, mastectomy and reconstruction options, their trade-offs and what matters most to the patient.</p><div className="mt-8"><TextLink href="/clinical-work">Learn about breast surgery options</TextLink></div></div></div></section>

    <section className="page-shell grid border-x hairline lg:grid-cols-2"><div className="p-8 sm:p-14"><p className="eyebrow">Translational platform</p><h2 className="serif mt-10 text-5xl leading-[.95] tracking-[-.04em] sm:text-7xl">From unmet need<br/>to patient care.</h2></div><div className="border-t hairline p-8 lg:border-l lg:border-t-0 sm:p-14"><div className="space-y-8">{["REBORN digital education and shared decision-making","Intra-operative cancer margin assessment","Low-thermal electrosurgical device development","PROMs and quality-of-life research","Clinical implementation and real-world validation"].map((x,i)=><div key={x} className="grid grid-cols-[30px_1fr] border-b hairline pb-7"><span className="text-xs text-[var(--coral)]">0{i+1}</span><p className="serif text-2xl leading-tight">{x}</p></div>)}</div><div className="mt-9"><TextLink href="/innovation">Collaborate on breast conservation innovation</TextLink></div></div></section>
  </>;
}
