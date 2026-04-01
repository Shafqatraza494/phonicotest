import { BlogResponseTypes } from "@/lib/types/blog.types";
import { PlansResponseType } from "@/lib/types/plan.types";
import { queryParams } from "@/lib/utils";
import { headers } from "next/headers";

const baseUrl = "https://platform.phonico.com";
const apiKey = "46b01d98-5d6e-4d9e-a3dc-9cc05438ddbc";

export async function getGuestBlogs() {
  try {
    const resp = await fetch(`${baseUrl}/api/landing/blog?${queryParams}`, {
      headers: { "API-KEY": apiKey },
    });
    const data: BlogResponseTypes = await resp.json();

    return data.data;
  } catch (error) {
    console.log("something went wrong");
    return [];
  }
}
