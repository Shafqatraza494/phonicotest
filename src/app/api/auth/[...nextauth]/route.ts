import { loginServices } from "@/lib/services/auth/auth.services";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials?.password) {
            throw new Error("Email & Password required");
          }

          const data = await loginServices(
            credentials.email,
            credentials.password,
          );

          const currentUser = data?.user;

          if (!currentUser) {
            throw new Error("User not found");
          }

          return {
            id: String(currentUser.id),
            name: currentUser.name,
            email: currentUser.email,
            accessToken: data.access_token,
            fullUser: currentUser,
          };
        } catch (err: any) {
          throw new Error(err.message || "Login failed");
        }
      },
    }),
  ],


  secret: process.env.NEXTAUTH_SECRET,

 
  pages: {
    signIn: "/login",  
  },

  session: {
    strategy: "jwt" as const,
  },

  callbacks: {
    async jwt({ token, user }: { token: any; user?: any }) {
      if (user) {
        token.user = user;
        token.accessToken = (user as any).accessToken;
      }
      return token;
    },

    async session({ session, token }: { session: any; token: any }) {
      session.user = token.user as any;
      session.accessToken = token.accessToken as string;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
