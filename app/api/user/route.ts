import { userMetaData } from "@/store";
import { NextResponse, type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const userId = searchParams.get("userId");
  if (!userId) {
    return NextResponse.json(
      {
        status: "error",
        message: "Bad request",
      },
      {
        status: 400,
      }
    );
  }
  const verifiedJwtResponse = await fetch(
    `${process.env.DEV_URL}/api/validate/jwt`,
    {
      headers: request.headers,
    }
  );
  if (!verifiedJwtResponse.ok) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  const user = userMetaData[parseInt(userId)];
  return NextResponse.json(user);
}
