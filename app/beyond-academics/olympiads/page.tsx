import type { Metadata } from "next";
import { InnerPage } from "@/components/layout/InnerPage";

export const metadata: Metadata = {
  title: "Olympiads",
  description: "National and international competitions.",
};

export default function Page() {
  return (
    <InnerPage
      title="Olympiads"
      subtitle="National and international competitions."
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Olympiads" },
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
