import type { Metadata } from "next";
import { InnerPage } from "@/components/layout/InnerPage";

export const metadata: Metadata = {
  title: "School Achievements",
  description: "Institutional awards and rankings.",
};

export default function Page() {
  return (
    <InnerPage
      title="School Achievements"
      subtitle="Institutional awards and rankings."
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "School Achievements" },
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
