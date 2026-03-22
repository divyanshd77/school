import type { Metadata } from "next";
import { InnerPage } from "@/components/layout/InnerPage";

export const metadata: Metadata = {
  title: "Student Achievements",
  description: "Learner success across domains.",
};

export default function Page() {
  return (
    <InnerPage
      title="Student Achievements"
      subtitle="Learner success across domains."
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Student Achievements" },
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
