import Link from "next/link";
import { Arrow } from "@/components/icons";
import { FeatureGrid, PageHero } from "@/components/primitives";

export const metadata = { title: "Speaking on Breast Surgery & Innovation" };

export default function Speaking() {
  return <>
    <PageHero number="06" eyebrow="Speaking" title="Breast conservation as" italic="a shared mission." intro="Talks, panels and workshops connecting patient choices, oncoplastic breast surgery, academic evidence and clinician-led technology translation."/>
    <FeatureGrid items={[{index:"01",title:"Conserving the breast",text:"Breast-conserving surgery, oncoplastic techniques, partial reconstruction and the clinical decisions that shape their use."},{index:"02",title:"Measuring what matters",text:"Margins, re-operation, PROMs, body image, quality of life and outcomes for Asian populations."},{index:"03",title:"Translating innovation",text:"Lessons from REBORN, margin technologies, surgical devices, clinical implementation and medtech collaboration."}]}/>
    <section className="bg-[var(--coral)] py-24 text-white"><div className="page-shell grid items-end gap-12 lg:grid-cols-[1.3fr_.7fr]"><h2 className="serif text-[clamp(3rem,6vw,6.5rem)] leading-[.93] tracking-[-.05em]">The future of breast conservation is both <i className="font-normal text-[var(--cream)]">technical and deeply human.</i></h2><Link href="/contact" className="inline-flex items-center gap-4 text-xs font-bold uppercase tracking-widest">Invite Dr Chia to speak on breast surgery and innovation <Arrow className="h-5 w-5"/></Link></div></section>
  </>;
}
