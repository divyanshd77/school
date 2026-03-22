import type { Metadata } from "next";
import { InnerPage } from "@/components/layout/InnerPage";

export const metadata: Metadata = {
  title: "Jaipuria Group",
  description: "The legacy, values, and national footprint of the Jaipuria Group.",
};

export default function Page() {
  return (
    <InnerPage
      title="Jaipuria Group"
      subtitle="The legacy, values, and national footprint of the Jaipuria Group."
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Jaipuria Group" },
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
