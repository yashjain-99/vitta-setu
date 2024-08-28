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
    <section className="flex flex-col lg:flex-row w-full max-h-dvh overflow-y-auto gap-6 lg:gap-0">
      <div className="flex flex-1 flex-col gap-8 px-8 py-12 max-h-dvh">
        <HeaderBox
          type="greeting"
          title="Welcome,"
          user={userDetails.data.firstName}
          subtext="Access & manage your account and transactions efficiently."
        />
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
