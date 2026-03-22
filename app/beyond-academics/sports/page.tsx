import type { Metadata } from "next";
import { InnerPage } from "@/components/layout/InnerPage";

export const metadata: Metadata = {
  title: "Sports",
  description: "Fitness, teamwork, and competitive sport.",
};

export default function Page() {
  return (
    <InnerPage
      title="Sports"
      subtitle="Fitness, teamwork, and competitive sport."
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Sports" },
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
