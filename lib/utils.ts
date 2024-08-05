import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { z } from "zod";

import qs from "query-string";
import { CARD_TYPE, PAGINATION_DEFAULT } from "@/constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const authFormSchema = (type: string) =>
  z.object({
    // login
    firstName:
      type === "login"
        ? z.string().optional()
        : z.string().min(3, {
            message: "First name must be at least 3 characters long.",
          }),
    lastName:
      type === "login"
        ? z.string().optional()
        : z.string().min(3, {
            message: "Last name must be at least 3 characters long.",
          }),
    address1:
      type === "login"
        ? z.string().optional()
        : z.string().max(50, {
            message: "Address must be less than or equal to 50 characters.",
          }),
    city:
      type === "login"
        ? z.string().optional()
        : z.string().max(50, {
            message: "City must be less than or equal to 50 characters.",
          }),
    state:
      type === "login"
        ? z.string().optional()
        : z
            .string()
            .length(2, { message: "State must be exactly 2 characters long." }),
    postalCode:
      type === "login"
        ? z.string().optional()
        : z
            .string()
            .min(3, {
              message: "Postal code must be at least 3 characters long.",
            })
            .max(6, {
              message:
                "Postal code must be less than or equal to 6 characters.",
            }),
    dateOfBirth:
      type === "login"
        ? z.string().optional()
        : z.string().regex(/^\d{4}-\d{2}-\d{2}$/, {
            message: "Date of Birth must be in YYYY-MM-DD format.",
          }),
    pan:
      type === "login"
        ? z.string().optional()
        : z.string().regex(/^[A-Z]{5}[0-9]{4}[A-Z]$/, {
            message: "PAN must be in the format AAAAA9999A.",
          }),
    password:
      type === "login"
        ? z.string()
        : z
            .string()
            .min(8, { message: "Password must be at least 8 characters long." })
            .regex(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
              {
                message:
                  "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
              }
            ),
    // both
    email: z.string().email({ message: "Invalid email address." }),
  });

interface UrlQueryParams {
  params: string;
  key: string;
  value: string;
}

export function formUrlQuery({ params, key, value }: UrlQueryParams) {
  const currentUrl = qs.parse(params);

  currentUrl[key] = value;

  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: currentUrl,
    },
    { skipNull: true }
  );
}

export const calculatePageFromStart = (start: number): number => {
  return Math.ceil(start / PAGINATION_DEFAULT.count);
};

export const getCardType = (cardNumber: string): CARD_TYPE => {
  if (/^4/.test(cardNumber)) {
    return CARD_TYPE.VISA;
  } else if (
    /^5[1-5]/.test(cardNumber) ||
    /^2(22[1-9]|2[3-9][0-9]|[3-6][0-9]{2}|7([01][0-9]|20))/.test(cardNumber)
  ) {
    return CARD_TYPE.MASTERCARD;
  } else if (/^(60|65|81|82)/.test(cardNumber)) {
    return CARD_TYPE.RUPAY;
  } else {
    return CARD_TYPE.OTHER;
  }
};

export const formatCardNumber = (cardNumber: string): string => {
  return cardNumber.match(/.{1,4}/g)?.join(" ") ?? "";
};
