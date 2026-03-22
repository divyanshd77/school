import type { Metadata } from "next";
import { InnerPage } from "@/components/layout/InnerPage";

export const metadata: Metadata = {
  title: "Our Team",
  description: "Faculty and staff directory — nurturing every learner.",
};

export default function Page() {
  return (
    <InnerPage
      title="Our Team"
      subtitle="Faculty and staff directory — nurturing every learner."
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Our Team" },
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
