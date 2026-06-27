import { Arrow } from "@/components/icons";
import { PageHero, PullQuote, TextLink } from "@/components/primitives";

export const metadata = {
  title: "Research & Innovation",
  description:
    "Academic breast cancer research, breast conservation surgery, and clinician-led medtech translation.",
};

const publicationThemes = [
  {
    index: "01",
    title: "Breast conservation and margin strategy",
    text: "Research focused on improving breast-conserving surgery, including surgical margin assessment, re-excision reduction, specimen orientation, localisation of non-palpable lesions and tissue-preserving operative decision-making.",
  },
  {
    index: "02",
    title: "Oncoplastic and minimally invasive breast surgery",
    text: "Academic work around oncoplastic breast conservation, partial breast reconstruction, aesthetic outcomes, and minimally invasive or endoscopic-assisted approaches that may support breast preservation and patient-centred outcomes in selected patients.",
  },
  {
    index: "03",
    title: "Older women with breast cancer",
    text: "Research on breast cancer care in older women, including treatment decision-making, surgical fitness, primary endocrine therapy versus surgery, geriatric principles, quality of life, and the role of AI and decision support.",
  },
  {
    index: "04",
    title: "Breast reconstruction and recovery",
    text: "Publications addressing breast reconstruction, enhanced recovery pathways, implant-based reconstruction, patient outcomes and recovery after breast cancer surgery.",
  },
  {
    index: "05",
    title: "Digital health and patient education",
    text: "Academic and translational work involving digital tools for patient education, reconstruction counselling, shared decision-making, patient-reported outcomes and more personalised breast cancer care pathways.",
  },
  {
    index: "06",
    title: "Surgical education and learning innovation",
    text: "Research and educational work around surgical teaching, medical student learning, Telegram-based education, gamified learning and transdisciplinary education through LOTTE.",
  },
];

const innovationExperience = [
  {
    index: "01",
    title: "Singapore Biodesign",
    text: "Formal innovation training through Singapore Biodesign, with exposure to needs finding, stakeholder discovery, clinical immersion, market assessment, product strategy, regulatory thinking, reimbursement considerations and medtech translation.",
  },
  {
    index: "02",
    title: "ClavystBio venture exposure",
    text: "Venture and commercial exposure through ClavystBio, strengthening the link between clinician-led innovation, market understanding, investability, product-market fit and translation beyond the hospital setting.",
  },
  {
    index: "03",
    title: "REBORN digital health platform",
    text: "Founder of REBORN, a digital health platform supporting breast cancer and reconstruction education. REBORN reflects Dr Chia’s interest in patient education, decision support, digital implementation and patient-centred innovation.",
    cta: "Visit REBORN Learning",
    href: "https://www.rebornlearning.com",
  },
  {
    index: "04",
    title: "Breast surgery medtech translation",
    text: "Clinician-led translation around intra-operative margin assessment, low-thermal surgical devices, tissue-conscious surgery, precision localisation, workflow redesign and tools that may support safer breast conservation pathways.",
  },
];

const translationPathway = [
  {
    index: "01",
    title: "Clinical problem",
    text: "Unmet needs are identified through breast clinics, operating theatre workflows, patient counselling, multidisciplinary care and surgical outcomes.",
  },
  {
    index: "02",
    title: "Academic evidence",
    text: "Research and publications define the clinical problem, evidence gaps, patient outcomes and potential value of better solutions.",
  },
  {
    index: "03",
    title: "Innovation development",
    text: "Digital health, medtech or workflow solutions are developed through needs finding, prototyping, user feedback, industry collaboration and implementation planning.",
  },
  {
    index: "04",
    title: "Clinical evaluation",
    text: "Promising solutions are evaluated responsibly within real clinical pathways, with attention to safety, usability, outcomes, workflow fit and scalability.",
  },
];

