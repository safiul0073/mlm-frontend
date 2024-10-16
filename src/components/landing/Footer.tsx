import {
  FacebookFilled,
  GithubFilled,
  InstagramFilled,
  TwitterSquareFilled,
  YoutubeFilled,
} from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800">
      <h2 className="sr-only">Footer</h2>
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="sm:grid sm:grid-cols-2 lg:grid-cols-5 sm:gap-8">
          <div className="text-center lg:text-left sm:col-span-2">
            <Link href="/" className="flex items-center">
              <Image
                src="/image.png"
                height="50"
                width="50"
                className="h-10 w-auto mr-3"
                alt="Logo"
              />
              <span className="text-xl font-semibold sm:text-2xl whitespace-nowrap text-white">
                Logo Here
              </span>
            </Link>
            <p className="text-base text-gray-300 hover:text-white font-medium mt-3.5">
              Lorem ipsum dolor sit.
            </p>
            <p className="text-base text-gray-300 hover:text-white font-medium mt-2.5">
              Lorem, ipsum dolor.
            </p>
          </div>
          <div className="text-center lg:text-left">
            <h3 className="text-base font-bold text-white">Pages</h3>
            <ul role="list" className="mt-4 space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-base text-gray-300 hover:text-white"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-base text-gray-300 hover:text-white"
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-base text-gray-300 hover:text-white"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-base text-gray-300 hover:text-white"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-base text-gray-300 hover:text-white"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-12 sm:mt-0 text-center lg:text-left">
            <h3 className="text-base font-bold text-white">Legal</h3>
            <ul role="list" className="mt-4 space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-base text-gray-300 hover:text-white"
                >
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-base text-gray-300 hover:text-white"
                >
                  Disclaimer Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-base text-gray-300 hover:text-white"
                >
                  Spam Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-base text-gray-300 hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-12 sm:mt-0 text-center lg:text-left sm:col-span-2 lg:col-span-1">
            <h3 className="text-base font-bold text-white">
              Office Information
            </h3>
            <ul role="list" className="mt-4 space-y-4">
              <li>
                <p className="text-base text-gray-300 hover:text-white">
                  Lorem.
                </p>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-base text-gray-300 hover:text-white"
                >
                  Lorem, ipsum.
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-base text-gray-300 hover:text-white"
                >
                  Lorem, ipsum dolor.
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            <Link href="/" className="text-gray-400 hover:text-gray-300">
              <span className="sr-only">Facebook</span>
              <FacebookFilled className="text-xl" />
            </Link>
            <Link href="/" className="text-gray-400 hover:text-gray-300">
              <span className="sr-only">Instagram</span>
              <InstagramFilled className="text-xl" />
            </Link>
            <Link href="/" className="text-gray-400 hover:text-gray-300">
              <span className="sr-only">Twitter</span>
              <TwitterSquareFilled className="text-xl" />
            </Link>
            <Link href="/" className="text-gray-400 hover:text-gray-300">
              <span className="sr-only">Youtube</span>
              <YoutubeFilled className="text-xl" />
            </Link>
            <Link href="/" className="text-gray-400 hover:text-gray-300">
              <span className="sr-only">Github</span>
              <GithubFilled className="text-xl" />
            </Link>
          </div>
          <p className="mt-8 text-base text-gray-400 md:order-1 md:mt-0">
            &copy; © 2020 Your Company, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
