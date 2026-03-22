import type { Metadata } from "next";
import { InnerPage } from "@/components/layout/InnerPage";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join a passionate team of educators and professionals.",
};

export default function Page() {
  return (
    <InnerPage
      title="Careers"
      subtitle="Join a passionate team of educators and professionals."
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Careers" },
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
