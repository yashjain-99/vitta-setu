import { refreshTokens, users } from "@/store";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        {
          status: "error",
          message: "Email and password are required",
        },
        { status: 400 }
      );
    }

    const user = users.find((u) => u.email === email);

    if (!user) {
      return NextResponse.json(
        {
          status: "error",
          message: "Invalid email or password",
        },
        { status: 401 }
      );
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return NextResponse.json(
        {
          status: "error",
          message: "Invalid email or password",
        },
        { status: 401 }
      );
    }

    const payload = {
      userId: user.id,
      email: user.email,
    };

    const accessToken = jwt.sign(
      payload,
      process.env.ACCESS_TOKEN_SECRET as string,
      {
        expiresIn: 60 * 2, // 2 minutes
      }
    );

    const refreshToken = jwt.sign(
      payload,
      process.env.REFRESH_TOKEN_SECRET as string,
      {
        expiresIn: "1d",
      }
    );

    refreshTokens[user.id] = refreshToken;

    const response = NextResponse.json(
      {
        status: "success",
        message: "Good to go!",
        accessToken,
      },
      { status: 200 }
    );

    response.headers.set("Set-Cookie", `refreshToken=${refreshToken}`);

    return response;
  } catch (error) {
    console.error("Error processing login request:", error);
    return NextResponse.json(
      {
        status: "error",
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
