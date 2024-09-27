import { useProviderContext } from '@/components/Context';
import Image from 'next/image';
import Link from 'next/link';
import HamburgerToggler from './HamburgerToggler';
import Notification from './Notification';
import Profile from './Profile';
import ThemeSwitcher from './ThemeSwitcher';

const Header = (props: any) => {
	const { isHamburgerOpen, setIsHamburgerOpen } = useProviderContext();
	return (
		<nav className="fixed flex items-center top-0 z-30 left-0 right-0 bg-white dark:bg-[#003049] border-b border-gray-200 dark:border-[#535a94]/80 h-[4.5rem]">
			<div
				className={`h-full flex items-center border-none sm:border-r border-gray-200 dark:border-[#535a94]/80 transition-all ease-in-out duration-300 px-5 sm:px-0 ${
					isHamburgerOpen
						? 'w-auto sm:w-96 visible opacity-100'
						: 'w-auto visible opacity-100 sm:w-0 sm:invisible sm:opacity-0'
				}`}>
				<Link
					href="/dashboard"
					className="h-full w-full flex items-center justify-center bg-transparent sm:bg-[#c3efe9] sm:dark:bg-transparent">
					<Image
						src="/image.png"
						height="50"
						width="50"
						className="h-10 w-auto mr-3"
						alt="Logo"
					/>
					<span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
						Logo Here
					</span>
				</Link>
			</div>
			<div className="grow h-full flex justify-between px-5 gap-2">
				<HamburgerToggler />
				<div className="flex gap-2 ml-auto">
					<ThemeSwitcher />
					<Notification />
					<Profile />
				</div>
			</div>
		</nav>
	);
};

export default Header;
