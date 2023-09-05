import { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import VkProvider from "next-auth/providers/vk";

export const authOptions: AuthOptions = {
  providers: [
    GithubProvider({
      clientId: "facf0a94402ae5458a87",
      clientSecret: "8cb8c45415cf39e0e29d3ea0398481618c04e9ed",
    }),
    VkProvider({
      clientId: "51735737",
      clientSecret: "SZJhUq3TeB6C0RZBBrov",
    }),
  ],
};
