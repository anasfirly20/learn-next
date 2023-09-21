import middleware from "next-auth/middleware";

export default middleware;

export const config = {
  // *: zero or more
  // +: one or more
  // ?: one or zero
  matcher: ["/users/:id*"],
};
