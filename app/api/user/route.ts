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
  const user = userMetaData[parseInt(userId)];
  return NextResponse.json({
    status: "success",
    message: "Sucessfully fetched user details",
    data: { ...user },
  });
}
