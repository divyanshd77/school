"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Star, Quote } from "lucide-react";

const items = [
  {
    parent: "Dr. Divya & Major Virat",
    child: "Divisha, KG",
    quote:
      "The warmth of teachers and the vibrant campus make every morning exciting for our daughter. We see confidence bloom every week.",
  },
  {
    parent: "Mrs. Lalita Kadian",
    child: "Manya, Class 8",
    quote:
      "Balanced academics and co-curriculars — Jaipuria truly understands adolescents. Communication from school is timely and transparent.",
  },
  {
    parent: "Mrs. Kavita Tandon",
    child: "Mihir, Class 7",
    quote:
      "Innovation projects and reading culture have transformed how Mihir approaches learning. Grateful for the mentors here.",
  },
  {
    parent: "Lt. Col. Rakam Singh Bansal",
    child: "Rishika, Class 12",
    quote:
      "Career guidance and board preparation are exceptional. Rishika feels prepared for competitive entrances and life beyond school.",
  },
  {
    parent: "Ms. Sarika Sharma",
    child: "Kovid, Class 8",
    quote:
      "Values, discipline, and joy coexist beautifully at Jaipuria. Kovid has found his voice in debates and sports alike.",
  },
];

export function Testimonials() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section className="bg-white py-24 px-4 md:px-8 lg:px-16">
      <div className="mx-auto max-w-content">
        <h2 className="font-display text-center text-[var(--text-h2)] text-dark">
          Students Love Learning at Jaipuria
        </h2>
        <div className="mt-12">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 6000 }}
            breakpoints={{
              768: { slidesPerView: 1.2 },
              1024: { slidesPerView: 2 },
            }}
          >
            {items.map((t) => (
              <SwiperSlide key={t.parent}>
                <div className="h-full rounded-card border border-gray-100 bg-offwhite p-8 shadow-card">
                  <Quote className="h-10 w-10 text-accent/40" />
                  <div className="mt-4 flex items-center gap-4">
                    <div className="relative h-14 w-14 overflow-hidden rounded-full bg-primary/10">
                      <Image
                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(t.parent)}`}
                        alt=""
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-dark">{t.parent}</p>
                      <p className="text-sm text-gray-600">{t.child}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-700">
                    {expanded === t.parent ? t.quote : `${t.quote.slice(0, 140)}…`}
                  </p>
                  <button
                    type="button"
                    className="mt-2 text-sm font-semibold text-primary"
                    onClick={() =>
                      setExpanded(expanded === t.parent ? null : t.parent)
                    }
                  >
                    {expanded === t.parent ? "Read less" : "Read more"}
                  </button>
                  <div className="mt-4 flex gap-1 text-accent">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
