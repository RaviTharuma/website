/**
 * Local Sanity document schema for the homepage.
 * No project id, dataset, or token. The Astro build does not import this file.
 */
export const homepageSchema = {
  name: "homepage",
  title: "Homepage",
  type: "document",
  fields: [
    { name: "eyebrow", title: "Eyebrow", type: "string" },
    { name: "headline", title: "Headline", type: "string" },
    { name: "support", title: "Support", type: "text" },
    {
      name: "points",
      title: "Points",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "lead", title: "Lead", type: "string" },
            { name: "rest", title: "Rest", type: "string" },
          ],
        },
      ],
    },
    { name: "reply", title: "Reply line", type: "string" },
    {
      name: "metric",
      title: "Metric",
      type: "object",
      fields: [
        { name: "value", title: "Value", type: "string" },
        { name: "label", title: "Label", type: "string" },
        { name: "caption", title: "Caption", type: "string" },
      ],
    },
    {
      name: "chart",
      title: "Chart",
      type: "object",
      fields: [
        { name: "kicker", title: "Kicker", type: "string" },
        { name: "title", title: "Title", type: "string" },
      ],
    },
    { name: "proof", title: "Proof", type: "array", of: [{ type: "string" }] },
    { name: "changesTitle", title: "Changes title", type: "string" },
    {
      name: "changes",
      title: "Changes",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Title", type: "string" },
            { name: "body", title: "Body", type: "text" },
          ],
        },
      ],
    },
  ],
};
