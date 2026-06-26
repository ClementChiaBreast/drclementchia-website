import Link from "next/link";
import { Arrow } from "@/components/icons";

const supports = [
  "Comparable long-term survival for many suitable early breast cancer patients",
  "Reduced local recurrence and breast cancer mortality when indicated radiotherapy follows surgery",
  "Potential benefits for body image, psychosocial well-being and quality of life",
];

const limits = [
  "Breast conservation is not suitable for every cancer or every patient",
  "It does not guarantee better survival or a particular cosmetic outcome",
  "Population studies cannot replace individual clinical assessment or remove selection bias",
];

export const evidenceReferences = [
  "Veronesi U, et al. Twenty-year follow-up of a randomized study comparing breast-conserving surgery with radical mastectomy for early breast cancer. New England Journal of Medicine. 2002.",
  "Early Breast Cancer Trialists’ Collaborative Group. Effect of radiotherapy after breast-conserving surgery on recurrence and breast cancer mortality. Lancet. 2011.",
  "de Boniface J, et al. Survival after breast conservation vs mastectomy adjusted for comorbidity and socioeconomic status. JAMA Surgery. 2021.",
  "Rajan KK, et al. Overall survival after mastectomy versus breast-conserving surgery with radiotherapy in early-stage breast cancer. British Journal of Surgery. 2024.",
  "Hanson SE, et al. Long-term quality of life after breast conservation vs mastectomy and reconstruction. JAMA Surgery. 2022.",
];

function SnapshotColumn({ title, items, tone }: { title: string; items: string[]; tone: "support" | "limit" }) {
  return <div className={`p-7 sm:p-9 ${tone === "support" ? "bg-[var(--lime)]/55" : "bg-[var(--paper)]"}`}>
    <p className="eyebrow text-[var(--coral)]">{title}</p>
    <ul className="mt-7 space-y-5">{items.map((item) => <li key={item} className="grid grid-cols-[28px_1fr] gap-3 text-[15px] leading-7"><span className={`flex h-7 w-7 items-center justify-center rounded-full text-sm font-bold ${tone === "support" ? "bg-[var(--ink)] text-white" : "border hairline"}`} aria-hidden="true">{tone === "support" ? "✓" : "–"}</span><span>{item}</span></li>)}</ul>
  </div>;
}

export function EvidenceSection({ compact = false }: { compact?: boolean }) {
  if (compact) return <section className="page-shell py-24 sm:py-32">
    <div className="overflow-hidden rounded-[2rem] border hairline bg-[var(--paper)]">
      <div className="grid lg:grid-cols-[1.05fr_.95fr]">
        <div className="p-7 sm:p-12"><p className="eyebrow text-[var(--coral)]">Evidence-based care</p><h2 className="serif mt-7 text-4xl leading-[1.06] tracking-[-.035em] sm:text-6xl">Is breast conservation as safe as mastectomy?</h2><p className="muted mt-7 max-w-2xl text-base leading-8">For suitable early breast cancer patients, breast-conserving surgery followed by radiotherapy provides long-term survival outcomes comparable to mastectomy. The right operation still depends on the cancer, treatment needs, health and patient preferences.</p><Link href="/breast-conservation#evidence" className="mt-8 inline-flex min-h-11 items-center gap-3 border-b-2 border-current text-xs font-bold uppercase tracking-[.1em] transition-[gap,color] hover:gap-5 hover:text-[var(--coral)]">Explore the evidence <Arrow className="h-4 w-4" /></Link></div>
        <div className="border-t hairline lg:border-l lg:border-t-0"><SnapshotColumn title="Evidence supports" items={supports} tone="support" /></div>
      </div>
    </div>
  </section>;

  return <section id="evidence" className="page-shell scroll-mt-24 py-24 sm:py-32">
    <div className="grid gap-12 lg:grid-cols-[.62fr_1.38fr]">
      <div><p className="eyebrow text-[var(--coral)]">Evidence-based medicine</p><h2 className="serif mt-8 text-4xl leading-[1.06] tracking-[-.035em] sm:text-6xl">Is breast conservation as safe as mastectomy?</h2></div>
      <div className="muted space-y-6 text-base leading-8"><p>For many women with early breast cancer, breast-conserving surgery followed by radiotherapy is an established treatment option with long-term survival outcomes comparable to mastectomy. The goal is not simply to perform a smaller operation, but to remove the cancer safely while preserving the breast where appropriate.</p><p>Landmark randomised studies have shown that appropriately selected patients treated with breast-conserving surgery can achieve survival outcomes similar to those treated with mastectomy. Radiotherapy after breast-conserving surgery is an important part of this treatment pathway because it reduces the risk of cancer returning in the breast and can reduce breast cancer mortality.</p><p>More recent population-based studies and meta-analyses have reported similar, and in some settings better, survival after breast-conserving therapy compared with mastectomy. These findings are encouraging, but they should be interpreted carefully because treatment choice is influenced by tumour biology, disease extent, patient health, radiotherapy, systemic treatment, patient preference and selection bias.</p><p>Breast conservation is therefore best understood as a personalised treatment approach. It may help suitable patients preserve body image, confidence and quality of life, but mastectomy remains appropriate or necessary for some patients.</p></div>
    </div>
    <div className="mt-14 overflow-hidden rounded-[2rem] border hairline"><div className="border-b hairline bg-[var(--ink)] px-7 py-6 text-white sm:px-9"><p className="eyebrow text-[var(--lime)]">Evidence Snapshot</p></div><div className="grid md:grid-cols-2"><SnapshotColumn title="What the evidence supports" items={supports} tone="support" /><div className="border-t hairline md:border-l md:border-t-0"><SnapshotColumn title="What the evidence does not mean" items={limits} tone="limit" /></div></div></div>
  </section>;
}

export function EvidenceReferences() {
  return <section className="page-shell border-x border-t hairline px-6 py-16 sm:px-10 sm:py-20"><div className="grid gap-10 lg:grid-cols-[.62fr_1.38fr]"><div><p className="eyebrow text-[var(--coral)]">Selected references</p><p className="muted mt-5 max-w-sm text-sm leading-6">A short reading list spanning randomized evidence, radiotherapy, modern population studies and quality of life.</p></div><ol className="space-y-5">{evidenceReferences.map((reference, index) => <li key={reference} className="grid grid-cols-[32px_1fr] border-t hairline pt-5 text-sm leading-7"><span className="font-bold text-[var(--coral)]">{index + 1}</span><span>{reference}</span></li>)}</ol></div></section>;
}
