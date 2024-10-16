"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useCountryList = () => {
  return useQuery({
    queryKey: ["country-list"],
    queryFn: async () => {
      const response = await axios.get(
        "https://restcountries.com/v3.1/all?fields=name",
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        },
      );
      return response.data?.map((country: any) => ({
        value: country?.name?.common,
        label: country?.name?.common,
      }));
    },
    refetchOnWindowFocus: false,
  });
};
