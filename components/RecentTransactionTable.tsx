import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { getTransactionsData } from "@/lib/actions/account";
import { loggedInUserId } from "@/lib/actions/user";
import { PAGINATION_DEFAULT } from "@/constants";
import CustomPagination from "./CustomPagination";

const RecentTransactionTable = async ({
  accountId,
  userId,
  showComplete = false,
  start = PAGINATION_DEFAULT.count,
  count = PAGINATION_DEFAULT.count,
}: {
  accountId: number;
  userId?: number;
  showComplete?: boolean;
  start?: number;
  count?: number;
}) => {
  let currentUserId = userId;
  if (!currentUserId) {
    currentUserId = (await loggedInUserId()) as number;
  }
  const transactionsRes = await getTransactionsData(
    currentUserId,
    accountId,
    start ?? PAGINATION_DEFAULT.start,
    count ?? PAGINATION_DEFAULT.count
  );
  const { transactions, total } = transactionsRes;
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Date</TableHead>
          {showComplete && <TableHead>Category</TableHead>}
          {showComplete && <TableHead>Description</TableHead>}
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map((transaction: Transaction) => (
          <TableRow key={transaction.transactionId}>
            <TableCell>{transaction.transactionId}</TableCell>
            <TableCell>{transaction.type}</TableCell>
            <TableCell>{transaction.date}</TableCell>
            {showComplete && <TableCell>{transaction.category}</TableCell>}
            {showComplete && <TableCell>{transaction.description}</TableCell>}
            <TableCell className="text-right">{transaction.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      {showComplete && (
        <TableFooter>
          <TableRow>
            <TableCell colSpan={6} className="text-right">
              <CustomPagination start={start} total={total} />
            </TableCell>
          </TableRow>
        </TableFooter>
      )}
    </Table>
  );
};

export default RecentTransactionTable;
