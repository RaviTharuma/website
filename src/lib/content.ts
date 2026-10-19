import homepageJson from "../data/homepage.json";
import pagesJson from "../data/pages.json";
import siteJson from "../data/site.json";

export interface NavLink {
  href: string;
  label: string;
}

export interface TextRow {
  id: string;
  title: string;
  body: string;
}

export interface PageDocument {
  title: string;
  description: string;
  eyebrow: string;
  headline: string;
  paragraphs: string[];
  rows: TextRow[];
  links: NavLink[];
}

export interface SiteContent {
  name: string;
  email: string;
  bookLabel: string;
  bookHref: string;
  github: string;
  linkedin: string;
  domainLabel: string;
  domainHref: string;
  yearLine: string;
  nav: NavLink[];
  homeFooter: {
    bio: string;
    practice: NavLink[];
    site: NavLink[];
  };
  innerFooter: {
    bio: string;
    links: NavLink[];
  };
}

/**
 * Throws when a content field is missing so a bad JSON file fails the build.
 */
function requireText(value: unknown, label: string): string {
  if (typeof value !== "string" || value.trim().length === 0) {
    throw new Error(`Missing site content: ${label}`);
  }
  return value;
}

/**
 * Checks a link object and returns a typed link.
 */
function requireLink(value: unknown, label: string): NavLink {
  if (typeof value !== "object" || value === null) {
    throw new Error(`Missing site content: ${label}`);
  }
  const record = value as Record<string, unknown>;
  return {
    href: requireText(record.href, `${label}.href`),
    label: requireText(record.label, `${label}.label`),
  };
}

/**
 * Returns the shared site record used by the header and both footers.
 */
export function getSite(): SiteContent {
  const email = requireText(siteJson.email, "site.email");
  return {
    name: requireText(siteJson.name, "site.name"),
    email,
    bookLabel: requireText(siteJson.bookLabel, "site.bookLabel"),
    bookHref: `mailto:${email}`,
    github: requireText(siteJson.github, "site.github"),
    linkedin: requireText(siteJson.linkedin, "site.linkedin"),
    domainLabel: requireText(siteJson.domainLabel, "site.domainLabel"),
    domainHref: requireText(siteJson.domainHref, "site.domainHref"),
    yearLine: requireText(siteJson.yearLine, "site.yearLine"),
    nav: siteJson.nav.map((link, index) => requireLink(link, `site.nav.${index}`)),
    homeFooter: {
      bio: requireText(siteJson.homeFooter.bio, "site.homeFooter.bio"),
      practice: siteJson.homeFooter.practice.map((link, index) =>
        requireLink(link, `site.homeFooter.practice.${index}`),
      ),
      site: siteJson.homeFooter.site.map((link, index) =>
        requireLink(link, `site.homeFooter.site.${index}`),
      ),
    },
    innerFooter: {
      bio: requireText(siteJson.innerFooter.bio, "site.innerFooter.bio"),
      links: siteJson.innerFooter.links.map((link, index) =>
        requireLink(link, `site.innerFooter.links.${index}`),
      ),
    },
  };
}

/**
 * Returns the homepage document.
 */
export function getHomepage() {
  const headline = requireText(homepageJson.headline, "homepage.headline");
  if (homepageJson.points.length !== 3 || homepageJson.changes.length !== 3) {
    throw new Error("Homepage must contain three points and three changes");
  }
  if (homepageJson.proof.length !== 5) {
    throw new Error("Homepage proof ribbon must contain five items");
  }
  return {
    ...homepageJson,
    headline,
    description: requireText(homepageJson.description, "homepage.description"),
  };
}

/**
 * Returns one inner page by its route key.
 */
export function getPage(key: keyof typeof pagesJson): PageDocument {
  const page = pagesJson[key];
  return {
    title: requireText(page.title, `${key}.title`),
    description: requireText(page.description, `${key}.description`),
    eyebrow: requireText(page.eyebrow, `${key}.eyebrow`),
    headline: requireText(page.headline, `${key}.headline`),
    paragraphs: page.paragraphs.map((paragraph, index) =>
      requireText(paragraph, `${key}.paragraphs.${index}`),
    ),
    rows: (page.rows ?? []).map((row, index) => ({
      id: requireText(row.id, `${key}.rows.${index}.id`),
      title: requireText(row.title, `${key}.rows.${index}.title`),
      body: requireText(row.body, `${key}.rows.${index}.body`),
    })),
    links: (page.links ?? []).map((link, index) => requireLink(link, `${key}.links.${index}`)),
  };
}
