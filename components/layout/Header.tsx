"use client";

import { useState } from "react";
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
} from "lucide-react";
import { mainNav, type NavItem } from "@/lib/navigation";
import { siteConfig } from "@/lib/site";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { cn } from "@/lib/cn";
import { MobileNav } from "./MobileNav";

function NavDropdown({
  item,
  isLight,
  pathname,
}: {
  item: NavItem;
  isLight: boolean;
  pathname: string;
}) {
  const [open, setOpen] = useState(false);
  if (!item.children?.length) return null;

  const activeChild = item.children.some(
    (c) => pathname === c.href || pathname.startsWith(`${c.href}/`)
  );

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className={cn(
          "flex items-center gap-1 border-b-2 border-transparent px-2 py-4 text-sm font-medium transition",
          isLight ? "text-white" : "text-dark",
          activeChild && "border-accent text-accent"
        )}
        aria-expanded={open}
        aria-haspopup="true"
      >
        {item.label}
        <ChevronDown className="h-4 w-4 opacity-70" />
      </button>
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-[var(--header-h)] z-40 bg-dark/40"
              aria-hidden
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute left-1/2 z-50 mt-0 w-[min(100vw-2rem,720px)] -translate-x-1/2 rounded-card border border-gray-100 bg-white p-6 shadow-card"
            >
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {item.children.map((c) => (
                  <Link
                    key={c.href}
                    href={c.href}
                    className="rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-offwhite hover:text-primary"
                  >
                    {c.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Header() {
  const pathname = usePathname();
  const scrolled = useScrollPosition(80);
  const isHome = pathname === "/";
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const [mobileOpen, setMobileOpen] = useState(false);

  const transparent = isHome && !scrolled && isDesktop;
  const isLight = transparent;

  return (
    <>
      <header
        className={cn(
          "sticky z-50 transition-[background,box-shadow] duration-300",
          transparent
            ? "border-transparent bg-transparent"
            : "border-b border-gray-100 bg-white shadow-card"
        )}
        style={
          {
            "--header-h": "88px",
          } as React.CSSProperties
        }
      >
        <div className="mx-auto flex max-w-content items-center justify-between gap-4 px-4 py-3 md:px-8 lg:px-16">
          <Link href="/" className="flex shrink-0 items-center gap-3">
            <div className="relative h-12 w-12 overflow-hidden rounded-full bg-white/10">
              <Image
                src="/images/logo-mark.svg"
                alt="Seth Anandram Jaipuria School Lucknow logo"
                width={48}
                height={48}
                className="object-contain p-1"
                priority
              />
            </div>
            <div className="leading-tight">
              <span
                className={cn(
                  "font-display text-lg font-semibold tracking-tight md:text-xl",
                  isLight ? "text-white" : "text-primary"
                )}
              >
                Jaipuria School
              </span>
              <p
                className={cn(
                  "hidden max-w-[220px] text-[10px] leading-snug sm:block",
                  isLight ? "text-white/80" : "text-gray-600"
                )}
              >
                Sec-D, Pocket-3, Ansal Sushant Golf City, Lucknow
              </p>
            </div>
          </Link>

          <nav
            aria-label="Primary"
            className="hidden flex-1 justify-center gap-1 lg:flex"
          >
            {mainNav.map((item) =>
              item.href ? (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "border-b-2 border-transparent px-2 py-4 text-sm font-medium transition hover:border-accent/60",
                    isLight ? "text-white" : "text-dark",
                    pathname === item.href && "border-accent"
                  )}
                >
                  {item.label}
                </Link>
              ) : (
                <NavDropdown
                  key={item.label}
                  item={item}
                  isLight={isLight}
                  pathname={pathname}
                />
              )
            )}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <div className="flex items-center gap-2">
              <a
                href={siteConfig.social.linkedin}
                className={cn(
                  "rounded p-1.5 hover:bg-black/5",
                  isLight ? "text-white" : "text-primary"
                )}
                aria-label="LinkedIn"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.facebook}
                className={cn(
                  "rounded p-1.5 hover:bg-black/5",
                  isLight ? "text-white" : "text-primary"
                )}
                aria-label="Facebook"
                target="_blank"
                rel="noreferrer"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.youtube}
                className={cn(
                  "rounded p-1.5 hover:bg-black/5",
                  isLight ? "text-white" : "text-primary"
                )}
                aria-label="YouTube"
                target="_blank"
                rel="noreferrer"
              >
                <Youtube className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.instagram}
                className={cn(
                  "rounded p-1.5 hover:bg-black/5",
                  isLight ? "text-white" : "text-primary"
                )}
                aria-label="Instagram"
                target="_blank"
                rel="noreferrer"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
            <Link
              href={siteConfig.erpUrl}
              className={cn(
                "rounded-btn px-3 py-1.5 text-xs font-semibold",
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
                "rounded-btn px-3 py-1.5 text-xs font-semibold",
                isLight
                  ? "border border-white/40 text-white hover:bg-white/10"
                  : "border border-primary text-primary hover:bg-offwhite"
              )}
            >
              Alumni
            </Link>
          </div>

          <button
            type="button"
            className={cn(
              "rounded p-2 lg:hidden",
              isLight ? "text-white" : "text-dark"
            )}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
