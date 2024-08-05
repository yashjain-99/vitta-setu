import { userCards } from "@/store";

export const getUserCards = async (userId: number) => {
  return userCards.filter((userCard) => userCard.userId == userId);
};
