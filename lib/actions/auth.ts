"use server";

import { ZodError } from "zod";
import { authFormSchema } from "../utils";

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
    // we're gonna put a delay in here to simulate some kind of data processing like persisting data
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return {
      status: "success",
      message: `Welcome!`,
    };
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
