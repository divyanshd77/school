import Link from "next/link";
import { getHomeNews } from "@/lib/home-news";
import { ArrowRight, Newspaper } from "lucide-react";

export async function NewsPreview() {
  const items = await getHomeNews(3);

  return (
    <section
      className="bg-white py-24 px-4 md:px-8 lg:px-16"
      aria-labelledby="news-preview-heading"
    >
      <div className="mx-auto max-w-content">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Media
            </p>
            <h2
              id="news-preview-heading"
              className="font-display mt-2 text-[var(--text-h2)] text-dark"
            >
              News &amp; events
            </h2>
            <p className="mt-2 max-w-xl text-gray-600">
              Highlights from campus — read the full archive anytime.
            </p>
          </div>
          <Link
            href="/media/news-events"
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-offwhite px-5 py-2.5 text-sm font-semibold text-primary transition hover:border-accent hover:bg-white"
          >
            View all
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((n) => (
            <li key={n._id}>
              <article className="group flex h-full flex-col rounded-card border border-gray-100 bg-offwhite/50 p-6 transition hover:border-accent/40 hover:shadow-card">
                <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-accent">
                  <Newspaper className="h-4 w-4" aria-hidden />
                  {n.category}
                  <span className="text-gray-400">·</span>
                  <time dateTime={n.date}>{n.date}</time>
                </div>
                <h3 className="font-display mt-3 text-lg font-semibold text-dark group-hover:text-primary">
                  <Link href={`/media/news-events/${n.slug.current}`}>
                    {n.title}
                  </Link>
                </h3>
                <p className="mt-2 flex-1 text-sm text-gray-600">{n.excerpt}</p>
                <Link
                  href={`/media/news-events/${n.slug.current}`}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary"
                >
                  Read article
                  <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
