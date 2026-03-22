import type { Metadata } from "next";
import { InnerPage } from "@/components/layout/InnerPage";

export const metadata: Metadata = {
  title: "Career Counselling Cell",
  description: "Guidance for higher education and careers.",
};

export default function Page() {
  return (
    <InnerPage
      title="Career Counselling Cell"
      subtitle="Guidance for higher education and careers."
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Career Counselling Cell" },
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
