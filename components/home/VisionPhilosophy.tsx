"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Leaf, Palette, GraduationCap } from "lucide-react";

export function VisionPhilosophy() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [24, -24]);

  return (
    <section
      ref={ref}
      className="bg-offwhite py-24 px-4 md:px-8 lg:px-16"
    >
      <div className="mx-auto grid max-w-content gap-12 lg:grid-cols-2 lg:items-center">
        <motion.div style={{ y }} className="relative aspect-[4/5] overflow-hidden rounded-card shadow-card">
          <Image
            src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=900&q=80"
            alt="Students collaborating in a bright classroom"
            fill
            className="object-cover"
            sizes="(max-width:1024px) 100vw, 50vw"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono-label text-sm uppercase tracking-widest text-accent">
            Our Vision &amp; Philosophy
          </p>
          <h2 className="font-display mt-3 text-[var(--text-h2)] text-dark">
            Nurturing Tomorrow&apos;s Change-Agents
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            We envision a learning community where inquiry, empathy, and
            excellence converge — empowering learners to lead with integrity in
            a complex, interconnected world.
          </p>
          <ul className="mt-8 space-y-4">
            {[
              { icon: Palette, text: "Creativity across disciplines" },
              { icon: Leaf, text: "Environmental sensitivity & responsibility" },
              { icon: GraduationCap, text: "Academic rigour with joyful learning" },
            ].map((item) => (
              <li key={item.text} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/15 text-primary">
                  <item.icon className="h-4 w-4" />
                </span>
                <span className="text-gray-700">{item.text}</span>
              </li>
            ))}
          </ul>
          <Link
            href="/about/the-school"
            className="mt-10 inline-flex items-center gap-2 font-semibold text-primary hover:text-accent"
          >
            Read Our Story →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
