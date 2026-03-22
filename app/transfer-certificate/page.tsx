import type { Metadata } from "next";
import { InnerPage } from "@/components/layout/InnerPage";

export const metadata: Metadata = {
  title: "Transfer Certificate",
  description: "Guidelines and requests for TC.",
};

export default function Page() {
  return (
    <InnerPage
      title="Transfer Certificate"
      subtitle="Guidelines and requests for TC."
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Transfer Certificate" },
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
