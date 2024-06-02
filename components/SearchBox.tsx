import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Input } from "./ui/input";

const SearchBox = () => {
  return (
    <div className="relative">
      <FaMagnifyingGlass className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#667085]" />
      <Input
        className="text-base py-2 pl-10 pr-5 placeholder:text-base font-normal font-inter text-[#667085] rounded-lg border border-gray-300 focus:border-blue-500"
        placeholder="Search"
        inputMode="search"
      />
    </div>
  );
};

export default SearchBox;
