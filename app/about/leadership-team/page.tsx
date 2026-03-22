import type { Metadata } from "next";
import { InnerPage } from "@/components/layout/InnerPage";

export const metadata: Metadata = {
  title: "Leadership Team",
  description: "Profiles of directors and academic leadership.",
};

export default function Page() {
  return (
    <InnerPage
      title="Leadership Team"
      subtitle="Profiles of directors and academic leadership."
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Leadership Team" },
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
