import type { Metadata } from "next";
import { InnerPage } from "@/components/layout/InnerPage";
import { TourRequestForm } from "@/components/forms/TourRequestForm";

export const metadata: Metadata = {
  title: "School Tour Request",
  description: "Schedule a campus visit at Seth Anandram Jaipuria School, Lucknow.",
};

export default function SchoolTourPage() {
  return (
    <InnerPage
      title="School Tour"
      subtitle="Request a guided walkthrough of our campus — weekdays preferred."
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Admission", href: "/admission/procedure" },
        { label: "School Tour" },
      ]}
    >
      <div className="not-prose max-w-xl">
        <TourRequestForm />
      </div>
    </InnerPage>
  );
}
