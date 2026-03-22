"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { Modal } from "@/components/ui/Modal";

const THUMB =
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=80";
const VIDEO =
  process.env.NEXT_PUBLIC_FEATURED_VIDEO_EMBED ??
  "https://www.youtube.com/embed/tgbNymZ7vqY";

export function FeaturedVideo() {
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-white py-24 px-4 md:px-8 lg:px-16">
      <div className="mx-auto max-w-content">
        <h2 className="font-display text-center text-[var(--text-h2)] text-dark">
          Featured Video
        </h2>
        <div className="relative mt-10 aspect-video overflow-hidden rounded-card shadow-card">
          <Image
            src={THUMB}
            alt="Play school showcase video"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="absolute inset-0 flex items-center justify-center bg-dark/30 transition hover:bg-dark/40"
            aria-label="Play featured video"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-primary shadow-card">
              <Play className="ml-1 h-8 w-8" />
            </span>
          </button>
        </div>
        <Modal open={open} onClose={() => setOpen(false)} title="Campus Showcase">
          <div className="aspect-video w-full overflow-hidden rounded-lg bg-black">
            <iframe
              title="Featured video"
              src={open ? `${VIDEO}?autoplay=1` : undefined}
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </Modal>
      </div>
    </section>
  );
}
