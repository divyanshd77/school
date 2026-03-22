import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const routes = [
  ["about/jaipuria-group", "Jaipuria Group", "The legacy, values, and national footprint of the Jaipuria Group."],
  ["about/the-school", "The School", "Our campus, ethos, and commitment to excellence in Lucknow."],
  ["about/chairman-message", "Chairman's Message", "A message from our Chairman on the future of learning."],
  ["about/leadership-message", "Leadership Message", "Guiding principles from our leadership team."],
  ["about/leadership-team", "Leadership Team", "Profiles of directors and academic leadership."],
  ["about/our-team", "Our Team", "Faculty and staff directory — nurturing every learner."],
  ["campus/overview", "Campus Overview", "Infrastructure, safety, and learning spaces."],
  ["campus/radio-spark", "Radio Spark", "Voice of Jaipuria — student-led broadcasting."],
  ["admission/procedure", "Admission Procedure", "Steps, timelines, and how to apply."],
  ["admission/pedagogical-skills", "Pedagogical Skills", "How our teachers grow through training and research."],
  ["admission/school-tour", "School Tour", "Schedule a guided visit to our campus."],
  ["admission/pay-fee-online", "Pay Fee Online", "Secure online fee payment."],
  ["admission/fee-structure", "Fee Structure", "Transparent fee information and downloads."],
  ["admission/testimonials", "Parent Testimonials", "Stories from families who trust Jaipuria."],
  ["admission/career-counselling-cell", "Career Counselling Cell", "Guidance for higher education and careers."],
  ["admission/faqs", "FAQs", "Answers to common questions from parents."],
  ["academics/curriculum", "Curriculum", "CBSE pathways and early years design."],
  ["academics/microsoft-certified-teachers", "Microsoft Certified Teachers", "Digital fluency in every classroom."],
  ["academics/learning-programs", "Learning Programs", "Experiential and interdisciplinary learning."],
  ["academics/school-calendar", "School Calendar", "Term dates, holidays, and key events."],
  ["academics/teachers-training", "Teachers Training", "Continuous professional development."],
  ["academics/examination-rules", "Examination Rules", "Assessment, integrity, and board guidelines."],
  ["academics/result-highlights", "Result Highlights", "Board results and university placements."],
  ["academics/virtual-tour", "Virtual Tour", "Explore our campus digitally."],
  ["academics/placement", "Placement", "Higher education and career outcomes."],
  ["academics/skill-subjects", "Skill Subjects", "Future-ready skill programmes."],
  ["academics/digital-literacy", "Digital Literacy", "Responsible and creative use of technology."],
  ["academics/media-literacy", "Media Literacy", "Critical thinking in a connected world."],
  ["beyond-academics/excursions", "Excursions", "Learning beyond the classroom."],
  ["beyond-academics/olympiads", "Olympiads", "National and international competitions."],
  ["beyond-academics/it-tools", "IT Tools", "Productivity and creativity with digital tools."],
  ["beyond-academics/ai-tools", "AI Tools", "Ethical, inquiry-led AI literacy."],
  ["beyond-academics/student-authors", "Student Authors", "Publications and literary voices."],
  ["beyond-academics/mass-media", "Mass Media", "Journalism, film, and communication."],
  ["beyond-academics/internships", "Internships", "Industry exposure and mentorship."],
  ["beyond-academics/sports", "Sports", "Fitness, teamwork, and competitive sport."],
  ["media/coverage", "Media Coverage", "Press features and external recognition."],
  ["media/video-gallery", "Video Gallery", "Highlights from events and learning."],
  ["media/group-magazine", "Group Magazine", "Jaipuria Group publications."],
  ["awards/school-achievements", "School Achievements", "Institutional awards and rankings."],
  ["awards/faculty-achievements", "Faculty Achievements", "Honours earned by our educators."],
  ["awards/student-achievements", "Student Achievements", "Learner success across domains."],
  ["community/outreach", "Community Outreach", "Service and civic engagement."],
  ["community/parent-connect", "Parent Connect", "Partnerships with families."],
  ["community/csr-activities", "CSR Activities", "Social responsibility initiatives."],
  ["community/sustainable-development", "Sustainable Development", "Green campus and climate action."],
  ["community/virtual-exchange-program", "Virtual Exchange Program", "Global collaboration and cultural exchange."],
  ["career", "Careers", "Join a passionate team of educators and professionals."],
  ["privacy-policy", "Privacy Policy", "How we collect, use, and protect your data."],
  ["cbse-appendix-ix", "CBSE Appendix IX", "Mandatory disclosure information."],
  ["transfer-certificate", "Transfer Certificate", "Guidelines and requests for TC."],
];

function esc(s) {
  return s.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$/g, "\\$");
}

for (const [route, title, desc] of routes) {
  const skip = [
    "admission/procedure",
    "admission/school-tour",
    "admission/pay-fee-online",
    "admission/fee-structure",
    "admission/faqs",
    "contact-us",
  ];
  if (skip.some((s) => route === s)) continue;

  const dir = path.join(root, "app", route);
  fs.mkdirSync(dir, { recursive: true });
  const file = path.join(dir, "page.tsx");
  if (fs.existsSync(file)) continue;

  const content = `import type { Metadata } from "next";
import { InnerPage } from "@/components/layout/InnerPage";

export const metadata: Metadata = {
  title: "${esc(title)}",
  description: "${esc(desc)}",
};

export default function Page() {
  return (
    <InnerPage
      title="${esc(title)}"
      subtitle="${esc(desc)}"
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "${esc(title)}" },
      ]}
    >
      <p>
        This page outlines key information for families and students. Editorial
        content can be connected to Sanity CMS for live updates, images, and
        portable text.
      </p>
    </InnerPage>
  );
}
`;
  fs.writeFileSync(file, content);
}

console.log("Generated", routes.length, "route stubs (skipped special pages).");
