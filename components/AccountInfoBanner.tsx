import { getAccountData } from "@/lib/actions/account";
import { loggedInUserId } from "@/lib/actions/user";
import { redirect } from "next/navigation";
import React, { Suspense } from "react";

const AccountInfoBannerContent = async ({
  accountId,
}: {
  accountId: number;
}) => {
  const userId = await loggedInUserId();
  if (!userId) {
    redirect("/login");
  }
  const userBankData = await getAccountData(userId);
  const selectedAccountData = userBankData.accounts.map((accountData) => {
    if (accountData.accountId == accountId) {
      return accountData;
    }
  })[0];
  return (
    <>
      <div className="flex flex-col gap-4 text-white">
        <div className="flex flex-col gap-2">
          <span className=" text-[#FFFFFF] text-2xl font-bold font-inter">
            {selectedAccountData?.bankName}
          </span>
          <span className=" text-[#FFFFFF] text-base font-normal font-inter">
            {selectedAccountData?.type}
          </span>
        </div>
        <span className=" text-[#FFFFFF] text-sm font-normal font-inter">
          ●●●● ●●●● ●●●● 9999
        </span>
      </div>
      <div className=" p-4 border rounded-lg bg-[#FFFFFF4D] border-[#FFFFFF80] flex flex-col gap-1">
        <span className=" text-[#FFFFFF] text-sm font-inter font-medium">
          Current Balance
        </span>
        <span className=" text-[#FFFFFF] text-2xl font-inter font-semibold">
          {selectedAccountData?.availableBalance}
        </span>
      </div>
    </>
  );
};

const AccountInfoBanner = ({ accountId }: { accountId: number }) => {
  return (
    <div className=" p-6 bg-[#1570EF] border rounded-xl flex flex-row justify-between items-center shadow-md">
      <Suspense fallback={<p>Loading</p>}>
        <AccountInfoBannerContent accountId={accountId} />
      </Suspense>
    </div>
  );
};

export default AccountInfoBanner;
