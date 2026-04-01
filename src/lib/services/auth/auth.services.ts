// Fixed auth.services.ts
import { LoginResponseType } from "@/lib/types/login.types";
import { otp } from "@/lib/types/otp.types";

const baseUrl = "https://platform.phonico.com";
const apiKey = "46b01d98-5d6e-4d9e-a3dc-9cc05438ddbc";

export async function loginServices(email: string, password: string) {
  try {
    const resp = await fetch(`${baseUrl}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data: LoginResponseType = await resp.json();

    if (!resp.ok) {
      throw new Error("Login failed");
    }

    return data;
  } catch (error: any) {
    throw new Error(error.message || "Something went wrong");
  }
}
//////////////////////////////////////////////////////////////

export async function otpService(email: string): Promise<otp> {
  try {
    const resp = await fetch(`${baseUrl}/api/send-otp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await resp.json();

    return {
      status: data.status === true || data.status === "true",
      message: data.message || "No message",
      errors: data.errors || [],
    };
  } catch (error) {
    console.log("otp not send");

    return {
      status: false,
      message: "Something went wrong",
      errors: ["Server error"],
    };
  }
}

////////////////////////////////////////////////////////////////

export async function registerServices(
  email: string,
  password: string,
  otp: string,
  name: string,
) {
  try {
    const resp = await fetch(`${baseUrl}/api/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, otp, name }),
    });

    if (!resp.ok) {
      throw new Error("Registration failed");
    }

    const data = await resp.json();

    console.log("register success", data);

    return data;
  } catch (error: any) {
    console.log("register error:", error.message);

    return {
      success: false,
      message: error.message,
    };
  }
}
