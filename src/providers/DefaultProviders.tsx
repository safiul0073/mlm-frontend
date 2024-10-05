"use client";

import { ContextProvider } from "@/components/Context";
import { getQueryClient } from "@/configs/query-client";
import { isBrowser } from "@/utils";
import { QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";

export default function DefaultProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  const url = isBrowser() ? new URL(window.location.href) : null;

  if (url) {
    console.log(url);
  }

  return (
    <>
      <QueryClientProvider client={getQueryClient()}>
        <ThemeProvider
          enableSystem={false}
          defaultTheme="light"
          enableColorScheme={false}
          themes={["light", "dark"]}
          attribute="class"
        >
          <ContextProvider>{children}</ContextProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}
