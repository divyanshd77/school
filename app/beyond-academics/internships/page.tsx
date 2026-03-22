import type { Metadata } from "next";
import { InnerPage } from "@/components/layout/InnerPage";

export const metadata: Metadata = {
  title: "Internships",
  description: "Industry exposure and mentorship.",
};

export default function Page() {
  return (
    <InnerPage
      title="Internships"
      subtitle="Industry exposure and mentorship."
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Internships" },
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
