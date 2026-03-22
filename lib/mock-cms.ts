
export type MockAnnouncement = { _id: string; text: string; link?: string };

export const mockAnnouncements: MockAnnouncement[] = [
  {
    _id: "1",
    text: "Admissions open for Academic Year 2025–26 — Apply today",
    link: "/admission/procedure",
  },
  {
    _id: "2",
    text: "Founder's Day celebrations — view highlights in Media",
    link: "/media/news-events",
  },
  {
    _id: "3",
    text: "Pay fees securely online",
    link: "/admission/pay-fee-online",
  },
];

export type MockNews = {
  _id: string;
  title: string;
  slug: { current: string };
  date: string;
  category: "News" | "Event" | "Announcement";
  excerpt: string;
  featured?: boolean;
};

export const mockNews: MockNews[] = [
  {
    _id: "n1",
    title: "9th Founder's Day Celebrations",
    slug: { current: "9th-founders-day-2024" },
    date: "2024-12-15",
    category: "Event",
    excerpt: "A memorable day honouring our legacy and student achievements.",
    featured: true,
  },
  {
    _id: "n2",
    title: "TEDx Seth Anandram Jaipuria School",
    slug: { current: "tedx-jaipuria" },
    date: "2024-11-02",
    category: "Event",
    excerpt: "Ideas worth spreading from our young innovators.",
  },
  {
    _id: "n3",
    title: "CBSE Inspection — Outstanding Feedback",
    slug: { current: "cbse-inspection" },
    date: "2024-09-20",
    category: "News",
    excerpt: "Recognition for academic rigour and holistic programmes.",
  },
];

export type MockBlog = {
  _id: string;
  title: string;
  slug: { current: string };
  author: string;
  date: string;
  category: string;
  excerpt: string;
  readingTime: number;
  body?: unknown[];
};

export const mockBlogs: MockBlog[] = [
  {
    _id: "b1",
    title: "Building Future-Ready Learners",
    slug: { current: "future-ready-learners" },
    author: "Academic Team",
    date: "2025-01-10",
    category: "Academics",
    excerpt:
      "How project-based learning and digital literacy shape confident graduates.",
    readingTime: 6,
  },
  {
    _id: "b2",
    title: "Parent Partnership in Education",
    slug: { current: "parent-partnership" },
    author: "Counselling Cell",
    date: "2024-12-05",
    category: "Community",
    excerpt:
      "Strengthening the home–school bridge for every child's success.",
    readingTime: 4,
  },
];
