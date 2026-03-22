"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";

export function CurriculumSection() {
  return (
    <section className="bg-white py-24 px-4 md:px-8 lg:px-16">
      <div className="mx-auto max-w-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center"
        >
          <h2 className="font-display text-[var(--text-h2)] text-dark">
            A Truly Global Learning Experience
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-gray-600">
            A balanced blend of national excellence and international
            perspectives prepares learners for universities and careers
            worldwide.
          </p>
        </motion.div>
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {[
            {
              title: "CBSE",
              body: "Robust national curriculum with emphasis on conceptual clarity, competency-based assessment, and board excellence.",
              href: "/academics/curriculum",
            },
            {
              title: "International Early Years Curriculum (IEYC)",
              body: "Play-based, inquiry-led foundation years that build communication, collaboration, and confidence.",
              href: "/academics/curriculum",
            },
          ].map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.08 }}
            >
              <Card className="h-full border-2 border-transparent p-8 transition hover:-translate-y-1 hover:border-accent hover:shadow-lg">
                <p className="font-mono-label text-xs uppercase tracking-widest text-accent">
                  Programme
                </p>
                <h3 className="font-display mt-2 text-2xl text-dark">{c.title}</h3>
                <p className="mt-4 text-gray-600">{c.body}</p>
                <Link
                  href={c.href}
                  className="mt-6 inline-block font-semibold text-primary hover:text-accent"
                >
                  Learn more →
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
