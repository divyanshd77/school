"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { useCounter } from "@/hooks/useCounter";
import { cn } from "@/lib/cn";

export function CounterStat({
  value,
  suffix = "",
  label,
  className,
  light,
}: {
  value: number;
  suffix?: string;
  label: string;
  className?: string;
  light?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const count = useCounter(value, { enabled: inView, duration: 2000 });

  return (
    <div ref={ref} className={cn("text-center", className)}>
      <p
        className={cn(
          "font-mono text-3xl font-bold md:text-4xl",
          light ? "text-accent" : "text-primary"
        )}
      >
        {count.toLocaleString("en-IN")}
        {suffix}
      </p>
      <p
        className={cn(
          "mt-1 text-sm font-medium",
          light ? "text-white/90" : "text-gray-600"
        )}
      >
        {label}
      </p>
    </div>
  );
}
