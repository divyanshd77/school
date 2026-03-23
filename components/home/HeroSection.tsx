"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { CounterStat } from "@/components/ui/CounterStat";
const POSTER =
  "https://images.unsplash.com/photo-1580582932707-520aed937a7e?auto=format&fit=crop&w=1920&q=80";

const badges = [
  {
    title: "Ranked #1 Lucknow",
    subtitle: "Times School Survey 2026",
  },
  {
    title: "Ranked #5 UP",
    subtitle: "Education World 2025–26",
  },
  {
    title: "Diamond Rating",
    subtitle: "QS I-GAUGE 2025",
  },
];

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);
  const isMobile = useMediaQuery("(max-width: 767px)", () => true);
  const videoSrc = process.env.NEXT_PUBLIC_HERO_VIDEO_URL;

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      void v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-dark">
      {!isMobile && videoSrc ? (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={POSTER}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : (
        <Image
          src={POSTER}
          alt="Students learning at Seth Anandram Jaipuria School campus"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-dark/80 to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-content flex-col justify-end px-4 pb-28 pt-32 md:px-8 lg:px-16 lg:pb-36">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="font-mono-label text-sm uppercase tracking-[0.2em] text-accent">
            Best CBSE School in Lucknow
          </p>
          <h1 className="font-display mt-4 text-[var(--text-hero)] font-semibold leading-[1.05] text-white">
            Education That Elevates
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/90">
            Nurturing 21st-century learners since 2016 — where curiosity meets
            excellence.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button variant="primary" href="/admission/procedure">
              Apply for Admission 2025–26
            </Button>
            <Button
              variant="outline"
              href="/academics/virtual-tour"
              className="inline-flex items-center gap-2 border-white text-white"
            >
              <Play className="h-4 w-4" />
              Take a Virtual Tour
            </Button>
          </div>
        </motion.div>

        <div className="pointer-events-none absolute bottom-6 right-4 hidden flex-col gap-3 md:flex lg:bottom-10 lg:right-10">
          {badges.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.12 }}
              className="pointer-events-auto max-w-[260px] rounded-card border border-white/20 bg-white/10 p-4 text-white shadow-card backdrop-blur-md"
            >
              <p className="font-display text-sm font-semibold">{b.title}</p>
              <p className="mt-1 text-xs text-white/80">{b.subtitle}</p>
            </motion.div>
          ))}
        </div>

        {!isMobile && videoSrc && (
          <button
            type="button"
            onClick={toggle}
            className="absolute bottom-8 right-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur md:right-8"
            aria-label={playing ? "Pause video" : "Play video"}
          >
            {playing ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
          </button>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/10 bg-black/50 backdrop-blur-md">
        <div className="mx-auto grid max-w-content grid-cols-2 gap-6 px-4 py-6 md:grid-cols-4 md:px-8 lg:px-16">
          {[
            { v: 80, s: "+", l: "Years Legacy" },
            { v: 20000, s: "+", l: "Students" },
            { v: 15000, s: "+", l: "Alumni" },
            { v: 900, s: "+", l: "Educators" },
          ].map((stat, i) => (
            <motion.div
              key={stat.l}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              <CounterStat
                value={stat.v}
                suffix={stat.s}
                label={stat.l}
                light
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
