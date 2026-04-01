import { BlogResponseTypes } from "@/lib/types/blog.types";
import { queryParams } from "@/lib/utils";

const baseUrl = "https://platform.phonico.com";
const apiKey = "46b01d98-5d6e-4d9e-a3dc-9cc05438ddbc";

export async function getGuestBlogsSingleCategories(slug: string) {
  try {
    const url = new URL(`${baseUrl}/api/landing/blog`);
    url.searchParams.append("category", slug);
    Object.entries(queryParams).forEach(([key, value]) => {
      url.searchParams.append(key, String(value));
    });
    const resp = await fetch(url, {
      headers: { "API-KEY": apiKey },
    });
    const data: BlogResponseTypes = await resp.json();
    console.log("pp", data);

    return data.data;
  } catch (error) {
    console.log("something went wrong");
    return [];
  }
}
