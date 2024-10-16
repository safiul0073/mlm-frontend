"use client";

import { MenuOutlined } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  return (
    <header className="bg-indigo-800 lg:h-24 flex flex-col justify-center sticky top-0 z-40">
      <div className="container mx-auto px-6">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setHamburgerOpen((state) => !state)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              <MenuOutlined className="text-lg" />
            </button>
          </div>
          <div className="flex flex-1 items-center ml-16 mobile:ml-12 lg:ml-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/image.png"
                height="50"
                width="50"
                className="h-10 w-auto mr-3"
                alt="Logo"
              />
              <span className="text-xl font-semibold sm:text-2xl whitespace-nowrap">
                Logo Here
              </span>
            </Link>
            <div className="hidden lg:ml-auto lg:flex items-center">
              <div className="flex space-x-4 wide-tablet:space-x-2">
                <Link
                  href="/"
                  className={`${true ? "bg-indigo-600 text-white" : "text-gray-300 hover:bg-indigo-600 hover:text-white"} px-3 py-2 rounded-md text-sm font-medium`}
                >
                  Home
                </Link>
                <Link
                  href="/"
                  className={`${false ? "bg-indigo-600 text-white" : "text-gray-300 hover:bg-indigo-600 hover:text-white"} px-3 py-2 rounded-md text-sm font-medium`}
                >
                  Packages
                </Link>
                <Link
                  href="/"
                  className={`${false ? "bg-indigo-600 text-white" : "text-gray-300 hover:bg-indigo-600 hover:text-white"} px-3 py-2 rounded-md text-sm font-medium`}
                >
                  News
                </Link>
                <Link
                  href="/"
                  className={`${false ? "bg-indigo-600 text-white" : "text-gray-300 hover:bg-indigo-600 hover:text-white"} px-3 py-2 rounded-md text-sm font-medium`}
                >
                  Gallery
                </Link>
                <Link
                  href="/"
                  className={`${false ? "bg-indigo-600 text-white" : "text-gray-300 hover:bg-indigo-600 hover:text-white"} px-3 py-2 rounded-md text-sm font-medium`}
                >
                  About Us
                </Link>
                <Link
                  href="/"
                  className={`${false ? "bg-indigo-600 text-white" : "text-gray-300 hover:bg-indigo-600 hover:text-white"} px-3 py-2 rounded-md text-sm font-medium`}
                >
                  FAQ
                </Link>
                <Link
                  href="/"
                  className={`${false ? "bg-indigo-600 text-white" : "text-gray-300 hover:bg-indigo-600 hover:text-white"} px-3 py-2 rounded-md text-sm font-medium`}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center lg:static lg:inset-auto lg:ml-5">
            <Link
              href="/login"
              className="inline-flex items-center rounded-md border border-transparent bg-rose-500 px-4 py-1.5 text-base font-medium text-white hover:bg-rose-600"
            >
              Log in
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`lg:hidden ${hamburgerOpen ? "visible opacity-100" : "invisible opacity-0"} bg-indigo-800 absolute top-full w-full transform-bottom transition-transform ease-in-out duration-100 origin-top`}
      >
        <div className="space-y-1 px-8 pt-5 pb-5">
          <Link
            href="/"
            className={`${true ? "bg-indigo-600 text-white" : "text-gray-300 hover:bg-indigo-600 hover:text-white"} block px-3 py-2 rounded-md text-base font-medium`}
          >
            Home
          </Link>
          <Link
            href="/"
            className={`${false ? "bg-indigo-600 text-white" : "text-gray-300 hover:bg-indigo-600 hover:text-white"} block px-3 py-2 rounded-md text-base font-medium`}
          >
            Packages
          </Link>
          <Link
            href="/"
            className={`${false ? "bg-indigo-600 text-white" : "text-gray-300 hover:bg-indigo-600 hover:text-white"} block px-3 py-2 rounded-md text-base font-medium`}
          >
            News
          </Link>
          <Link
            href="/"
            className={`${false ? "bg-indigo-600 text-white" : "text-gray-300 hover:bg-indigo-600 hover:text-white"} block px-3 py-2 rounded-md text-base font-medium`}
          >
            Gallery
          </Link>
          <Link
            href="/"
            className={`${false ? "bg-indigo-600 text-white" : "text-gray-300 hover:bg-indigo-600 hover:text-white"} block px-3 py-2 rounded-md text-base font-medium`}
          >
            About Us
          </Link>
          <Link
            href="/"
            className={`${false ? "bg-indigo-600 text-white" : "text-gray-300 hover:bg-indigo-600 hover:text-white"} block px-3 py-2 rounded-md text-base font-medium`}
          >
            FAQ
          </Link>
          <Link
            href="/"
            className={`${false ? "bg-indigo-600 text-white" : "text-gray-300 hover:bg-indigo-600 hover:text-white"} block px-3 py-2 rounded-md text-base font-medium`}
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
