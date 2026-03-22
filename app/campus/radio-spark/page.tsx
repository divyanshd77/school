import type { Metadata } from "next";
import { InnerPage } from "@/components/layout/InnerPage";

export const metadata: Metadata = {
  title: "Radio Spark",
  description: "Voice of Jaipuria — student-led broadcasting.",
};

export default function Page() {
  return (
    <InnerPage
      title="Radio Spark"
      subtitle="Voice of Jaipuria — student-led broadcasting."
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Radio Spark" },
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
