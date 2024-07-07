import HeaderBox from "@/components/HeaderBox";
import { loggedInUserDetails } from "@/lib/actions/user";
import { redirect } from "next/navigation";
import React, { Suspense } from "react";
import DashboardOverview from "./DashboardOverview";
import RightSidebar from "./RightSidebar";

const Dashboard = async () => {
  const userDetails = await loggedInUserDetails();
  if (!userDetails || !userDetails.data) {
    redirect("/login");
  }
  if (userDetails?.status == "error") {
    redirect("/login");
  }
  return (
    <section className="flex w-full max-h-screen overflow-y-auto">
      <div className="flex flex-1 flex-col gap-8 px-5 sm:px-8 py-7 lg:py-12 max-h-screen">
        <div className=" px-8">
          <HeaderBox
            type="greeting"
            title="Welcome,"
            user={userDetails.data.firstName}
            subtext="Access & manage your account and transactions efficiently."
          />
        </div>
        <Suspense fallback={<p>Loading overview...</p>}>
          <DashboardOverview userId={userDetails.data.userId} />
        </Suspense>
      </div>
      <Suspense fallback={<p>Loading RightSideBar...</p>}>
        <RightSidebar userDetails={userDetails.data} />
      </Suspense>
    </section>
  );
};

export default Dashboard;
