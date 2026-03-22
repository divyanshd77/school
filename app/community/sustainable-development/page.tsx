import type { Metadata } from "next";
import { InnerPage } from "@/components/layout/InnerPage";

export const metadata: Metadata = {
  title: "Sustainable Development",
  description: "Green campus and climate action.",
};

export default function Page() {
  return (
    <InnerPage
      title="Sustainable Development"
      subtitle="Green campus and climate action."
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Sustainable Development" },
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
