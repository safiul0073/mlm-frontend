import { privateInstance } from "@/configs/axiosConfig";
import { useQuery } from "@tanstack/react-query";

interface Props {
  city: string;
}
export const useTransferHistory = () => {
  return useQuery({
    queryKey: ["transferHistory"],
    queryFn: async () => {
      const response = await privateInstance.get(
        "/dashboard/user-balance-transfer",
      );
      return response.data;
    },
  });
};
