'use client';
import {
	BellFilled,
	CloudDownloadOutlined,
	EyeFilled,
} from '@ant-design/icons';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

const Notification = () => {
	const [showNotification, setShowNotification] = useState(false);

	return (
		<OutsideClickHandler onOutsideClick={() => setShowNotification(false)}>
			<div className="relative h-full">
				<button
					type="button"
					onClick={() => setShowNotification((state) => !state)}
					className="h-full text-slate-600 dark:text-slate-200 focus:outline-none text-base p-2.5">
					<span className="sr-only">View notifications</span>
					<BellFilled className="text-xl" />
				</button>
				<div
					className={`z-50 max-w-sm my-4 overflow-hidden text-base list-none bg-white divide-y divide-slate-200 rounded shadow-lg dark:divide-slate-600 dark:bg-[#003049] w-80 absolute top-[calc(theme('spacing.full') * -1)] ${
						showNotification ? 'inline-block' : 'hidden'
					}`}
					style={{
						position: 'absolute',
						top: '100%',
						left: '100%',
						margin: 0,
						transform: 'translate3d(-100%, 0px, 0px)',
					}}>
					<div className="block px-4 py-2 text-lg font-medium text-center text-slate-700 bg-slate-50 dark:bg-slate-800 dark:text-slate-300">
						Notifications
					</div>
					<div className="divide-y divide-slate-200 dark:divide-slate-600">
						{[...Array(4)].map((i: any) => (
							<Link
								href="/user/notifications/1234"
								className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-[#123f57]">
								<div className="flex-shrink-0">
									<Image
										src="/aa.png"
										height="50"
										width="50"
										className="rounded-full w-10 h-10"
										alt="Jese image"
									/>
									<div
										className="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 border border-white rounded-full bg-blue-700 dark:border-[#003049] text-white"
										key={i}>
										<CloudDownloadOutlined className="text-xs" />
									</div>
								</div>
								<div className="w-full pl-3">
									<div className="text-gray-500 font-normal text-sm mb-1.5 dark:text-slate-400">
										New message from{' '}
										<span className="font-semibold text-gray-900 dark:text-white">
											Bonnie Green
										</span>{' '}
										Lorem ipsum dolor sit amet, consectetur
										adipisicing elit.
									</div>
									<div className="text-xs font-medium text-blue-700 dark:text-blue-400">
										a few moments ago
									</div>
								</div>
							</Link>
						))}
					</div>
					<Link
						href="/user/notifications"
						className="flex justify-center py-2.5 text-base font-normal text-center text-slate-700 bg-slate-50 hover:bg-slate-200 dark:hover:bg-slate-700 dark:bg-slate-800 dark:text-white dark:hover:underline">
						<div className="inline-flex items-center gap-2">
							<EyeFilled className="text-xl" />
							View all
						</div>
					</Link>
				</div>
			</div>
		</OutsideClickHandler>
	);
};

export default Notification;
