import type { Metadata } from "next";
import { InnerPage } from "@/components/layout/InnerPage";

export const metadata: Metadata = {
  title: "CSR Activities",
  description: "Social responsibility initiatives.",
};

export default function Page() {
  return (
    <InnerPage
      title="CSR Activities"
      subtitle="Social responsibility initiatives."
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "CSR Activities" },
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
