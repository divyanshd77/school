import type { Metadata } from "next";
import { InnerPage } from "@/components/layout/InnerPage";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Admission Procedure",
  description:
    "Step-by-step admission process, documents, and important dates at Jaipuria Lucknow.",
};

const steps = [
  "Submit enquiry online or visit the admissions office.",
  "Attend a campus tour or virtual orientation session.",
  "Complete the application form and upload documents.",
  "Interaction / assessment as per grade level.",
  "Fee payment and confirmation of seat.",
];

const docs = [
  "Birth certificate",
  "Previous academic records",
  "Transfer certificate (if applicable)",
  "Photographs (passport size)",
  "Parent ID proof",
];

export default function AdmissionProcedurePage() {
  return (
    <InnerPage
      title="Admission Procedure"
      subtitle="A transparent, child-centred journey from enquiry to enrolment."
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Admission", href: "/admission/procedure" },
        { label: "Procedure" },
      ]}
    >
      <h2 className="font-display text-2xl text-dark">How to apply</h2>
      <ol className="mt-6 border-l-2 border-accent pl-6">
        {steps.map((s, i) => (
          <li key={s} className="mb-6 pb-2">
            <span className="font-mono text-accent">{String(i + 1).padStart(2, "0")}</span>
            <p className="mt-1 text-gray-700">{s}</p>
          </li>
        ))}
      </ol>

      <h2 className="font-display mt-12 text-2xl text-dark">Documents checklist</h2>
      <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-700">
        {docs.map((d) => (
          <li key={d}>{d}</li>
        ))}
      </ul>

      <h2 className="font-display mt-12 text-2xl text-dark">Important dates</h2>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-gray-200 bg-offwhite">
              <th className="p-3">Milestone</th>
              <th className="p-3">Indicative window</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100">
              <td className="p-3">Applications open</td>
              <td className="p-3">September onwards</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="p-3">Interactions</td>
              <td className="p-3">October – December</td>
            </tr>
            <tr>
              <td className="p-3">Academic year begins</td>
              <td className="p-3">April</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="not-prose mt-12 flex flex-wrap gap-4">
        <Button variant="primary" href="/documents/application-form.pdf">
          Download application form
        </Button>
        <Button variant="secondary" href={siteConfig.admissionFormUrl}>
          Apply online
        </Button>
      </div>
    </InnerPage>
  );
}
