"use client";

import type { TabsProps } from "antd";
import { Tabs } from "antd";

const Activities = () => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Latest Package Purchases",
      children: (
        <div className="overflow-x-auto shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-indigo-500">
              <tr>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6"
                >
                  User
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                >
                  Package Name
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                >
                  Date
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                >
                  Amount
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              <tr>
                <td className="whitespace-nowrap text-left py-4 pl-4 pr-3 text-sm sm:pl-6">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Magnam, quaerat?
                </td>
                <td className="whitespace-nowrap text-left px-3 py-4 text-sm text-gray-500">
                  Lorem ipsum dolor sit.
                </td>
                <td className="whitespace-nowrap text-left px-3 py-4 text-sm text-gray-500">
                  Lorem ipsum dolor sit amet.
                </td>
                <td className="whitespace-nowrap text-left px-3 py-4 text-sm text-gray-500">
                  Lorem, ipsum dolor.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ),
    },
    {
      key: "2",
      label: "Top Sponsors",
      children: (
        <div className="overflow-x-auto shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-indigo-500">
              <tr>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6"
                >
                  User
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                >
                  Sponsor Name
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                >
                  Joined At
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                >
                  Count
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              <tr>
                <td className="whitespace-nowrap text-left py-4 pl-4 pr-3 text-sm sm:pl-6">
                  Lorem ipsum dolor sit amet.
                </td>
                <td className="whitespace-nowrap text-left px-3 py-4 text-sm text-gray-500">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Distinctio non possimus vel tenetur facere eius, soluta
                  consequuntur voluptatibus ratione dicta dolorem commodi qui!
                  Magnam ab temporibus in facilis magni! Voluptate.
                </td>
                <td className="whitespace-nowrap text-left px-3 py-4 text-sm text-gray-500">
                  Lorem, ipsum.
                </td>
                <td className="whitespace-nowrap text-left px-3 py-4 text-sm text-gray-500">
                  Lorem ipsum dolor sit.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ),
    },
    {
      key: "3",
      label: "Latest Withdraws",
      children: (
        <div className="overflow-x-auto shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-indigo-500">
              <tr>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6"
                >
                  User
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                >
                  Payment Method
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                >
                  Date
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                >
                  Amount
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              <tr>
                <td className="whitespace-nowrap text-left py-4 pl-4 pr-3 text-sm sm:pl-6">
                  Lorem, ipsum dolor.
                </td>
                <td className="whitespace-nowrap text-left px-3 py-4 text-sm text-gray-500">
                  Lorem, ipsum.
                </td>
                <td className="whitespace-nowrap text-left px-3 py-4 text-sm text-gray-500">
                  Lorem ipsum dolor sit.
                </td>
                <td className="whitespace-nowrap text-left px-3 py-4 text-sm text-gray-500">
                  Lorem ipsum dolor sit amet.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ),
    },
  ];

  const onChange = (key: string) => {
    console.log(key);
  };

  return (
    <div className="relative bg-white py-10 md:py-12 lg:py-20">
      <div className="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Our Latest Activities
        </p>
        {/* <div className=" mt-5 md:mt-8 lg:mt-12">
					<div className="flex justify-center items-center">
						<ul className="mb-4 flex list-none flex-col flex-wrap border-b-0 pl-0 md:flex-row">
							<li className="md:mx-2 mb-2 md:mb-0 lg:mb-0 xl:mb-0">
								<button
									id="tab-package"
									className="tablinks rounded-md bg-indigo-500 text-gray-200 border-gray-200 border px-4 py-3">
									Latest Package Purchases
								</button>
							</li>
							<li className="md:mx-2 mb-2 md:mb-0 lg:mb-0 xl:mb-0">
								<button className="tablinks rounded-md bg-white text-gray-700 border-gray-200 border px-4 py-3">
									Top Sponsors
								</button>
							</li>
							<li className="md:mx-2 mb-2 md:mb-0 lg:mb-0 xl:mb-0">
								<button className="tablinks rounded-md bg-white text-gray-700 border-gray-200 border px-4 py-3">
									Latest Withdraws
								</button>
							</li>
						</ul>
					</div>
				</div> */}
        <div className=" mt-5 md:mt-8 lg:mt-12">
          <Tabs
            tabBarGutter={16}
            defaultActiveKey="1"
            items={items}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Activities;
