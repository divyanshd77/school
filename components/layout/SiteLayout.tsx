import { SkipLink } from "@/components/layout/SkipLink";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getAnnouncements } from "@/lib/announcements";
import type { ReactNode } from "react";

export async function SiteLayout({ children }: { children: ReactNode }) {
  const announcements = await getAnnouncements();

  return (
    <>
      <SkipLink />
      <AnnouncementBar items={announcements} />
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
    </>
  );
}
