"use client";

import { useMemo, useState } from "react";
import { InnerPage } from "@/components/layout/InnerPage";
import { Accordion } from "@/components/ui/Accordion";
import { JsonLd } from "@/components/seo/JsonLd";

const faqs = [
  {
    id: "a1",
    cat: "Admissions",
    q: "What grades do you admit?",
    a: "From early years through Class 12, subject to seat availability and age criteria.",
  },
  {
    id: "a2",
    cat: "Admissions",
    q: "Is there an entrance test?",
    a: "Age-appropriate interactions or assessments may be scheduled as part of the admission process.",
  },
  {
    id: "ac1",
    cat: "Academics",
    q: "Which board do you follow?",
    a: "We are a CBSE-affiliated school with enriched international practices in early years.",
  },
  {
    id: "f1",
    cat: "Fee",
    q: "When are fees due?",
    a: "Fees follow a term-wise schedule shared at admission. Online payment is available 24/7.",
  },
  {
    id: "g1",
    cat: "General",
    q: "Do you offer transport?",
    a: "Yes, on select routes across Lucknow. Details are shared during admission counselling.",
  },
];

export function FaqClient() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string | "All">("All");

  const filtered = useMemo(() => {
    return faqs.filter((f) => {
      const matchCat = cat === "All" || f.cat === cat;
      const matchQ =
        !q ||
        f.q.toLowerCase().includes(q.toLowerCase()) ||
        f.a.toLowerCase().includes(q.toLowerCase());
      return matchCat && matchQ;
    });
  }, [q, cat]);

  const items = filtered.map((f) => ({
    id: f.id,
    title: f.q,
    content: <p>{f.a}</p>,
  }));

  const faqJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <JsonLd data={faqJson} />
      <InnerPage
        title="Frequently Asked Questions"
        subtitle="Search and filter common questions from parents and students."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Admission", href: "/admission/procedure" },
          { label: "FAQs" },
        ]}
      >
        <div className="not-prose mb-8 flex flex-col gap-4 md:flex-row md:items-end">
          <div className="flex-1">
            <label className="text-sm font-medium text-dark" htmlFor="faq-search">
              Search
            </label>
            <input
              id="faq-search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Type keywords…"
              className="mt-1 w-full rounded-btn border border-gray-300 px-3 py-2"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-dark" htmlFor="faq-cat">
              Category
            </label>
            <select
              id="faq-cat"
              value={cat}
              onChange={(e) => setCat(e.target.value as typeof cat)}
              className="mt-1 w-full rounded-btn border border-gray-300 px-3 py-2 md:w-48"
            >
              {["All", "Admissions", "Academics", "Fee", "General"].map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>
        {items.length ? (
          <Accordion items={items} />
        ) : (
          <p className="text-gray-600">No questions match your search.</p>
        )}
      </InnerPage>
    </>
  );
}
