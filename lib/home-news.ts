import { getSanityClient } from "@/lib/sanity";
import { newsEventsQuery } from "@/lib/sanity-queries";
import { mockNews, type MockNews } from "@/lib/mock-cms";

export async function getHomeNews(limit = 3): Promise<MockNews[]> {
  const client = getSanityClient();
  if (!client) return mockNews.slice(0, limit);
  try {
    const data = await client.fetch<MockNews[]>(newsEventsQuery);
    const list = data?.length ? data : mockNews;
    return list.slice(0, limit);
  } catch {
    return mockNews.slice(0, limit);
  }
}
