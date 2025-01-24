import NextAuth from "next-auth";
import { UserRole } from "@prisma/client";
import { PrismaAdapter } from "@auth/prisma-adapter";

import { db } from "@/lib/db";
import authConfig from "@/auth.config";
import { getUserById } from "@/data/user";
import { getTwoFactorConfirmationByUserId } from "@/data/two-factor-confirmation";
import { getAccountByUserId } from "./data/account";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
  },
  events: {
    async linkAccount({ user }) {
      if (!user?.id) throw new Error("User ID is undefined");
      await db.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() },
      });
    },
  },
  callbacks: {
    async signIn({ user, account }) {
      if (!user?.id) return false;

      if (account?.provider !== "credentials") return true;

      const existingUser = await getUserById(user.id);

      if (!existingUser?.emailVerified) return false;

      if (existingUser.isTwoFactorEnabled) {
        const twoFactorConfirmation = await getTwoFactorConfirmationByUserId(existingUser.id);

        if (!twoFactorConfirmation) return false;

        await db.twoFactorConfirmation.delete({
          where: { id: twoFactorConfirmation.id },
        });
      }

      return true;
    },
    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
        session.user.name = token.name ?? "Unknown";
        session.user.email = token.email ?? "Unknown";

        // Ensure isOAuth is always a boolean
        session.user.isOAuth = token.isOAuth === undefined ? false : Boolean(token.isOAuth);

        // Ensure isTwoFactorEnabled is always a boolean
        session.user.isTwoFactorEnabled = token.isTwoFactorEnabled === undefined ? false : Boolean(token.isTwoFactorEnabled);

        session.user.role = (token.role as UserRole) ?? "user";
      }
      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;

      const existingUser = await getUserById(token.sub);

      if (!existingUser) return token;

      const existingAccount = await getAccountByUserId(existingUser.id);

      // Ensure isOAuth is always a boolean
      token.isOAuth = !!existingAccount;

      // Ensure isTwoFactorEnabled is always a boolean
      token.isTwoFactorEnabled = existingUser.isTwoFactorEnabled === undefined ? false : Boolean(existingUser.isTwoFactorEnabled);

      token.name = existingUser.name ?? "Unknown";
      token.email = existingUser.email ?? "Unknown";
      token.role = existingUser.role ?? "user";

      return token;
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});
