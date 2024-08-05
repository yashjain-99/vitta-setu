import React from "react";
import { TabsTrigger } from "./ui/tabs";

const TabListItems = ({ accounts }: { accounts: Account[] }) => {
  return (
    <>
      {accounts.map((account) => (
        <TabsTrigger value={account.bankName} key={account.accountId}>
          <span>{account.bankName}</span>
        </TabsTrigger>
      ))}
    </>
  );
};

export default TabListItems;
