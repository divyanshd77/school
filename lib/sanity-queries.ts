export const announcementsQuery = `*[_type == "announcement" && active == true && (!defined(expiryDate) || expiryDate > now())] | order(_createdAt desc)[0...10]{
  _id, text, link
}`;

export const newsEventsQuery = `*[_type == "newsEvent"] | order(date desc)[0...50]{
  _id, title, slug, date, category, excerpt, featured,
  "coverImage": images[0]
}`;

export const newsEventBySlugQuery = `*[_type == "newsEvent" && slug.current == $slug][0]`;

export const blogsQuery = `*[_type == "blog"] | order(date desc)[0...50]{
  _id, title, slug, author, date, category, excerpt, tags, readingTime, featuredImage
}`;

export const blogBySlugQuery = `*[_type == "blog" && slug.current == $slug][0]`;

export const teamQuery = `*[_type == "teamMember"] | order(order asc){
  _id, name, designation, department, bio, photo, featured
}`;

export const testimonialsQuery = `*[_type == "testimonial"] | order(order asc){
  _id, parentName, childName, childClass, quote, photo, rating
}`;
