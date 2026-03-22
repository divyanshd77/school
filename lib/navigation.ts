export type NavItem = {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
};

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    children: [
      { label: "Jaipuria Group", href: "/about/jaipuria-group" },
      { label: "The School", href: "/about/the-school" },
      { label: "Chairman's Message", href: "/about/chairman-message" },
      { label: "Leadership Message", href: "/about/leadership-message" },
      { label: "Leadership Team", href: "/about/leadership-team" },
      { label: "Our Team", href: "/about/our-team" },
    ],
  },
  {
    label: "Campus",
    children: [
      { label: "Campus Overview", href: "/campus/overview" },
      { label: "Radio Spark", href: "/campus/radio-spark" },
    ],
  },
  {
    label: "Admission",
    children: [
      { label: "Procedure", href: "/admission/procedure" },
      { label: "Pedagogical Skills", href: "/admission/pedagogical-skills" },
      { label: "School Tour", href: "/admission/school-tour" },
      { label: "Pay Fee Online", href: "/admission/pay-fee-online" },
      { label: "Fee Structure", href: "/admission/fee-structure" },
      { label: "Testimonials", href: "/admission/testimonials" },
      {
        label: "Career Counselling Cell",
        href: "/admission/career-counselling-cell",
      },
      { label: "FAQs", href: "/admission/faqs" },
    ],
  },
  {
    label: "Academics",
    children: [
      { label: "Curriculum", href: "/academics/curriculum" },
      {
        label: "Microsoft Certified Teachers",
        href: "/academics/microsoft-certified-teachers",
      },
      { label: "Learning Programs", href: "/academics/learning-programs" },
      { label: "School Calendar", href: "/academics/school-calendar" },
      { label: "Teachers Training", href: "/academics/teachers-training" },
      { label: "Exam Rules", href: "/academics/examination-rules" },
      { label: "Result Highlights", href: "/academics/result-highlights" },
      { label: "Virtual Tour", href: "/academics/virtual-tour" },
      { label: "Placement", href: "/academics/placement" },
      { label: "Skill Subjects", href: "/academics/skill-subjects" },
      { label: "Digital Literacy", href: "/academics/digital-literacy" },
      { label: "Media Literacy", href: "/academics/media-literacy" },
    ],
  },
  {
    label: "Beyond Academics",
    children: [
      { label: "Excursions", href: "/beyond-academics/excursions" },
      { label: "Olympiads", href: "/beyond-academics/olympiads" },
      { label: "IT Tools", href: "/beyond-academics/it-tools" },
      { label: "AI Tools", href: "/beyond-academics/ai-tools" },
      { label: "Student Authors", href: "/beyond-academics/student-authors" },
      { label: "Mass Media", href: "/beyond-academics/mass-media" },
      { label: "Internships", href: "/beyond-academics/internships" },
      { label: "Sports", href: "/beyond-academics/sports" },
    ],
  },
  {
    label: "Media",
    children: [
      { label: "News & Events", href: "/media/news-events" },
      { label: "Blogs", href: "/media/blogs" },
      { label: "Media Coverage", href: "/media/coverage" },
      { label: "Video Gallery", href: "/media/video-gallery" },
      { label: "Group Magazine", href: "/media/group-magazine" },
    ],
  },
  {
    label: "Awards",
    children: [
      { label: "School Achievements", href: "/awards/school-achievements" },
      {
        label: "Faculty Achievements",
        href: "/awards/faculty-achievements",
      },
      {
        label: "Student Achievements",
        href: "/awards/student-achievements",
      },
    ],
  },
  {
    label: "Community",
    children: [
      { label: "Community Outreach", href: "/community/outreach" },
      { label: "Parent Connect", href: "/community/parent-connect" },
      { label: "CSR Activities", href: "/community/csr-activities" },
      {
        label: "Sustainable Development",
        href: "/community/sustainable-development",
      },
      {
        label: "Virtual Exchange Program",
        href: "/community/virtual-exchange-program",
      },
    ],
  },
];
