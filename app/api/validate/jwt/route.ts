import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const token = req.headers.get("authorization")?.split(" ")[1]; // Extract token from Authorization header
    if (!token) {
      return NextResponse.json(
        {
          status: "error",
          message: "Missing token",
        },
        { status: 401 }
      );
    }

    const decoded = await new Promise((resolve, reject) => {
      jwt.verify(
        token,
        process.env.REFRESH_TOKEN_SECRET as string,
        (err, decoded) => {
          if (err) {
            reject(err);
          } else {
            resolve(decoded);
          }
        }
      );
    });

    return NextResponse.json(
      {
        status: "success",
        message: "Verified",
        payload: decoded,
      },
      { status: 200 }
    );
  } catch (err) {
    if (err instanceof jwt.JsonWebTokenError) {
      return NextResponse.json(
        {
          status: "error",
          message: "Invalid token",
        },
        { status: 401 }
      );
    } else {
      console.error("Error processing login request:", err);
      return NextResponse.json(
        {
          status: "error",
          message: "Internal Server Error",
        },
        { status: 500 }
      );
    }
  }
}
