import { privateInstance } from "@/configs/axiosConfig";
import { useQuery } from "@tanstack/react-query";

interface Props {
  city: string;
}
export const useDashboardData = () => {
  return useQuery({
    queryKey: ["useDashboardData"],
    queryFn: async () => {
      const response = await privateInstance.get(
        "/dashboard",
      );
      return response.data;
    },
  });
};
