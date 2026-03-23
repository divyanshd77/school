import { createClient, type SanityClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

let client: SanityClient | null = null;

export function getSanityClient(): SanityClient | null {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
  if (!projectId) return null;
  if (!client) {
    client = createClient({
      projectId,
      dataset,
      apiVersion: "2024-01-01",
      useCdn: true,
    });
  }
  return client;
}

export function urlForImage(source: Parameters<
  ReturnType<typeof imageUrlBuilder>["image"]
>[0]) {
  const c = getSanityClient();
  if (!c) return null;
  return imageUrlBuilder(c).image(source);
}
