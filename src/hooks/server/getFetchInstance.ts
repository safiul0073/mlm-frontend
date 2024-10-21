/** @format */

import { BASE_API_URL } from "@/configs";
interface Props {
  url: string;
  config?: any;
  cache?: boolean;
}
export const getFetchInstance = async ({
  url,
  config,
  cache = true,
}: Props) => {
  try {
    const response = await fetch(BASE_API_URL + url, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...config,
      },
      cache: cache ? "no-cache" : "force-cache",
    });

    return await response.json();
  } catch (error: any) {
    return {
      error: true,
      message: error?.message ?? error,
    };
  }
};
