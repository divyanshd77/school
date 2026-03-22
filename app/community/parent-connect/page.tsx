import type { Metadata } from "next";
import { InnerPage } from "@/components/layout/InnerPage";

export const metadata: Metadata = {
  title: "Parent Connect",
  description: "Partnerships with families.",
};

export default function Page() {
  return (
    <InnerPage
      title="Parent Connect"
      subtitle="Partnerships with families."
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Parent Connect" },
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
