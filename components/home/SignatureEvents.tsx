"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const events = [
  { title: "Memorial Lecture", date: "Annual", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80" },
  { title: "5th Dr. Rajaram Jaipuria Memorial Lecture", date: "2025", img: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80" },
  { title: "9th Founder's Day", date: "Dec 2024", img: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80" },
  { title: "TEDx Seth Anandram Jaipuria School", date: "2024", img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80" },
  { title: "Founders' Day 2023", date: "2023", img: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80" },
  { title: "Razzmatazz", date: "Annual", img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80" },
  { title: "IC3 Regional Forum", date: "2024", img: "https://images.unsplash.com/photo-1560439514-4e9645039924?w=800&q=80" },
  { title: "Dr. Rajaram Jaipuria Memorial Debate", date: "Annual", img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80" },
  { title: "2nd FICCI Arise International Unifair", date: "2024", img: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=800&q=80" },
];

export function SignatureEvents() {
  return (
    <section className="bg-offwhite py-24 px-4 md:px-8 lg:px-16">
      <div className="mx-auto max-w-content">
        <h2 className="font-display text-center text-[var(--text-h2)] text-dark">
          Signature Events
        </h2>
        <div className="relative mt-12">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1.1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              900: { slidesPerView: 2.2 },
              1200: { slidesPerView: 3 },
            }}
            className="signature-swiper !pb-12"
          >
            {events.map((e) => (
              <SwiperSlide key={e.title}>
                <div className="group relative overflow-hidden rounded-card shadow-card">
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={e.img}
                      alt=""
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(max-width:768px) 90vw, 400px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                      <p className="font-mono text-xs text-accent">{e.date}</p>
                      <h3 className="font-display text-lg font-semibold">{e.title}</h3>
                      <Link
                        href="/media/news-events"
                        className="mt-2 inline-flex text-sm font-medium text-accent-light hover:underline"
                      >
                        View Highlights →
                      </Link>
                    </div>
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
