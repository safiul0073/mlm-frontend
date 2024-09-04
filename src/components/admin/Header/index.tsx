import HamburgerToggler from './HamburgerToggler';
import Notification from './Notification';
import Profile from './Profile';
import ThemeSwitcher from './ThemeSwitcher';

const Header = (props: any) => {
	const { showSidebar, setShowSidebar } = props;
	return (
		<nav className="fixed flex items-center top-0 z-30 left-0 right-0 bg-white dark:bg-[#003049] border-b border-gray-200 dark:border-[#535a94]/80 h-[4.5rem]">
			<div
				className={`h-full flex items-center border-r border-gray-200 dark:border-[#535a94]/80 transition-all ease-in-out duration-300 ${
					showSidebar
						? 'w-96 visible opacity-100'
						: 'w-0 invisible opacity-0'
				}`}>
				<a
					href="#"
					className="h-full w-full flex items-center justify-center bg-teal-100 dark:bg-transparent">
					<img
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAHXPluq6GtTRPDIHRv5kJPy86uFjp5sO7hg&s"
						className="h-10 mr-3"
						alt="Logo"
					/>
					<span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
						Logo Here
					</span>
				</a>
			</div>
			<div className="grow h-full flex justify-between px-5 gap-2">
				<HamburgerToggler
					showSidebar={showSidebar}
					setShowSidebar={setShowSidebar}
				/>
				<div className="flex gap-2">
					<ThemeSwitcher />
					<Notification />
					<Profile />
				</div>
			</div>
		</nav>
	);
};

export default Header;
