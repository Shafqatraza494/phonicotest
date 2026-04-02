import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

async function sendOtpApi(email: string) {
  const res = await fetch("/api/send-otp", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  if (!res.ok) {
    throw new Error("OTP not sent");
  }

  const data = await res.json();
  return data;
}

export const useSendOtp = () => {
  return useMutation({
    mutationFn: sendOtpApi,
    onSuccess: (data) => {
      toast.success("OTP sent successfully");
      console.log("OTP Response:", data); // testing ke liye
    },
    onError: (error: any) => {
      toast.error(error.message || "Something went wrong");
    },
  });
};
