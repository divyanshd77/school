"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Modal } from "@/components/ui/Modal";
import { ChevronLeft, ChevronRight } from "lucide-react";

const shots = [
  "https://images.unsplash.com/photo-1580582932707-520aed937a7e?w=1200&q=80",
  "https://images.unsplash.com/photo-1529390079861-591de0b7e7d0?w=1200&q=80",
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80",
  "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1200&q=80",
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&q=80",
  "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1200&q=80",
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&q=80",
];

export function LandmarkMoments() {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const show = (i: number) => {
    setIndex(i);
    setOpen(true);
  };

  const prev = () => setIndex((i) => (i - 1 + shots.length) % shots.length);
  const next = () => setIndex((i) => (i + 1) % shots.length);

  return (
    <section className="bg-offwhite py-24 px-4 md:px-8 lg:px-16">
      <div className="mx-auto max-w-content">
        <h2 className="font-display text-center text-[var(--text-h2)] text-dark">
          Landmark Moments
        </h2>
        <div className="mt-10">
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1.2}
            spaceBetween={16}
            loop
            autoplay={{ delay: 4000, pauseOnMouseEnter: true }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {shots.map((src, i) => (
              <SwiperSlide key={src}>
                <button
                  type="button"
                  onClick={() => show(i)}
                  className="relative block aspect-[4/3] w-full overflow-hidden rounded-card shadow-card"
                >
                  <Image
                    src={src}
                    alt={`Landmark moment ${i + 1}`}
                    fill
                    className="object-cover transition hover:scale-105"
                    sizes="(max-width:768px) 90vw, 400px"
                  />
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <Modal open={open} onClose={() => setOpen(false)} title="Landmark moment">
        <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-black">
          <Image
            src={shots[index]}
            alt=""
            fill
            className="object-contain"
            sizes="100vw"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-btn border border-gray-200 px-4 py-2 text-sm"
            onClick={prev}
            aria-label="Previous image"
          >
            <ChevronLeft className="h-4 w-4" /> Previous
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-btn border border-gray-200 px-4 py-2 text-sm"
            onClick={next}
            aria-label="Next image"
          >
            Next <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </Modal>
    </section>
  );
}
