import type { Metadata } from "next";
import { InnerPage } from "@/components/layout/InnerPage";

export const metadata: Metadata = {
  title: "Microsoft Certified Teachers",
  description: "Digital fluency in every classroom.",
};

export default function Page() {
  return (
    <InnerPage
      title="Microsoft Certified Teachers"
      subtitle="Digital fluency in every classroom."
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Microsoft Certified Teachers" },
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
