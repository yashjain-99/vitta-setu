import React from "react";
import { TabsTrigger } from "./ui/tabs";

const TabListItem = ({ value, isActive }: TabListItemProps) => {
  return (
    <TabsTrigger value={value}>
      <div
        className={`px-1 pt-[1px] pb-3 ${
          isActive && "border-b-2 border-[#0179FE]"
        }`}
      >
        <span>{value}</span>
      </div>
    </TabsTrigger>
  );
};

export default TabListItem;
