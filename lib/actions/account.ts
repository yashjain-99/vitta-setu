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
  const accountData = await getAccountData(userId);
  const transactionIds = accountData.accountTransactionIds[accountId];
  const total = transactionIds.length;
  const filteredTransactionIds = transactionIds.slice(start, start + count);
  const filteredTransactions: Transaction[] = filteredTransactionIds.map(
    (transactionId) => transactions[transactionId]
  );
  const res = {
    transactions: filteredTransactions,
    currency: accountData.currency,
    total,
  };

  return res;
};
