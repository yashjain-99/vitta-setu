import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

const RecentTransactionTable = ({
  transactions,
}: {
  transactions: Transaction[];
}) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Date</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map((transaction: Transaction) => (
          <TableRow key={transaction.transactionId}>
            <TableCell>{transaction.transactionId}</TableCell>
            <TableCell>{transaction.type}</TableCell>
            <TableCell>{transaction.date}</TableCell>
            <TableCell className="text-right">{transaction.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default RecentTransactionTable;
