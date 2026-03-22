export const siteConfig = {
  name: "Seth Anandram Jaipuria School, Lucknow",
  shortName: "Jaipuria Lucknow",
  tagline: "Education That Elevates",
  description:
    "Best CBSE School in Lucknow — nurturing 21st-century learners with holistic education, global outlook, and excellence since 2016.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  address:
    "Sec-D, Pocket-3, Ansal Sushant Golf City, Shaheed Path, Lucknow – 226030",
  email: "sajslko@jaipuria.edu.in",
  phone: ["9580508908", "9580508907"],
  admissionsPhone: ["+91-9580508910", "+91-9721081098"],
  social: {
    linkedin: "https://www.linkedin.com/",
    facebook: "https://www.facebook.com/",
    youtube: "https://www.youtube.com/",
    instagram: "https://www.instagram.com/",
  },
  erpUrl: process.env.NEXT_PUBLIC_ERP_URL ?? "https://jaipurialucknow.edu.in/",
  alumniUrl:
    process.env.NEXT_PUBLIC_ALUMNI_URL ?? "https://jaipurialucknow.edu.in/",
  admissionFormUrl:
    process.env.NEXT_PUBLIC_ADMISSION_FORM_URL ??
    "https://docs.google.com/forms/",
};
