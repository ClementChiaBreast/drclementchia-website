import Image from "next/image";
import { Arrow } from "@/components/icons";
import type { MediaArticle } from "@/data/media-articles";

function PublicationPlaceholder({ source, language }: Pick<MediaArticle, "source" | "language">) {
  return <div className="subtle-grid flex h-full min-h-48 flex-col justify-between bg-[var(--ink)] p-6 text-white sm:min-h-56">
    <span className="eyebrow text-[var(--lime)]">{language === "zh" ? "中文报道" : "Media feature"}</span>
    <div><span className="block h-10 w-10 rounded-full border border-white/40 bg-[var(--coral)]" aria-hidden="true"></span><p className="serif mt-5 text-2xl leading-tight">{source}</p></div>
  </div>;
}

export function MediaArticleCard({ article }: { article: MediaArticle }) {
  return <article className="group overflow-hidden rounded-[1.6rem] border hairline bg-[var(--paper)] transition-[transform,box-shadow] hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(21,60,54,.10)]">
    <div className="grid md:grid-cols-[minmax(230px,.72fr)_1.28fr]">
      <div className="relative min-h-52 overflow-hidden border-b hairline md:min-h-full md:border-b-0 md:border-r">
        {article.image ? <Image src={article.image} alt={`Media image for ${article.title}`} fill sizes="(min-width: 768px) 32vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" /> : <PublicationPlaceholder source={article.source} language={article.language} />}
      </div>
      <div className="flex flex-col justify-between p-6 sm:p-8">
        <div>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-semibold text-[var(--muted)]"><span className="eyebrow text-[var(--coral)]">{article.category}</span><span aria-hidden="true">·</span><time>{article.date}</time><span aria-hidden="true">·</span><span>{article.language === "zh" ? "中文" : "English"}</span></div>
          <h2 lang={article.language === "zh" ? "zh" : "en"} className="serif mt-6 text-[clamp(1.65rem,3vw,2.5rem)] leading-[1.1] tracking-[-.025em]">{article.title}</h2>
          <p className="mt-3 text-sm font-bold uppercase tracking-[.09em] text-[var(--ink-2)]">{article.source}</p>
          <p className="muted mt-5 text-[15px] leading-7">{article.summary}</p>
        </div>
        <a href={article.url} target="_blank" rel="noreferrer" className="mt-7 inline-flex min-h-11 w-fit items-center gap-3 border-b-2 border-current text-xs font-bold uppercase tracking-[.1em] transition-[gap,color] hover:gap-5 hover:text-[var(--coral)]">Read article <Arrow className="h-4 w-4" /></a>
      </div>
    </div>
  </article>;
}
