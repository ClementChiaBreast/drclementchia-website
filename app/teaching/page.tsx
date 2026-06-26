import { FeatureGrid, PageHero, PullQuote, TextLink } from "@/components/primitives";

export const metadata = { title: "Teaching, LOTTE & Innovation Electives" };

export default function Teaching() {
  return (
    <>
      <PageHero
        number="05"
        eyebrow="Teaching"
        title="Teaching, LOTTE &"
        italic="Innovation Electives."
        intro="Dr Chia’s teaching platform brings together clinical breast surgery education, transdisciplinary learning, digital health innovation, and medtech translation. His educational work is anchored in LOTTE — Learning Oriented Teaching in Transdisciplinary Education — and has expanded into structured opportunities for students interested in breast cancer care, surgical innovation, and clinician-led medtech development."
      />

      <section id="teaching-electives" className="page-shell border-x border-t hairline px-5 py-14 sm:px-10">
        <p className="muted max-w-4xl text-base leading-8 sm:text-lg">
          Through these pathways, students are exposed not only to breast surgery
          as a clinical discipline, but also to the wider ecosystem of patient
          communication, multidisciplinary care, digital health, research,
          industry collaboration, and responsible clinical translation.
        </p>
      </section>

      <FeatureGrid
        items={[
          {
            index: "01",
            title: "LOTTE Breast Cancer Learning Journey",
            text: "A transdisciplinary clinical education experience where students learn breast cancer care through the full patient journey — from screening, diagnosis, imaging, surgery, reconstruction, oncology, recovery, and survivorship. Students are exposed to real clinical problems, interprofessional collaboration, case-based discussion, and reflective learning.",
          },
          {
            index: "02",
            title: "REBORN Digital Health & MedTech Innovation Elective",
            text: "An innovation-focused elective built around REBORN, Dr Chia’s digital health platform for breast cancer and reconstruction education. Students learn how clinical needs are translated into digital health solutions, including needs finding, patient journey mapping, content development, user feedback, prototype refinement, and implementation planning. Where appropriate, students may also gain exposure to industry collaboration with partners such as MAGES Studio.",
          },
          {
            index: "03",
            title: "Research Assistant / Gap-Year Attachment",
            text: "A longer-form attachment for students interested in academic surgery, breast cancer research, and medtech innovation. Students may support literature reviews, data collection, manuscript preparation, grant development, innovation projects, and clinical workflow studies, while gaining exposure to breast surgery practice and the process of translating clinical problems into research and innovation opportunities.",
          },
        ]}
      />

      <section className="page-shell py-24">
        <div className="grid gap-14 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <p className="eyebrow text-[var(--coral)]">Student attachments</p>
          </div>
          <div className="border-t hairline pt-7">
            <h2 className="serif max-w-4xl text-3xl leading-[1.08] tracking-[-.03em] sm:text-4xl">
              Interested in a breast surgery, LOTTE, or medtech innovation
              attachment?
            </h2>
            <div className="muted mt-6 max-w-3xl space-y-5 text-base leading-8">
              <p>
                Selected students may have the opportunity to join structured
                learning attachments in breast surgery, digital health
                innovation, or research. Opportunities are dependent on
                institutional approval, project availability, supervision
                capacity, and the student’s background and learning objectives.
              </p>
              <p>
                Students with a strong interest in breast cancer care, surgical
                education, digital health, medtech innovation, or clinician-led
                research are welcome to enquire.
              </p>
            </div>
            <div className="mt-10">
              <TextLink href="/contact">Enquire about student attachments</TextLink>
            </div>
          </div>
        </div>
      </section>

      <PullQuote>Learning breast cancer care through patients, disciplines and innovation.</PullQuote>
    </>
  );
}
