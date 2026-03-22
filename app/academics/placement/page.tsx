import type { Metadata } from "next";
import { InnerPage } from "@/components/layout/InnerPage";

export const metadata: Metadata = {
  title: "Placement",
  description: "Higher education and career outcomes.",
};

export default function Page() {
  return (
    <InnerPage
      title="Placement"
      subtitle="Higher education and career outcomes."
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Placement" },
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
