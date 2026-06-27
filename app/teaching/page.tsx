import Image from "next/image";
import { Arrow } from "@/components/icons";
import { FeatureGrid, PageHero, PullQuote, TextLink } from "@/components/primitives";

export const metadata = { title: "Student Electives in Breast Surgery, LOTTE & MedTech Innovation" };

type ElectivePreview = {
  category: string;
  title: string;
  source: string;
  description: string;
  cta: string;
  href: string;
  image: string | null;
  alt: string;
  secondaryLinks?: { label: string; href: string }[];
};

// Expected approved local images, when available:
// /public/images/electives/lotte-preview.jpg
// /public/images/electives/reborn-preview.jpg
const electivePreviews: ElectivePreview[] = [
  {
    category: "LOTTE · Transdisciplinary education",
    title: "Learning breast cancer care through patients, disciplines and healthcare systems",
    source: "SMA News / LOTTE education articles",
    description: "Selected LOTTE writings and student learning journeys describing transdisciplinary breast cancer education, interprofessional learning, operating theatre exposure, tutorials, peer teaching and international clinical exposure.",
    cta: "Read LOTTE articles",
    href: "https://www.sma.org.sg/news/2025/March/LOTTE-Goes-Global-A-Transdisciplinary-Voyage-in-Breast-Cancer-Learning",
    image: null,
    alt: "Medical students and clinicians participating in a LOTTE breast cancer learning journey",
    secondaryLinks: [
      {
        label: "LOTTE Transdisciplinary Medical Student Elective Programme",
        href: "https://www.sma.org.sg/news/2021/july/LOTTE-Transdisciplinary-Medical-Student-Elective-Programme",
      },
      {
        label: "The Land of Warm Smiles, Kind Hearts and a Whole LOT-TE of Learning",
        href: "https://www.sma.org.sg/UploadedImg/1692165902_2023JulOpinion.pdf",
      },
    ],
  },
  {
    category: "REBORN · Digital health & medtech",
    title: "Learning how a clinical need becomes a digital health innovation",
    source: "REBORN Learning",
    description: "An innovation-focused elective built around REBORN, where students learn how breast cancer education and reconstruction counselling can be translated into digital health tools through needs finding, patient journey mapping, content development, user feedback, prototyping and implementation.",
    cta: "Visit REBORN Learning",
    href: "https://www.rebornlearning.com/",
    image: null,
    alt: "REBORN digital learning platform for breast cancer and reconstruction education",
  },
];

function ElectivePreviewPlaceholder({ category, source }: Pick<ElectivePreview, "category" | "source">) {
  return <div className="subtle-grid flex h-full min-h-56 flex-col justify-between bg-[var(--ink)] p-6 text-white">
    <span className="eyebrow text-[var(--lime)]">{category}</span>
    <div>
      <span className="block h-12 w-12 rounded-full border border-white/40 bg-[var(--coral)]" aria-hidden="true"></span>
      <p className="serif mt-5 text-2xl leading-tight">{source}</p>
    </div>
  </div>;
}

function ElectivePreviewCard({ preview }: { preview: ElectivePreview }) {
  return <article className="group overflow-hidden rounded-[1.6rem] border hairline bg-[var(--paper)] transition-[transform,box-shadow] hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(21,60,54,.10)]">
    <div className="grid md:grid-cols-[minmax(230px,.72fr)_1.28fr]">
      <div className="relative min-h-56 overflow-hidden border-b hairline md:min-h-full md:border-b-0 md:border-r">
        {preview.image ? <Image src={preview.image} alt={preview.alt} fill sizes="(min-width: 768px) 32vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" /> : <ElectivePreviewPlaceholder category={preview.category} source={preview.source} />}
      </div>
      <div className="flex flex-col justify-between p-6 sm:p-8">
        <div>
          <span className="eyebrow text-[var(--coral)]">{preview.category}</span>
          <h2 className="serif mt-6 text-[clamp(1.65rem,3vw,2.5rem)] leading-[1.1] tracking-[-.025em]">{preview.title}</h2>
          <p className="mt-3 text-sm font-bold uppercase tracking-[.09em] text-[var(--ink-2)]">{preview.source}</p>
          <p className="muted mt-5 text-[15px] leading-7">{preview.description}</p>
          {preview.secondaryLinks && <div className="mt-6 grid gap-3 border-t hairline pt-5">
            {preview.secondaryLinks.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold leading-6 text-[var(--ink-2)] underline decoration-[var(--line)] underline-offset-4 transition-colors hover:text-[var(--coral)]">{link.label}</a>)}
          </div>}
        </div>
        <a href={preview.href} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex min-h-11 w-fit items-center gap-3 border-b-2 border-current text-xs font-bold uppercase tracking-[.1em] transition-[gap,color] hover:gap-5 hover:text-[var(--coral)]">{preview.cta} <Arrow className="h-4 w-4" /></a>
      </div>
    </div>
  </article>;
}

export default function Teaching() {
  return (
    <>
      <PageHero
        number="05"
        eyebrow="Education & Electives"
        title="Student Electives in Breast Surgery,"
        italic="LOTTE & MedTech Innovation."
        intro="Opportunities for students to learn through transdisciplinary breast cancer care, digital health innovation, research, and clinician-led medtech translation."
      />

      <section id="teaching-electives" className="page-shell border-x border-t hairline px-5 py-14 sm:px-10">
        <p className="muted max-w-4xl text-base leading-8 sm:text-lg">
          The page brings together three student-facing opportunities: the LOTTE
          Breast Cancer Learning Journey, the REBORN Digital Health & MedTech
          Innovation Elective, and the Research Assistant / Gap-Year Attachment.
        </p>
      </section>

      <section className="border-y hairline bg-white/30 py-24 sm:py-32">
        <div className="page-shell">
          <div className="grid gap-8 lg:grid-cols-[.62fr_1.38fr]">
            <div><p className="eyebrow text-[var(--coral)]">Featured student opportunities</p></div>
            <div>
              <h2 className="section-title">Two entry points into <i className="font-normal text-[var(--coral)]">learning, innovation and translation.</i></h2>
              <p className="muted mt-7 max-w-3xl text-[15px] leading-7">These previews introduce the LOTTE and REBORN learning pathways. External links open original education articles and learning resources in a new tab.</p>
            </div>
          </div>
          <div className="mt-14 grid gap-6">{electivePreviews.map((preview) => <ElectivePreviewCard key={preview.title} preview={preview} />)}</div>
        </div>
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
