import { transactions, usersBankData } from "@/store";

export const getAccountData = async (userId: number) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return usersBankData[userId];
};

export const getTransactionsData = async (
  userId: number,
  accountId: number,
  start: number,
  count: number
) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const filteredTransactions: Transaction[] = Object.values(
    transactions
  ).reduce((result: Transaction[], transaction) => {
    if (
      transaction.userId === userId &&
      transaction.accountId === accountId &&
      start-- <= 0 &&
      count-- > 0
    ) {
      result.push(transaction);
    }
    return result;
  }, []);

  return filteredTransactions;
};
