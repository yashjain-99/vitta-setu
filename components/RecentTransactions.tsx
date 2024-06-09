import React from "react";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList } from "./ui/tabs";
import TabListItem from "./TabListItem";
import TabContentBankInfo from "./TabContentBankInfo";
import { transactions, usersBankData } from "@/store";
import RecentTransactionTable from "./RecentTransactionTable";

const RecentTransactions = () => {
  return (
    <section className="flex flex-col w-full gap-8">
      <header className="flex justify-between w-full items-center">
        <span className="text-[#101828] text-2xl font-inter font-semibold">
          Recent Transactions
        </span>
        <Button
          type="button"
          className="border rounded-lg py-2 px-4  text-[#344054] font-semibold text-sm border-[#D0D5DD]"
        >
          View all
        </Button>
      </header>
      <Tabs defaultValue="Chase Bank" className="w-full">
        <TabsList className="flex flex-nowrap justify-start">
          <TabListItem value="Chase Bank" isActive={true} />
          <TabListItem value="Bank of America" />
          <TabListItem value="HDFC Bank" />
        </TabsList>
        <TabsContent value="Chase Bank">
          <div className="flex flex-col gap-5">
            <TabContentBankInfo
              account={usersBankData[1].accounts[0] as Account}
            />
            <RecentTransactionTable
              transactions={
                [transactions[1001], transactions[1002]] as Transaction[]
              }
            />
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default RecentTransactions;
