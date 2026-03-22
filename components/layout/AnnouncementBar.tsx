"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import type { MockAnnouncement } from "@/lib/mock-cms";
import { siteConfig } from "@/lib/site";

const STORAGE_KEY = "jaipuria-announcement-dismissed";

function TickerItems({ items }: { items: MockAnnouncement[] }) {
  return (
    <>
      {items.map((a) => (
        <span key={a._id} className="inline-flex items-center px-8">
          {a.link ? (
            <Link
              href={a.link}
              className="text-accent-light underline-offset-2 hover:underline"
            >
              {a.text}
            </Link>
          ) : (
            a.text
          )}
        </span>
      ))}
    </>
  );
}

export function AnnouncementBar({ items }: { items: MockAnnouncement[] }) {
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    try {
      setDismissed(localStorage.getItem(STORAGE_KEY) === "1");
    } catch {
      setDismissed(false);
    }
  }, []);

  const dismiss = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
    setDismissed(true);
  };

  if (dismissed) return null;

  return (
    <div className="sticky top-0 z-[60] flex flex-wrap items-center gap-2 border-b border-primary-light/30 bg-primary px-3 py-2 text-sm text-white md:px-6">
      <div className="min-w-0 flex-1 overflow-hidden">
        <div className="announcement-track">
          <div className="flex items-center">
            <TickerItems items={items} />
          </div>
          <div className="flex items-center" aria-hidden>
            <TickerItems items={items} />
          </div>
        </div>
      </div>
      <div className="hidden shrink-0 items-center gap-3 text-xs font-medium md:flex">
        <Link
          href={siteConfig.erpUrl}
          className="text-accent hover:text-accent-light"
        >
          ERP Login
        </Link>
        <span className="text-white/40">|</span>
        <Link
          href={siteConfig.alumniUrl}
          className="text-accent hover:text-accent-light"
        >
          Alumni
        </Link>
        <span className="text-white/40">|</span>
        <Link
          href="/admission/pay-fee-online"
          className="text-accent hover:text-accent-light"
        >
          Pay Fee Online
        </Link>
      </div>
      <button
        type="button"
        onClick={dismiss}
        className="shrink-0 rounded p-1 text-white/80 hover:bg-white/10"
        aria-label="Dismiss announcements"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
