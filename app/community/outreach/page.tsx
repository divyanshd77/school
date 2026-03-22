import type { Metadata } from "next";
import { InnerPage } from "@/components/layout/InnerPage";

export const metadata: Metadata = {
  title: "Community Outreach",
  description: "Service and civic engagement.",
};

export default function Page() {
  return (
    <InnerPage
      title="Community Outreach"
      subtitle="Service and civic engagement."
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Community Outreach" },
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
