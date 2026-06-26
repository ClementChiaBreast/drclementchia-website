const diagrams = [
  { title: "Breast conservation", text: "Remove the area of cancer while preserving the remaining breast where oncologically appropriate.", type: "conserve" },
  { title: "Margin assessment", text: "Examine the edges around removed tissue to help guide whether further treatment is needed.", type: "margin" },
  { title: "Oncoplastic reshaping", text: "Bring remaining breast tissue together using reconstructive principles after tumour removal.", type: "reshape" },
  { title: "Partial breast reconstruction", text: "Restore a local surgical defect with an approach selected for the individual anatomy and operation.", type: "reconstruct" },
  { title: "Shared decision-making", text: "Bring clinical evidence, medically appropriate options and patient priorities into one conversation.", type: "decision" },
];

function Diagram({ type }: { type: string }) {
  return <svg viewBox="0 0 240 180" className="h-auto w-full" role="img" aria-label={`${type} conceptual diagram`}>
    <rect x="1" y="1" width="238" height="178" rx="24" fill="#fbfaf6" stroke="rgba(21,60,54,.28)" />
    {type === "conserve" && <><path d="M120 32C72 32 48 69 48 107c0 27 21 45 72 45s72-18 72-45c0-38-24-75-72-75Z" fill="#d8e2a3" stroke="#153c36" strokeWidth="2"/><circle cx="145" cy="91" r="17" fill="#a94737"/><path d="M133 79l24 24M157 79l-24 24" stroke="#fbfaf6" strokeWidth="3"/></>}
    {type === "margin" && <><path d="M72 52h96v76H72z" fill="#d8e2a3" stroke="#153c36" strokeWidth="2"/><path d="M87 66h66v48H87z" fill="none" stroke="#a94737" strokeWidth="3" strokeDasharray="7 5"/><circle cx="120" cy="90" r="15" fill="#153c36"/></>}
    {type === "reshape" && <><path d="M55 48c38 5 54 24 65 43 11-19 27-38 65-43-2 57-22 87-65 94-43-7-63-37-65-94Z" fill="#d8e2a3" stroke="#153c36" strokeWidth="2"/><path d="M120 58v74M91 80c14 9 23 19 29 34M149 80c-14 9-23 19-29 34" stroke="#a94737" strokeWidth="3" fill="none"/></>}
    {type === "reconstruct" && <><path d="M56 118c24-61 104-80 128-16-19 35-49 48-85 40-19-4-33-12-43-24Z" fill="#d8e2a3" stroke="#153c36" strokeWidth="2"/><path d="M112 78c13 1 25 8 33 20-8 17-23 26-45 27 2-22 5-37 12-47Z" fill="#f29a86" stroke="#a94737" strokeWidth="2"/><path d="M88 108h30M104 92l14 16-14 16" stroke="#153c36" strokeWidth="2" fill="none"/></>}
    {type === "decision" && <><circle cx="72" cy="90" r="30" fill="#d8e2a3" stroke="#153c36" strokeWidth="2"/><circle cx="168" cy="90" r="30" fill="#f29a86" stroke="#153c36" strokeWidth="2"/><path d="M102 90h36" stroke="#153c36" strokeWidth="3"/><path d="m130 81 9 9-9 9" fill="none" stroke="#153c36" strokeWidth="3"/><path d="m110 81-9 9 9 9" fill="none" stroke="#153c36" strokeWidth="3"/></>}
  </svg>;
}

export function ConceptDiagrams() {
  return <section className="page-shell py-24 sm:py-32"><div className="grid gap-10 lg:grid-cols-[.62fr_1.38fr]"><div><p className="eyebrow text-[var(--coral)]">Concepts at a glance</p><h2 className="serif mt-8 text-4xl leading-[1.08] tracking-[-.035em] sm:text-5xl">A visual guide to the ideas behind breast conservation.</h2></div><p className="muted max-w-2xl self-end text-[15px] leading-7">These simplified diagrams explain concepts only. They do not represent an individual operation, anatomy or expected cosmetic result.</p></div>
    <div className="mt-14 grid border-l border-t hairline sm:grid-cols-2 lg:grid-cols-3">{diagrams.map((item) => <article key={item.title} className="border-b border-r hairline p-6"><Diagram type={item.type}/><h3 className="serif mt-6 text-2xl leading-tight">{item.title}</h3><p className="muted mt-4 text-[15px] leading-7">{item.text}</p></article>)}</div>
  </section>;
}
