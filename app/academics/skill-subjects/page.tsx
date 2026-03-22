import type { Metadata } from "next";
import { InnerPage } from "@/components/layout/InnerPage";

export const metadata: Metadata = {
  title: "Skill Subjects",
  description: "Future-ready skill programmes.",
};

export default function Page() {
  return (
    <InnerPage
      title="Skill Subjects"
      subtitle="Future-ready skill programmes."
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Skill Subjects" },
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
