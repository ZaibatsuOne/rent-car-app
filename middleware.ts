export { default } from "next-auth/middleware";

export const config = { matcher: ["/favorite", "/billing/:path*"] };
