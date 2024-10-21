import { HomePageDataTypes } from "@/types/homepage";
import { getFetchInstance } from "./getFetchInstance";
export const getHomePageData = async () => {
  const response = await getFetchInstance({
    url: "/home-page",
  });

  return response?.data?.json_object as HomePageDataTypes;
};
