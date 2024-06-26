declare type UserProfile = {
  userId: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  address?: string;
  dateOfBirth?: string;
};

declare type UsersBank = {
  userId: number;
  numberOfAccounts: number;
  accounts: Account[];
  transactionIds: number[];
};

type Currency = "USD" | "EUR" | "GBP" | "INR" | "JPY" | "CNY" | "AUD" | "CAD";

declare type Account = {
  accountId: number;
  availableBalance: number;
  bankName: string;
  type: "saving" | "current" | "over-draft" | "cash-credit";
  currency: Currency;
};

type TransactionCategory =
  | "Food & Grocery"
  | "Salary"
  | "Utilities"
  | "Shopping"
  | "Bonus"
  | "Loan"
  | "Online Purchase"
  | "Others";

declare type Transaction = {
  transactionId: number;
  accountId: number;
  amount: number;
  date: string;
  type: TransactionType;
  category: TransactionCategory;
  description?: string;
};

declare interface AuthFormProps {
  type: "login" | "register";
}

declare interface SidebarFieldItem {
  label: string;
  icon: React.ReactNode;
  route: string;
}

declare interface HeaderBoxProps {
  type?: "title" | "greeting";
  title: string;
  subtext: string;
  user?: string;
}

declare interface TabListItemProps {
  value: string;
  isActive?: boolean;
}
