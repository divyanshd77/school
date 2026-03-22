import type { Metadata } from "next";
import Link from "next/link";
import { InnerPage } from "@/components/layout/InnerPage";
import { mockBlogs, type MockBlog } from "@/lib/mock-cms";
import { getSanityClient } from "@/lib/sanity";
import { blogsQuery } from "@/lib/sanity-queries";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Insights on learning, parenting, and school life at Jaipuria.",
};

export const revalidate = 3600;

async function getBlogs(): Promise<MockBlog[]> {
  const client = getSanityClient();
  if (!client) return mockBlogs;
  try {
    const data = await client.fetch<MockBlog[]>(blogsQuery);
    return data?.length ? data : mockBlogs;
  } catch {
    return mockBlogs;
  }
}

export default async function BlogsPage() {
  const items = await getBlogs();
  const featured = items[0];
  const rest = items.slice(1);

  return (
    <InnerPage
      title="Blogs"
      subtitle="Stories, research, and reflections from our educators and community."
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Media", href: "/media/blogs" },
        { label: "Blogs" },
      ]}
    >
      <div className="not-prose">
        {featured && (
          <Link
            href={`/media/blogs/${featured.slug.current}`}
            className="mb-12 block overflow-hidden rounded-card border border-accent/30 bg-offwhite p-8 shadow-card"
          >
            <p className="font-mono text-xs uppercase text-accent">Featured</p>
            <h2 className="font-display mt-2 text-3xl text-dark">
              {featured.title}
            </h2>
            <p className="mt-2 text-gray-600">{featured.excerpt}</p>
            <p className="mt-4 text-sm text-gray-500">
              {featured.author} · {featured.readingTime} min read
            </p>
          </Link>
        )}
        <div className="grid gap-8 md:grid-cols-2">
          {rest.map((b) => (
            <article
              key={b._id}
              className="rounded-card border border-gray-100 bg-white p-6 shadow-card"
            >
              <h3 className="font-display text-xl text-dark">
                <Link
                  href={`/media/blogs/${b.slug.current}`}
                  className="hover:text-primary"
                >
                  {b.title}
                </Link>
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                {b.category} · {b.readingTime} min read
              </p>
              <p className="mt-3 text-gray-600">{b.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </InnerPage>
  );
}
