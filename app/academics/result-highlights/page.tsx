import type { Metadata } from "next";
import { InnerPage } from "@/components/layout/InnerPage";

export const metadata: Metadata = {
  title: "Result Highlights",
  description: "Board results and university placements.",
};

export default function Page() {
  return (
    <InnerPage
      title="Result Highlights"
      subtitle="Board results and university placements."
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Result Highlights" },
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
