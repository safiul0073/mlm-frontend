'use client';
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
					<svg
						className="w-6 h-6"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg">
						<path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
					</svg>
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
					<div className='divide-y divide-slate-200 dark:divide-slate-600'>
						<a
							href="#"
							className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-[#123f57]">
							<div className="flex-shrink-0">
								<img
									className="rounded-full w-10 h-10"
									src="https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green.png"
									alt="Jese image"
								/>
								<div className="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 border border-white rounded-full bg-blue-700 dark:border-[#003049]">
									<svg
										className="w-3 h-3 text-white"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg">
										<path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
										<path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
									</svg>
								</div>
							</div>
							<div className="w-full pl-3">
								<div className="text-gray-500 font-normal text-sm mb-1.5 dark:text-slate-400">
									New message from{' '}
									<span className="font-semibold text-gray-900 dark:text-white">
										Bonnie Green
									</span>{' '}
									Lorem ipsum dolor sit amet, consectetur
									adipisicing elit. Exercitationem aliquid
									laboriosam, fugiat quis dolorum iure iste
									animi voluptatum quas incidunt!
								</div>
								<div className="text-xs font-medium text-blue-700 dark:text-blue-400">
									a few moments ago
								</div>
							</div>
						</a>
						<a
							href="#"
							className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-[#123f57]">
							<div className="flex-shrink-0">
								<img
									className="rounded-full w-10 h-10"
									src="https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green.png"
									alt="Jese image"
								/>
								<div className="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 border border-white rounded-full bg-blue-700 dark:border-[#003049]">
									<svg
										className="w-3 h-3 text-white"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg">
										<path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
										<path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
									</svg>
								</div>
							</div>
							<div className="w-full pl-3">
								<div className="text-gray-500 font-normal text-sm mb-1.5 dark:text-slate-400">
									New message from{' '}
									<span className="font-semibold text-gray-900 dark:text-white">
										Bonnie Green
									</span>{' '}
									Lorem ipsum dolor sit amet, consectetur
									adipisicing elit. Exercitationem aliquid
									laboriosam, fugiat quis dolorum iure iste
									animi voluptatum quas incidunt!
								</div>
								<div className="text-xs font-medium text-blue-700 dark:text-blue-400">
									a few moments ago
								</div>
							</div>
						</a>
						<a
							href="#"
							className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-[#123f57]">
							<div className="flex-shrink-0">
								<img
									className="rounded-full w-10 h-10"
									src="https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green.png"
									alt="Jese image"
								/>
								<div className="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 border border-white rounded-full bg-blue-700 dark:border-[#003049]">
									<svg
										className="w-3 h-3 text-white"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg">
										<path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
										<path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
									</svg>
								</div>
							</div>
							<div className="w-full pl-3">
								<div className="text-gray-500 font-normal text-sm mb-1.5 dark:text-slate-400">
									New message from{' '}
									<span className="font-semibold text-gray-900 dark:text-white">
										Bonnie Green
									</span>{' '}
									Lorem ipsum dolor sit amet, consectetur
									adipisicing elit. Exercitationem aliquid
									laboriosam, fugiat quis dolorum iure iste
									animi voluptatum quas incidunt!
								</div>
								<div className="text-xs font-medium text-blue-700 dark:text-blue-400">
									a few moments ago
								</div>
							</div>
						</a>
					</div>
					<a
						href="#"
						className="flex justify-center py-2.5 text-base font-normal text-center text-slate-700 bg-slate-50 hover:bg-slate-200 dark:hover:bg-slate-700 dark:bg-slate-800 dark:text-white dark:hover:underline">
						<div className="inline-flex items-center ">
							<svg
								className="w-5 h-5 mr-2"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg">
								<path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
								<path
									fill-rule="evenodd"
									d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
									clip-rule="evenodd"></path>
							</svg>
							View all
						</div>
					</a>
				</div>
			</div>
		</OutsideClickHandler>
	);
};

export default Notification;
