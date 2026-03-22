import type { Metadata } from "next";
import { InnerPage } from "@/components/layout/InnerPage";

export const metadata: Metadata = {
  title: "Pedagogical Skills",
  description: "How our teachers grow through training and research.",
};

export default function Page() {
  return (
    <InnerPage
      title="Pedagogical Skills"
      subtitle="How our teachers grow through training and research."
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Pedagogical Skills" },
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
