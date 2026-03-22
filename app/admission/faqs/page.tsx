import type { Metadata } from "next";
import { FaqClient } from "./FaqClient";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Frequently asked questions about admissions, academics, and fees at Jaipuria Lucknow.",
};

export default function FaqsPage() {
  return <FaqClient />;
}
