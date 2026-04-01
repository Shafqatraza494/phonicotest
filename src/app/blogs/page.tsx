import AllBlogsCategories from "@/components/blogs/AllBlogsCategories";
import Hero from "@/components/blogs/Hero";
import { getGuestBlogsCategories } from "@/lib/services/blogs/blog-categories.services";
import { getGuestBlogs } from "@/lib/services/blogs/blogs.services";

export default async function page() {
  const allblogs = await getGuestBlogs();
  const allcategories = await getGuestBlogsCategories();

  return (
    <>
      <div className="container">
        <div className="">
          <Hero />
          <AllBlogsCategories
            type="All blogs"
            blogData={allblogs}
            allcategories={allcategories}
          />
        </div>
      </div>
    </>
  );
}
