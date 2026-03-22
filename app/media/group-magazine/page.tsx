import type { Metadata } from "next";
import { InnerPage } from "@/components/layout/InnerPage";

export const metadata: Metadata = {
  title: "Group Magazine",
  description: "Jaipuria Group publications.",
};

export default function Page() {
  return (
    <InnerPage
      title="Group Magazine"
      subtitle="Jaipuria Group publications."
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Group Magazine" },
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
