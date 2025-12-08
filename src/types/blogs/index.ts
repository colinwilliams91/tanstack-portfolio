/**
 * Dev.to API Types
 * Based on: https://developers.forem.com/api/v1
 */

/**
 * SharedUser - The resource creator
 */
export interface SharedUser {
  name: string;
  username: string;
  twitter_username: string | null;
  github_username: string | null;
  website_url: string | null;
  profile_image: string; // Profile image (640x640)
  profile_image_90: string; // Profile image (90x90)
}

/**
 * ArticleFlareTag - Flare tag of the article
 */
export interface ArticleFlareTag {
  name: string;
  bg_color_hex: string | null; // Background color (hexadecimal)
  text_color_hex: string | null; // Text color (hexadecimal)
}

/**
 * SharedOrganization - The organization the resource belongs to
 */
export interface SharedOrganization {
  name: string;
  username: string;
  slug: string;
  profile_image: string; // Profile image (640x640)
  profile_image_90: string; // Profile image (90x90)
}

/**
 * Article - List response from /articles endpoint
 */
export interface Article {
  type_of: string;
  id: number;
  title: string;
  description: string;
  cover_image: string | null;
  readable_publish_date: string;
  social_image: string;
  tag_list: string[];
  tags: string;
  slug: string;
  path: string;
  url: string;
  canonical_url: string;
  positive_reactions_count: number;
  public_reactions_count: number;
  created_at: string; // ISO 8601 date-time
  edited_at: string | null; // ISO 8601 date-time
  crossposted_at: string | null; // ISO 8601 date-time
  published_at: string; // ISO 8601 date-time
  last_comment_at: string; // ISO 8601 date-time
  published_timestamp: string; // ISO 8601 date-time - Crossposting or published date time
  reading_time_minutes: number; // Reading time, in minutes
  user: SharedUser; // The resource creator
  flare_tag?: ArticleFlareTag; // Flare tag of the article (optional)
  organization?: SharedOrganization; // The organization the resource belongs to (optional)
}

/**
 * ArticleDetail - Detail response from /articles/:id endpoint
 * Extends Article with additional fields including full content
 */
export interface ArticleDetail extends Article {
  body_html: string; // HTML content of the article
  body_markdown: string; // Markdown content of the article
}

/**
 * Legacy type aliases for backward compatibility
 * These map to the new Dev.to API types
 */
export type Blog = Article;
export type BlogDetail = ArticleDetail;
export type Author = SharedUser;
