import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { z } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const authFormSchema = (type: string) =>
  z.object({
    // login
    firstName: type === "login" ? z.string().optional() : z.string().min(3),
    lastName: type === "login" ? z.string().optional() : z.string().min(3),
    address1: type === "login" ? z.string().optional() : z.string().max(50),
    city: type === "login" ? z.string().optional() : z.string().max(50),
    state: type === "login" ? z.string().optional() : z.string().min(2).max(2),
    postalCode:
      type === "login" ? z.string().optional() : z.string().min(3).max(6),
    dateOfBirth: type === "login" ? z.string().optional() : z.string().min(3),
    ssn: type === "login" ? z.string().optional() : z.string().min(3),
    // both
    email: z.string().email(),
    password: z.string().min(8),
  });
