'use client';
import Header from '@/components/admin/Header';
import Sidebar from '@/components/admin/Sidebar';
import { ThemeProvider } from 'next-themes';
import { useState } from 'react';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const [showSidebar, setShowSidebar] = useState(true);

	return (
		<>
			<ThemeProvider
				enableSystem={false}
				defaultTheme="dark"
				enableColorScheme={false}
				themes={['light', 'dark']}
				attribute="class">
				<Header
					showSidebar={showSidebar}
					setShowSidebar={setShowSidebar}
				/>
				<div className="h-full flex">
					<Sidebar
						showSidebar={showSidebar}
						setShowSidebar={setShowSidebar}
					/>
					<div
						className={`mt-[4.5rem] relative w-full h-full overflow-y-auto flex flex-col grow transition-all ease-in-out duration-300 ${
							showSidebar ? 'pl-0 lg:pl-96' : ''
						}`}>
						<main className="p-8 grow text-slate-900 dark:text-white">{children}</main>
					</div>
				</div>
			</ThemeProvider>
		</>
	);
}
