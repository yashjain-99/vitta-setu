import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.toString() === "/") {
    const refreshToken = cookies().get("refreshToken")?.value;
    const verifiedJwtResponse = await fetch(
      `${process.env.DEV_URL}/api/validate/jwt`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${refreshToken}`,
        },
      }
    );

    if (verifiedJwtResponse.ok) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/login"],
};
