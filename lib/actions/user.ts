"use server";
import { cookies } from "next/headers";

export type userDetails = {
  id?: number;
  firstName?: string;
  lastName?: string;
  email?: string;
  status: "success" | "error";
  message?: string;
} | null;

export async function loggedInUserDetails(): Promise<userDetails> {
  try {
    const refreshToken = cookies().get("refreshToken")?.value;
    if (refreshToken) {
      const { userId } = JSON.parse(atob(refreshToken.split(".")[1]));
      const res = await fetch(
        `${process.env.DEV_URL}/api/user?userId=${userId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${refreshToken}`,
          },
        }
      );
      const result = await res.json();
      return { status: "success", ...result };
    } else {
      throw "token not found";
    }
  } catch (e) {
    return {
      status: "error",
      message: "Something went wrong. Please try again.",
    };
  }
}
