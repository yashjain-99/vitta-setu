import { AiFillHome } from "react-icons/ai";
import { FaUniversity, FaHistory, FaMoneyCheckAlt } from "react-icons/fa"; // import additional icons
import React from "react";

export const SIDEBAR_FIELDS: SidebarFieldItem[] = [
  {
    label: "Home",
    icon: React.createElement(AiFillHome),
    route: "/",
  },
  {
    label: "My banks",
    icon: React.createElement(FaUniversity),
    route: "/my-banks",
  },
  {
    label: "Transaction History",
    icon: React.createElement(FaHistory),
    route: "/transaction-history",
  },
  {
    label: "Payment transfer",
    icon: React.createElement(FaMoneyCheckAlt),
    route: "/payment-transfer",
  },
];

export const FILTER_OPTIONS = Object.freeze([
  {
    id: 1,
    value: "Sort ascending",
  },
  {
    id: 2,
    value: "Sort descending",
  },
  {
    id: 3,
    value: "Show credits",
  },
  {
    id: 4,
    value: "Show debits",
  },
  {
    id: 5,
    value: "Last 7 days",
  },
  {
    id: 6,
    value: "Last 30 days",
  },
  {
    id: 7,
    value: "Amount > 1000",
  },
  {
    id: 8,
    value: "Amount < 100",
  },
]);

export const PAGINATION_DEFAULT = Object.freeze({
  start: 0,
  count: 10,
});

export enum CARD_TYPE {
  VISA = "Visa",
  MASTERCARD = "MasterCard",
  RUPAY = "RuPay",
  OTHER = "Other",
}

export const CURRENCY_SYMBOL: Record<Currency, string> = Object.freeze({
  USD: "$",
  EUR: "€",
  GBP: "£",
  INR: "₹",
  JPY: "¥",
  CNY: "¥",
  AUD: "A$",
  CAD: "C$",
});
