import Link from "next/link";
import { Arrow } from "@/components/icons";
import { FeatureGrid, PageHero, PullQuote, TextLink } from "@/components/primitives";
import { BreastConservationPathway } from "@/components/pathway";
import { ConceptDiagrams } from "@/components/concept-diagrams";
import { PatientFaq, SuitabilityAccordion } from "@/components/breast-conservation-interactive";
import { EvidenceReferences, EvidenceSection } from "@/components/evidence-section";

export const metadata = {
  title: "Breast Conservation",
  description: "A patient-friendly guide to breast-conserving surgery, oncoplastic surgery, partial breast reconstruction, shared decision-making and breast conservation innovation.",
};

export default function BreastConservation() {
  return <>
    <PageHero number="01" eyebrow="Breast conservation" title="Treat the cancer." italic="Preserve the breast where appropriate." intro="Breast conservation is an approach to breast cancer surgery that aims to remove cancer safely while preserving the natural breast wherever appropriate. For many women, this can reduce the physical and emotional impact of treatment, support body image and improve confidence during survivorship."/>

    <section className="page-shell grid gap-12 border-x hairline px-6 py-20 sm:px-10 lg:grid-cols-[.7fr_1.3fr] lg:py-28">
      <div><p className="eyebrow text-[var(--coral)]">More than lumpectomy</p></div>
      <div><h2 className="section-title">A coordinated approach to <i className="font-normal text-[var(--coral)]">cancer control and quality of life.</i></h2><p className="muted mt-8 max-w-3xl text-base leading-8">Modern breast conservation includes careful imaging, surgical planning, margin assessment, oncoplastic reshaping, partial breast reconstruction, radiotherapy coordination and shared decision-making. The goal is to combine cancer control with quality of life.</p></div>
    </section>

    <BreastConservationPathway />

    <EvidenceSection />

    <FeatureGrid items={[{index:"01",title:"Why it matters",text:"Preserving the natural breast may support body image, confidence and quality of life for suitable patients, while keeping cancer treatment priorities central."},{index:"02",title:"Who may be suitable",text:"Suitability depends on the cancer’s size and location, breast anatomy, the ability to obtain clear margins, other treatments required, health and personal preferences."},{index:"03",title:"A shared decision",text:"Patients should understand breast conservation, mastectomy and reconstruction options, including their possible benefits, limitations, risks and recovery considerations."}]}/>

    <SuitabilityAccordion />

    <section className="bg-[var(--ink)] py-24 text-white"><div className="page-shell grid gap-14 lg:grid-cols-[.7fr_1.3fr]"><div><p className="eyebrow text-[var(--lime)]">The role of oncoplastic surgery</p><p className="muted-on-dark mt-6 max-w-sm text-[15px] leading-7">Oncoplastic breast surgery combines cancer surgery with reconstructive principles.</p></div><div><h2 className="serif text-4xl leading-[1.08] tracking-[-.035em] sm:text-6xl">Remove the tumour. Reshape the breast. Reduce avoidable deformity.</h2><p className="muted-on-dark mt-8 max-w-3xl text-base leading-8">This approach allows the surgeon to remove the tumour with appropriate margins while reshaping the remaining breast tissue. In selected patients, oncoplastic techniques may allow breast conservation even when a larger volume of tissue needs to be removed. Partial breast reconstruction is tailored to the location and extent of surgery and does not guarantee a particular cosmetic result.</p></div></div></section>

    <ConceptDiagrams />

    <section className="page-shell py-24 sm:py-32"><div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr]"><div><p className="eyebrow text-[var(--coral)]">Innovation platform</p><h2 className="serif mt-8 text-4xl leading-[1.08] tracking-[-.03em]">Improving the breast conservation pathway.</h2></div><div>{["REBORN digital education for clearer treatment decisions","Intra-operative margin assessment to address avoidable re-operation","Low-thermal electrosurgical devices for tissue-conscious surgery","Patient-reported outcome measures for recovery and quality of life","Responsible clinical evaluation and medtech translation"].map((x,i)=><div key={x} className="grid grid-cols-[42px_1fr] border-t hairline py-6"><span className="text-xs font-bold text-[var(--coral)]">0{i+1}</span><p className="serif text-2xl leading-tight">{x}</p></div>)}</div></div><p className="muted mt-14 max-w-4xl text-base leading-8">Dr Chia’s innovation work is focused on improving the breast conservation pathway — from clearer treatment decisions before surgery, to more precise surgery in the operating theatre, and better recovery after treatment. These projects are developed through careful clinical evaluation, with the aim of supporting safer, more personalised and patient-centred breast cancer care.</p></section>

    <section className="bg-[var(--lime)] py-24"><div className="page-shell grid gap-12 lg:grid-cols-[.58fr_1.42fr]"><div><p className="eyebrow">Academic & industry collaboration</p><p className="muted mt-6 text-[15px] leading-7">A translational platform spanning clinical care, engineering, evidence and implementation.</p></div><div><h2 className="serif text-[clamp(2.7rem,5vw,5.5rem)] leading-[1.02] tracking-[-.04em]">Better margins. Better measurement. Better-informed care.</h2><p className="muted mt-8 max-w-3xl text-base leading-8">Technologies that improve margin assessment, surgical precision, tissue preservation, wound healing, cosmesis, patient education and outcome measurement can influence the quality of breast cancer surgery. Clement works with clinical, academic, engineering and industry partners to identify unmet needs, validate solutions in real-world pathways and translate promising technologies into patient-centred care.</p><div className="mt-10 flex flex-wrap gap-7"><TextLink href="/research">Explore research themes</TextLink><TextLink href="/innovation">Explore innovation</TextLink></div></div></div></section>

    <PatientFaq />

    <EvidenceReferences />

    <section className="page-shell grid border-x hairline md:grid-cols-3">{[{label:"For patients",text:"Learn about breast conservation options",href:"/clinical-work"},{label:"For academics",text:"Explore breast conservation research themes",href:"/research"},{label:"For industry",text:"Collaborate on breast conservation innovation",href:"/contact"}].map((item)=><Link key={item.label} href={item.href} className="group flex min-h-64 flex-col justify-between border-b border-r hairline p-8 last:border-r-0"><span className="eyebrow text-[var(--coral)]">{item.label}</span><span className="serif flex items-end justify-between gap-5 text-3xl leading-tight">{item.text}<Arrow className="h-6 w-6 shrink-0 transition-transform group-hover:translate-x-2"/></span></Link>)}</section>
    <PullQuote>Breast conservation through surgery, education and innovation.</PullQuote>
  </>;
}
