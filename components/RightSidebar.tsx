import React from "react";
import { CiBank } from "react-icons/ci";
import { Progress } from "@/components/ui/progress";

import HeaderBox from "./HeaderBox";
import { calculateBudgetInfo } from "@/lib/actions/budget";
import Card from "./Card";
import Cards from "./Cards";

const RightSidebar = async ({ userDetails }: { userDetails: UserProfile }) => {
  const budgetData = await calculateBudgetInfo(userDetails);
  return (
    <section className="sticky top-0 bg-[#FFFFFF] border-l-2 border-[#EAECF0] min-h-screen h-full  gap-6">
      <div className="bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] w-full h-14 lg:h-20 absolute top-0 left-0"></div>
      <div className="flex flex-col z-10 gap-8 px-5 sm:px-8 sm:pt-24 pt-16 pb-7">
        <HeaderBox
          title={`${userDetails.firstName} ${userDetails.lastName}`}
          subtext={userDetails.email}
        />
        <div className="flex flex-col gap-6 w-full">
          <div className="flex flex-row justify-between">
            <span className=" text-base font-semibold text-[#101828]">
              My Cards
            </span>
            <span className=" text-sm font-semibold text-[#475467]">
              Add card
            </span>
          </div>
          <div className="relative h-48 w-80">
            <Cards isOverLapping={true} upperLimit={2} />
          </div>
        </div>
        <div className="flex flex-col gap-6 w-full">
          <div className="flex flex-row justify-between items-center">
            <span className="text-base font-semibold text-[#101828]">
              My budgets
            </span>
            <span className="text-sm font-semibold text-[#475467]">...</span>
          </div>
          <div className="flex flex-col gap-4">
            {Object.entries(budgetData).map((budget) => {
              return (
                <div
                  className="border rounded-xl p-4 bg-[#F5FAFF] flex flex-row items-center gap-4"
                  key={budget[0]}
                >
                  <CiBank className=" w-10 h-10" />
                  <div className="flex flex-col w-full gap-2">
                    <div className="flex flex-row justify-between">
                      <span className="text-[#194185] text-sm font-medium">
                        {budget[0]}
                      </span>
                      <span className="text-[#175CD3] text-sm font-normal">
                        {budget[1].budgetLeft} left
                      </span>
                    </div>
                    <div>
                      <Progress
                        value={budget[1].budgetUsedPerc}
                        className="[&>*]:bg-[#175CD3]"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
            {/* <div className="border rounded-xl p-4 bg-[#F5FAFF] flex flex-row items-center gap-4">
              <CiBank className=" w-10 h-10" />
              <div className="flex flex-col w-full gap-2">
                <div className="flex flex-row justify-between">
                  <span className="text-[#194185] text-sm font-medium">
                    Subscription
                  </span>
                  <span className="text-[#175CD3] text-sm font-normal">
                    $25 left
                  </span>
                </div>
                <div>
                  <Progress value={33} className="[&>*]:bg-[#175CD3]" />
                </div>
              </div>
            </div>
            <div className="border rounded-xl p-4 bg-[#FEF6FB] flex flex-row items-center gap-4">
              <CiBank className=" w-10 h-10" />
              <div className="flex flex-col w-full gap-2">
                <div className="flex flex-row justify-between">
                  <span className="text-[#851651] text-sm font-medium">
                    Food and Booze
                  </span>
                  <span className="text-[#C11574] text-sm font-normal">
                    $120 left
                  </span>
                </div>
                <div>
                  <Progress value={60} className="[&>*]:bg-[#C11574]" />
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
