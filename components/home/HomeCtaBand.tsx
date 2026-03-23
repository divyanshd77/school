"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function HomeCtaBand() {
  return (
    <section className="border-t border-gray-200 bg-offwhite py-16 px-4 md:px-8 lg:px-16">
      <div className="mx-auto max-w-content">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center rounded-card border border-gray-200 bg-white p-8 text-center shadow-card md:flex-row md:justify-between md:text-left"
        >
          <div>
            <h2 className="font-display text-2xl text-dark md:text-3xl">
              Visit us in Lucknow
            </h2>
            <p className="mt-2 flex items-start justify-center gap-2 text-sm text-gray-600 md:justify-start">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              {siteConfig.address}
            </p>
            <a
              href={`tel:${siteConfig.admissionsPhone[0].replace(/\D/g, "")}`}
              className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent"
            >
              <Phone className="h-4 w-4" />
              Admissions: {siteConfig.admissionsPhone.join(" · ")}
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:mt-0">
            <Link
              href="/admission/school-tour"
              className="rounded-btn bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-light"
            >
              Book a tour
            </Link>
            <Link
              href="/contact-us"
              className="rounded-btn border-2 border-primary px-6 py-3 text-sm font-semibold text-primary hover:bg-offwhite"
            >
              Contact admissions
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
