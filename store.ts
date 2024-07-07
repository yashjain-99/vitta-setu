type User = {
  id: number;
  email: string;
  password: string;
};

enum TransactionType {
  Debit = "debit",
  Credit = "credit",
}

export const users: User[] = [
  {
    id: 1,
    email: "john.doe@example.com",
    password: "$2a$10$Ezp7Zc8OYC0wkQhNETAj5.D1QG0fNirXNPg7aC79j.IKSUzBGP4Pa",
  },
  {
    id: 2,
    email: "jane.smith@example.com",
    password: "$2a$10$IgnP/bFYGUJdVxm7/NU10.7AWk0HVYvmlw4NJdWzA6.uvCck1TAhq",
  },
  {
    id: 3,
    email: "alice.jones@example.com",
    password: "$2a$10$0mRL/I.QiatL38AcmvuDNO3r6.HhRzWpFjohNDq3toFKV8tl0cf7S",
  },
];

export const userMetaData: Record<number, UserProfile> = {
  1: {
    userId: 1,
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    budget: [
      {
        category: "Food & Grocery",
        amount: 200,
        currency: "USD",
      },
      {
        category: "Utilities",
        amount: 150,
        currency: "USD",
      },
    ],
  },
  2: {
    userId: 2,
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com",
    budget: [
      {
        category: "Shopping",
        amount: 300,
        currency: "USD",
      },
      {
        category: "Salary",
        amount: 5000,
        currency: "USD",
      },
    ],
  },
  3: {
    userId: 3,
    firstName: "Alice",
    lastName: "Jones",
    email: "alice.jones@example.com",
    budget: [
      {
        category: "Online Purchase",
        amount: 400,
        currency: "USD",
      },
      {
        category: "Others",
        amount: 100,
        currency: "USD",
      },
    ],
  },
};

export const refreshTokens: Record<number, string> = {};

export const usersBankData: Record<number, UsersBank> = {
  1: {
    userId: 1,
    numberOfAccounts: 2,
    accounts: [
      {
        accountId: 101,
        availableBalance: 1500.75,
        bankName: "Bank A",
        type: "saving",
        currency: "USD",
      },
      {
        accountId: 102,
        availableBalance: 300.5,
        bankName: "Bank B",
        type: "current",
        currency: "USD",
      },
    ],
    transactionIds: [1001, 1002, 1003],
    totalBalance: 1801.25,
  },
  2: {
    userId: 2,
    numberOfAccounts: 1,
    accounts: [
      {
        accountId: 201,
        availableBalance: 2500.0,
        bankName: "Bank C",
        type: "saving",
        currency: "EUR",
      },
    ],
    transactionIds: [2001, 2002],
    totalBalance: 2500.0,
  },
  3: {
    userId: 3,
    numberOfAccounts: 3,
    accounts: [
      {
        accountId: 301,
        availableBalance: 1000.0,
        bankName: "Bank D",
        type: "current",
        currency: "GBP",
      },
      {
        accountId: 302,
        availableBalance: 5000.0,
        bankName: "Bank E",
        type: "over-draft",
        currency: "GBP",
      },
      {
        accountId: 303,
        availableBalance: 750.5,
        bankName: "Bank F",
        type: "cash-credit",
        currency: "GBP",
      },
    ],
    transactionIds: [3001, 3002, 3003],
    totalBalance: 6750.5,
  },
};

export const transactions: Record<number, Transaction> = {
  1001: {
    transactionId: 1001,
    userId: 1, // Added userId
    accountId: 101,
    amount: 500,
    date: "2023-01-01",
    type: TransactionType.Credit,
    category: "Salary",
    description: "Salary for January",
  },
  1002: {
    transactionId: 1002,
    userId: 1, // Added userId
    accountId: 101,
    amount: 100,
    date: "2023-01-05",
    type: TransactionType.Debit,
    category: "Food & Grocery",
    description: "Grocery shopping",
  },
  1003: {
    transactionId: 1003,
    userId: 1, // Added userId
    accountId: 102,
    amount: 200,
    date: "2023-01-10",
    type: TransactionType.Debit,
    category: "Utilities",
    description: "Utility bill",
  },
  2001: {
    transactionId: 2001,
    userId: 2, // Added userId
    accountId: 201,
    amount: 1500,
    date: "2023-02-01",
    type: TransactionType.Credit,
    category: "Salary",
    description: "Freelance payment",
  },
  2002: {
    transactionId: 2002,
    userId: 2, // Added userId
    accountId: 201,
    amount: 200,
    date: "2023-02-15",
    type: TransactionType.Debit,
    category: "Shopping",
    description: "Clothes shopping",
  },
  3001: {
    transactionId: 3001,
    userId: 3, // Added userId
    accountId: 301,
    amount: 1000,
    date: "2023-03-01",
    type: TransactionType.Credit,
    category: "Bonus",
    description: "Yearly bonus",
  },
  3002: {
    transactionId: 3002,
    userId: 3, // Added userId
    accountId: 302,
    amount: 2500,
    date: "2023-03-05",
    type: TransactionType.Credit,
    category: "Loan",
    description: "Personal loan",
  },
  3003: {
    transactionId: 3003,
    userId: 3, // Added userId
    accountId: 303,
    amount: 300,
    date: "2023-03-10",
    type: TransactionType.Debit,
    category: "Online Purchase",
    description: "Purchase from Amazon",
  },
};
