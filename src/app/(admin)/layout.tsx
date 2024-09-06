'use client';
import Header from '@/components/admin/Header';
import Sidebar from '@/components/admin/Sidebar';
import { useProviderContext } from '@/components/Context';

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
					className={`mt-[4.5rem] relative w-full h-full overflow-y-auto flex flex-col grow transition-all ease-in-out duration-300 ${
						isHamburgerOpen ? 'pl-0 lg:pl-96' : ''
					}`}>
					<main className="p-8 grow text-slate-900 dark:text-white">
						{children}
					</main>
				</div>
			</div>
		</>
	);
}
