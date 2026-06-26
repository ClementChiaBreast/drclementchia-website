const steps = [
  ["Diagnosis", "Confirm the type and features of the cancer through clinical assessment and tissue testing."],
  ["Imaging", "Use mammography, ultrasound and selected additional imaging to understand the extent of disease."],
  ["Surgical planning", "Bring cancer findings, breast anatomy, treatment needs and personal priorities together."],
  ["Breast-conserving surgery", "Remove the cancer with a surrounding margin while preserving the breast where appropriate."],
  ["Oncoplastic reshaping", "Reshape remaining tissue or consider partial reconstruction when these techniques may help."],
  ["Adjuvant treatment", "Coordinate radiotherapy and other treatments recommended for the individual cancer."],
  ["Recovery & quality of life", "Follow recovery, function, body image, wellbeing and patient-reported outcomes over time."],
];

export function BreastConservationPathway() {
  return <section className="bg-[var(--ink)] py-24 text-white sm:py-32"><div className="page-shell">
    <div className="grid gap-8 lg:grid-cols-[.65fr_1.35fr]"><div><p className="eyebrow text-[var(--lime)]">Breast Conservation Pathway</p></div><div><h2 className="serif text-4xl leading-[1.05] tracking-[-.035em] sm:text-6xl">A coordinated journey from diagnosis to quality of life.</h2><p className="muted-on-dark mt-7 max-w-3xl text-[15px] leading-7">The sequence and treatments vary between patients. This pathway shows how different decisions and disciplines may connect.</p></div></div>
    <ol className="mt-16 grid gap-0 lg:grid-cols-7">{steps.map(([title,text], index) => <li key={title} className="group relative border-l border-white/25 pb-10 pl-8 lg:border-l-0 lg:border-t lg:px-4 lg:pb-0 lg:pt-9">
      <span className="absolute -left-[7px] top-0 h-3.5 w-3.5 rounded-full border-2 border-[var(--ink)] bg-[var(--lime)] transition-transform group-hover:scale-150 lg:-top-[7px] lg:left-4"></span>
      <span className="accent-on-dark text-xs font-bold">0{index + 1}</span><h3 className="serif mt-4 text-2xl leading-tight">{title}</h3><p className="muted-on-dark mt-4 text-sm leading-6">{text}</p>
    </li>)}</ol>
  </div></section>;
}
