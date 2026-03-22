"use client";

import { motion } from "framer-motion";
import { CounterStat } from "@/components/ui/CounterStat";

export function GroupStats() {
  return (
    <section className="bg-primary py-20 px-4 text-white md:px-8 lg:px-16">
      <div className="mx-auto max-w-content text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-[var(--text-h2)]"
        >
          The Jaipuria Group
        </motion.h2>
        <p className="mx-auto mt-4 max-w-3xl text-white/85">
          A leading conglomerate with K-12 schools, preschools, management
          institutes, and a teachers training academy.
        </p>
        <div className="mt-12 grid grid-cols-2 gap-10 md:grid-cols-4">
          <CounterStat value={80} suffix="+" label="Years of Legacy" light />
          <CounterStat value={20000} suffix="+" label="Students" light />
          <CounterStat value={15000} suffix="+" label="Alumni" light />
          <CounterStat value={900} suffix="+" label="Educators" light />
        </div>
      </div>
    </section>
  );
}
