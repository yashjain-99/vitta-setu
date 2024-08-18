"use client";
import { PAGINATION_DEFAULT } from "@/constants";
import { formUrlQuery } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "./ui/button";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons";
import { useMemo } from "react";
import debounce from "lodash.debounce";
const CustomPagination = ({
  start,
  total,
}: {
  start: number;
  total: number;
}) => {
  // TODO: Add option to jump to specific page
  const totalPages = Math.ceil(total / PAGINATION_DEFAULT.count);
  const currPage = start / PAGINATION_DEFAULT.count + 1;
  const isPreviousEnabled = () => currPage > 1;
  const isNextEnabled = () => currPage < totalPages;
  const searchParams = useSearchParams();
  const router = useRouter();
  const handlePageChange = useMemo(
    () =>
      debounce((type) => {
        let newStart;
        switch (type) {
          case "start":
            newStart = 0;
            break;
          case "previous":
            newStart = start - PAGINATION_DEFAULT.count;
            break;
          case "next":
            newStart = start + PAGINATION_DEFAULT.count;
            break;
          case "last":
            newStart = (totalPages - 1) * PAGINATION_DEFAULT.count;
            break;
          default:
            newStart = 0;
            break;
        }
        const newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: "start",
          value: `${newStart}`,
        });
        router.push(newUrl, { scroll: false });
      }, 100),
    [searchParams, router, start, totalPages]
  );
  return (
    <div className="flex items-center space-x-6 lg:space-x-8 justify-end">
      <div className="flex w-[100px] items-center justify-center text-sm font-medium">
        Page {currPage} of {totalPages}
      </div>
      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          className="hidden h-8 w-8 p-0 lg:flex"
          onClick={() => handlePageChange("start")}
          disabled={!isPreviousEnabled()}
        >
          <span className="sr-only">Go to first page</span>
          <DoubleArrowLeftIcon className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          className="h-8 w-8 p-0"
          onClick={() => handlePageChange("previous")}
          disabled={!isPreviousEnabled()}
        >
          <span className="sr-only">Go to previous page</span>
          <ChevronLeftIcon className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          className="h-8 w-8 p-0"
          onClick={() => handlePageChange("next")}
          disabled={!isNextEnabled()}
        >
          <span className="sr-only">Go to next page</span>
          <ChevronRightIcon className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          className="hidden h-8 w-8 p-0 lg:flex"
          onClick={() => handlePageChange("last")}
          disabled={!isNextEnabled()}
        >
          <span className="sr-only">Go to last page</span>
          <DoubleArrowRightIcon className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default CustomPagination;
