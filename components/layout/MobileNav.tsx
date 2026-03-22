"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { mainNav } from "@/lib/navigation";
import { siteConfig } from "@/lib/site";
import {
  Linkedin,
  Facebook,
  Youtube,
  Instagram,
} from "lucide-react";

export function MobileNav({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[80] lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            className="absolute inset-0 bg-dark/60"
            aria-label="Close menu"
            onClick={onClose}
          />
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.25 }}
            className="absolute left-0 top-0 flex h-full w-[min(100%,380px)] flex-col bg-white shadow-card"
          >
            <div className="flex items-center justify-between border-b border-gray-100 p-4">
              <Link href="/" className="flex items-center gap-2" onClick={onClose}>
                <Image
                  src="/images/logo-mark.svg"
                  alt=""
                  width={40}
                  height={40}
                />
                <span className="font-display font-semibold text-primary">
                  Jaipuria Lucknow
                </span>
              </Link>
              <button
                type="button"
                className="rounded p-2 text-gray-600"
                aria-label="Close"
                onClick={onClose}
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto px-2 py-4" aria-label="Mobile">
              {mainNav.map((item) =>
                item.href ? (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-lg px-3 py-3 font-medium text-dark hover:bg-offwhite"
                    onClick={onClose}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <div key={item.label} className="border-b border-gray-100 py-1">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-left font-medium text-dark"
                      aria-expanded={expanded === item.label}
                      onClick={() =>
                        setExpanded(
                          expanded === item.label ? null : item.label
                        )
                      }
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-4 w-4 transition ${
                          expanded === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {expanded === item.label && item.children && (
                      <div className="pb-2 pl-2">
                        {item.children.map((c) => (
                          <Link
                            key={c.href}
                            href={c.href}
                            className="block rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-offwhite"
                            onClick={onClose}
                          >
                            {c.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              )}
            </nav>
            <div className="border-t border-gray-100 p-4">
              <Link
                href="/admission/procedure"
                className="mb-4 block w-full rounded-btn bg-accent py-3 text-center font-semibold text-dark"
                onClick={onClose}
              >
                Apply Now
              </Link>
              <div className="flex justify-center gap-3 text-primary">
                <a href={siteConfig.social.linkedin} aria-label="LinkedIn" className="p-2">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href={siteConfig.social.facebook} aria-label="Facebook" className="p-2">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href={siteConfig.social.youtube} aria-label="YouTube" className="p-2">
                  <Youtube className="h-5 w-5" />
                </a>
                <a href={siteConfig.social.instagram} aria-label="Instagram" className="p-2">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
