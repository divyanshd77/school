"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ClipboardList,
  CreditCard,
  CalendarDays,
  MessageCircle,
  HelpCircle,
  CalendarRange,
} from "lucide-react";
import { homeQuickLinks } from "@/lib/home-explore";
import { cn } from "@/lib/cn";

const icons = [
  ClipboardList,
  CreditCard,
  CalendarDays,
  MessageCircle,
  HelpCircle,
  CalendarRange,
];

export function QuickLinksStrip() {
  return (
    <section
      className="border-b border-gray-100 bg-white py-10 px-4 md:px-8 lg:px-16"
      aria-labelledby="quick-links-heading"
    >
      <div className="mx-auto max-w-content">
        <div className="mb-6 text-center">
          <h2
            id="quick-links-heading"
            className="font-display text-xl text-dark md:text-2xl"
          >
            Plan your next step
          </h2>
          <p className="mt-1 text-sm text-gray-600">
            Popular pages — same links you&apos;ll find under Admission,
            Academics, and Contact.
          </p>
        </div>
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {homeQuickLinks.map((item, i) => {
            const Icon = icons[i] ?? ClipboardList;
            return (
              <motion.li
                key={item.href}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.05, duration: 0.35 }}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "flex h-full flex-col rounded-card border border-gray-100 bg-offwhite/80 p-4 transition",
                    "hover:border-accent/50 hover:bg-white hover:shadow-card"
                  )}
                >
                  <Icon className="h-5 w-5 text-primary" aria-hidden />
                  <span className="mt-3 font-display text-sm font-semibold leading-snug text-dark">
                    {item.label}
                  </span>
                  <span className="mt-1 text-xs text-gray-500">
                    {item.description}
                  </span>
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
