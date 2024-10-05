import { useProviderContext } from "@/components/Context";
import {
  BellOutlined,
  CaretDownOutlined,
  CommentOutlined,
  CreditCardOutlined,
  DashboardOutlined,
  DollarOutlined,
  FileAddOutlined,
  FileDoneOutlined,
  FileTextOutlined,
  MoneyCollectFilled,
  MoneyCollectOutlined,
  ProfileOutlined,
  SettingOutlined,
  StarOutlined,
  TeamOutlined,
  UserAddOutlined,
  WalletFilled,
  WalletOutlined,
} from "@ant-design/icons";
import { Collapse } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = (props: any) => {
  const { isHamburgerOpen, setIsHamburgerOpen } = useProviderContext();
  const pathName = usePathname();

  const navList = [
    {
      name: "Dashboard",
      slug: "/dashboard",
      icon: <DashboardOutlined />,
    },
    {
      name: "My Team",
      slug: "/user/tree",
      icon: <TeamOutlined />,
    },
    {
      name: "My Rewards",
      slug: "/rewards",
      icon: <MoneyCollectOutlined />,
    },
    {
      name: "Business Plan",
      slug: "/schema/all",
      icon: <StarOutlined />,
    },
    {
      name: "Package Purchase",
      slug: "/schema/log",
      icon: <ProfileOutlined />,
    },
    {
      name: "Referral",
      slug: "/referral",
      icon: <UserAddOutlined />,
    },
    {
      name: "Balance Transfer",
      icon: <WalletOutlined />,
      children: [
        {
          name: "New Transfer",
          slug: "/wallet/exchange",
        },
        {
          name: "Total Transfer",
          slug: "/wallet/log",
        },
      ],
    },
    {
      name: "Withdraw",
      icon: <CreditCardOutlined />,
      children: [
        {
          name: "Make Withdraw",
          slug: "/withdraw/new",
        },
        {
          name: "Total Withdraw",
          slug: "/withdraw/log",
        },
      ],
    },
    {
      name: "Transactions",
      slug: "/transaction",
      icon: <FileTextOutlined />,
    },
    {
      name: "My Wallet",
      slug: "/wallet/all",
      icon: <WalletOutlined />,
    },
    {
      name: "Total Profit Interest",
      slug: "/profit/interest",
      icon: <FileDoneOutlined />,
    },
    {
      name: "Bonus",
      icon: <DollarOutlined />,
      children: [
        {
          name: "Reward Bonus",
          slug: "/bonus/reward",
        },
        {
          name: "Total Generation Bonus",
          slug: "/bonus/generation",
        },
        {
          name: "Total Referral Bonus",
          slug: "/bonus/referral",
        },
        {
          name: "Total Incentive Bonus",
          slug: "/bonus/incentive",
        },
        {
          name: "Deposit Bonus",
          slug: "/bonus/deposit",
        },
        {
          name: "Investment Bonus",
          slug: "/bonus/investment",
        },
      ],
    },
    {
      name: "Support Ticket",
      slug: "/support-ticket",
      icon: <CommentOutlined />,
    },
    {
      name: "Notifications",
      slug: "/notifications",
      icon: <BellOutlined />,
    },
    {
      name: "Settings",
      slug: "/settings",
      icon: <SettingOutlined />,
    },
  ];

  const miniNavList = [
    {
      name: "Home",
      slug: "/dashboard",
      icon: <DashboardOutlined />,
    },
    {
      name: "Plan",
      slug: "/schema/all",
      icon: <StarOutlined />,
    },
    {
      name: "Wallet",
      slug: "/wallet/all",
      icon: <WalletOutlined />,
    },
    {
      name: "Support",
      slug: "/support-ticket",
      icon: <CommentOutlined />,
    },
    {
      name: "Settings",
      slug: "/settings",
      icon: <SettingOutlined />,
    },
  ];

  return (
    <>
      <aside
        className={`fixed top-[4.5rem] left-0 bottom-0 z-20 hidden sm:flex flex-col flex-shrink-0 font-normal transition-all ease-in-out duration-300 ${
          isHamburgerOpen
            ? "w-96 visible opacity-100"
            : "w-0 invisible opacity-0"
        }`}
      >
        <div className="relative flex flex-col flex-1 min-h-0 pt-0 bg-[#c3efe9] dark:bg-[#003049] overflow-y-auto border-r border-gray-200 dark:border-[#535a94]/80 divide-y divide-gray-200 dark:divide-[#535a94]/80">
          <div className="p-5 text-white flex flex-col gap-2">
            <div className="bg-gradient-to-r from-[#e52e71] to-[#ff8a00] p-4 rounded relative overflow-hidden flex flex-col gap-4">
              <div className="absolute top-2.5 right-2.5 inline-flex bg-white text-xs text-slate-900 px-2 py-1 rounded font-semibold leading-tight uppercase">
                Wallet
              </div>
              <div className="text-xl font-bold">Account Balance</div>
              <div className="flex flex-col gap-2 px-0.5">
                <div className="flex items-center text-sm font-bold">
                  <div className="flex items-center gap-1.5">
                    <WalletFilled className="text-base" />
                    Main Wallet
                  </div>
                  <div className="ml-auto">$0</div>
                </div>
                <div className="flex items-center text-sm font-bold">
                  <div className="flex items-center gap-1.5">
                    <MoneyCollectFilled className="text-base" />
                    Profit Wallet
                  </div>
                  <div className="ml-auto">$3</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Link
                href="/deposit"
                className="bg-[#5364f1] hover:bg-[#e52e71] inline-flex items-center gap-2 justify-center h-11 rounded text-white text-base font-medium"
              >
                <FileAddOutlined className="text-base" />
                Deposit
              </Link>
              <Link
                href="/schema/all"
                className="bg-[#2a9d8f] hover:bg-[#e52e71] inline-flex items-center gap-2 justify-center h-11 rounded text-white text-base font-medium"
              >
                <FileDoneOutlined className="text-base" />
                Invest Now
              </Link>
            </div>
          </div>

          <nav className="grow h-auto p-7 flex flex-col gap-2">
            {navList?.map((nav, index) => (
              <React.Fragment key={index}>
                {nav.slug && !nav.children && (
                  <Link
                    href={nav?.slug}
                    key={index}
                    className={`px-6 py-2 bg-transparent rounded-xl text-slate-600 dark:text-slate-100 border border-solid ${
                      pathName.endsWith(nav?.slug)
                        ? "border-[#535a94]"
                        : " border-transparent hover:bg-gray-900/5 dark:hover:bg-[#123f57]"
                    } inline-flex items-center gap-2 uppercase leading-none`}
                  >
                    <span className="text-lg">{nav?.icon}</span>
                    <span>{nav?.name}</span>
                  </Link>
                )}

                {nav.children && (
                  <Collapse
                    accordion
                    className="!border-none !bg-transparent"
                    items={[
                      {
                        key: index,
                        className: "flex flex-col rounded-full",
                        label: (
                          <div
                            className={`w-full px-6 py-2 bg-transparent rounded-xl text-slate-600 dark:text-slate-100 border border-solid ${
                              nav?.children.find((child) =>
                                pathName.endsWith(child?.slug),
                              )
                                ? "border-[#535a94]"
                                : " border-transparent hover:bg-gray-900/5 dark:hover:bg-[#123f57]"
                            } inline-flex items-center gap-2 uppercase leading-none`}
                          >
                            <span className="text-lg">{nav?.icon}</span>
                            <span>{nav?.name}</span>
                            <span className="text-lg ml-auto">
                              <CaretDownOutlined />
                            </span>
                          </div>
                        ),
                        showArrow: false,
                        headerClass: "!p-0",
                        children: nav.children.map((child, index) => (
                          <Link
                            href={child?.slug}
                            key={index}
                            className={`w-full px-6 py-2 min-h-10 bg-transparent rounded-xl text-slate-600 dark:text-slate-100 border border-solid ${
                              pathName.endsWith(child?.slug)
                                ? "border-[#535a94]"
                                : " border-transparent hover:bg-gray-900/5 dark:hover:bg-[#123f57]"
                            } inline-flex items-center gap-2 uppercase leading-none hover:!text-slate-600 dark:hover:!text-slate-100`}
                          >
                            <span>{child?.name}</span>
                          </Link>
                        )),
                      },
                    ]}
                  />
                )}
              </React.Fragment>
            ))}
          </nav>
        </div>
      </aside>
      <div className="fixed inset-x-0 bottom-0 z-20 bg-[#c3efe9] dark:bg-[#003049] border-t border-gray-200 dark:border-[#535a94]/80 rounded-t-lg grid grid-cols-5 sm:hidden">
        {miniNavList?.map((nav, index) => (
          <Link
            href={nav?.slug}
            key={index}
            className={`grow shrink-0 px-3 py-2 min-h-20 bg-transparent ${
              pathName.endsWith(nav?.slug)
                ? "text-black dark:text-white"
                : "text-slate-600 dark:text-slate-500"
            } inline-flex flex-col justify-center items-center text-center gap-2 uppercase leading-none`}
          >
            <span className="text-2xl">{nav?.icon}</span>
            <span className="text-xs">{nav?.name}</span>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
