"use server";

import { Plan, PlansResponseType } from "@/lib/types/plan.types";
import { queryParams } from "@/lib/utils";

// export const getGuestPlans = async () => {
//   try {
//     // Build the URL with query params
//     const url = new URL(`${process.env.NEXT_PUBLIC_BASE_API}/api/guest-plans`);

//     Object.entries(queryParams).forEach(([key, value]) => {
//       url.searchParams.append(key, value as string);
//     });

//     // Call the API
//     const response = await fetch(url.toString(), {
//       headers: {
//         "API-KEY": process.env.NEXT_PUBLIC_API_KEY,
//       },
//     });

//     if (!response.ok) {
//       throw new Error("Failed to fetch guest plans");
//     }

//     const data = await response.json();
//     return data.data;
//   } catch (error) {
//     console.error("Error fetching plans:", error);
//     return [];
//   }
// };

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
    console.log("somet5hing went wrong");
    return [];
  }
}
