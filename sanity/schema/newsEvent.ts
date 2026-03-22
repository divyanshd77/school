/**
 * Reference schema for Sanity Studio — import into sanity.config when you run `sanity init`.
 */
export default {
  name: "newsEvent",
  title: "News / Event",
  type: "document",
  fields: [
    { name: "title", type: "string" },
    { name: "slug", type: "slug", options: { source: "title" } },
    { name: "date", type: "datetime" },
    {
      name: "category",
      type: "string",
      options: {
        list: [
          { title: "News", value: "News" },
          { title: "Event", value: "Event" },
          { title: "Announcement", value: "Announcement" },
        ],
      },
    },
    { name: "excerpt", type: "text" },
    { name: "body", type: "array", of: [{ type: "block" }] },
    {
      name: "images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    },
    { name: "featured", type: "boolean", initialValue: false },
  ],
};
