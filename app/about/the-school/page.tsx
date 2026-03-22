import type { Metadata } from "next";
import { InnerPage } from "@/components/layout/InnerPage";

export const metadata: Metadata = {
  title: "The School",
  description: "Our campus, ethos, and commitment to excellence in Lucknow.",
};

export default function Page() {
  return (
    <InnerPage
      title="The School"
      subtitle="Our campus, ethos, and commitment to excellence in Lucknow."
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "The School" },
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
