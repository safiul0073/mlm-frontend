'use client';

import { MoonFilled, SunFilled } from '@ant-design/icons';
import { useTheme } from 'next-themes';

const ThemeSwitcher = () => {
	const { theme, setTheme } = useTheme();
	return (
		<div className="relative group">
			<button
				onClick={() => {
					setTheme(theme === 'dark' ? 'light' : 'dark');
				}}
				id="theme-toggle"
				data-tooltip-target="tooltip-toggle"
				type="button"
				className="h-full text-slate-600 dark:text-slate-200 focus:outline-none text-base p-2.5">
				{theme === 'dark' ? (
					<SunFilled className="text-xl" />
				) : (
					<MoonFilled className="text-xl" />
				)}
			</button>
		</div>
	);
};

export default ThemeSwitcher;
