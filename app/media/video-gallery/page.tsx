import type { Metadata } from "next";
import { InnerPage } from "@/components/layout/InnerPage";

export const metadata: Metadata = {
  title: "Video Gallery",
  description: "Highlights from events and learning.",
};

export default function Page() {
  return (
    <InnerPage
      title="Video Gallery"
      subtitle="Highlights from events and learning."
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Video Gallery" },
      ]}
    >
      <p>
        This page outlines key information for families and students. Editorial
        content can be connected to Sanity CMS for live updates, images, and
        portable text.
      </p>
    </InnerPage>
  );
}
