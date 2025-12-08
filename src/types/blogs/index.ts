
export interface Blog {
  id: number;
  title: string;
  description: string;
  coverImage?: string;
  publishedAt: string;
  tags: string[];
  content: string;
  author: {
    name: string;
    profileImage: string;
  };
}
