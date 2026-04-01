import AllBlogsCategories from "@/components/blogs/AllBlogsCategories";
import Hero from "@/components/blogs/Hero";
import { getGuestBlogsCategories } from "@/lib/services/blogs/blog-categories.services";
import { getGuestBlogsSingleCategories } from "@/lib/services/blogs/blog-single-category.services";
import type { category } from "@/lib/types/category.types";

type PageProps = {
  params: {
    slug: string;
  };
};

export default async function BlogSection({ params }: PageProps) {
  const { slug } = await params;
  const singlecatablog = await getGuestBlogsSingleCategories(slug);
  const allcataBlogs = await getGuestBlogsCategories();
  const allcata: category[] = allcataBlogs.map((blog) => ({
    id: blog.id,
    name: blog.name,
    parent: null,
    created_at: blog.created_at,
    updated_at: blog.updated_at,
    slug: blog.slug,
  }));

  return (
    <>
      <div className="container">
        <div className="">
          <Hero />
          <AllBlogsCategories
            type={slug}
            allcategories={allcata}
            blogData={singlecatablog}
          />
        </div>
      </div>
    </>
  );
}
