/**
 * Local Sanity document schema for an inner page.
 * No project id, dataset, or token. The Astro build does not import this file.
 */
export const pageSchema = {
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    { name: "eyebrow", title: "Eyebrow", type: "string" },
    { name: "headline", title: "Headline", type: "string" },
    { name: "paragraphs", title: "Paragraphs", type: "array", of: [{ type: "text" }] },
    {
      name: "rows",
      title: "Rows",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "id", title: "Id", type: "string" },
            { name: "title", title: "Title", type: "string" },
            { name: "body", title: "Body", type: "text" },
          ],
        },
      ],
    },
    {
      name: "links",
      title: "Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "href", title: "URL", type: "url" },
            { name: "label", title: "Label", type: "string" },
          ],
        },
      ],
    },
  ],
};
