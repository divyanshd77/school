import type { Metadata } from "next";
import { InnerPage } from "@/components/layout/InnerPage";

export const metadata: Metadata = {
  title: "Fee Structure",
  description: "Fee structure and related downloads for Jaipuria Lucknow.",
};

export default function FeeStructurePage() {
  return (
    <InnerPage
      title="Fee Structure"
      subtitle="Transparent, value-driven fee planning. Place your PDF in public/documents/fee-structure.pdf."
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Admission", href: "/admission/procedure" },
        { label: "Fee Structure" },
      ]}
    >
      <div className="not-prose aspect-[3/4] w-full overflow-hidden rounded-card border border-gray-200 bg-gray-50 md:aspect-[210/297]">
        <iframe
          title="Fee structure PDF"
          src="/documents/fee-structure.pdf"
          className="h-full min-h-[480px] w-full"
        />
      </div>
      <p className="mt-4 text-sm text-gray-500">
        If the document does not load, upload{" "}
        <code className="rounded bg-gray-100 px-1">public/documents/fee-structure.pdf</code>{" "}
        or link Supabase Storage.
      </p>
    </InnerPage>
  );
}
