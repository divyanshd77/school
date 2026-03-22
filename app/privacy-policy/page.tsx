import type { Metadata } from "next";
import { InnerPage } from "@/components/layout/InnerPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How we collect, use, and protect your data.",
};

export default function Page() {
  return (
    <InnerPage
      title="Privacy Policy"
      subtitle="How we collect, use, and protect your data."
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Privacy Policy" },
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
