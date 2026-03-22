import type { Metadata } from "next";
import { InnerPage } from "@/components/layout/InnerPage";

export const metadata: Metadata = {
  title: "Teachers Training",
  description: "Continuous professional development.",
};

export default function Page() {
  return (
    <InnerPage
      title="Teachers Training"
      subtitle="Continuous professional development."
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Teachers Training" },
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
