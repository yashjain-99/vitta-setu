import HeaderBox from "@/components/HeaderBox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { IoFilterOutline } from "react-icons/io5";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import RecentTransactionTable from "@/components/RecentTransactionTable";

const SelectAccountPlaceholder = () => {
  return (
    <div className="flex flex-row gap-1 items-center">
      <MdOutlineAccountBalanceWallet color="blue" className=" w-6 h-6" />
      <span className="text-sm font-medium font-inter text-[#344054]">
        Select Account
      </span>
    </div>
  );
};

const SelectFilterPlaceholder = () => {
  return (
    <div className="flex flex-row gap-1 items-center">
      <IoFilterOutline color="blue" className=" w-6 h-6" />
      <span className="text-sm font-medium font-inter text-[#344054]">
        Apply Filter
      </span>
    </div>
  );
};

const TransactionHistory = () => {
  return (
    <section className="flex flex-col pt-12 pb-8 px-8 gap-8">
      <div className="flex flex-row justify-between items-center">
        <HeaderBox
          title="Transaction history"
          subtext="Gain insight and track your transactions over time"
        />
        <div>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder={<SelectAccountPlaceholder />} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="bankA">
                <span className="text-sm font-medium font-inter text-[#344054]">
                  Bank A
                </span>
              </SelectItem>
              <SelectItem value="bankB">
                <span className="text-sm font-medium font-inter text-[#344054]">
                  Bank B
                </span>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className=" p-6 bg-[#1570EF] border rounded-xl flex flex-row justify-between items-center shadow-md">
        <div className="flex flex-col gap-4 text-white">
          <div className="flex flex-col gap-2">
            <span className=" text-[#FFFFFF] text-2xl font-bold font-inter">
              Chase Bank
            </span>
            <span className=" text-[#FFFFFF] text-base font-normal font-inter">
              Saving Account
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
            $41,382.80
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-row justify-between items-center">
          <span className="text-lg font-semibold text-[#101828] font-inter">
            Transaction History
          </span>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder={<SelectFilterPlaceholder />} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="bankA">
                <span className="text-sm font-medium font-inter text-[#344054]">
                  Bank A
                </span>
              </SelectItem>
              <SelectItem value="bankB">
                <span className="text-sm font-medium font-inter text-[#344054]">
                  Bank B
                </span>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <RecentTransactionTable accountId={101} userId={1} />
        </div>
      </div>
      <footer className=" border-t border-[#EAECF0] px-4">
        <Pagination>
          <PaginationContent className=" w-full justify-between">
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <div className="flex justify-center items-center">
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">8</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">9</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">10</PaginationLink>
              </PaginationItem>
            </div>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </footer>
    </section>
  );
};

export default TransactionHistory;
