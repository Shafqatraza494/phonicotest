import { otp } from "@/lib/types/otp.types";

const baseUrl = "https://platform.phonico.com";
const apiKey = "46b01d98-5d6e-4d9e-a3dc-9cc05438ddbc";

export async function otpfun(email: string) {
  try {
    const res = await fetch(`${baseUrl}/api/send-otp?email=${email}`, {
      method: "GET",
      headers: {
        "API-KEY": apiKey,
      },
    });

    const data: otp = await res.json();


    return data;
  } catch (error) {
    console.log("OTP not sent", error);
    return null;
  }
}
