"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  ChevronDown,
  Linkedin,
  Facebook,
  Youtube,
  Instagram,
  ArrowRight,
  Phone,
} from "lucide-react";
import { mainNav, type NavItem } from "@/lib/navigation";
import { siteConfig } from "@/lib/site";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { cn } from "@/lib/cn";
import { MobileNav } from "./MobileNav";

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const scrolled = useScrollPosition(72);
  const isHome = pathname === "/";
  /** Align with Tailwind `xl:` — full desktop mega-nav only at 1280px+ */
  const isDesktop = useMediaQuery("(min-width: 1280px)", () => false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const closeMenuTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelCloseMenu = () => {
    if (closeMenuTimer.current) {
      clearTimeout(closeMenuTimer.current);
      closeMenuTimer.current = null;
    }
  };

  const scheduleCloseMenu = () => {
    cancelCloseMenu();
    closeMenuTimer.current = setTimeout(() => setOpenMenu(null), 220);
  };

  const transparent = isHome && !scrolled && isDesktop;
  const isLight = transparent;

  const openItem = mainNav.find((i) => i.label === openMenu);

  useEffect(() => {
    setOpenMenu(null);
  }, [pathname]);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const setH = () => {
      document.documentElement.style.setProperty(
        "--header-h",
        `${el.offsetHeight}px`
      );
    };
    setH();
    const ro = new ResizeObserver(setH);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenMenu(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    return () => {
      if (closeMenuTimer.current) clearTimeout(closeMenuTimer.current);
    };
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className={cn(
          "sticky top-0 z-[100] transition-[background-color,box-shadow,backdrop-filter] duration-300",
          transparent
            ? "border-transparent bg-transparent"
            : "border-b border-gray-100/90 bg-white/95 shadow-[0_4px_30px_rgba(13,27,42,0.06)] backdrop-blur-md supports-[backdrop-filter]:bg-white/90"
        )}
      >
        <div className="mx-auto flex min-w-0 max-w-content flex-nowrap items-center justify-between gap-2 px-3 py-2.5 sm:gap-3 sm:px-4 md:gap-4 md:px-8 lg:px-12 xl:gap-6 xl:px-16">
          <Link
            href="/"
            className="group flex min-w-0 shrink-0 items-center gap-2.5 md:gap-3"
            onClick={() => setOpenMenu(null)}
          >
            <div
              className={cn(
                "relative h-11 w-11 overflow-hidden rounded-full transition md:h-12 md:w-12",
                isLight ? "bg-white/15 ring-1 ring-white/20" : "bg-primary/5 ring-1 ring-primary/10"
              )}
            >
              <Image
                src="/images/logo-mark.svg"
                alt="Seth Anandram Jaipuria School Lucknow logo"
                width={48}
                height={48}
                className="object-contain p-1"
                priority
              />
            </div>
            <div className="min-w-0 leading-tight">
              <span
                className={cn(
                  "font-display text-base font-semibold tracking-tight transition group-hover:text-accent md:text-lg",
                  isLight ? "text-white drop-shadow-sm" : "text-primary"
                )}
              >
                Jaipuria School
              </span>
              <p
                className={cn(
                  "hidden max-w-[200px] text-[10px] leading-snug sm:block md:max-w-[240px]",
                  isLight ? "text-white/75" : "text-gray-600"
                )}
              >
                Sec-D, Pocket-3, Ansal Sushant Golf City, Lucknow
              </p>
            </div>
          </Link>

          <div
            className="relative hidden min-w-0 flex-1 justify-center xl:flex"
            onMouseEnter={cancelCloseMenu}
            onMouseLeave={scheduleCloseMenu}
          >
            <nav
              aria-label="Primary"
              className="flex max-w-full flex-nowrap items-center justify-center gap-0 2xl:gap-0.5"
            >
              {mainNav.map((item) => {
                if (item.href) {
                  const active = isActivePath(pathname, item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onMouseEnter={() => {
                        cancelCloseMenu();
                        setOpenMenu(null);
                      }}
                      className={cn(
                        "relative whitespace-nowrap rounded-lg px-2 py-2.5 text-[12px] font-semibold tracking-wide transition 2xl:px-2.5 2xl:text-[13px] 2xl:py-3",
                        isLight
                          ? "text-white/95 hover:bg-white/10 hover:text-white"
                          : "text-dark hover:bg-gray-50 hover:text-primary",
                        active &&
                          (isLight
                            ? "text-accent after:absolute after:bottom-1 after:left-3 after:right-3 after:h-0.5 after:rounded-full after:bg-accent"
                            : "text-primary after:absolute after:bottom-1 after:left-3 after:right-3 after:h-0.5 after:rounded-full after:bg-accent")
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                }

                const activeChild = item.children?.some((c) =>
                  isActivePath(pathname, c.href)
                );
                const isOpen = openMenu === item.label;

                return (
                  <div key={item.label} className="relative">
                    <button
                      type="button"
                      className={cn(
                        "flex items-center gap-0.5 whitespace-nowrap rounded-lg px-2 py-2.5 text-[12px] font-semibold tracking-wide transition 2xl:px-2.5 2xl:text-[13px] 2xl:py-3",
                        isLight
                          ? "text-white/95 hover:bg-white/10"
                          : "text-dark hover:bg-gray-50 hover:text-primary",
                        (isOpen || activeChild) &&
                          (isLight
                            ? "bg-white/10 text-accent"
                            : "bg-primary/[0.06] text-primary")
                      )}
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                      aria-controls={`mega-${item.label}`}
                      id={`nav-${item.label}`}
                      onMouseEnter={() => {
                        cancelCloseMenu();
                        setOpenMenu(item.label);
                      }}
                      onFocus={() => {
                        cancelCloseMenu();
                        setOpenMenu(item.label);
                      }}
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "h-3.5 w-3.5 opacity-80 transition-transform duration-200 xl:h-4 xl:w-4",
                          isOpen && "rotate-180"
                        )}
                      />
                    </button>
                  </div>
                );
              })}
            </nav>

            <AnimatePresence>
              {openItem?.children && (
                <>
                  <motion.button
                    type="button"
                    aria-label="Close menu"
                    tabIndex={-1}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="fixed inset-0 top-[var(--header-h)] z-[90] cursor-default bg-dark/45 backdrop-blur-[2px]"
                    onClick={() => {
                      cancelCloseMenu();
                      setOpenMenu(null);
                    }}
                  />
                  <motion.div
                    id={`mega-${openItem.label}`}
                    role="region"
                    aria-labelledby={`nav-${openItem.label}`}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                    className="fixed left-0 right-0 top-[var(--header-h)] z-[95] max-h-[min(70vh,calc(100vh-var(--header-h)))] overflow-y-auto border-t border-gray-100 bg-white shadow-[0_16px_48px_rgba(13,27,42,0.12)]"
                    onMouseEnter={cancelCloseMenu}
                    onMouseLeave={scheduleCloseMenu}
                  >
                    <div className="mx-auto max-w-content px-4 py-8 md:px-8 lg:px-16">
                      <div className="mb-5 border-b border-gray-100 pb-4">
                        <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
                          Explore
                        </p>
                        <p className="font-display text-xl text-dark md:text-2xl">
                          {openItem.label}
                        </p>
                      </div>
                      <MegaGrid
                        item={openItem}
                        pathname={pathname}
                        onNavigate={() => setOpenMenu(null)}
                      />
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>

          <div className="hidden shrink-0 items-center gap-2 xl:flex 2xl:gap-3">
            <div
              className={cn(
                "mr-1 flex items-center gap-1 rounded-full border px-1 py-1 xl:mr-2",
                isLight
                  ? "border-white/25 bg-white/10"
                  : "border-gray-200 bg-gray-50/80"
              )}
            >
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
                  className={cn(
                    "rounded-full p-2 transition",
                    isLight
                      ? "text-white hover:bg-white/15"
                      : "text-primary hover:bg-white hover:text-primary"
                  )}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon className="h-3.5 w-3.5 xl:h-4 xl:w-4" />
                </a>
              ))}
            </div>

            <a
              href={`tel:${siteConfig.admissionsPhone[0].replace(/\D/g, "")}`}
              className={cn(
                "hidden items-center gap-1.5 rounded-full px-2 py-1.5 text-xs font-semibold 2xl:flex",
                isLight
                  ? "text-white/90 hover:text-white"
                  : "text-gray-600 hover:text-primary"
              )}
              aria-label="Call admissions"
            >
              <Phone className="h-3.5 w-3.5" />
              <span className="max-w-[7rem] truncate xl:max-w-none">
                {siteConfig.admissionsPhone[0]}
              </span>
            </a>

            <Link
              href="/admission/pay-fee-online"
              className={cn(
                "rounded-full px-3 py-1.5 text-xs font-bold shadow-sm transition xl:px-4",
                isLight
                  ? "bg-accent text-dark hover:bg-accent-light"
                  : "bg-accent text-dark hover:bg-accent-light"
              )}
            >
              Pay Fee
            </Link>

            <Link
              href={siteConfig.erpUrl}
              className={cn(
                "rounded-full px-3 py-1.5 text-xs font-semibold transition xl:px-4",
                isLight
                  ? "bg-white/15 text-white hover:bg-white/25"
                  : "bg-primary text-white hover:bg-primary-light"
              )}
            >
              ERP
            </Link>
            <Link
              href={siteConfig.alumniUrl}
              className={cn(
                "rounded-full border px-3 py-1.5 text-xs font-semibold transition xl:px-4",
                isLight
                  ? "border-white/45 text-white hover:bg-white/10"
                  : "border-primary/30 text-primary hover:bg-offwhite"
              )}
            >
              Alumni
            </Link>
          </div>

          <div className="flex shrink-0 items-center gap-1 sm:gap-2 xl:hidden">
            <Link
              href="/admission/pay-fee-online"
              className={cn(
                "rounded-full px-2.5 py-1.5 text-[11px] font-bold sm:px-3 sm:text-xs",
                isLight
                  ? "bg-accent text-dark hover:bg-accent-light"
                  : "bg-accent text-dark hover:bg-accent-light"
              )}
            >
              Pay Fee
            </Link>
            <button
              type="button"
              className={cn(
                "flex min-h-11 min-w-11 items-center justify-center rounded-lg p-2 transition sm:min-h-12 sm:min-w-12",
                isLight ? "text-white hover:bg-white/10" : "text-dark hover:bg-gray-100"
              )}
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="h-6 w-6" strokeWidth={2} />
            </button>
          </div>
        </div>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}

function MegaGrid({
  item,
  pathname,
  onNavigate,
}: {
  item: NavItem;
  pathname: string;
  onNavigate: () => void;
}) {
  if (!item.children?.length) return null;

  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:gap-3">
      {item.children.map((c) => {
        const active = isActivePath(pathname, c.href);
        return (
          <Link
            key={c.href}
            href={c.href}
            onClick={onNavigate}
            className={cn(
              "group flex items-start gap-3 rounded-xl border border-transparent px-3 py-3 transition",
              active
                ? "border-accent/40 bg-accent/5"
                : "hover:border-gray-200 hover:bg-offwhite"
            )}
          >
            <span
              className={cn(
                "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold transition",
                active
                  ? "bg-accent text-dark"
                  : "bg-primary/10 text-primary group-hover:bg-accent/20"
              )}
              aria-hidden
            >
              {c.label.slice(0, 1)}
            </span>
            <span className="min-w-0 flex-1">
              <span
                className={cn(
                  "flex items-center gap-1 text-sm font-semibold leading-snug",
                  active ? "text-primary" : "text-dark group-hover:text-primary"
                )}
              >
                {c.label}
                <ArrowRight className="h-3.5 w-3.5 shrink-0 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
              </span>
            </span>
          </Link>
        );
      })}
    </div>
  );
}
