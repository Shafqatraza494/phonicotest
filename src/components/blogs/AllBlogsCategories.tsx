"use client";

import { blog, BlogResponseTypes } from "@/lib/types/blog.types";
import { category, CategoryResponseTypes } from "@/lib/types/category.types";
import { ArrowUpRight } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
interface blogprops {
  type: string;
  allcategories: category[];
  blogData: blog[];
}

export interface BlogPost {
  id: number;
  title: string;
  description: string;
  category: string;
  author: string;
  date: string;
  image: string;
  authorImage: string;
  slug: string;
  allcategories: category[];
}

function AllBlogsCategories({ type, allcategories, blogData }: blogprops) {
  return (
    <>
      <div className="py-5 md:px-15  px-3">
        <div className="flex justify-center items-center flex-col py-3">
          <h1 className="font-bold text-[24px]">Categories to Explore</h1>
          <div className="h-15 mt-3 rounded-2xl flex justify-center items-center w-130 bg-background border border-ring ">
            <div className="gap-4 flex text-[15px] font-bold  ">
              {allcategories.map((Cat: category) => (
                <Link key={Cat.id} href={`/blogs/${Cat.slug}`}>
                  <button
                    className={`hover:text-(--btn-pink) cursor-pointer
                    ${type === Cat.slug.toLowerCase()
                        ? "text-pink-500"
                        : "text-foreground"
                      }`}
                  >
                    {Cat.name}
                  </button>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-[24px] font-bold">{type}</h1>
        </div>
        <div className="flex flex-wrap">
          {blogData ? (
            blogData.map((blog: blog, index) => (
              <div
                key={index}
                className="mt-8 p-5 cursor-pointer w-90  ml-5 bg-white shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                {/* Image */}
                <div className="relative w-full h-60 overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.name}
                    height={240}
                    width={362}
                    className="object-cover "
                  />
                </div>

                {/* Content */}
                <div>
                  {/* Category */}
                  <p className="text-xs text-(--btn-pink) font-bold ">
                    {blog.blog_category.slug}
                  </p>

                  {/* Title + Arrow */}
                  <Link href={`/blogs/${blog.blog_category.slug}/${blog.slug}`}>
                    <div className="flex   ">
                      <h3 className="font-bold text-[22px]  mt-2">{blog.name}</h3>


                      <ArrowUpRight className="w-17 h-15 hover:text-(--btn-pink) " />
                    </div>
                  </Link>
                  {/* Description */}
                  <p className="mt-3 text-sm text-ring ">{blog.description}</p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-5">
                    <div className="flex items-center gap-3">
                      <Image
                        src={blog.author_image}
                        alt={blog.author_name}
                        width={36}
                        height={36}
                        className="rounded-full object-cover"
                      />
                      <p className="text-sm font-medium ">{blog.author_name}</p>
                    </div>
                  </div>
                  <div className="mt-4 ml-3 text-ring">
                    <p className="text-xs ">{blog.created_at}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="mt-8 p-5 cursor-pointer w-90  ml-5 bg-white shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
              No Blog Found
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default AllBlogsCategories;
