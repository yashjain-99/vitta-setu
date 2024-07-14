import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (["/api/login", "/api/validate/jwt"].includes(pathname)) {
    return NextResponse.next();
  }

  const refreshToken =
    request.headers.get("authorization")?.split(" ")[1] ||
    cookies().get("refreshToken")?.value;
  if (!refreshToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  const verifiedJwtResponse = await fetch(
    `${process.env.DEV_URL}/api/validate/jwt`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${refreshToken}`,
      },
    }
  );

  if (!verifiedJwtResponse.ok) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/:path*", "/", "/my-banks", "/transaction-history"],
};
