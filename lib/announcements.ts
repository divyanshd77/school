import { getSanityClient } from "@/lib/sanity";
import { announcementsQuery } from "@/lib/sanity-queries";
import { mockAnnouncements, type MockAnnouncement } from "@/lib/mock-cms";

export async function getAnnouncements(): Promise<MockAnnouncement[]> {
  const client = getSanityClient();
  if (!client) return mockAnnouncements;
  try {
    const data = await client.fetch<MockAnnouncement[]>(announcementsQuery);
    return data?.length ? data : mockAnnouncements;
  } catch {
    return mockAnnouncements;
  }
}
