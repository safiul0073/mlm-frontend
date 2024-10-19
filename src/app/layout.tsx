import "@/styles/style.scss";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import type { Metadata } from "next";
import { Sofia_Sans } from "next/font/google";
import DefaultProviders from "../providers/DefaultProviders";
import { AuthStoreProvider } from "@/providers/AuthStoreProviders";
import Header from "@/components/landing/Header";

const sofia_sans = Sofia_Sans({ subsets: ["latin"], variable: "--font-sofia" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${sofia_sans.variable} bg-gray-100 dark:bg-[#032836] h-full min-h-screen flex flex-col font-sofia`}
      >
        <AntdRegistry>
          <DefaultProviders>
            <AuthStoreProvider><Header />{children}</AuthStoreProvider>
          </DefaultProviders>
        </AntdRegistry>
      </body>
    </html>
  );
}
