import { IoFilterOutline } from "react-icons/io5";

import HeaderBox from "@/components/HeaderBox";
import RecentTransactionTable from "@/components/RecentTransactionTable";
import BankSelector from "@/components/BankSelector";
import AccountInfoBanner from "@/components/AccountInfoBanner";
import CustomSelector from "@/components/CustomSelector";
import { FILTER_OPTIONS } from "@/constants";

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

const TransactionHistory = ({
  searchParams: { id, start, filterId },
}: {
  searchParams: { id: string; start: string; filterId: string };
}) => {
  return (
    <section className="flex flex-col pt-12 pb-8 px-8 gap-8">
      <div className="flex flex-row justify-between items-center">
        <HeaderBox
          title="Transaction history"
          subtext="Gain insight and track your transactions over time"
        />
        <BankSelector />
      </div>
      {id && <AccountInfoBanner accountId={parseInt(id)} />}
      {id && (
        <div className="flex flex-col gap-6">
          <div className="flex flex-row justify-between items-center">
            <span className="text-lg font-semibold text-[#101828] font-inter">
              Transaction History
            </span>
            {/* TODO: Use Dropdown checkbox */}
            <CustomSelector
              items={FILTER_OPTIONS}
              placeholder={<SelectFilterPlaceholder />}
              queryParamKey="filterId"
            />
          </div>
          <div>
            <RecentTransactionTable
              accountId={parseInt(id)}
              showComplete={true}
              start={start ? parseInt(start) : 0}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default TransactionHistory;
