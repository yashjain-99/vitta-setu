import BalanceBox from "@/components/BalanceBox";
import HeaderBox from "@/components/HeaderBox";
import RecentTransactions from "@/components/RecentTransactions";
import { loggedInUserDetails } from "@/lib/actions/user";
import { redirect } from "next/navigation";
import React from "react";

const Home = async () => {
  const loggedIdUserDetails = await loggedInUserDetails();
  if (!loggedIdUserDetails) {
    redirect("/login");
  }
  if (loggedIdUserDetails?.status == "error") {
    redirect("/login");
  }
  return (
    <section className="flex w-full flex-row max-xl:max-h-screen">
      <div className="flex w-full flex-1 flex-col gap-8 px-5 sm:px-8 py-7 lg:py-12 xl:max-h-screen">
        <HeaderBox
          type="greeting"
          title="Welcome,"
          user={loggedIdUserDetails.firstName}
          subtext="Access & manage your account and transactions efficiently."
        />
        <BalanceBox />
        <RecentTransactions />
      </div>
      <section className=" bg-[#F3F9FF] min-h-screen w-96 flex flex-col gap-6 pt-8"></section>
    </section>
  );
};

export default Home;
