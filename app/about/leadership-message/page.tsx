import type { Metadata } from "next";
import { InnerPage } from "@/components/layout/InnerPage";

export const metadata: Metadata = {
  title: "Leadership Message",
  description: "Guiding principles from our leadership team.",
};

export default function Page() {
  return (
    <InnerPage
      title="Leadership Message"
      subtitle="Guiding principles from our leadership team."
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Leadership Message" },
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
