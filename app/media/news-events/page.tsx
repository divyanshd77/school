import type { Metadata } from "next";
import Link from "next/link";
import { InnerPage } from "@/components/layout/InnerPage";
import { mockNews } from "@/lib/mock-cms";
import { getSanityClient } from "@/lib/sanity";
import { newsEventsQuery } from "@/lib/sanity-queries";

export const metadata: Metadata = {
  title: "News & Events",
  description: "Latest news, events, and announcements from Jaipuria Lucknow.",
};

export const revalidate = 3600;

async function getNews() {
  const client = getSanityClient();
  if (!client) return mockNews;
  try {
    const data = await client.fetch(newsEventsQuery);
    return data?.length ? data : mockNews;
  } catch {
    return mockNews;
  }
}

export default async function NewsEventsPage() {
  const items = await getNews();

  return (
    <InnerPage
      title="News & Events"
      subtitle="Stay updated with campus highlights, celebrations, and announcements."
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Media", href: "/media/news-events" },
        { label: "News & Events" },
      ]}
    >
      <div className="not-prose grid gap-8 md:grid-cols-2">
        {items.map(
          (n: {
            _id: string;
            title: string;
            slug?: { current: string };
            date?: string;
            category?: string;
            excerpt?: string;
          }) => (
            <article
              key={n._id}
              className="rounded-card border border-gray-100 bg-white p-6 shadow-card transition hover:border-accent/40"
            >
              <p className="font-mono text-xs uppercase tracking-wide text-accent">
                {n.category ?? "News"} · {n.date ?? ""}
              </p>
              <h2 className="font-display mt-2 text-xl text-dark">
                <Link
                  href={`/media/news-events/${n.slug?.current ?? n._id}`}
                  className="hover:text-primary"
                >
                  {n.title}
                </Link>
              </h2>
              <p className="mt-2 text-gray-600">{n.excerpt}</p>
              <Link
                href={`/media/news-events/${n.slug?.current ?? n._id}`}
                className="mt-4 inline-block text-sm font-semibold text-primary"
              >
                Read more →
              </Link>
            </article>
          )
        )}
      </div>
    </InnerPage>
  );
}
