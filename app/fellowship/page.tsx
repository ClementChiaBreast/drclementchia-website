import { PageHero, PullQuote, TextLink } from "@/components/primitives";

export const metadata = {
  title: "Breast Conservation Surgery Fellowship",
  description:
    "Advanced oncoplastic, minimally invasive, localisation and innovation strategies to help surgeons increase safe breast conservation.",
};

const focusAreas = [
  {
    index: "01",
    title: "Oncoplastic strategies to extend breast conservation",
    text: "Focused exposure to oncoplastic techniques that allow wider excision while preserving breast form. This includes chest wall perforator flaps, volume displacement, volume replacement, therapeutic mammoplasty, breast reduction approaches, symmetrisation strategies and aesthetic planning. The emphasis is on using oncoplastic principles to convert suitable patients from mastectomy or poor-cosmesis lumpectomy towards safe and acceptable breast-conserving surgery.",
  },
  {
    index: "02",
    title: "Minimally invasive breast-conserving approaches",
    text: "Exposure to selected minimally invasive and single-port transaxillary approaches relevant to breast conservation. The focus is on patient selection, incision planning, operative access, tumour localisation, cosmetic outcomes and safe integration into breast cancer surgery. The aim is not minimally invasive surgery for its own sake, but its role in supporting breast preservation and reducing visible surgical impact in appropriately selected patients.",
  },
  {
    index: "03",
    title: "Precision localisation and margin strategy",
    text: "Learning around localisation of non-palpable breast lesions, image-guided surgical planning, targeted excision, specimen orientation, intra-operative decision-making and strategies to reduce avoidable re-excision after breast-conserving surgery. The emphasis is on achieving clear margins while avoiding unnecessary tissue removal, thereby supporting both oncological safety and breast preservation.",
  },
  {
    index: "04",
    title: "Innovation to increase breast conservation rates",
    text: "Opportunities to engage with research, digital health and medtech innovation that directly support breast conservation pathways. This may include intra-operative margin assessment, low-thermal surgical devices, digital patient education, patient-reported outcomes, surgical decision support, workflow redesign and clinician-led medtech translation. The emphasis is on innovation that addresses real clinical barriers to breast conservation, rather than technology for its own sake.",
  },
];

const learningExperience = [
  "Breast conservation clinics and multidisciplinary treatment planning",
  "Oncoplastic case selection and operative planning",
  "Chest wall perforator flaps, therapeutic mammoplasty and symmetrisation principles",
  "Minimally invasive and single-port transaxillary breast-conserving approaches in selected cases",
  "Precision localisation strategies for non-palpable lesions",
  "Margin management and re-excision reduction strategies",
  "Specimen orientation, intra-operative decision-making and tissue preservation",
  "Research projects focused on improving breast conservation pathways",
  "Digital health and patient education projects such as REBORN",
  "Medtech translation around margin assessment, tissue-conscious surgery and surgical decision support",
];

export default function FellowshipPage() {
  return (
    <>
      <PageHero
        number="06"
        eyebrow="Fellowship"
        title="Breast Conservation Surgery"
        italic="Fellowship."
        intro="Advanced oncoplastic, minimally invasive, localisation and innovation strategies to help surgeons increase safe breast conservation."
      />

      <section className="page-shell border-x border-t hairline px-5 py-14 sm:px-10">
        <div className="muted max-w-4xl space-y-5 text-base leading-8 sm:text-lg">
          <p>
            Dr Chia offers focused fellowship and attachment opportunities for
            breast surgeons seeking to expand their ability to offer safe,
            precise and aesthetically considered breast-conserving surgery.
          </p>
          <p>
            The fellowship is built around a single clinical objective: helping
            surgeons increase breast conservation rates for suitable patients
            without compromising oncological safety, margin control or
            patient-centred aesthetic outcomes.
          </p>
          <p>
            Rather than teaching oncoplastic surgery, minimally invasive surgery,
            localisation and innovation as separate topics, the programme
            integrates them as complementary strategies to overcome common
            barriers to breast conservation — including tumour-to-breast size
            mismatch, non-palpable lesions, cosmetic concerns, margin
            uncertainty, and avoidable re-excision.
          </p>
        </div>
      </section>

      <section className="page-shell py-24 sm:py-32">
        <div className="grid gap-8 lg:grid-cols-[.62fr_1.38fr]">
          <div>
            <p className="eyebrow text-[var(--coral)]">Fellowship focus areas</p>
          </div>
          <h2 className="section-title">
            Strategies to increase <i className="font-normal text-[var(--coral)]">safe and appropriate breast conservation.</i>
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
            This fellowship is intended for breast surgeons, surgical fellows or
            senior trainees who wish to develop a deeper
            breast-conservation-focused skill set.
          </p>
          <div className="lg:col-start-2">
            <div className="muted max-w-3xl space-y-5 text-[15px] leading-7">
              <p>
                It is especially suited to surgeons who want to increase safe
                and appropriate breast conservation rates through oncoplastic
                planning, minimally invasive approaches, precision localisation,
                re-excision reduction strategies and translational innovation.
              </p>
              <p>
                The fellowship is not designed as a generic breast surgery
                observership. It is intended for surgeons who are specifically
                interested in building a breast conservation programme or
                strengthening breast-conserving surgical options within their
                own practice setting.
              </p>
              <p>
                The structure and duration of attachment will depend on
                institutional requirements, observership or fellowship
                arrangements, clinical privileges, supervision capacity and the
                fellow’s prior experience.
              </p>
            </div>
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
              Interested in a Breast Conservation Surgery <i className="font-normal text-[var(--cream)]">Fellowship?</i>
            </h2>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-8 text-white/90">
              <p>
                Suitably qualified breast surgeons or senior surgical trainees
                may enquire about focused fellowship or attachment opportunities
                in breast conservation surgery. The fellowship is designed for
                surgeons who wish to strengthen their ability to preserve the
                breast safely and appropriately through oncoplastic techniques,
                minimally invasive approaches, precision localisation, margin
                strategy and innovation.
              </p>
              <p>
                Availability depends on institutional approval, supervision
                capacity, clinical governance requirements and annual programme
                planning.
              </p>
            </div>
          </div>
          <TextLink href="/contact">Enquire about fellowship</TextLink>
        </div>
      </section>

      <PullQuote>Increasing safe breast conservation through surgical strategy, precision and responsible innovation.</PullQuote>
    </>
  );
}
