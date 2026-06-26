"use client";

import { useState } from "react";

type AccordionItem = { title: string; text: string };

function Accordion({ items, prefix }: { items: AccordionItem[]; prefix: string }) {
  const [open, setOpen] = useState<number | null>(0);
  return <div className="border-t hairline">{items.map((item, index) => {
    const expanded = open === index;
    const panelId = `${prefix}-panel-${index}`;
    return <div key={item.title} className="border-b hairline">
      <button type="button" aria-expanded={expanded} aria-controls={panelId} onClick={() => setOpen(expanded ? null : index)} className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:text-[var(--coral)]">
        <span className="serif text-2xl leading-tight sm:text-3xl">{item.title}</span>
        <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border hairline text-xl transition-transform ${expanded ? "rotate-45 bg-[var(--lime)]" : ""}`} aria-hidden="true">+</span>
      </button>
      <div id={panelId} hidden={!expanded} className="muted max-w-3xl pb-7 pr-12 text-[15px] leading-7">{item.text}</div>
    </div>;
  })}</div>;
}

const suitabilityItems: AccordionItem[] = [
  { title: "Tumour size", text: "The size of the cancer is considered in relation to the amount and shape of breast tissue. A larger area may require more complex planning or make another operation more appropriate." },
  { title: "Location in the breast", text: "The position of the cancer can influence how much tissue must be removed and how the remaining breast can be reshaped." },
  { title: "Imaging findings", text: "Mammography, ultrasound and sometimes MRI help the clinical team understand the extent of disease and whether there are additional areas requiring assessment." },
  { title: "Breast size and shape", text: "Breast volume, shape and natural differences between the breasts affect surgical planning and the oncoplastic techniques that may be considered." },
  { title: "Ability to obtain clear margins", text: "The aim is to remove the cancer with a rim of healthy tissue. If cancer cells are found at or close to an edge, further surgery may sometimes be advised." },
  { title: "Radiotherapy", text: "Breast-conserving treatment usually includes radiotherapy. Suitability depends partly on whether radiotherapy is medically appropriate and acceptable to the patient." },
  { title: "Genetic and future cancer risk", text: "An inherited cancer predisposition or a high future risk may affect the discussion about breast conservation, mastectomy and risk-reducing options." },
  { title: "Overall health and treatment needs", text: "General health, other medical conditions, recovery considerations and the wider cancer treatment plan all contribute to a recommendation." },
  { title: "Patient preferences", text: "Values regarding breast preservation, reconstruction, recovery, radiotherapy, uncertainty and future risk matter. Shared decision-making brings these priorities into the clinical discussion." },
];

const faqItems: AccordionItem[] = [
  { title: "What is breast-conserving surgery?", text: "It removes the cancer with a surrounding margin while preserving the rest of the breast. It is generally combined with radiotherapy and is suitable for some, but not all, patients." },
  { title: "What is oncoplastic breast surgery?", text: "It combines cancer surgery with reconstructive principles so that the remaining breast tissue can be reshaped after the cancer is removed." },
  { title: "What are surgical margins?", text: "Margins are the edges of the tissue removed during surgery. A pathologist examines them to assess whether cancer cells extend to or near an edge." },
  { title: "Why might re-excision be needed?", text: "If the final pathology shows cancer at or close to a margin, another operation may sometimes be recommended to remove additional tissue. The decision depends on the findings and clinical context." },
  { title: "Will I need radiotherapy?", text: "Radiotherapy is usually part of breast-conserving treatment, but the exact recommendation depends on the cancer, prior treatment and individual health considerations." },
  { title: "When might mastectomy be recommended?", text: "Mastectomy may be considered when breast conservation cannot safely remove the disease, radiotherapy is unsuitable, cancer risk is high, or after a patient weighs the available options and preferences." },
  { title: "Is reconstruction possible after breast cancer surgery?", text: "Reconstruction may involve reshaping remaining breast tissue, partial breast reconstruction or reconstruction after mastectomy. The suitable approaches vary between patients." },
  { title: "What is REBORN?", text: "REBORN is a digital patient-education innovation developed to help explain oncoplastic reconstruction and support clearer conversations about surgical choices. It does not replace consultation with the clinical team." },
  { title: "What does shared decision-making mean?", text: "It means combining clinical evidence and professional recommendations with the patient’s goals, concerns and preferences, after discussing reasonable options and trade-offs." },
];

export function SuitabilityAccordion() {
  return <section className="page-shell py-24 sm:py-32">
    <div className="grid gap-12 lg:grid-cols-[.65fr_1.35fr]">
      <div><p className="eyebrow text-[var(--coral)]">General education</p><h2 className="serif mt-8 text-4xl leading-[1.08] tracking-[-.035em] sm:text-5xl">What influences whether breast conservation may be suitable?</h2><p className="muted mt-7 max-w-sm text-[15px] leading-7">These factors are considered together. This information is educational and cannot determine what is appropriate for an individual patient.</p></div>
      <Accordion items={suitabilityItems} prefix="suitability" />
    </div>
  </section>;
}

export function PatientFaq() {
  return <section className="bg-[var(--paper)] py-24 sm:py-32"><div className="page-shell grid gap-12 lg:grid-cols-[.65fr_1.35fr]">
    <div><p className="eyebrow text-[var(--coral)]">Patient FAQ</p><h2 className="serif mt-8 text-4xl leading-[1.08] tracking-[-.035em] sm:text-5xl">Questions worth asking.</h2><p className="muted mt-7 max-w-sm text-[15px] leading-7">Answers provide a starting point for discussion with a breast cancer care team and are not personal medical advice.</p></div>
    <Accordion items={faqItems} prefix="faq" />
  </div></section>;
}
