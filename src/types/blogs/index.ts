/**
 * Dev.to API Types
 * Based on: https://developers.forem.com/api/v1
 */

/**
 * SharedUser - The resource creator
 * From Dev.to API SharedUser schema
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
 * From Dev.to API ArticleFlareTag schema
 */
export interface ArticleFlareTag {
  name: string;
  bg_color_hex: string | null; // Background color (hexadecimal)
  text_color_hex: string | null; // Text color (hexadecimal)
}

/**
 * SharedOrganization - The organization the resource belongs to
 * From Dev.to API SharedOrganization schema
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
 * From Dev.to API Article schema
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
 * Inferred from Dev.to API example response
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

// Original comment sections preserved for reference:
/*
Array
type_of
required
string

id
required
integer <int32>

title
required
string

description
required
string

cover_image
required
string or null <url>

readable_publish_date
required
string

social_image
required
string <url>

tag_list
required
Array of strings

tags
required
string

slug
required
string

path
required
string <path>

url
required
string <url>

canonical_url
required
string <url>

positive_reactions_count
required
integer <int32>

public_reactions_count
required
integer <int32>

created_at
required
string <date-time>

edited_at
required
string or null <date-time>

crossposted_at
required
string or null <date-time>

published_at
required
string <date-time>

last_comment_at
required
string <date-time>

published_timestamp
required
string <date-time>
Crossposting or published date time

reading_time_minutes
required
integer <int32>
Reading time, in minutes

user
required
object (SharedUser)
The resource creator

flare_tag
object (ArticleFlareTag)
Flare tag of the article

organization
object (SharedOrganization)
The organization the resource belongs to
*/

// User (SharedUser)
/*
name
string

username
string

twitter_username
string or null

github_username
string or null

website_url
string or null <url>

profile_image
string
Profile image (640x640)

profile_image_90
string
Profile image (90x90)
*/

// Flare Tag (ArticleFlareTag)
/*
name
string

bg_color_hex
string or null
Background color (hexadecimal)

text_color_hex
string or null
Text color (hexadecimal)
*/

// Organization (SharedOrganization)
/*
name
string

username
string

slug
string

profile_image
string <url>
Profile image (640x640)

profile_image_90
string <url>
Profile image (90x90)
*/

// Example of List (endpoint: /articles) response
/*
[
  {
    "type_of": "article",
    "id": 254,
    "title": "All the King's Men175",
    "description": "Typewriter crucifix forage. Pug put a bird on it art party taxidermy asymmetrical xoxo. Sustainable...",
    "readable_publish_date": "Apr 14",
    "slug": "all-the-kings-men175-794",
    "path": "/username387/all-the-kings-men175-794",
    "url": "http://localhost:3000/username387/all-the-kings-men175-794",
    "comments_count": 0,
    "public_reactions_count": 0,
    "collection_id": null,
    "published_timestamp": "2023-04-14T14:45:32Z",
    "positive_reactions_count": 0,
    "cover_image": "http://localhost:3000/assets/36-83d24fbff858b9dd4035d1e7d2df14090946ae4fed631055fc1d5862e7018348.png",
    "social_image": "http://localhost:3000/assets/36-83d24fbff858b9dd4035d1e7d2df14090946ae4fed631055fc1d5862e7018348.png",
    "canonical_url": "http://localhost:3000/username387/all-the-kings-men175-794",
    "created_at": "2023-04-14T14:45:32Z",
    "edited_at": null,
    "crossposted_at": null,
    "published_at": "2023-04-14T14:45:32Z",
    "last_comment_at": "2023-04-14T14:45:32Z",
    "reading_time_minutes": 1,
    "tag_list": [
      "discuss"
    ],
    "tags": "discuss",
    "user": {
      "name": "Versie \"Luana\" \\:/ Runolfsson",
      "username": "username387",
      "twitter_username": "twitter387",
      "github_username": "github387",
      "user_id": 1308,
      "website_url": null,
      "profile_image": "/uploads/user/profile_image/1308/dfa25219-dfea-4d9a-93ec-403a5f51a29e.jpeg",
      "profile_image_90": "/uploads/user/profile_image/1308/dfa25219-dfea-4d9a-93ec-403a5f51a29e.jpeg"
    },
    "organization": {
      "name": "Ledner, Jaskolski and Bednar",
      "username": "org70",
      "slug": "org70",
      "profile_image": "/uploads/organization/profile_image/295/216d3fb5-bd3c-459a-a9d8-572e8332fd88.png",
      "profile_image_90": "/uploads/organization/profile_image/295/216d3fb5-bd3c-459a-a9d8-572e8332fd88.png"
    },
    "flare_tag": {
      "name": "discuss",
      "bg_color_hex": "#000000",
      "text_color_hex": "#ffffff"
    }
  }
]
*/