export default function ResearchInnovationPage() {
  return (
    <>
      <PageHero
        number="04"
        eyebrow="Research & Innovation"
        title="Research"
        italic="& Innovation."
        intro="Academic breast cancer research, breast conservation surgery, and clinician-led medtech translation."
      />

      <section className="page-shell border-x border-t hairline px-5 py-14 sm:px-10">
        <div className="muted max-w-4xl space-y-5 text-base leading-8 sm:text-lg">
          <p>
            Dr Chia’s research and innovation work is grounded in breast cancer
            surgery, with a particular focus on improving safe and appropriate
            breast conservation. His academic publications span oncoplastic and
            minimally invasive breast surgery, breast reconstruction, older
            women with breast cancer, margin strategy, surgical education, and
            digital health.
          </p>
          <p>
            His innovation work builds on this clinical and academic foundation,
            translating real problems in breast cancer care into digital health,
            medtech, workflow and education solutions. This includes experience
            through Singapore Biodesign, venture exposure through ClavystBio,
            and clinician-led projects such as REBORN, intra-operative margin
            assessment and tissue-conscious surgical technologies.
          </p>
        </div>
      </section>

      <section className="page-shell py-24 sm:py-32">
        <div className="grid gap-8 lg:grid-cols-[.62fr_1.38fr]">
          <div>
            <p className="eyebrow text-[var(--coral)]">Academic publication themes</p>
          </div>
          <div>
            <h2 className="section-title">
              Academic breast cancer research across{" "}
              <i className="font-normal text-[var(--coral)]">surgery, recovery and education.</i>
            </h2>
            <p className="muted mt-7 max-w-3xl text-[15px] leading-7">
              Rather than a complete publication list, the themes below
              summarise the main academic areas within Dr Chia’s breast cancer
              research portfolio.
            </p>
          </div>
        </div>
        <div className="mt-14 grid border-l border-t hairline lg:grid-cols-2">
          {publicationThemes.map((theme) => (
            <article key={theme.title} className="flex min-h-[310px] flex-col justify-between border-b border-r hairline bg-[var(--paper)] p-7 sm:p-8">
              <div>
                <span className="text-xs font-bold text-[var(--coral)]">{theme.index}</span>
                <h3 className="serif mt-10 text-3xl leading-[1.08] tracking-[-.03em]">{theme.title}</h3>
                <p className="muted mt-6 text-[15px] leading-7">{theme.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y hairline bg-white/30 py-20 sm:py-24">
        <div className="page-shell grid gap-10 lg:grid-cols-[.62fr_1.38fr]">
          <div>
            <p className="eyebrow text-[var(--coral)]">Publication profile</p>
          </div>
          <div>
            <h2 className="serif text-4xl leading-tight tracking-[-.03em] sm:text-5xl">Publication profile</h2>
            <p className="muted mt-5 max-w-2xl text-base leading-8">
              Dr Chia’s full publication profile is available on ResearchGate.
            </p>
            <a
              href="https://www.researchgate.net/profile/Clement-Chia-2/research"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 border-b-2 border-current pb-1 text-xs font-bold uppercase leading-5 tracking-[.12em] transition-[gap,color] hover:gap-5 hover:text-[var(--coral)]"
            >
              View ResearchGate profile <Arrow className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="page-shell py-24 sm:py-32">
        <div className="grid gap-8 lg:grid-cols-[.62fr_1.38fr]">
          <div>
            <p className="eyebrow text-[var(--coral)]">Innovation and translation experience</p>
          </div>
          <div>
            <h2 className="section-title">
              Translating unmet clinical needs into{" "}
              <i className="font-normal text-[var(--coral)]">responsibly evaluated solutions.</i>
            </h2>
            <p className="muted mt-7 max-w-3xl text-[15px] leading-7">
              Dr Chia’s innovation work is shaped by formal biodesign training,
              venture exposure and real-world clinical test-bedding. The
              emphasis is not technology for its own sake, but translating unmet
              clinical needs in breast cancer care into solutions that can be
              evaluated, implemented and scaled.
            </p>
          </div>
        </div>
        <div className="mt-14 grid border-l border-t hairline lg:grid-cols-2">
          {innovationExperience.map((item) => (
            <article key={item.title} className="flex min-h-[330px] flex-col justify-between border-b border-r hairline bg-[var(--paper)] p-7 sm:p-8">
              <div>
                <span className="text-xs font-bold text-[var(--coral)]">{item.index}</span>
                <h3 className="serif mt-10 text-3xl leading-[1.08] tracking-[-.03em]">{item.title}</h3>
                <p className="muted mt-6 text-[15px] leading-7">{item.text}</p>
              </div>
              {item.href && (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex w-fit items-center gap-3 border-b-2 border-current pb-1 text-xs font-bold uppercase leading-5 tracking-[.12em] transition-[gap,color] hover:gap-5 hover:text-[var(--coral)]"
                >
                  {item.cta} <Arrow className="h-4 w-4" />
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="border-y hairline bg-white/30 py-24 sm:py-32">
        <div className="page-shell">
          <div className="grid gap-8 lg:grid-cols-[.62fr_1.38fr]">
            <div>
              <p className="eyebrow text-[var(--coral)]">Research-to-translation pathway</p>
            </div>
            <h2 className="section-title">
              From clinical problem to{" "}
              <i className="font-normal text-[var(--coral)]">careful clinical evaluation.</i>
            </h2>
          </div>
          <div className="mt-14 grid border-l border-t hairline lg:grid-cols-4">
            {translationPathway.map((step) => (
              <article key={step.title} className="flex min-h-[280px] flex-col justify-between border-b border-r hairline bg-[var(--paper)] p-7">
                <div>
                  <span className="text-xs font-bold text-[var(--coral)]">{step.index}</span>
                  <h3 className="serif mt-10 text-3xl leading-[1.08] tracking-[-.03em]">{step.title}</h3>
                </div>
                <p className="muted mt-6 text-[15px] leading-7">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--coral)] py-24 text-white">
        <div className="page-shell grid items-end gap-12 lg:grid-cols-[1.25fr_.75fr]">
          <div>
            <p className="eyebrow text-[var(--cream)]">Collaboration</p>
            <h2 className="serif mt-8 text-[clamp(3rem,6vw,6.5rem)] leading-[.93] tracking-[-.05em]">
              Collaborate on breast cancer research or{" "}
              <i className="font-normal text-[var(--cream)]">medtech translation.</i>
            </h2>
            <p className="mt-8 max-w-3xl text-base leading-8 text-white/90">
              Dr Chia welcomes academic, clinical, industry and venture-aligned
              collaborations around breast conservation, oncoplastic surgery,
              digital health, surgical education, intra-operative margin
              assessment and medtech translation.
            </p>
          </div>
          <TextLink href="/contact">Enquire about collaboration</TextLink>
        </div>
      </section>

      <PullQuote>Breast conservation through evidence, implementation and responsible innovation.</PullQuote>
    </>
  );
}
