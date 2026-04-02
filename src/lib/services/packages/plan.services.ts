"use server";

import { Plan, PlansResponseType } from "@/lib/types/plan.types";
import { queryParams } from "@/lib/utils";

const baseUrl = "https://platform.phonico.com";
const apiKey = "46b01d98-5d6e-4d9e-a3dc-9cc05438ddbc";

export async function getGuestPlans() {
  try {
    const url = new URL(`${baseUrl}/api/guest-plans`);
    Object.entries(queryParams).forEach(([key, value]) => {
      url.searchParams.append(key, value as string);
    });

    const response = await fetch(url.toString(), {
      headers: { "API-KEY": apiKey },
    });
    const data: PlansResponseType = await response.json();
    return data.data;
  } catch (error) {
    console.log("something went wrong");
    return [];
  }
}
