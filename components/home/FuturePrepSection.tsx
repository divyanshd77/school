"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { GraduationCap, Compass, Globe, Factory } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { Card } from "@/components/ui/Card";

const features = [
  {
    title: "Crack CUET Exam Confidently",
    body: "Structured prep, mentoring, and assessment aligned with national entrance expectations.",
    href: "/academics/result-highlights",
    icon: GraduationCap,
  },
  {
    title: "Get Career Counselling",
    body: "Dedicated cell for aptitude mapping, university guidance, and scholarships.",
    href: "/admission/career-counselling-cell",
    icon: Compass,
  },
  {
    title: "Develop Global Perspective",
    body: "Exchange programmes, MUN, and collaborative projects with partner schools.",
    href: "/community/virtual-exchange-program",
    icon: Globe,
  },
  {
    title: "Get Industry Exposure",
    body: "Internships, expert talks, and immersions with leading organisations.",
    href: "/beyond-academics/internships",
    icon: Factory,
  },
];

export function FuturePrepSection() {
  return (
    <section className="bg-white py-24 px-4 md:px-8 lg:px-16">
      <div className="mx-auto max-w-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-display text-[var(--text-h2)] text-dark">
            Education That Prepares You For The Future
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mt-12 overflow-hidden rounded-card"
        >
          <div className="relative aspect-[21/9] min-h-[220px]">
            <Image
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1600&q=80"
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-dark/90 to-dark/40" />
            <div className="absolute inset-0 flex flex-col items-start justify-center px-8 md:px-16">
              <p className="max-w-xl text-lg text-white">
                Begin your child&apos;s journey with a school trusted by
                families across India.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={siteConfig.admissionFormUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-btn bg-accent px-6 py-3 font-semibold text-dark shadow-card hover:bg-accent-light"
                >
                  Apply online
                </a>
                <Link
                  href="/admission/procedure"
                  className="inline-flex rounded-btn border-2 border-white/80 px-6 py-3 font-semibold text-white hover:bg-white/10"
                >
                  Admission procedure
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.06 }}
            >
              <Card className="h-full border border-gray-100 p-6 transition hover:-translate-y-1 hover:border-accent">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-primary">
                  <f.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-display text-lg text-dark">{f.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{f.body}</p>
                <Link
                  href={f.href}
                  className="mt-4 inline-block text-sm font-semibold text-primary hover:text-accent"
                >
                  Know more →
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
