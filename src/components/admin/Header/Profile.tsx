'use client';
import {
	DashboardOutlined,
	LogoutOutlined,
	PaperClipOutlined,
	SettingOutlined,
} from '@ant-design/icons';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

const Profile = () => {
	const [showProfileDropdown, setShowProfileDropdown] = useState(false);

	return (
		<OutsideClickHandler
			onOutsideClick={() => setShowProfileDropdown(false)}>
			<div className="h-full flex items-center relative p-2.5">
				<button
					type="button"
					onClick={() => {
						setShowProfileDropdown((state) => !state);
					}}
					className="flex text-sm bg-gray-800 rounded-full border border-gray-200 dark:border-[#535a94]/80">
					<span className="sr-only">Open user menu</span>
					<Image
						src="/aa.png"
						height="50"
						width="50"
						className="w-10 h-10 rounded-full"
						alt="Jese image"
					/>
				</button>

				<div
					className={`z-50 text-base list-none bg-white dark:bg-[#003049] divide-y divide-slate-200 dark:divide-slate-600 rounded shadow ${
						showProfileDropdown ? 'inline-block' : 'hidden'
					}`}
					style={{
						position: 'absolute',
						top: '100%',
						left: '100%',
						margin: 0,
						transform: 'translate3d(-100%, 0px, 0px)',
					}}>
					<div
						className="px-4 py-3 bg-slate-50 dark:bg-slate-800"
						role="none">
						<p
							className="text-sm text-gray-900 dark:text-white"
							role="none">
							Neil Sims
						</p>
						<p
							className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
							role="none">
							neil.sims@flowbite.com
						</p>
					</div>
					<ul
						className="py-1"
						role="none">
						<li>
							<Link
								href="/dashboard"
								className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-[#123f57]"
								role="menuitem">
								<DashboardOutlined />
								Dashboard
							</Link>
						</li>
						<li>
							<Link
								href="/user/settings"
								className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-[#123f57]"
								role="menuitem">
								<SettingOutlined /> Settings
							</Link>
						</li>
						<li>
							<Link
								href="/user/support-ticket"
								className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-[#123f57]"
								role="menuitem">
								<PaperClipOutlined /> Support Tickets
							</Link>
						</li>
						<li>
							<button
								className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-[#123f57]"
								role="menuitem">
								<LogoutOutlined />
								Sign out
							</button>
						</li>
					</ul>
				</div>
			</div>
		</OutsideClickHandler>
	);
};

export default Profile;
