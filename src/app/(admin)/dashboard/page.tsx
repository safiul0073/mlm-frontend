'use client';

import { CopyOutlined, GiftOutlined } from '@ant-design/icons';
import Image from 'next/image';

const transactionLog = [
	{
		title: 'Deposit With Stripe',
		time: 'Sep 08 2024 03:18',
		id: 'TRXB4GJAQ2RBS',
		type: 'Deposit',
		amount: '20 USD',
		charge: '0.6 USD',
		status: 'Pending',
		gateway: 'Stripe-usd',
	},
];
const Dashboard = () => {
	return (
		<>
			<div className="flex flex-wrap sm:flex-nowrap justify-center sm:justify-start items-center gap-6">
				<div className="flex relative">
					<div className="w-52 aspect-square shrink-0 rounded-full bg-[#003049] border-4 border-solid border-[#ffc300] overflow-hidden">
						<Image
							src="/aa.png"
							height="500"
							width="500"
							className="w-full h-full object-fit"
							alt="Jese image"
						/>
					</div>
					<span className="absolute top-1 right-1 bg-[#5364f1] h-14 aspect-square rounded-full inline-flex items-center justify-center border-4 border-solid border-[#ffc300]">
						<Image
							src="/badge.svg"
							height="50"
							width="50"
							className="w-7"
							alt="badge"
						/>
					</span>
				</div>
				<div className="w-full flex flex-col grow shadow-lg rounded">
					<div className="px-6 h-14 rounded-t border-t border-x border-gray-200 dark:border-[#535a94]/80 text-lg text-medium bg-white dark:bg-transparent flex items-center gap-2">
						Referral URL
					</div>
					<div className="flex flex-col p-6 gap-2 rounded-b border border-gray-200 dark:border-[#535a94]/80 bg-white dark:bg-transparent">
						<div className="flex items-center">
							<input
								className="w-full min-w-auto grow border-y-2 border-l-2 border-gray-200 dark:border-[#535a94]/80 h-12 inline-flex items-center px-4 rounded-l"
								value="https://hyiprio.tdevs.co/register?invite=jLcoFooc3K"
								disabled
							/>
							<button className="bg-[#e52e71] inline-flex items-center justify-center h-12 rounded-r text-white text-base font-medium px-5 gap-2">
								<CopyOutlined />
								Copy
							</button>
						</div>
						<span className="text-sm text-gray-400">
							0 peoples are joined by using this URL
						</span>
					</div>
				</div>
			</div>
			<div className="grid grid-cols-auto-56 gap-4">
				{[...Array(16)].map((i: any) => (
					<div
						className="px-4 py-5 flex items-start gap-3 rounded-lg overflow-hidden bg-[#535a94] border-2 border-[#a98f65] relative after:absolute after:top-0 after:right-0 after:-translate-y-1/3 after:translate-x-1/3 after:h-16 after:aspect-square after:rounded-full after:bg-[#a98f65]"
						key={i}>
						<div className="bg-white text-[#535a94] h-10 aspect-square shrink-0 rounded-full inline-flex items-center justify-center">
							<GiftOutlined className="text-xl" />
						</div>
						<div className="flex flex-col gap-1 text-white">
							<h3 className="text-xl text-medium">
								<sup>$</sup>1200
							</h3>
							<p className="text-base text-regular">
								Investment Bonus
							</p>
						</div>
					</div>
				))}
			</div>
			<div className="flex flex-col grow shadow-lg rounded">
				<div className="px-6 h-14 rounded-t border-t border-x border-gray-200 dark:border-[#535a94]/80 text-lg text-medium bg-white dark:bg-transparent flex items-center gap-2">
					Recent Transactions
				</div>
				<div className="flex flex-col p-6 gap-2 rounded-b border border-gray-200 dark:border-[#535a94]/80 bg-white dark:bg-transparent">
					<div className="flow-root">
						<div className="-my-2 overflow-x-auto">
							<div className="inline-block min-w-full py-2 align-middle">
								<table className="min-w-full border border-gray-200 dark:border-[#535a94]/80 divide-y divide-gray-200 dark:divide-[#535a94]/80">
									<thead>
										<tr className="bg-slate-100 dark:bg-[#003049]">
											<th
												scope="col"
												className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold dark dark:text-white">
												Description
											</th>
											<th
												scope="col"
												className="px-3 py-3.5 text-left text-sm font-semibold dark dark:text-white">
												Transaction ID
											</th>
											<th
												scope="col"
												className="px-3 py-3.5 text-left text-sm font-semibold dark dark:text-white">
												Type
											</th>
											<th
												scope="col"
												className="px-3 py-3.5 text-left text-sm font-semibold dark dark:text-white">
												Amount
											</th>
											<th
												scope="col"
												className="px-3 py-3.5 text-left text-sm font-semibold dark dark:text-white">
												Charge
											</th>
											<th
												scope="col"
												className="px-3 py-3.5 text-left text-sm font-semibold dark dark:text-white">
												Status
											</th>
											<th
												scope="col"
												className="px-3 py-3.5 text-left text-sm font-semibold dark dark:text-white">
												Gateway
											</th>
										</tr>
									</thead>
									<tbody className="divide-y divide-gray-200 dark:divide-[#535a94]/80">
										{transactionLog.map((transaction) => (
											<tr
												key={transaction.id}
												className="odd:bg-white even:bg-slate-100 dark:odd:bg-transparent dark:even:bg-[#003049]">
												<td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm">
													<div className="flex items-center">
														<div className="h-6 aspect-square flex-shrink-0">
															<Image
																src="/aa.png"
																height="500"
																width="500"
																className="h-full w-full object-cover rounded-full"
																alt="Jese image"
															/>
														</div>
														<div className="ml-2">
															<div className="font-medium text-slate-900 dark:text-white">
																{
																	transaction.title
																}
															</div>
															<div className="mt-1 text-gray-500 dark:text-slate-400">
																{
																	transaction.time
																}
															</div>
														</div>
													</div>
												</td>
												<td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500 dark:text-slate-400">
													<div className="text-slate-900 dark:text-white">
														{transaction.id}
													</div>
												</td>
												<td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500 dark:text-slate-400">
													<div className="mt-1 text-gray-500 dark:text-slate-400">
														{transaction.type}
													</div>
												</td>
												<td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500 dark:text-slate-400">
													<span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
														{transaction.amount}
													</span>
												</td>
												<td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500 dark:text-slate-400">
													{transaction.charge}
												</td>
												<td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500 dark:text-slate-400">
													{transaction.status}
												</td>
												<td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500 dark:text-slate-400">
													{transaction.gateway}
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Dashboard;
