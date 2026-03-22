import type { Metadata } from "next";
import { InnerPage } from "@/components/layout/InnerPage";

export const metadata: Metadata = {
  title: "Excursions",
  description: "Learning beyond the classroom.",
};

export default function Page() {
  return (
    <InnerPage
      title="Excursions"
      subtitle="Learning beyond the classroom."
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Excursions" },
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
