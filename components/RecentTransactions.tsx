import React, { Suspense } from "react";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList } from "./ui/tabs";
import TabContentBankInfo from "./TabContentBankInfo";
import RecentTransactionTable from "./RecentTransactionTable";
import TabListItems from "./TabListItems";
import Link from "next/link";

const RecentTransactions = ({
  bankData,
  userId,
}: {
  bankData: UsersBank;
  userId: number;
}) => {
  return (
    <section className="flex flex-col w-full gap-8">
      <header className="flex justify-between w-full items-center">
        <span className="text-[#101828] text-2xl font-inter font-semibold">
          Recent Transactions
        </span>
        <Link href={"/transaction-history"}>
          <Button
            type="button"
            variant={"ghost"}
            className="border rounded-lg py-2 px-4  text-[#344054] font-semibold text-sm border-[#D0D5DD]"
          >
            View all
          </Button>
        </Link>
      </header>
      <Tabs defaultValue={bankData.accounts[0].bankName} className="w-full">
        <TabsList className="flex flex-nowrap justify-start">
          <TabListItems accounts={bankData.accounts} />
        </TabsList>
        {bankData.accounts.map((account) => {
          return (
            <TabsContent value={account.bankName} key={account.accountId}>
              <Suspense fallback={<p>Loading recent transactions</p>}>
                <div className="flex flex-col gap-5">
                  <TabContentBankInfo account={account} />
                  <RecentTransactionTable
                    accountId={account.accountId}
                    userId={userId}
                    count={5}
                  />
                </div>
              </Suspense>
            </TabsContent>
          );
        })}
      </Tabs>
    </section>
  );
};

export default RecentTransactions;
