"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const pillars = [
  {
    title: "CHILD-CENTRED LEARNING",
    subtitle: "Personalised pathways that honour every learner's voice.",
    href: "/academics/curriculum",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "PROJECT-BASED LEARNING",
    subtitle: "Real-world challenges that build collaboration and inquiry.",
    href: "/academics/learning-programs",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "TECHNOLOGY INTEGRATED LEARNING",
    subtitle: "Digital fluency woven into the fabric of every lesson.",
    href: "/academics/digital-literacy",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "HOLISTIC EDUCATION",
    subtitle: "Sports, arts, and values that shape character for life.",
    href: "/beyond-academics/sports",
    image:
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=900&q=80",
  },
];

export function EducationPillars() {
  return (
    <section className="bg-offwhite py-24 px-4 md:px-8 lg:px-16">
      <div className="mx-auto max-w-content">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="font-display text-center text-[var(--text-h2)] text-dark"
        >
          Education That Elevates
        </motion.h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
          Four pillars that define how we nurture confident, curious, and
          compassionate learners.
        </p>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
            >
              <Link
                href={p.href}
                className="group relative block overflow-hidden rounded-card shadow-card"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={p.image}
                    alt=""
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width:768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                    <h3 className="font-display text-lg font-bold tracking-wide md:text-xl">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/85">{p.subtitle}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent-light">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
