import { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import VkProvider from "next-auth/providers/vk";

export const authOptions: AuthOptions = {
  providers: [
    GithubProvider({
      clientId: "7ef86fe57c6ab8dfa042",
      clientSecret: "d38be3e740dbbc840f9bcdc190679a79dff6a384",
    }),
    VkProvider({
      clientId: "51735737",
      clientSecret: "SZJhUq3TeB6C0RZBBrov",
    }),
  ],
};
