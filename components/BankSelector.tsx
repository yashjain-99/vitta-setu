import React from "react";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { loggedInUserDetails } from "@/lib/actions/user";
import { getAccountData } from "@/lib/actions/account";
import { redirect } from "next/navigation";
import CustomSelector from "./CustomSelector";

const SelectAccountPlaceholder = () => (
  <div className="flex flex-row gap-1 items-center">
    <MdOutlineAccountBalanceWallet color="blue" className="w-6 h-6" />
    <span className="text-sm font-medium font-inter text-[#344054]">
      Select Account
    </span>
  </div>
);

const fetchBankData = async () => {
  const userDetails = await loggedInUserDetails();
  if (!userDetails || !userDetails.data || userDetails?.status === "error") {
    redirect("/login");
  }
  const bankData = await getAccountData(userDetails.data.userId);
  return bankData.accounts.map((account) => ({
    id: account.accountId,
    value: account.bankName,
  }));
};

const BankSelector = async () => {
  const accounts = await fetchBankData();

  return (
    <div>
      <CustomSelector
        items={accounts}
        placeholder={<SelectAccountPlaceholder />}
        queryParamKey="id"
      />
    </div>
  );
};

export default BankSelector;
