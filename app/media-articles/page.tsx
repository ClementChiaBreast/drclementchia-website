import type { Metadata } from "next";
import { MediaArticleCard } from "@/components/media-article-card";
import { MediaCard } from "@/components/media-card";
import { PageHero } from "@/components/primitives";
import { mediaArticles } from "@/data/media-articles";

export const metadata: Metadata = {
  title: "Media & Articles on Breast Conservation",
  description: "Media features, patient education, authored commentary and innovation articles from Dr Clement Chia's work in breast conservation.",
};

const pathways = ["Media features", "Authored articles", "Patient education", "Breast conservation commentary", "Medtech innovation", "Speaking & interviews"];
const featuredArticles = mediaArticles.filter((article) => article.featured);
const archiveArticles = mediaArticles.filter((article) => !article.featured);

export default function MediaArticlesPage() {
  return <>
    <PageHero number="07" eyebrow="Media & Articles" title="Breast conservation" italic="in the public conversation." intro="Selected media features, authored commentary, patient education and innovation stories connecting breast conservation with clearer decisions, evidence and responsible clinical translation." />
    <section className="page-shell py-20 sm:py-24">
      <div className="grid gap-10 lg:grid-cols-[.65fr_1.35fr]">
        <div><p className="eyebrow text-[var(--coral)]">Editorial pathways</p></div>
        <div className="grid sm:grid-cols-2">{pathways.map((path, index) => <div key={path} className="grid grid-cols-[36px_1fr] border-t hairline py-5"><span className="text-xs font-bold text-[var(--coral)]">0{index + 1}</span><p className="serif text-2xl leading-tight">{path}</p></div>)}</div>
      </div>
    </section>

    <section className="border-y hairline bg-white/30 py-24 sm:py-32">
      <div className="page-shell">
        <div className="grid gap-8 lg:grid-cols-[.62fr_1.38fr]"><div><p className="eyebrow text-[var(--coral)]">Featured coverage</p></div><div><h2 className="section-title">Six stories across <i className="font-normal text-[var(--coral)]">surgery, education and innovation.</i></h2><p className="muted mt-7 max-w-3xl text-[15px] leading-7">These previews link to reporting and commentary hosted by the original publications. Summaries are provided for orientation and do not reproduce article text.</p></div></div>
        <div className="mt-14 grid gap-6">{featuredArticles.map((article) => <MediaArticleCard key={`${article.source}-${article.title}`} article={article} />)}</div>
      </div>
    </section>

    <section className="page-shell py-24 sm:py-32">
      <div className="grid gap-8 lg:grid-cols-[.62fr_1.38fr]"><div><p className="eyebrow text-[var(--coral)]">More articles & profiles</p></div><h2 className="serif text-4xl leading-[1.08] tracking-[-.035em] sm:text-5xl">Further reading across patient education, teaching and clinical innovation.</h2></div>
      <div className="mt-14 grid border-l border-t hairline lg:grid-cols-2">{archiveArticles.map((article) => <MediaCard key={`${article.source}-${article.title}`} article={article} />)}</div>
    </section>
    <section className="bg-[var(--lime)] py-20 sm:py-24"><div className="page-shell grid gap-8 lg:grid-cols-[.55fr_1.45fr]"><p className="eyebrow">A shared theme</p><h2 className="section-title">Breast conservation through <i className="font-normal text-[var(--coral)]">surgery, education, research and innovation.</i></h2></div></section>
  </>;
}
