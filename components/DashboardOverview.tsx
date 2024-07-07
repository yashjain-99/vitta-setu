import { getAccountData } from "@/lib/actions/account";
import React, { Suspense } from "react";
import BalanceBox from "./BalanceBox";
import RecentTransactions from "./RecentTransactions";

const DashboardOverview = async ({ userId }: { userId: number }) => {
  const bankData = await getAccountData(userId);
  return (
    <>
      <BalanceBox bankData={bankData} />
      <RecentTransactions bankData={bankData} userId={userId} />
    </>
  );
};

export default DashboardOverview;
