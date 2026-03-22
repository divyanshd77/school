import type { Metadata } from "next";
import { InnerPage } from "@/components/layout/InnerPage";

export const metadata: Metadata = {
  title: "Examination Rules",
  description: "Assessment, integrity, and board guidelines.",
};

export default function Page() {
  return (
    <InnerPage
      title="Examination Rules"
      subtitle="Assessment, integrity, and board guidelines."
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Examination Rules" },
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
