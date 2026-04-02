import Image from "next/image";
import React from "react";

async function page({ params }: any) {
    const { slug, blogDetails } = await params;

    const resp = await fetch(
        `https://platform.phonico.com/api/landing/blog/${blogDetails}`
    );
    const data = await resp.json();
    const blog = data?.data;

    return (
        <div className=" mx-auto px-5 md-px-15  py-8 font-sans text-gray-900">

           
            <div className="w-full rounded-xl overflow-hidden mb-6">
                <Image
                    src={blog?.image || "/details.webp"}
                    height={696}
                    width={1116}
                    alt={blog?.name || "Blog Image"}
                    className="w-full object-cover"
                />
            </div>

         
            <div className="flex items-center gap-3 mb-6">
                {blog?.author_image ? (
                    <Image
                        src={blog.author_image}
                        width={36}
                        height={36}
                        alt={blog.author_name}
                        className="w-9 h-9 rounded-full object-cover"
                    />
                ) : (
                    <div className="w-9 h-9 rounded-full bg-pink-500 flex items-center justify-center text-white font-bold text-sm">
                        {blog?.author_name?.charAt(0) || "A"}
                    </div>
                )}
                <span className="font-semibold text-gray-800 text-sm">
                    {blog?.author_name}
                </span>
                <span className="text-gray-400 text-sm ml-auto">
                    {blog?.created_at_diff_for_humans}
                </span>
            </div>

          
            <div
                className="
          prose prose-gray max-w-none
          prose-h1:text-3xl prose-h1:font-bold prose-h1:text-gray-900 prose-h1:mb-4 prose-h1:mt-0
          prose-h2:text-2xl prose-h2:font-bold prose-h2:text-gray-900 prose-h2:mt-8 prose-h2:mb-3
          prose-h3:text-xl prose-h3:font-bold prose-h3:text-gray-900 prose-h3:mt-6 prose-h3:mb-2
          prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-3
          prose-ul:list-disc prose-ul:pl-5 prose-ul:text-gray-700 prose-ul:space-y-1 prose-ul:mb-4
          prose-li:text-gray-700
          prose-a:text-pink-500 prose-a:underline prose-a:font-medium
          prose-strong:font-semibold prose-strong:text-gray-900
        "
                dangerouslySetInnerHTML={{ __html: blog?.content }}
            />
        </div>
    );
}

export default page;