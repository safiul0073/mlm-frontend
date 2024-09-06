'use client';

import { CopyOutlined, GiftOutlined, WarningFilled } from '@ant-design/icons';
import Image from 'next/image';
import Link from 'next/link';

const people = [
	{
		name: 'Lindsay Walton',
		title: 'Front-end Developer',
		department: 'Optimization',
		email: 'lindsay.walton@example.com',
		role: 'Member',
		image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
	},
	{
		name: 'Lindsay Walton',
		title: 'Front-end Developer',
		department: 'Optimization',
		email: 'lindsay.walton@example.com',
		role: 'Member',
		image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
	},
	{
		name: 'Lindsay Walton',
		title: 'Front-end Developer',
		department: 'Optimization',
		email: 'lindsay.walton@example.com',
		role: 'Member',
		image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
	},
	{
		name: 'Lindsay Walton',
		title: 'Front-end Developer',
		department: 'Optimization',
		email: 'lindsay.walton@example.com',
		role: 'Member',
		image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
	},
	{
		name: 'Lindsay Walton',
		title: 'Front-end Developer',
		department: 'Optimization',
		email: 'lindsay.walton@example.com',
		role: 'Member',
		image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
	},
	{
		name: 'Lindsay Walton',
		title: 'Front-end Developer',
		department: 'Optimization',
		email: 'lindsay.walton@example.com',
		role: 'Member',
		image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
	},
];
const Dashboard = () => {
	return (
		<div className="flex flex-col gap-6">
			<div className="flex items-center gap-2 bg-[#ffc300]/10 dark:bg-[#003049]/80 rounded border border-gray-200 dark:border-[#535a94]/80 p-6">
				<div className="flex items-center gap-2.5 text-base leading-tight">
					<div className="bg-[#ffc300] text-white h-10 aspect-square shrink-0 rounded-full inline-flex items-center justify-center">
						<WarningFilled className="text-lg" />
					</div>
					<span>
						You need to submit your
						<b>KYC and Other Documents</b> before proceed to the
						system.
					</span>
				</div>
				<div className="flex items-center gap-2.5 ml-auto">
					<button className="bg-gradient-to-r from-[#e52e71] to-[#ff8a00] inline-flex items-center justify-center h-10 rounded-full text-white text-base font-medium px-5">
						Deposit
					</button>
					<button className="bg-[#e52e71] inline-flex items-center justify-center h-10 rounded-full text-white text-base font-medium px-5">
						Invest Now
					</button>
				</div>
			</div>
			<div className="flex items-center gap-6">
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
				<div className="flex flex-col grow shadow-lg rounded">
					<div className="px-6 py-3 rounded-t border-t border-x border-gray-200 dark:border-[#535a94]/80 text-lg text-medium bg-white dark:bg-transparent">
						Referral URL
					</div>
					<div className="flex flex-col p-6 gap-2 rounded-b border border-gray-200 dark:border-[#535a94]/80 bg-white dark:bg-transparent">
						<div className="flex items-center">
							<div className="w-auto grow border-y-2 border-l-2 border-gray-200 dark:border-[#535a94]/80 h-12 inline-flex items-center px-4 rounded-l">
								https://hyiprio.tdevs.co/register?invite=jLcoFooc3K
							</div>
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
					<div className="px-4 py-5 flex items-start gap-3 rounded-lg overflow-hidden bg-[#535a94] border-2 border-[#a98f65] relative after:absolute after:top-0 after:right-0 after:-translate-y-1/3 after:translate-x-1/3 after:h-16 after:aspect-square after:rounded-full after:bg-[#a98f65]">
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
				<div className="px-6 py-3 rounded-t border-t border-x border-gray-200 dark:border-[#535a94]/80 text-lg text-medium bg-white dark:bg-transparent">
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
												Name
											</th>
											<th
												scope="col"
												className="px-3 py-3.5 text-left text-sm font-semibold dark dark:text-white">
												Title
											</th>
											<th
												scope="col"
												className="px-3 py-3.5 text-left text-sm font-semibold dark dark:text-white">
												Status
											</th>
											<th
												scope="col"
												className="px-3 py-3.5 text-left text-sm font-semibold dark dark:text-white">
												Role
											</th>
											<th
												scope="col"
												className="relative py-3.5 pl-3 pr-4">
												<span className="sr-only">
													Edit
												</span>
											</th>
										</tr>
									</thead>
									<tbody className="divide-y divide-gray-200 dark:divide-[#535a94]/80">
										{people.map((person) => (
											<tr
												key={person.email}
												className="odd:bg-white even:bg-slate-100 dark:odd:bg-transparent dark:even:bg-[#003049]">
												<td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm">
													<div className="flex items-center">
														<div className="h-10 aspect-square flex-shrink-0">
															<Image
																src="/aa.png"
																height="500"
																width="500"
																className="h-full w-full object-cover rounded-full"
																alt="Jese image"
															/>
														</div>
														<div className="ml-4">
															<div className="font-medium text-slate-900 dark:text-white">
																{person.name}
															</div>
															<div className="mt-1 text-gray-500 dark:text-slate-400">
																{person.email}
															</div>
														</div>
													</div>
												</td>
												<td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500 dark:text-slate-400">
													<div className="text-slate-900 dark:text-white">
														{person.title}
													</div>
													<div className="mt-1 text-gray-500 dark:text-slate-400">
														{person.department}
													</div>
												</td>
												<td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500 dark:text-slate-400">
													<span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
														Active
													</span>
												</td>
												<td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500 dark:text-slate-400">
													{person.role}
												</td>
												<td className="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium">
													<Link
														href="#"
														className="text-indigo-600 hover:text-indigo-900 dark:hover:text-indigo-400">
														Edit
														<span className="sr-only">
															, {person.name}
														</span>
													</Link>
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
		</div>
	);
};

export default Dashboard;
