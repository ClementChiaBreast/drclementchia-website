import Image from "next/image";
import { FeatureGrid, PageHero, PullQuote } from "@/components/primitives";

export const metadata = { title: "About the Breast Conservation Surgeon-Innovator" };

export default function About() {
  return <>
    <PageHero number="A" eyebrow="About Clement Chia" title="Breast conservation" italic="surgeon-innovator." intro="Dr Clement Chia is Senior Consultant Breast and Endocrine Surgeon and Head of Breast Surgery at Khoo Teck Puat Hospital, NHG Health. His clinical, academic and innovation work is organised around improving breast conservation."/>
    <FeatureGrid items={[{index:"A",title:"Surgery",text:"Deep expertise in oncoplastic and minimally invasive breast surgery, with cancer safety as the first priority."},{index:"B",title:"Education",text:"Helping patients and clinical teams understand breast conservation, reconstruction options and the trade-offs involved."},{index:"C",title:"Innovation",text:"Translating unmet needs in breast conservation into research, digital tools, devices and real-world implementation."}]}/>
    <section className="page-shell grid items-start gap-12 py-24 lg:grid-cols-[.72fr_1.28fr]">
      <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] border hairline bg-white"><Image src="/images/clement-chia-headshot.jpg" alt="Dr Clement Chia 谢乐勤, breast and endocrine surgeon" fill sizes="(min-width: 1024px) 36vw, 100vw" className="object-cover object-[50%_15%]" /></div>
      <div><h2 className="section-title">One clinical mission across <i className="font-normal text-[var(--coral)]">many disciplines.</i></h2><div className="muted mt-10 space-y-6 text-base leading-8"><p>Clement’s goal is to increase breast conservation rates and appropriate uptake of reconstruction, which can support quality of life after breast cancer surgery. This includes oncoplastic breast surgery and partial breast reconstruction for selected patients, alongside careful multidisciplinary planning and shared decision-making.</p><p>His translational work connects patient education, margin assessment, surgical devices, patient-reported outcome measures and hospital implementation. He collaborates with clinical, academic, engineering and industry partners, including A*STAR, to evaluate solutions for real needs in breast cancer care.</p></div></div>
    </section>
    <section className="bg-[var(--ink)] py-24 text-white"><div className="page-shell grid gap-12 lg:grid-cols-[.7fr_1.3fr]"><div><p className="eyebrow text-[var(--lime)]">Clinician-innovator roles</p><p className="muted-on-dark mt-5 max-w-sm text-[15px] leading-7">Leadership and fellowship roles supporting clinical innovation, healthcare transformation and responsible medtech translation.</p></div><div className="grid gap-x-10 sm:grid-cols-2">{["Committee Member, Centre of Medical Technology and Innovations","Faculty Member, Centre for Healthcare Innovation","NMRC Award Recipient","Fellow of Singapore Biodesign","Fellow of ClavystBio"].map((role,i)=><div key={role} className="grid grid-cols-[32px_1fr] border-t border-white/30 py-6"><span className="accent-on-dark text-xs font-bold">0{i+1}</span><p className="serif text-xl leading-snug">{role}</p></div>)}</div></div></section>
    <PullQuote>Breast conservation through surgery, education and innovation.</PullQuote>
  </>;
}
