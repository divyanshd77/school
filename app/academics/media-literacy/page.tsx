import type { Metadata } from "next";
import { InnerPage } from "@/components/layout/InnerPage";

export const metadata: Metadata = {
  title: "Media Literacy",
  description: "Critical thinking in a connected world.",
};

export default function Page() {
  return (
    <InnerPage
      title="Media Literacy"
      subtitle="Critical thinking in a connected world."
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Media Literacy" },
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
