import { useMutation } from "@tanstack/react-query";
import { signIn } from "next-auth/react";

export const useLogin = () => {
  return useMutation({
    mutationFn: async ({
      email,
      password,
    }: {
      email: string;
      password: string;
    }) => {
      const res = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (res?.error) throw new Error(res.error);

      return res;
    },
  });
};
