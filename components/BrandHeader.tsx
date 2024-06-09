import Link from "next/link";
import { CiBank } from "react-icons/ci";

import React from "react";

const BrandHeader = () => {
  return (
    <Link href="/" className="cursor-pointer flex items-center gap-1">
      <CiBank className=" w-8 h-8 fill-slate-400" />
      <h1 className=" text-2xl font-ibm-plex-serif font-bold text-black-1">
        Vitta-Setu
      </h1>
    </Link>
  );
};

export default BrandHeader;
