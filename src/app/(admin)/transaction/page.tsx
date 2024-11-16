"use client";

import { useTransferHistory } from "@/hooks/query/dashboard/getTransferHistory";

const Transaction = () => {
  const { data: history, isLoading, refetch } = useTransferHistory();

  return <div>Transaction</div>;
};

export default Transaction;
