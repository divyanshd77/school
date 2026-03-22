import type { Metadata } from "next";
import { InnerPage } from "@/components/layout/InnerPage";

export const metadata: Metadata = {
  title: "AI Tools",
  description: "Ethical, inquiry-led AI literacy.",
};

export default function Page() {
  return (
    <InnerPage
      title="AI Tools"
      subtitle="Ethical, inquiry-led AI literacy."
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "AI Tools" },
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
