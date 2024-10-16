import { privateInstance } from "@/configs/axiosConfig";
import { useQuery } from "@tanstack/react-query";

interface Props {
  city: string;
}
export const useUserTimeline = ({ city }: Props) => {
  return useQuery({
    queryKey: ["user-timeline", city],
    queryFn: async () => {
      const response = await privateInstance.get("/user/timeline", {
        params: {
          city,
        },
      });
      return response.data;
    },
  });
};
