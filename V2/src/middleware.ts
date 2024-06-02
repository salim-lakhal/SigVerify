import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export default clerkMiddleware(() => {
  return NextResponse.next();
});

// This is the configuration for the middleware matcher
export const config = {
  matcher: "/api/:path*", // This will apply the middleware to all API routes
};
