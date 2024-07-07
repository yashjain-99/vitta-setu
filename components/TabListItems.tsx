"use client";
import React, { useState } from "react";
import { TabsTrigger } from "./ui/tabs";

const TabListItems = ({ accounts }: { accounts: Account[] }) => {
  const [selectedAccount, setSelectedAccount] = useState(accounts[0].accountId);

  return (
    <>
      {accounts.map((account) => (
        <TabsTrigger
          value={account.bankName}
          key={account.accountId}
          onClick={() => setSelectedAccount(account.accountId)}
        >
          <div
            className={`px-1 pt-[1px] pb-3 ${
              account.accountId === selectedAccount &&
              "border-b-2 border-[#0179FE]"
            }`}
          >
            <span>{account.bankName}</span>
          </div>
        </TabsTrigger>
      ))}
    </>
  );
};

export default TabListItems;
