import type { Metadata } from "next";
import { InnerPage } from "@/components/layout/InnerPage";

export const metadata: Metadata = {
  title: "Media Coverage",
  description: "Press features and external recognition.",
};

export default function Page() {
  return (
    <InnerPage
      title="Media Coverage"
      subtitle="Press features and external recognition."
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Media Coverage" },
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
