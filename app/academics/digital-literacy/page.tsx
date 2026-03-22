import type { Metadata } from "next";
import { InnerPage } from "@/components/layout/InnerPage";

export const metadata: Metadata = {
  title: "Digital Literacy",
  description: "Responsible and creative use of technology.",
};

export default function Page() {
  return (
    <InnerPage
      title="Digital Literacy"
      subtitle="Responsible and creative use of technology."
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Digital Literacy" },
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
