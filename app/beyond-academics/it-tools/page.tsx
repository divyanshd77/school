import type { Metadata } from "next";
import { InnerPage } from "@/components/layout/InnerPage";

export const metadata: Metadata = {
  title: "IT Tools",
  description: "Productivity and creativity with digital tools.",
};

export default function Page() {
  return (
    <InnerPage
      title="IT Tools"
      subtitle="Productivity and creativity with digital tools."
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "IT Tools" },
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
