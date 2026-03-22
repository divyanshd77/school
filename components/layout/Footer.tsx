import Link from "next/link";
import Image from "next/image";
import {
  Linkedin,
  Facebook,
  Youtube,
  Instagram,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import { siteConfig } from "@/lib/site";

const quickLinks = [
  { label: "Student/Parent Portal", href: siteConfig.erpUrl, external: true },
  { label: "Group Magazine", href: "/media/group-magazine" },
  { label: "Our Team", href: "/about/our-team" },
  { label: "Blogs", href: "/media/blogs" },
  { label: "News & Events", href: "/media/news-events" },
  { label: "CBSE Appendix-IX", href: "/cbse-appendix-ix" },
];

const importantLinks = [
  { label: "Transfer Certificate", href: "/transfer-certificate" },
  { label: "Career Counselling", href: "/admission/career-counselling-cell" },
  { label: "Pay Fee Online", href: "/admission/pay-fee-online" },
  {
    label: "Mandatory Public Disclosure",
    href: "/documents/mandatory-disclosure.pdf",
  },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Career", href: "/career" },
  { label: "Article", href: "/media/blogs" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-content px-4 py-16 md:px-8 lg:px-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo-mark.svg"
                alt=""
                width={48}
                height={48}
                className="rounded-full bg-white/10 p-1"
              />
              <div>
                <p className="font-display text-lg font-semibold">
                  {siteConfig.shortName}
                </p>
                <p className="text-sm text-white/80">{siteConfig.tagline}</p>
              </div>
            </Link>
            <p className="mt-4 text-sm text-white/80">
              A leading CBSE institution nurturing excellence, creativity, and
              character.
            </p>
          </div>
          <div>
            <h3 className="font-display text-lg text-accent">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  {l.external ? (
                    <a
                      href={l.href}
                      className="text-white/90 hover:text-accent-light"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {l.label}
                    </a>
                  ) : (
                    <Link
                      href={l.href}
                      className="text-white/90 hover:text-accent-light"
                    >
                      {l.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-lg text-accent">Important Links</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {importantLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-white/90 hover:text-accent-light"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-lg text-accent">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/90">
              <li className="flex gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </li>
              <li className="flex gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>{siteConfig.phone.join(", ")}</span>
              </li>
              <li className="flex gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>
                  Admissions: {siteConfig.admissionsPhone.join(", ")}
                </span>
              </li>
            </ul>
            <div className="mt-6 flex gap-3">
              <a
                href={siteConfig.social.linkedin}
                className="rounded p-2 hover:bg-white/10"
                aria-label="LinkedIn"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.social.facebook}
                className="rounded p-2 hover:bg-white/10"
                aria-label="Facebook"
                target="_blank"
                rel="noreferrer"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.social.youtube}
                className="rounded p-2 hover:bg-white/10"
                aria-label="YouTube"
                target="_blank"
                rel="noreferrer"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.social.instagram}
                className="rounded p-2 hover:bg-white/10"
                aria-label="Instagram"
                target="_blank"
                rel="noreferrer"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 bg-[#152d52]">
        <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-4 px-4 py-6 text-xs text-white/70 md:flex-row md:px-8 lg:px-16">
          <div className="flex items-center gap-2">
            <span className="rounded border border-white/20 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-accent">
              Great Place to Work
            </span>
            <span className="hidden sm:inline">Certified organisation</span>
          </div>
          <p className="text-center">
            © {new Date().getFullYear()} Seth Anandram Jaipuria School, Lucknow.
            All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <span className="text-white/30">|</span>
            <span className="hover:text-white">Terms of Use</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
