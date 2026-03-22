import type { Metadata } from "next";
import { InnerPage } from "@/components/layout/InnerPage";

export const metadata: Metadata = {
  title: "CBSE Appendix IX",
  description: "Mandatory disclosure information.",
};

export default function Page() {
  return (
    <InnerPage
      title="CBSE Appendix IX"
      subtitle="Mandatory disclosure information."
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "CBSE Appendix IX" },
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
