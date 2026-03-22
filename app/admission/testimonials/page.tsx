import type { Metadata } from "next";
import { InnerPage } from "@/components/layout/InnerPage";

export const metadata: Metadata = {
  title: "Parent Testimonials",
  description: "Stories from families who trust Jaipuria.",
};

export default function Page() {
  return (
    <InnerPage
      title="Parent Testimonials"
      subtitle="Stories from families who trust Jaipuria."
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Parent Testimonials" },
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
