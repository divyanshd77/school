import type { Metadata } from "next";
import { InnerPage } from "@/components/layout/InnerPage";

export const metadata: Metadata = {
  title: "Learning Programs",
  description: "Experiential and interdisciplinary learning.",
};

export default function Page() {
  return (
    <InnerPage
      title="Learning Programs"
      subtitle="Experiential and interdisciplinary learning."
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Learning Programs" },
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
