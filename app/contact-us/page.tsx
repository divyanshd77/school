import type { Metadata } from "next";
import { InnerPage } from "@/components/layout/InnerPage";
import { ContactForm } from "@/components/forms/ContactForm";
import { siteConfig } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Reach Seth Anandram Jaipuria School Lucknow — admissions, fees, and general queries.",
};

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.name,
  address: siteConfig.address,
  telephone: siteConfig.phone.join(", "),
  email: siteConfig.email,
};

export default function ContactPage() {
  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=${
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? ""
  }&q=${encodeURIComponent(siteConfig.address)}`;

  return (
    <>
      <JsonLd data={localBusiness} />
      <InnerPage
        title="Contact Us"
        subtitle="We would love to hear from you — admissions, academics, or general enquiries."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
      >
        <div className="not-prose grid gap-12 lg:grid-cols-2">
          <ContactForm />
          <div className="space-y-6">
            <div className="aspect-video w-full overflow-hidden rounded-card bg-gray-100">
              {process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ? (
                <iframe
                  title="School location map"
                  src={mapSrc}
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              ) : (
                <div className="flex h-full items-center justify-center p-6 text-center text-sm text-gray-500">
                  Set NEXT_PUBLIC_GOOGLE_MAPS_API_KEY to enable the embedded map.
                </div>
              )}
            </div>
            <div className="rounded-card border border-gray-100 bg-white p-6 shadow-card">
              <h3 className="font-display text-lg text-dark">Visit us</h3>
              <p className="mt-2 text-gray-600">{siteConfig.address}</p>
              <p className="mt-4 text-sm text-gray-600">
                <strong>Timings:</strong> Mon–Fri 8:00 a.m. – 3:00 p.m. (office
                hours may vary on holidays).
              </p>
            </div>
          </div>
        </div>
      </InnerPage>
    </>
  );
}
