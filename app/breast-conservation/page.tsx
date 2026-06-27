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

    <section className="page-shell py-24 sm:py-32">
      <div className="grid gap-8 lg:grid-cols-[.62fr_1.38fr]">
        <div>
          <p className="eyebrow text-[var(--coral)]">Clinical focus</p>
        </div>
        <div>
          <h2 className="section-title">
            Clinical work centred on{" "}
            <i className="font-normal text-[var(--coral)]">safe and considered breast conservation.</i>
          </h2>
          <div className="muted mt-8 max-w-4xl space-y-5 text-base leading-8">
            <p>
              Dr Chia’s clinical work is centred on helping suitable women
              achieve safe, precise and aesthetically considered
              breast-conserving treatment. This includes breast-conserving
              surgery, oncoplastic techniques, partial breast reconstruction,
              minimally invasive approaches, localisation strategies for
              non-palpable lesions, and multidisciplinary decision-making.
            </p>
            <p>
              The emphasis is on tailoring treatment to the patient’s cancer,
              breast anatomy, personal priorities and overall health — while
              preserving oncological safety, surgical precision, quality of life
              and confidence after treatment.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-14 grid border-l border-t hairline md:grid-cols-3">
        {[
          {
            index: "01",
            title: "Breast-conserving cancer surgery",
            text: "Surgical care focused on safe tumour removal, margin strategy, localisation of non-palpable lesions, and appropriate tissue preservation.",
          },
          {
            index: "02",
            title: "Oncoplastic and reconstructive planning",
            text: "Use of oncoplastic principles, partial breast reconstruction and symmetrisation strategies to support breast preservation and aesthetic outcomes in suitable patients.",
          },
          {
            index: "03",
            title: "Personalised multidisciplinary care",
            text: "Treatment decisions made in the context of imaging, pathology, oncology, patient priorities, age, fitness, recovery goals and survivorship needs.",
          },
        ].map((item) => (
          <article key={item.title} className="min-h-[300px] border-b border-r hairline bg-[var(--paper)] p-7 sm:p-8">
            <span className="text-xs font-bold text-[var(--coral)]">{item.index}</span>
            <h3 className="serif mt-14 text-3xl leading-[1.08] tracking-[-.03em]">{item.title}</h3>
            <p className="muted mt-5 text-[15px] leading-7">{item.text}</p>
          </article>
        ))}
      </div>
    </section>

    <SuitabilityAccordion />

    <section className="bg-[var(--ink)] py-24 text-white"><div className="page-shell grid gap-14 lg:grid-cols-[.7fr_1.3fr]"><div><p className="eyebrow text-[var(--lime)]">The role of oncoplastic surgery</p><p className="muted-on-dark mt-6 max-w-sm text-[15px] leading-7">Oncoplastic breast surgery combines cancer surgery with reconstructive principles.</p></div><div><h2 className="serif text-4xl leading-[1.08] tracking-[-.035em] sm:text-6xl">Remove the tumour. Reshape the breast. Reduce avoidable deformity.</h2><p className="muted-on-dark mt-8 max-w-3xl text-base leading-8">This approach allows the surgeon to remove the tumour with appropriate margins while reshaping the remaining breast tissue. In selected patients, oncoplastic techniques may allow breast conservation even when a larger volume of tissue needs to be removed. Partial breast reconstruction is tailored to the location and extent of surgery and does not guarantee a particular cosmetic result.</p></div></div></section>

    <ConceptDiagrams />

    <section className="page-shell py-24 sm:py-32"><div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr]"><div><p className="eyebrow text-[var(--coral)]">Innovation platform</p><h2 className="serif mt-8 text-4xl leading-[1.08] tracking-[-.03em]">Improving the breast conservation pathway.</h2></div><div>{["REBORN digital education for clearer treatment decisions","Intra-operative margin assessment to address avoidable re-operation","Low-thermal electrosurgical devices for tissue-conscious surgery","Patient-reported outcome measures for recovery and quality of life","Responsible clinical evaluation and medtech translation"].map((x,i)=><div key={x} className="grid grid-cols-[42px_1fr] border-t hairline py-6"><span className="text-xs font-bold text-[var(--coral)]">0{i+1}</span><p className="serif text-2xl leading-tight">{x}</p></div>)}</div></div><p className="muted mt-14 max-w-4xl text-base leading-8">Dr Chia’s innovation work is focused on improving the breast conservation pathway — from clearer treatment decisions before surgery, to more precise surgery in the operating theatre, and better recovery after treatment. These projects are developed through careful clinical evaluation, with the aim of supporting safer, more personalised and patient-centred breast cancer care.</p></section>

    <section className="bg-[var(--lime)] py-24"><div className="page-shell grid gap-12 lg:grid-cols-[.58fr_1.42fr]"><div><p className="eyebrow">Academic & industry collaboration</p><p className="muted mt-6 text-[15px] leading-7">A translational platform spanning clinical care, engineering, evidence and implementation.</p></div><div><h2 className="serif text-[clamp(2.7rem,5vw,5.5rem)] leading-[1.02] tracking-[-.04em]">Better margins. Better measurement. Better-informed care.</h2><p className="muted mt-8 max-w-3xl text-base leading-8">Technologies that improve margin assessment, surgical precision, tissue preservation, wound healing, cosmesis, patient education and outcome measurement can influence the quality of breast cancer surgery. Clement works with clinical, academic, engineering and industry partners to identify unmet needs, validate solutions in real-world pathways and translate promising technologies into patient-centred care.</p><div className="mt-10 flex flex-wrap gap-7"><TextLink href="/research-innovation">Explore research & innovation</TextLink></div></div></div></section>

    <PatientFaq />

    <EvidenceReferences />

    <section className="page-shell py-24 sm:py-32">
      <div className="grid gap-10 lg:grid-cols-[.62fr_1.38fr]">
        <div>
          <p className="eyebrow text-[var(--coral)]">Second opinion</p>
        </div>
        <div>
          <h2 className="section-title">
            Second opinion for{" "}
            <i className="font-normal text-[var(--coral)]">breast conservation.</i>
          </h2>
          <div className="muted mt-8 max-w-4xl space-y-5 text-base leading-8">
            <p>
              For some women, the choice between mastectomy and
              breast-conserving surgery may not be straightforward. Tumour size,
              tumour location, breast size, imaging findings, margins, genetic
              risk, previous treatment, overall health and personal priorities
              can all influence what is safely possible.
            </p>
            <p>
              Patients who have been advised to consider mastectomy, or who are
              uncertain whether breast conservation is feasible, may seek a
              focused second opinion to better understand their options. The aim
              is not to recommend breast conservation for everyone, but to
              carefully assess whether breast-preserving treatment may be
              oncologically safe, technically achievable and aligned with the
              patient’s goals.
            </p>
            <p>
              Where appropriate, this discussion may include oncoplastic
              techniques, localisation strategies for non-palpable lesions,
              approaches to margin planning, reconstruction options, and the
              role of multidisciplinary treatment.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-14 border-y hairline bg-[var(--paper)] p-7 sm:p-10">
        <div className="grid items-end gap-8 lg:grid-cols-[1.25fr_.75fr]">
          <div>
            <p className="eyebrow text-[var(--coral)]">Breast conservation opinion</p>
            <h3 className="serif mt-6 text-4xl leading-[1.08] tracking-[-.035em] sm:text-5xl">
              Considering a second opinion on breast conservation?
            </h3>
            <p className="muted mt-6 max-w-3xl text-base leading-8">
              If you have been advised to undergo mastectomy or are uncertain
              whether breast-conserving surgery is possible, you may enquire
              about a consultation to review your options. Please bring your
              imaging reports, biopsy results, pathology reports and treatment
              recommendations where available.
            </p>
          </div>
          <TextLink href="/contact">Enquire about a breast conservation opinion</TextLink>
        </div>
      </div>
    </section>

    <section className="page-shell grid border-x hairline md:grid-cols-3">{[{label:"For patients",text:"Learn about breast conservation options",href:"/breast-conservation"},{label:"For academics",text:"Explore breast conservation research themes",href:"/research-innovation"},{label:"For industry",text:"Collaborate on breast conservation innovation",href:"/contact"}].map((item)=><Link key={item.label} href={item.href} className="group flex min-h-64 flex-col justify-between border-b border-r hairline p-8 last:border-r-0"><span className="eyebrow text-[var(--coral)]">{item.label}</span><span className="serif flex items-end justify-between gap-5 text-3xl leading-tight">{item.text}<Arrow className="h-6 w-6 shrink-0 transition-transform group-hover:translate-x-2"/></span></Link>)}</section>
    <PullQuote>Breast conservation through surgery, education and innovation.</PullQuote>
  </>;
}
