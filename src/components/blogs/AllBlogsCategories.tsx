"use client";

import { blog } from "@/lib/types/blog.types";
import { category } from "@/lib/types/category.types";
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
    <div className="py-5 px-4 sm:px-6 md:px-10 lg:px-15">

     
      <div className="flex justify-center items-center flex-col py-3">
        <h1 className="font-bold text-[24px]">Categories to Explore</h1>

        <div className="mt-3 rounded-2xl flex justify-center items-center bg-background border border-ring w-full max-w-2xl overflow-x-auto scrollbar-hide">
          <div className="flex gap-3 sm:gap-4 text-[13px] sm:text-[15px] font-bold px-5 py-3 whitespace-nowrap">
            {allcategories.map((Cat: category) => (
              <Link key={Cat.id} href={`/blogs/${Cat.slug}`}>
                <button
                  className={`hover:text-(--btn-pink) cursor-pointer transition-colors
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

     
      <h1 className="text-[24px] font-bold mt-2 capitalize">{type}</h1>

   
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
        {blogData && blogData.length > 0 ? (
          blogData.map((blog: blog, index) => (
            <div
              key={index}
              className="flex flex-col bg-white shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer"
            >
             
              <div className="relative w-full aspect-[3/2] overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

            
              <div className="flex flex-col flex-1 p-4 sm:p-5">

          
                <p className="text-xs text-(--btn-pink) font-bold">
                  {blog.blog_category.slug}
                </p>

               
                <Link href={`/blogs/${blog.blog_category.slug}/${blog.slug}`}>
                  <div className="flex items-start justify-between gap-2 mt-2 group">
                    <h3 className="font-bold text-[20px] leading-snug group-hover:text-(--btn-pink) transition-colors">
                      {blog.name}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 shrink-0 mt-1 group-hover:text-(--btn-pink) transition-colors" />
                  </div>
                </Link>

               
                <p className="mt-3 text-sm text-ring line-clamp-3 leading-relaxed">
                  {blog.description}
                </p>

               
                <div className="mt-auto pt-5 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="relative w-9 h-9 shrink-0">
                      <Image
                        src={blog.author_image}
                        alt={blog.author_name}
                        fill
                        className="rounded-full object-cover"
                        sizes="36px"
                      />
                    </div>
                    <p className="text-sm font-medium truncate">{blog.author_name}</p>
                  </div>
                  <p className="text-xs text-ring shrink-0">{blog.created_at}</p>
                </div>

              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full mt-4 p-5 bg-white shadow-sm text-sm text-ring">
            No Blog Found
          </div>
        )}
      </div>

    </div>
  );
}

export default AllBlogsCategories;