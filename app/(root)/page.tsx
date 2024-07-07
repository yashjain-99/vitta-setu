import Dashboard from "@/components/Dashboard";
import React, { Suspense } from "react";

const Home = async () => {
  return (
    <Suspense fallback={<p>Loading Dashboard...</p>}>
      <Dashboard />
    </Suspense>
  );
};

export default Home;
