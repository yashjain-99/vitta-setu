"use client";
import React, { useMemo } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { formUrlQuery } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import debounce from "lodash.debounce";
import Spinner from "./Spinner";
interface Item {
  id: number;
  value: string;
}

interface CustomSelectorProps {
  items: Item[];
  placeholder: React.ReactNode;
  queryParamKey: string;
}

const CustomSelector = ({
  items,
  placeholder,
  queryParamKey,
}: CustomSelectorProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const memoizedSelectItems = useMemo(() => {
    return items?.map((item) => (
      <SelectItem
        value={item.id.toString()}
        className="cursor-pointer"
        key={item.id}
      >
        <span className="text-sm font-medium font-inter text-[#344054]">
          {item.value}
        </span>
      </SelectItem>
    ));
  }, [items]);
  const handleAccountChange = useMemo(
    () =>
      debounce((accountId) => {
        const newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: queryParamKey,
          value: accountId,
        });
        router.push(newUrl, { scroll: false });
      }, 300),
    [searchParams, router]
  );

  return (
    <div>
      <Select onValueChange={(accountId) => handleAccountChange(accountId)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {items ? (
            memoizedSelectItems
          ) : (
            <div className="flex flex-row items-center justify-center">
              <div className="w-4 h-4">
                <Spinner />
              </div>
            </div>
          )}
        </SelectContent>
      </Select>
    </div>
  );
};

export default CustomSelector;
