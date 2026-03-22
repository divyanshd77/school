import type { Metadata } from "next";
import { InnerPage } from "@/components/layout/InnerPage";

export const metadata: Metadata = {
  title: "Faculty Achievements",
  description: "Honours earned by our educators.",
};

export default function Page() {
  return (
    <InnerPage
      title="Faculty Achievements"
      subtitle="Honours earned by our educators."
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Faculty Achievements" },
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
