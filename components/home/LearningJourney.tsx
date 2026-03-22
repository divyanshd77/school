"use client";

import Image from "next/image";
import { Fragment } from "react";
import { motion } from "framer-motion";
import { BookOpen, Lightbulb, Compass, Sparkles, Trophy } from "lucide-react";

const steps = [
  {
    title: "LEARN",
    icon: BookOpen,
    image:
      "https://images.unsplash.com/photo-1529390079861-591de0b7e7d0?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "UNDERSTAND",
    icon: Lightbulb,
    image:
      "https://images.unsplash.com/photo-1427504491435-4b8e7d866022?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "EXPLORE",
    icon: Compass,
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "CREATE",
    icon: Sparkles,
    image:
      "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "ACCOMPLISH",
    icon: Trophy,
    image:
      "https://images.unsplash.com/photo-1529390079861-591de0b7e7d0?auto=format&fit=crop&w=400&q=80",
  },
];

export function LearningJourney() {
  return (
    <section className="bg-white py-24 px-4 md:px-8 lg:px-16">
      <div className="mx-auto max-w-content">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-display text-[var(--text-h2)] text-dark">
            The Learning Journey
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-gray-600">
            At Jaipuria, transformation is not a slogan — it is a carefully
            designed journey from discovery to mastery, guided by mentors who
            believe in every child’s potential.
          </p>
        </motion.div>

        <div className="mt-16 hidden items-start justify-between gap-2 lg:flex">
          {steps.map((s, i) => (
            <Fragment key={s.title}>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex max-w-[18%] flex-1 flex-col items-center text-center"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                  <s.icon className="h-5 w-5" />
                </div>
                <p className="font-mono-label mt-3 text-xs text-accent">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-display text-xs font-bold tracking-wide text-dark md:text-sm">
                  {s.title}
                </h3>
                <div className="relative mt-4 aspect-square w-full overflow-hidden rounded-card">
                  <Image
                    src={s.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 1280px) 18vw, 200px"
                  />
                </div>
              </motion.div>
              {i < steps.length - 1 && (
                <div
                  className="mt-6 hidden text-2xl font-light text-accent xl:block"
                  aria-hidden
                >
                  →
                </div>
              )}
            </Fragment>
          ))}
        </div>

        <div className="mt-10 space-y-10 lg:hidden">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="flex gap-4"
            >
              <div className="flex flex-col items-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
                  <s.icon className="h-4 w-4" />
                </div>
                {i < steps.length - 1 && (
                  <div className="mt-2 h-16 w-px bg-accent/40" />
                )}
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-mono-label text-xs text-accent">
                  STEP {i + 1}
                </p>
                <h3 className="font-display text-lg font-bold text-dark">
                  {s.title}
                </h3>
                <div className="relative mt-3 aspect-video w-full overflow-hidden rounded-card">
                  <Image
                    src={s.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