/**
 * The detailed article (endpoint: /articles/:id) response is similar but includes additional fields such as the full content of the article.
 * (Schema not included, please infer from below example)
 */

// Example of Detail (endpoint: /articles/:id) response
/*
{
  "type_of": "article",
  "id": 258,
  "title": "Pale Kings and Princes179",
  "description": "Etsy you probably haven't heard of them carry humblebrag 90's try-hard. Distillery asymmetrical...",
  "readable_publish_date": "Apr 14",
  "slug": "pale-kings-and-princes179-381c",
  "path": "/username391/pale-kings-and-princes179-381c",
  "url": "http://localhost:3000/username391/pale-kings-and-princes179-381c",
  "comments_count": 0,
  "public_reactions_count": 0,
  "collection_id": null,
  "published_timestamp": "2023-04-14T14:45:32Z",
  "positive_reactions_count": 0,
  "cover_image": "http://localhost:3000/assets/19-ed58d3e8defcefc445020631589697a05e725243e834b5192aee4e6b91a3e927.png",
  "social_image": "http://localhost:3000/assets/19-ed58d3e8defcefc445020631589697a05e725243e834b5192aee4e6b91a3e927.png",
  "canonical_url": "http://localhost:3000/username391/pale-kings-and-princes179-381c",
  "created_at": "2023-04-14T14:45:32Z",
  "edited_at": null,
  "crossposted_at": null,
  "published_at": "2023-04-14T14:45:32Z",
  "last_comment_at": "2023-04-14T14:45:32Z",
  "reading_time_minutes": 1,
  "tag_list": "discuss",
  "tags": [
    "discuss"
  ],
  "body_html": "<p>Etsy you probably haven't heard of them carry humblebrag 90's try-hard. Distillery asymmetrical godard trust fund quinoa pug paleo. Letterpress green juice plaid.</p>\n\n<p>Organic +1 pour-over banh mi disrupt listicle. Cronut offal flexitarian twee health poutine cred. Hashtag godard church-key etsy put a bird on it.</p>\n\n",
  "body_markdown": "---\ntitle: Pale Kings and Princes179\npublished: true\ntags: discuss\ndate: \nseries: \ncanonical_url: \n\n---\n\nEtsy you probably haven't heard of them carry humblebrag 90's try-hard. Distillery asymmetrical godard trust fund quinoa pug paleo. Letterpress green juice plaid.\n\n\nOrganic +1 pour-over banh mi disrupt listicle. Cronut offal flexitarian twee health poutine cred. Hashtag godard church-key etsy put a bird on it.\n\n",
  "user": {
    "name": "Val \"Antonina\" \\:/ Gleichner",
    "username": "username391",
    "twitter_username": "twitter391",
    "github_username": "github391",
    "user_id": 1312,
    "website_url": null,
    "profile_image": "/uploads/user/profile_image/1312/2eec3cd5-e7fe-42ac-bbfa-27c84d847596.jpeg",
    "profile_image_90": "/uploads/user/profile_image/1312/2eec3cd5-e7fe-42ac-bbfa-27c84d847596.jpeg"
  },
  "flare_tag": {
    "name": "discuss",
    "bg_color_hex": "#000000",
    "text_color_hex": "#ffffff"
  }
}
*/