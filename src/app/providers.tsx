'use client';

import { ContextProvider } from '@/components/Context';
import { isBrowser } from '@/utils';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'next-themes';

const queryClient = new QueryClient();

export default function Providers({ children }: { children: React.ReactNode }) {
	const url = isBrowser() ? new URL(window.location.href) : null;

	if (url) {
		console.log(url);
	}

	return (
		<>
			<QueryClientProvider client={queryClient}>
				<ThemeProvider
					enableSystem={false}
					defaultTheme="dark"
					enableColorScheme={false}
					themes={['light', 'dark']}
					attribute="class">
					<ContextProvider>{children}</ContextProvider>
				</ThemeProvider>
			</QueryClientProvider>
		</>
	);
}
