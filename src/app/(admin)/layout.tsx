'use client';
import Header from '@/components/admin/Header';
import Sidebar from '@/components/admin/Sidebar';
import { useProviderContext } from '@/components/Context';
import { WarningFilled } from '@ant-design/icons';
import Link from 'next/link';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const { isHamburgerOpen, setIsHamburgerOpen } = useProviderContext();

	return (
		<>
			<Header />
			<div className="h-full flex">
				<Sidebar />
				<div
					className={`mt-[4.5rem] pb-20 sm:pb-0 relative w-full h-full overflow-y-auto flex flex-col grow transition-all ease-in-out duration-300 ${
						isHamburgerOpen ? 'pl-0 lg:pl-96' : ''
					}`}>
					<main className="p-8 grow flex flex-col gap-6 text-slate-900 dark:text-white">
						<div className="flex items-center gap-2 bg-[#ffc300]/10 dark:bg-[#003049]/80 rounded border border-gray-200 dark:border-[#535a94]/80 p-6 flex-col md:flex-row">
							<div className="flex items-center gap-2.5 text-base leading-tight">
								<div className="bg-[#ffc300] text-white h-10 aspect-square shrink-0 rounded-full inline-flex items-center justify-center">
									<WarningFilled className="text-lg" />
								</div>
								<span>
									You need to submit your
									<b> KYC and Other Documents</b> before
									proceed to the system.
								</span>
							</div>
							<div className="flex flex-wrap sm:flex-nowrap justify-center items-center gap-2.5 ml-auto mr-auto sm:mr-0">
								<Link
									href="/deposit"
									className="bg-gradient-to-r from-[#e52e71] to-[#ff8a00] inline-flex items-center justify-center h-10 rounded-full text-white text-base font-medium px-5 whitespace-nowrap">
									Deposit
								</Link>
								<Link
									href="/schema/all"
									className="bg-[#e52e71] inline-flex items-center justify-center h-10 rounded-full text-white text-base font-medium px-5 whitespace-nowrap">
									Invest Now
								</Link>
							</div>
						</div>
						{children}
					</main>
				</div>
			</div>
		</>
	);
}
