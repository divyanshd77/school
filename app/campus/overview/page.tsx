import type { Metadata } from "next";
import { InnerPage } from "@/components/layout/InnerPage";

export const metadata: Metadata = {
  title: "Campus Overview",
  description: "Infrastructure, safety, and learning spaces.",
};

export default function Page() {
  return (
    <InnerPage
      title="Campus Overview"
      subtitle="Infrastructure, safety, and learning spaces."
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Campus Overview" },
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
