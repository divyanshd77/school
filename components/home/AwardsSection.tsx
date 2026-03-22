"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";

const awards = [
  {
    title: "Times School Survey",
    detail: "#1 in Lucknow — holistic excellence & parent trust.",
    year: "2026",
  },
  {
    title: "Education World",
    detail: "Top 5 in Uttar Pradesh for infrastructure & innovation.",
    year: "2025–26",
  },
  {
    title: "QS I-GAUGE",
    detail: "Diamond rating for academic quality & employability skills.",
    year: "2025",
  },
];

export function AwardsSection() {
  return (
    <section className="bg-offwhite py-24 px-4 md:px-8 lg:px-16">
      <div className="mx-auto max-w-content text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-[var(--text-h2)] text-dark"
        >
          The Jaipuria School
        </motion.h2>
        <p className="mx-auto mt-3 max-w-2xl text-gray-600">
          Founded 2016. Diamond Rating from QS I-GAUGE (2025). Recognition
          that reflects our community&apos;s relentless pursuit of excellence.
        </p>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {awards.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="award-shimmer relative overflow-hidden border-2 border-accent/40 p-8 text-left">
                <span className="inline-block rounded-full bg-accent/15 px-3 py-1 font-mono text-xs text-primary">
                  {a.year}
                </span>
                <h3 className="font-display mt-4 text-xl text-dark">{a.title}</h3>
                <p className="mt-3 text-sm text-gray-600">{a.detail}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
