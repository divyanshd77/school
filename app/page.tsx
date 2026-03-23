import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { HeroSection } from "@/components/home/HeroSection";
import { QuickLinksStrip } from "@/components/home/QuickLinksStrip";
import { EducationPillars } from "@/components/home/EducationPillars";
import { LearningJourney } from "@/components/home/LearningJourney";
import { VisionPhilosophy } from "@/components/home/VisionPhilosophy";
import { ExploreBySection } from "@/components/home/ExploreBySection";
import { CurriculumSection } from "@/components/home/CurriculumSection";
import { AwardsSection } from "@/components/home/AwardsSection";
import { FuturePrepSection } from "@/components/home/FuturePrepSection";
import { NewsPreview } from "@/components/home/NewsPreview";
import { SignatureEvents } from "@/components/home/SignatureEvents";
import { FeaturedVideo } from "@/components/home/FeaturedVideo";
import { LandmarkMoments } from "@/components/home/LandmarkMoments";
import { Testimonials } from "@/components/home/Testimonials";
import { GroupStats } from "@/components/home/GroupStats";
import { HomeCtaBand } from "@/components/home/HomeCtaBand";

export const metadata: Metadata = {
  title: "Best CBSE School in Lucknow",
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: `Best CBSE School in Lucknow | ${siteConfig.shortName}`,
    description: siteConfig.description,
    url: siteConfig.url,
    type: "website",
  },
};

export const revalidate = 3600;

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteConfig.url}/media/news-events?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={websiteJsonLd} />
      <HeroSection />
      <QuickLinksStrip />
      <EducationPillars />
      <LearningJourney />
      <VisionPhilosophy />
      <ExploreBySection />
      <CurriculumSection />
      <AwardsSection />
      <FuturePrepSection />
      <NewsPreview />
      <SignatureEvents />
      <FeaturedVideo />
      <LandmarkMoments />
      <Testimonials />
      <GroupStats />
      <HomeCtaBand />
    </>
  );
}
