import type { Metadata } from "next";
import { InnerPage } from "@/components/layout/InnerPage";

export const metadata: Metadata = {
  title: "Virtual Tour",
  description: "360° and video tour of Seth Anandram Jaipuria School, Lucknow.",
};

const embed =
  process.env.NEXT_PUBLIC_VIRTUAL_TOUR_EMBED_URL ??
  "https://www.youtube.com/embed/tgbNymZ7vqY";

export default function VirtualTourPage() {
  return (
    <InnerPage
      title="Virtual Tour"
      subtitle="Explore our campus from anywhere — classrooms, labs, sports, and more."
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Academics", href: "/academics/curriculum" },
        { label: "Virtual Tour" },
      ]}
    >
      <div className="not-prose aspect-video w-full overflow-hidden rounded-card bg-black shadow-card">
        <iframe
          title="Virtual campus tour"
          src={embed}
          className="h-full w-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <p className="mt-4 text-sm text-gray-500">
        Set <code className="rounded bg-gray-100 px-1">NEXT_PUBLIC_VIRTUAL_TOUR_EMBED_URL</code>{" "}
        to your Matterport or YouTube embed URL.
      </p>
    </InnerPage>
  );
}
