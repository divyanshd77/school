import type { Metadata } from "next";
import { InnerPage } from "@/components/layout/InnerPage";

export const metadata: Metadata = {
  title: "Student Authors",
  description: "Publications and literary voices.",
};

export default function Page() {
  return (
    <InnerPage
      title="Student Authors"
      subtitle="Publications and literary voices."
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Student Authors" },
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
