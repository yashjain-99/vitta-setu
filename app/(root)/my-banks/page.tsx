import HeaderBox from "@/components/HeaderBox";
import { Button } from "@/components/ui/button";
import React from "react";
import { MdOutlineAdd } from "react-icons/md";

const MyBanks = () => {
  return (
    <section className="flex flex-col pt-12 pb-8 px-8 gap-8">
      <div className="flex flex-row justify-between items-center">
        <HeaderBox
          title="My Bank Accounts"
          subtext="Effortlessly manage your banking activities."
        />
        <div>
          <Button type="button" variant={"outline"}>
            <div className="flex flex-row gap-1 items-center">
              <MdOutlineAdd color="blue" className=" w-6 h-6" />
              <span className="text-sm font-medium font-inter text-[#344054]">
                Add bank
              </span>
            </div>
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <span className="text-lg font-semibold text-[#101828] font-inter">
          Your cards
        </span>
        <div className="flex flex-wrap flex-row gap-8">
          <div className="h-40 w-64 rounded-3xl border bg-gradient-to-r from-[#eeaeca] to-[#94bbe9] z-10"></div>
          <div className="h-40 w-64 rounded-3xl border bg-gradient-to-r from-[#1d2ee3] to-[#aed0ee]"></div>
          <div className="h-40 w-64 rounded-3xl border bg-gradient-to-r from-[#eeaeca] to-[#94bbe9] z-10"></div>
          <div className="h-40 w-64 rounded-3xl border bg-gradient-to-r from-[#1d2ee3] to-[#aed0ee]"></div>
          <div className="h-40 w-64 rounded-3xl border bg-gradient-to-r from-[#eeaeca] to-[#94bbe9] z-10"></div>
          <div className="h-40 w-64 rounded-3xl border bg-gradient-to-r from-[#1d2ee3] to-[#aed0ee]"></div>
        </div>
      </div>
    </section>
  );
};

export default MyBanks;
