type BudgetInfo = {
  budgetUsedPerc: number;
  budgetLeft: number;
};

import { transactions } from "@/store";

export const calculateBudgetInfo = async (
  userDetails: UserProfile
): Promise<Partial<Record<TransactionCategory, BudgetInfo>>> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const userTransactions = Object.values(transactions).filter(
    (transaction) => transaction.userId === userDetails.userId
  );

  const categoryToExpenses = userTransactions.reduce(
    (acc, { category, amount }) => {
      acc[category] = (acc[category] || 0) + amount;
      return acc;
    },
    {} as Record<TransactionCategory, number>
  );
  const categoryToBudgetUsed = {} as Record<TransactionCategory, BudgetInfo>;
  userDetails.budget?.forEach((budget) => {
    categoryToBudgetUsed[budget.category] = {
      budgetUsedPerc:
        ((categoryToExpenses[budget.category] || 0) / budget.amount) * 100,
      budgetLeft: budget.amount - (categoryToExpenses[budget.category] || 0),
    };
  });

  return categoryToBudgetUsed;
};
