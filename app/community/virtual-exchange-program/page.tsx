import type { Metadata } from "next";
import { InnerPage } from "@/components/layout/InnerPage";

export const metadata: Metadata = {
  title: "Virtual Exchange Program",
  description: "Global collaboration and cultural exchange.",
};

export default function Page() {
  return (
    <InnerPage
      title="Virtual Exchange Program"
      subtitle="Global collaboration and cultural exchange."
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Virtual Exchange Program" },
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
