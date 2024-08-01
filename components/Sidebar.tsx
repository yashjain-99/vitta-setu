import React from "react";

import { SIDEBAR_FIELDS } from "@/constants";
import { SidebarItem } from "@/components/SidebarItem";
import BrandHeader from "@/components/BrandHeader";
import SearchBox from "@/components/SearchBox";

const Sidebar = () => {
  return (
    <section className="bg-[#F3F9FF] min-h-screen h-full w-64 flex flex-col gap-6 pt-8">
      <header className="px-5">
        <BrandHeader />
      </header>
      <div className="px-5 max-h-11 relative">
        <SearchBox />
      </div>
      <nav className="flex flex-col gap-1 px-4">
        {SIDEBAR_FIELDS.map((item) => {
          return <SidebarItem key={item.label} item={item} />;
        })}
      </nav>
    </section>
  );
};

export default Sidebar;
