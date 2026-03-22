import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { InnerPage } from "@/components/layout/InnerPage";
import { mockBlogs } from "@/lib/mock-cms";
import { getSanityClient } from "@/lib/sanity";
import { blogBySlugQuery } from "@/lib/sanity-queries";

type Props = { params: { slug: string } };

export const revalidate = 3600;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const item = mockBlogs.find((b) => b.slug.current === params.slug);
  return {
    title: item?.title ?? "Blog",
    description: item?.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const client = getSanityClient();
  let doc: { title?: string; excerpt?: string; author?: string; readingTime?: number } | null =
    null;
  if (client) {
    try {
      doc = await client.fetch(blogBySlugQuery, { slug: params.slug });
    } catch {
      doc = null;
    }
  }
  const fallback = mockBlogs.find((b) => b.slug.current === params.slug);
  if (!doc && !fallback) notFound();

  const title = doc?.title ?? fallback?.title ?? "Blog";
  const excerpt = doc?.excerpt ?? fallback?.excerpt;
  const author = doc?.author ?? fallback?.author;
  const readingTime = doc?.readingTime ?? fallback?.readingTime;

  return (
    <InnerPage
      title={title}
      subtitle={
        author
          ? `${author}${readingTime ? ` · ${readingTime} min read` : ""}`
          : undefined
      }
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Blogs", href: "/media/blogs" },
        { label: title },
      ]}
    >
      <aside className="not-prose mb-8 rounded-lg bg-offwhite p-4 text-sm text-gray-600">
        <p>
          <strong>On this page:</strong> Overview (add table of contents from
          Portable Text headings in production).
        </p>
      </aside>
      <p className="lead text-lg text-gray-700">{excerpt}</p>
      <p className="mt-6 text-gray-700">
        Connect Sanity Portable Text here for rich blog content, pull quotes,
        and image galleries.
      </p>
      <Link href="/media/blogs" className="mt-8 inline-block font-semibold text-primary">
        ← All blogs
      </Link>
    </InnerPage>
  );
}
