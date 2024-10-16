"use client";

import { useTransferHistory } from "@/hooks/query/publicUser/getTransferHistory";

const Transaction = () => {
  const { data: history, isLoading, refetch } = useTransferHistory();

  return (
    <div>
      {console.log(history?.data)}
      Transaction
    </div>
  );
};

export default Transaction;
