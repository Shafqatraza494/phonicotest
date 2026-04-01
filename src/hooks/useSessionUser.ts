import { useQuery } from "@tanstack/react-query";
import { getSession } from "next-auth/react";

export const useSessionUser = () => {
  return useQuery({
    queryKey: ["session"],
    queryFn: async () => {
      const session = await getSession();
      if (!session) throw new Error("No session");
      return session.user;
    },
  });
};
