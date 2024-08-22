import GithubProvider from "next-auth/providers/github";
import GlogleProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GlogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
};
