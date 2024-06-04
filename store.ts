type User = {
  id: number;
  email: string;
  password: string;
};

type UserMetaData = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
};

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

export const userMetaData: Record<number, UserMetaData> = {
  1: {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
  },
  2: {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com",
  },
  3: {
    id: 3,
    firstName: "Alice",
    lastName: "Jones",
    email: "alice.jones@example.com",
  },
};

export const refreshTokens: Record<number, string> = {};
