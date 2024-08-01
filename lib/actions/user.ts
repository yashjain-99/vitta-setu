"use server";
import { cookies } from "next/headers";

type UserDetails = APIResponse<UserProfile>;

export async function loggedInUserId(): Promise<number | null> {
  const refreshToken = cookies().get("refreshToken")?.value;
  if (refreshToken) {
    const { userId } = JSON.parse(atob(refreshToken.split(".")[1]));
    return userId;
  }
  return null;
}

export async function loggedInUserDetails(): Promise<UserDetails> {
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
      return result;
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
