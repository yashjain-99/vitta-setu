"use server";

import { ZodError } from "zod";
import { authFormSchema } from "../utils";
import { cookies } from "next/headers";
import cookie from "cookie";

export type State = {
  status: "success" | "error";
  message: string;
} | null;

export async function dummyAuthAction(
  prevState: State | null,
  data: FormData,
  type: string
): Promise<State> {
  try {
    const formSchema = authFormSchema(type);
    const formDataObject = Object.fromEntries(data);
    formSchema.parse(formDataObject);

    // Simulate some kind of data processing like persisting data
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const res = await fetch(`${process.env.URL}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Corrected Content-Type header
      },
      body: JSON.stringify({
        email: formDataObject["email"],
        password: formDataObject["password"],
      }),
    });

    const result = await res.json();
    if (res.ok) {
      const setCookieHeader = res.headers.get("Set-Cookie");
      if (setCookieHeader) {
        const parsedCookies = cookie.parse(setCookieHeader);
        const refreshToken = parsedCookies["refreshToken"];
        if (refreshToken) {
          cookies().set("refreshToken", refreshToken, {
            httpOnly: true,
            sameSite: true,
            maxAge: 60 * 60 * 24,
            path: "/",
          });
        }
      }
      return {
        status: "success",
        message: result.message || "Login successful",
      };
    } else {
      return {
        status: "error",
        message: result.message || "Login failed",
      };
    }
  } catch (e) {
    if (e instanceof ZodError) {
      return {
        status: "error",
        message: "Invalid form data",
      };
    }
    return {
      status: "error",
      message: "Something went wrong. Please try again.",
    };
  }
}
