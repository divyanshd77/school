import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { InnerPage } from "@/components/layout/InnerPage";
import { mockNews } from "@/lib/mock-cms";
import { getSanityClient } from "@/lib/sanity";
import { newsEventBySlugQuery } from "@/lib/sanity-queries";

type Props = { params: { slug: string } };

export const revalidate = 3600;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const item = mockNews.find((n) => n.slug.current === params.slug);
  return {
    title: item?.title ?? "News",
    description: item?.excerpt,
  };
}

export default async function NewsArticlePage({ params }: Props) {
  const client = getSanityClient();
  let doc: {
    title?: string;
    date?: string;
    excerpt?: string;
    body?: unknown;
  } | null = null;

  if (client) {
    try {
      doc = await client.fetch(newsEventBySlugQuery, { slug: params.slug });
    } catch {
      doc = null;
    }
  }

  const fallback = mockNews.find((n) => n.slug.current === params.slug);
  if (!doc && !fallback) notFound();

  const title = doc?.title ?? fallback?.title ?? "News";
  const date = doc?.date ?? fallback?.date;
  const excerpt = doc?.excerpt ?? fallback?.excerpt;

  return (
    <InnerPage
      title={title}
      subtitle={date ? String(date) : undefined}
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "News & Events", href: "/media/news-events" },
        { label: title },
      ]}
    >
      <p className="lead text-lg text-gray-700">{excerpt}</p>
      <p className="mt-6 text-gray-700">
        Full article body can be rendered from Sanity Portable Text using{" "}
        <code className="rounded bg-gray-100 px-1">@portabletext/react</code>.
      </p>
      <Link href="/media/news-events" className="mt-8 inline-block font-semibold text-primary">
        ← Back to all news
      </Link>
    </InnerPage>
  );
}
