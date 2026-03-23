/**
 * Curated homepage “Explore” hubs — aligned with `lib/navigation.ts` routes.
 */
export type HomeExploreHub = {
  title: string;
  description: string;
  hubHref: string;
  hubLabel: string;
  links: { label: string; href: string }[];
};

export const homeExploreHubs: HomeExploreHub[] = [
  {
    title: "About",
    description: "Heritage, vision, and the people who guide our learners.",
    hubHref: "/about/the-school",
    hubLabel: "About the school",
    links: [
      { label: "Jaipuria Group", href: "/about/jaipuria-group" },
      { label: "Chairman's Message", href: "/about/chairman-message" },
      { label: "Leadership Team", href: "/about/leadership-team" },
    ],
  },
  {
    title: "Campus",
    description: "Spaces and programmes that bring learning to life.",
    hubHref: "/campus/overview",
    hubLabel: "Campus overview",
    links: [
      { label: "Campus Overview", href: "/campus/overview" },
      { label: "Radio Spark", href: "/campus/radio-spark" },
    ],
  },
  {
    title: "Admission",
    description: "How to apply, fees, tours, and parent support.",
    hubHref: "/admission/procedure",
    hubLabel: "Admission procedure",
    links: [
      { label: "Procedure", href: "/admission/procedure" },
      { label: "School Tour", href: "/admission/school-tour" },
      { label: "FAQs", href: "/admission/faqs" },
    ],
  },
  {
    title: "Academics",
    description: "CBSE excellence, innovation, and future-ready skills.",
    hubHref: "/academics/curriculum",
    hubLabel: "Curriculum",
    links: [
      { label: "Learning Programs", href: "/academics/learning-programs" },
      { label: "Virtual Tour", href: "/academics/virtual-tour" },
      { label: "Result Highlights", href: "/academics/result-highlights" },
    ],
  },
  {
    title: "Beyond Academics",
    description: "Sports, excursions, olympiads, and real-world exposure.",
    hubHref: "/beyond-academics/sports",
    hubLabel: "Sports & more",
    links: [
      { label: "Sports", href: "/beyond-academics/sports" },
      { label: "Olympiads", href: "/beyond-academics/olympiads" },
      { label: "Internships", href: "/beyond-academics/internships" },
    ],
  },
  {
    title: "Media",
    description: "News, blogs, coverage, and our community stories.",
    hubHref: "/media/news-events",
    hubLabel: "News & events",
    links: [
      { label: "News & Events", href: "/media/news-events" },
      { label: "Blogs", href: "/media/blogs" },
      { label: "Video Gallery", href: "/media/video-gallery" },
    ],
  },
  {
    title: "Awards",
    description: "Recognition for our school, faculty, and students.",
    hubHref: "/awards/school-achievements",
    hubLabel: "School achievements",
    links: [
      { label: "School Achievements", href: "/awards/school-achievements" },
      { label: "Student Achievements", href: "/awards/student-achievements" },
    ],
  },
  {
    title: "Community",
    description: "Outreach, sustainability, and global connections.",
    hubHref: "/community/outreach",
    hubLabel: "Community outreach",
    links: [
      { label: "Parent Connect", href: "/community/parent-connect" },
      { label: "CSR Activities", href: "/community/csr-activities" },
      {
        label: "Virtual Exchange",
        href: "/community/virtual-exchange-program",
      },
    ],
  },
];

export const homeQuickLinks = [
  {
    label: "Admission procedure",
    href: "/admission/procedure",
    description: "Steps & documents",
  },
  {
    label: "Pay fee online",
    href: "/admission/pay-fee-online",
    description: "Secure payment",
  },
  {
    label: "School tour",
    href: "/admission/school-tour",
    description: "Book a visit",
  },
  {
    label: "Contact us",
    href: "/contact-us",
    description: "Reach the office",
  },
  {
    label: "FAQs",
    href: "/admission/faqs",
    description: "Common questions",
  },
  {
    label: "School calendar",
    href: "/academics/school-calendar",
    description: "Term dates",
  },
] as const;
