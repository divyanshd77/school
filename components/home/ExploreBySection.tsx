"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Compass } from "lucide-react";
import { homeExploreHubs } from "@/lib/home-explore";

export function ExploreBySection() {
  return (
    <section
      className="bg-primary py-24 px-4 text-white md:px-8 lg:px-16"
      aria-labelledby="explore-hubs-heading"
    >
      <div className="mx-auto max-w-content">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Explore the website
          </p>
          <h2
            id="explore-hubs-heading"
            className="font-display mt-3 text-[var(--text-h2)]"
          >
            Every part of Jaipuria, one click away
          </h2>
          <p className="mt-4 text-white/85">
            Jump to the sections that matter to your family — aligned with our
            main navigation and internal pages.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {homeExploreHubs.map((hub, i) => (
            <motion.article
              key={hub.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: i * 0.04, duration: 0.45 }}
              className="flex flex-col rounded-card border border-white/10 bg-white/[0.07] p-5 backdrop-blur-sm"
            >
              <div className="flex items-start justify-between gap-2">
                <Compass className="h-5 w-5 shrink-0 text-accent" aria-hidden />
              </div>
              <h3 className="font-display mt-3 text-lg font-semibold">
                {hub.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/80">
                {hub.description}
              </p>
              <ul className="mt-4 space-y-2 border-t border-white/10 pt-4">
                {hub.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="group flex items-center gap-1 text-sm text-white/90 hover:text-accent"
                    >
                      <span className="min-w-0 flex-1">{l.label}</span>
                      <ArrowRight className="h-3.5 w-3.5 shrink-0 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href={hub.hubHref}
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:text-accent-light"
              >
                {hub.hubLabel}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
