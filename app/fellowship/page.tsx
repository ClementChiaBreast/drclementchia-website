import { PageHero, PullQuote, TextLink } from "@/components/primitives";

export const metadata = {
  title: "Breast Surgery Fellowship",
  description:
    "Advanced breast conservation, oncoplastic surgery, minimally invasive techniques, precision localisation, and clinician-led innovation.",
};

const focusAreas = [
  {
    index: "01",
    title: "Advanced oncoplastic breast conservation",
    text: "Exposure to contemporary oncoplastic breast-conserving techniques, including volume displacement, volume replacement, chest wall perforator flaps, therapeutic mammoplasty, breast reduction approaches, symmetrisation strategies, and aesthetic planning in breast cancer surgery.",
  },
  {
    index: "02",
    title: "Minimally invasive breast surgery",
    text: "Focused exposure to minimally invasive and single-port transaxillary approaches in selected breast surgery cases, with emphasis on patient selection, operative planning, technical principles, cosmesis, and safe integration into breast conservation practice.",
  },
  {
    index: "03",
    title: "Precision localisation and margin strategy",
    text: "Learning around localisation strategies for non-palpable breast lesions, image-guided surgical planning, targeted excision, intra-operative decision-making, and approaches to reducing avoidable re-excision after breast-conserving surgery.",
  },
  {
    index: "04",
    title: "Research, digital health and medtech innovation",
    text: "Opportunities to engage with research and innovation around oncoplastic breast surgery, breast conservation pathways, digital patient education, patient-reported outcomes, intra-operative margin assessment, and clinician-led medtech translation.",
  },
];

const learningExperience = [
  "Breast clinics and multidisciplinary decision-making",
  "Operating theatre exposure and operative planning",
  "Oncoplastic and breast conservation case discussion",
  "Localisation and margin management strategies",
  "Research, publication and innovation project exposure",
  "Digital health and medtech translation through projects such as REBORN and intra-operative margin assessment",
];

export default function FellowshipPage() {
  return (
    <>
      <PageHero
        number="06"
        eyebrow="Fellowship"
        title="Breast Surgery"
        italic="Fellowship."
        intro="Advanced breast conservation, oncoplastic surgery, minimally invasive techniques, precision localisation, and clinician-led innovation."
      />

      <section className="page-shell border-x border-t hairline px-5 py-14 sm:px-10">
        <p className="muted max-w-4xl text-base leading-8 sm:text-lg">
          Dr Chia offers fellowship and attachment opportunities for breast
          surgeons seeking focused exposure to advanced breast conservation,
          oncoplastic breast surgery, minimally invasive approaches, precision
          localisation, and innovation in breast cancer care. The fellowship is
          designed for surgeons who wish to deepen their operative, clinical,
          academic, and innovation capabilities within a contemporary breast
          surgery programme.
        </p>
      </section>

      <section className="page-shell py-24 sm:py-32">
        <div className="grid gap-8 lg:grid-cols-[.62fr_1.38fr]">
          <div>
            <p className="eyebrow text-[var(--coral)]">Fellowship focus areas</p>
          </div>
          <h2 className="section-title">
            Focused exposure across <i className="font-normal text-[var(--coral)]">surgery, planning and translation.</i>
          </h2>
        </div>
        <div className="mt-14 grid border-l border-t hairline lg:grid-cols-2">
          {focusAreas.map((area) => (
            <article key={area.title} className="flex min-h-[360px] flex-col justify-between border-b border-r hairline bg-[var(--paper)] p-7 sm:p-8">
              <div>
                <span className="text-xs font-bold text-[var(--coral)]">{area.index}</span>
                <h3 className="serif mt-10 text-3xl leading-[1.08] tracking-[-.03em]">{area.title}</h3>
                <p className="muted mt-6 text-[15px] leading-7">{area.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y hairline bg-white/30 py-24 sm:py-32">
        <div className="page-shell grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <p className="eyebrow text-[var(--coral)]">Who this is for</p>
          </div>
          <p className="serif text-3xl leading-tight tracking-[-.03em] sm:text-5xl">
            This fellowship is intended for breast surgeons, surgical fellows, or
            senior trainees who wish to develop a deeper understanding of breast
            conservation, oncoplastic techniques, minimally invasive breast
            surgery, and translational innovation in breast cancer care.
          </p>
          <div className="lg:col-start-2">
            <p className="muted max-w-3xl text-[15px] leading-7">
              The structure and duration of attachment will depend on
              institutional requirements, clinical privileges, observership
              rules, supervision capacity, and the fellow’s prior experience.
            </p>
          </div>
        </div>
      </section>

      <section className="page-shell py-24 sm:py-32">
        <div className="grid gap-8 lg:grid-cols-[.62fr_1.38fr]">
          <div>
            <p className="eyebrow text-[var(--coral)]">Learning experience</p>
          </div>
          <div className="grid sm:grid-cols-2">
            {learningExperience.map((item, index) => (
              <div key={item} className="grid grid-cols-[42px_1fr] border-t hairline py-6">
                <span className="text-xs font-bold text-[var(--coral)]">0{index + 1}</span>
                <p className="serif text-2xl leading-tight">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--coral)] py-24 text-white">
        <div className="page-shell grid items-end gap-12 lg:grid-cols-[1.25fr_.75fr]">
          <div>
            <p className="eyebrow text-[var(--cream)]">Fellowship enquiry</p>
            <h2 className="serif mt-8 text-[clamp(3rem,6vw,6.5rem)] leading-[.93] tracking-[-.05em]">
              Interested in a breast surgery <i className="font-normal text-[var(--cream)]">fellowship or observership?</i>
            </h2>
            <p className="mt-8 max-w-3xl text-base leading-8 text-white/90">
              Suitably qualified breast surgeons or surgical trainees may enquire
              about focused fellowship or attachment opportunities in advanced
              breast conservation, oncoplastic surgery, minimally invasive breast
              surgery, and surgical innovation. Availability depends on
              institutional approval, supervision capacity, clinical governance
              requirements, and annual programme planning.
            </p>
          </div>
          <TextLink href="/contact">Enquire about fellowship</TextLink>
        </div>
      </section>

      <PullQuote>Advanced breast conservation through focused surgical learning and responsible innovation.</PullQuote>
    </>
  );
}
