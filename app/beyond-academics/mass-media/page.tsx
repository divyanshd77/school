import type { Metadata } from "next";
import { InnerPage } from "@/components/layout/InnerPage";

export const metadata: Metadata = {
  title: "Mass Media",
  description: "Journalism, film, and communication.",
};

export default function Page() {
  return (
    <InnerPage
      title="Mass Media"
      subtitle="Journalism, film, and communication."
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Mass Media" },
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
