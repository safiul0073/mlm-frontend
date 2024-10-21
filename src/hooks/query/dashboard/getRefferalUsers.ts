import { privateInstance } from "@/configs/axiosConfig";
import { useQuery } from "@tanstack/react-query";

interface Props {
  city: string;
}
export const useReferralUsers = () => {
  return useQuery({
    queryKey: ["referralUsers"],
    queryFn: async () => {
      const response = await privateInstance.get("/dashboard/user-referrals");
      return response.data;
    },
  });
};
