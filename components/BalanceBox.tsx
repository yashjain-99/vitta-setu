import React from "react";
import DoughnutChart from "./DoughnutChart";
import { CURRENCY_SYMBOL } from "@/constants";
import CustomCountUp from "./CustomCountUp";
import { IoAdd } from "react-icons/io5";

const BalanceBox = ({ bankData }: { bankData: UsersBank }) => {
  return (
    <section className="flex w-full items-center gap-2 lg:gap-4 rounded-xl border border-gray-200 p-2 sm:gap-6 sm:p-6">
      <div className="flex size-full max-w-[80px] items-center sm:max-w-[120px]">
        <DoughnutChart />
      </div>
      <div className="flex flex-col w-full gap-4 sm:gap-6">
        <div className="flex justify-between">
          <div className=" text-sm lg:text-base font-semibold text-[#101828] font-inter">
            {bankData.numberOfAccounts} Bank Accounts
          </div>
          <div className="flex items-center text-xs lg:text-sm font-semibold font-inter text-transparent bg-gradient-to-r from-[#0179FE] to-[#4893FF] bg-clip-text">
            <IoAdd color="blue" className=" w-4 h-4" />
            <span>Add Bank</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className=" text-sm font-medium font-inter text-[#475467]">
            Total current Balance
          </div>
          <div className=" text-lg lg:text-3xl font-semibold font-inter">
            {CURRENCY_SYMBOL[bankData.currency]}
            <CustomCountUp value={bankData.totalBalance} duration={1} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BalanceBox;
