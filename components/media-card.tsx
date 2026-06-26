import { Arrow } from "@/components/icons";
import type { MediaArticle } from "@/data/media-articles";

export function MediaCard({ article }: { article: MediaArticle }) {
  return <article className="flex min-h-[390px] flex-col justify-between border-b border-r hairline bg-[var(--paper)] p-7 sm:p-8">
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="eyebrow text-[var(--coral)]">{article.category}</span>
        <time className="text-xs font-semibold text-[var(--muted)]">{article.date}</time>
      </div>
      <h2 className="serif mt-10 text-3xl leading-[1.08] tracking-[-.03em]">{article.title}</h2>
      <p className="muted mt-6 text-[15px] leading-7">{article.summary}</p>
    </div>
    <a href={article.url} target="_blank" rel="noreferrer" className="mt-10 inline-flex items-center justify-between gap-5 border-t hairline pt-5 text-xs font-bold uppercase leading-5 tracking-[.1em] transition-colors hover:text-[var(--coral)]">
      <span>{article.source}</span><Arrow className="h-5 w-5 shrink-0" />
    </a>
  </article>;
}
