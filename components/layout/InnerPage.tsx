"use client";

import { motion } from "framer-motion";
import { Breadcrumb, type Crumb } from "@/components/ui/Breadcrumb";

export function InnerPage({
  title,
  subtitle,
  breadcrumb,
  children,
}: {
  title: string;
  subtitle?: string;
  breadcrumb: Crumb[];
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-offwhite"
    >
      <div className="mx-auto max-w-content px-4 py-12 md:px-8 lg:px-16">
        <Breadcrumb items={breadcrumb} />
        <header className="mt-6 border-b border-gray-200 pb-8">
          <p className="font-mono-label text-xs uppercase tracking-widest text-accent">
            Seth Anandram Jaipuria School
          </p>
          <h1 className="font-display mt-2 text-[var(--text-h1)] text-dark">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-3 max-w-3xl text-lg text-gray-600">{subtitle}</p>
          )}
        </header>
        <div className="prose prose-lg mt-10 max-w-none text-gray-700 prose-headings:font-display prose-a:text-primary">
          {children}
        </div>
      </div>
    </motion.div>
  );
}
