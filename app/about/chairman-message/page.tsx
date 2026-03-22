import type { Metadata } from "next";
import { InnerPage } from "@/components/layout/InnerPage";

export const metadata: Metadata = {
  title: "Chairman's Message",
  description: "A message from our Chairman on the future of learning.",
};

export default function Page() {
  return (
    <InnerPage
      title="Chairman's Message"
      subtitle="A message from our Chairman on the future of learning."
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Chairman's Message" },
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
