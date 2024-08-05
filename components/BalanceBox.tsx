import React from "react";
import DoughnutChart from "./DoughnutChart";
import { CURRENCY_SYMBOL } from "@/constants";
import CustomCountUp from "./CustomCountUp";

const BalanceBox = ({ bankData }: { bankData: UsersBank }) => {
  return (
    <section className="flex w-full items-center gap-4 rounded-xl border border-gray-200 p-4 sm:gap-6 sm:p-6">
      <div className="flex size-full max-w-[100px] items-center sm:max-w-[120px]">
        <DoughnutChart />
      </div>
      <div className="flex flex-col w-full gap-4 sm:gap-6">
        <div className="flex justify-between">
          <div className=" text-base font-semibold text-[#101828] font-inter">
            {bankData.numberOfAccounts} Bank Accounts
          </div>
          <div className=" text-sm font-semibold font-inter text-transparent bg-gradient-to-r from-[#0179FE] to-[#4893FF] bg-clip-text">
            Add Bank
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className=" text-sm font-medium font-inter text-[#475467]">
            Total current Balance
          </div>
          <div className=" text-3xl font-semibold font-inter">
            {CURRENCY_SYMBOL[bankData.currency]}
            <CustomCountUp value={bankData.totalBalance} duration={1} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BalanceBox;
