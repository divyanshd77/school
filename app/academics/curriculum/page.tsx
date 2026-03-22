import type { Metadata } from "next";
import { InnerPage } from "@/components/layout/InnerPage";

export const metadata: Metadata = {
  title: "Curriculum",
  description: "CBSE pathways and early years design.",
};

export default function Page() {
  return (
    <InnerPage
      title="Curriculum"
      subtitle="CBSE pathways and early years design."
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Curriculum" },
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
