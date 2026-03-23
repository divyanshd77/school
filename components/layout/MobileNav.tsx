"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown, Phone, ExternalLink } from "lucide-react";
import { mainNav } from "@/lib/navigation";
import { siteConfig } from "@/lib/site";
import {
  Linkedin,
  Facebook,
  Youtube,
  Instagram,
} from "lucide-react";
import { cn } from "@/lib/cn";

function pathActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function MobileNav({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) setExpanded(null);
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-navigation"
          className="fixed inset-0 z-[110] xl:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            className="absolute inset-0 bg-dark/55 backdrop-blur-[2px]"
            aria-label="Close menu"
            onClick={onClose}
          />
          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-label="Main navigation"
            initial={{ x: "-105%" }}
            animate={{ x: 0 }}
            exit={{ x: "-105%" }}
            transition={{ type: "spring", damping: 28, stiffness: 320 }}
            className="absolute left-0 top-0 flex h-full max-h-[100dvh] w-[min(100vw-1rem,420px)] flex-col bg-white shadow-[4px_0_32px_rgba(13,27,42,0.12)]"
          >
            <div className="flex items-center justify-between border-b border-gray-100 bg-primary px-4 py-4 text-white">
              <Link
                href="/"
                className="flex min-w-0 items-center gap-2"
                onClick={onClose}
              >
                <Image
                  src="/images/logo-mark.svg"
                  alt=""
                  width={40}
                  height={40}
                  className="rounded-full bg-white/10 p-0.5"
                />
                <span className="font-display truncate text-base font-semibold">
                  Jaipuria Lucknow
                </span>
              </Link>
              <button
                type="button"
                className="rounded-lg p-2 text-white/90 hover:bg-white/10"
                aria-label="Close menu"
                onClick={onClose}
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2 border-b border-gray-100 px-3 py-3">
              <Link
                href="/admission/pay-fee-online"
                onClick={onClose}
                className="flex items-center justify-center gap-1 rounded-xl bg-accent py-2.5 text-center text-xs font-bold text-dark"
              >
                Pay Fee
              </Link>
              <Link
                href="/contact-us"
                onClick={onClose}
                className="flex items-center justify-center gap-1 rounded-xl border border-primary/20 bg-offwhite py-2.5 text-center text-xs font-semibold text-primary"
              >
                Contact
              </Link>
              <a
                href={`tel:${siteConfig.admissionsPhone[0].replace(/\D/g, "")}`}
                className="col-span-2 flex items-center justify-center gap-2 rounded-xl bg-gray-50 py-2 text-xs font-semibold text-dark"
              >
                <Phone className="h-3.5 w-3.5 text-primary" />
                Admissions {siteConfig.admissionsPhone[0]}
              </a>
            </div>

            <nav
              className="flex-1 overflow-y-auto overscroll-contain px-2 py-3"
              aria-label="Mobile primary"
            >
              {mainNav.map((item) =>
                item.href ? (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "block rounded-xl px-3 py-3 text-[15px] font-semibold transition",
                      pathActive(pathname, item.href)
                        ? "bg-primary/8 text-primary"
                        : "text-dark hover:bg-offwhite"
                    )}
                    onClick={onClose}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <div key={item.label} className="border-b border-gray-50 py-0.5">
                    <button
                      type="button"
                      className={cn(
                        "flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-[15px] font-semibold transition",
                        item.children?.some((c) => pathActive(pathname, c.href))
                          ? "text-primary"
                          : "text-dark"
                      )}
                      aria-expanded={expanded === item.label}
                      onClick={() =>
                        setExpanded(
                          expanded === item.label ? null : item.label
                        )
                      }
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 shrink-0 text-gray-400 transition-transform duration-200",
                          expanded === item.label && "rotate-180"
                        )}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {expanded === item.label && item.children && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.22 }}
                          className="overflow-hidden"
                        >
                          <ul className="space-y-0.5 pb-2 pl-2">
                            {item.children.map((c) => (
                              <li key={c.href}>
                                <Link
                                  href={c.href}
                                  className={cn(
                                    "flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm transition",
                                    pathActive(pathname, c.href)
                                      ? "bg-accent/10 font-medium text-primary"
                                      : "text-gray-600 hover:bg-offwhite hover:text-dark"
                                  )}
                                  onClick={onClose}
                                >
                                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                                  {c.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              )}
            </nav>

            <div className="border-t border-gray-100 bg-offwhite/80 p-4">
              <div className="mb-3 flex gap-2">
                <Link
                  href={siteConfig.erpUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-1 items-center justify-center gap-1 rounded-xl bg-primary py-2.5 text-xs font-semibold text-white"
                >
                  ERP
                  <ExternalLink className="h-3 w-3 opacity-80" />
                </Link>
                <Link
                  href={siteConfig.alumniUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-1 items-center justify-center gap-1 rounded-xl border border-primary/25 bg-white py-2.5 text-xs font-semibold text-primary"
                >
                  Alumni
                  <ExternalLink className="h-3 w-3 opacity-80" />
                </Link>
              </div>
              <Link
                href="/admission/procedure"
                className="mb-4 block w-full rounded-xl bg-accent py-3 text-center text-sm font-bold text-dark shadow-sm"
                onClick={onClose}
              >
                Apply Now
              </Link>
              <div className="flex justify-center gap-2 text-primary">
                {(
                  [
                    [siteConfig.social.linkedin, Linkedin, "LinkedIn"],
                    [siteConfig.social.facebook, Facebook, "Facebook"],
                    [siteConfig.social.youtube, Youtube, "YouTube"],
                    [siteConfig.social.instagram, Instagram, "Instagram"],
                  ] as const
                ).map(([href, Icon, label]) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="rounded-full p-2.5 hover:bg-white"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
