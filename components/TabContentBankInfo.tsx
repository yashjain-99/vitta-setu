import React from "react";
import { AiFillCiCircle } from "react-icons/ai";

const TabContentBankInfo = ({ account }: { account: Account }) => {
  return (
    <div className=" pt-4">
      <div className="flex justify-between bg-[#F5FAFF] border rounded-lg py-5 px-6">
        <div className="flex gap-2 items-center">
          <AiFillCiCircle className=" h-10 w-10 aspect-square" />
          <div className="flex flex-col">
            <span className=" text-[#194185] text-xl font-semibold font-inter">
              {account.bankName}
            </span>
            <span className=" text-[#1570EF] text-base font-semibold font-inter">
              {account.availableBalance}
            </span>
          </div>
        </div>
        <span className="rounded-full px-3 py-1 bg-[#ECFDF3] text-[#027A48] text-sm font-medium font-inter text-center">
          {account.type}
        </span>
      </div>
    </div>
  );
};

export default TabContentBankInfo;
