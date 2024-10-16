import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  try {
    // Check if the environment variable is set and valid
    const tokenName = process.env.NEXT_PUBLIC_TOKEN_NAME;
    if (!tokenName) {
      throw new Error("Token name not defined in environment variables");
    }

    // Safely retrieve the token from cookies
    const token = request?.cookies?.get(tokenName);

    if (!token && request.nextUrl.pathname.startsWith("/dashboard")) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

  } catch (e) {
    console.log("There's an error in middleware: ", e);
  }
}

export const config = {
  matcher: ["/dashboard/:path*", "/login"],
};
