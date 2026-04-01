import { BlogResponseTypes } from "@/lib/types/blog.types";
import { PlansResponseType } from "@/lib/types/plan.types";
import { queryParams } from "@/lib/utils";
import { headers } from "next/headers";

const baseUrl = "https://platform.phonico.com";
const apiKey = "46b01d98-5d6e-4d9e-a3dc-9cc05438ddbc";

export async function getGuestBlogsCategories() {
  try {
    const url = new URL(`${baseUrl}/api/landing/blog-category`);
    Object.entries(queryParams).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });
    const resp = await fetch(url, {
      headers: { "API-KEY": apiKey },
    });
    const data: BlogResponseTypes = await resp.json();
    console.log("mm", data);

    return data.data;
  } catch (error) {
    console.log("something went wrong");
    return [];
  }
}
