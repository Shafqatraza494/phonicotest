export interface category {
  id: string;
  name: string;
  parent: null;
  created_at: string;
  updated_at: string;
  slug?: string;
}

export interface blog {
  id: string;
  blog_category_id: string;
  slug: string;
  posted_by: string;
  author_name: string;
  author_image: string;
  name: string;
  sub_content: string;
  description: string;
  content: string;
  image: string;
  publish: number;
  created_at: string;
  updated_at: string;
  keywords: string;
  thumbnail: string;
  other_slugs: string;
  blog_category: category;
  created_at_diff_for_humans: string;
}

export type BlogResponseTypes = {
  status: boolean;
  data: blog[];
};
