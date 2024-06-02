import { AiFillHome } from "react-icons/ai";
import { FaUniversity, FaHistory, FaMoneyCheckAlt } from "react-icons/fa"; // import additional icons
import React from "react";

export const SidebarFields: SidebarFieldItem[] = [
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
