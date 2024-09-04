const Sidebar = (props: any) => {
	const { showSidebar } = props;
	return (
		<>
			<aside
				className={`fixed top-[4.5rem] left-0 z-20 flex flex-col flex-shrink-0 h-full font-normal transition-all ease-in-out duration-300 ${
					showSidebar
						? 'w-96 visible opacity-100'
						: 'w-0 invisible opacity-0'
				}`}>
				<div className="relative flex flex-col flex-1 min-h-0 pt-0 bg-teal-100 dark:bg-[#003049] overflow-y-auto border-r border-gray-200 dark:border-[#535a94]/80 divide-y divide-gray-200 dark:divide-[#535a94]/80">
					<div className="p-5 text-white flex flex-col gap-2">
						<div className="bg-gradient-to-r from-[#e52e71] to-[#ff8a00] p-4 rounded relative overflow-hidden flex flex-col gap-4">
							<div className="absolute top-2.5 right-2.5 inline-flex bg-white text-xs text-slate-900 px-2 py-1 rounded font-semibold leading-tight uppercase">
								Wallet
							</div>
							<div className="text-xl font-bold">
								Account Balance
							</div>
							<div className="flex flex-col gap-2 px-0.5">
								<div className="flex items-center text-sm font-bold">
									<div className="flex items-center gap-1.5">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="18"
											height="18"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											data-lucide="wallet"
											icon-name="wallet"
											className="lucide lucide-wallet">
											<path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path>
											<path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path>
											<path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path>
										</svg>
										Main Wallet
									</div>
									<div className="ml-auto">$0</div>
								</div>
								<div className="flex items-center text-sm font-bold">
									<div className="flex items-center gap-1.5">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="18"
											height="18"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											data-lucide="landmark"
											icon-name="landmark"
											className="lucide lucide-landmark">
											<line
												x1="3"
												x2="21"
												y1="22"
												y2="22"></line>
											<line
												x1="6"
												x2="6"
												y1="18"
												y2="11"></line>
											<line
												x1="10"
												x2="10"
												y1="18"
												y2="11"></line>
											<line
												x1="14"
												x2="14"
												y1="18"
												y2="11"></line>
											<line
												x1="18"
												x2="18"
												y1="18"
												y2="11"></line>
											<polygon points="12 2 20 7 4 7"></polygon>
										</svg>
										Profit Wallet
									</div>
									<div className="ml-auto">$3</div>
								</div>
							</div>
						</div>
						<div className="grid grid-cols-2 gap-2">
							<a
								href="#"
								className="bg-[#5364f1] hover:bg-[#e52e71] inline-flex items-center justify-center h-11 rounded text-white text-base font-medium">
								Deposit
							</a>
							<a
								href="#"
								className="bg-[#2a9d8f] hover:bg-[#e52e71] inline-flex items-center justify-center h-11 rounded text-white text-base font-medium">
								Invest Now
							</a>
						</div>
					</div>
					<nav className="grow h-auto p-7 flex flex-col gap-2">
						<a
							href="#"
							className={`px-6 py-2 bg-transparent rounded-full text-slate-600 dark:text-slate-100 ${
								true
									? 'bg-[#535a94] !text-white'
									: 'hover:bg-gray-900/5 dark:hover:bg-[#123f57]'
							} inline-flex items-center`}>
							Dashboard
						</a>
						<a
							href="#"
							className={`px-6 py-2 bg-transparent rounded-full text-slate-600 dark:text-slate-100 ${
								false
									? 'bg-[#535a94] !text-white'
									: 'hover:bg-gray-900/5 dark:hover:bg-[#123f57]'
							} inline-flex items-center`}>
							Dashboard
						</a>
						<a
							href="#"
							className={`px-6 py-2 bg-transparent rounded-full text-slate-600 dark:text-slate-100 ${
								false
									? 'bg-[#535a94] !text-white'
									: 'hover:bg-gray-900/5 dark:hover:bg-[#123f57]'
							} inline-flex items-center`}>
							Dashboard
						</a>
						<a
							href="#"
							className={`px-6 py-2 bg-transparent rounded-full text-slate-600 dark:text-slate-100 ${
								false
									? 'bg-[#535a94] !text-white'
									: 'hover:bg-gray-900/5 dark:hover:bg-[#123f57]'
							} inline-flex items-center`}>
							Dashboard
						</a>
						<a
							href="#"
							className={`px-6 py-2 bg-transparent rounded-full text-slate-600 dark:text-slate-100 ${
								false
									? 'bg-[#535a94] !text-white'
									: 'hover:bg-gray-900/5 dark:hover:bg-[#123f57]'
							} inline-flex items-center`}>
							Dashboard
						</a>
						<a
							href="#"
							className={`px-6 py-2 bg-transparent rounded-full text-slate-600 dark:text-slate-100 ${
								false
									? 'bg-[#535a94] !text-white'
									: 'hover:bg-gray-900/5 dark:hover:bg-[#123f57]'
							} inline-flex items-center`}>
							Dashboard
						</a>
						<a
							href="#"
							className={`px-6 py-2 bg-transparent rounded-full text-slate-600 dark:text-slate-100 ${
								false
									? 'bg-[#535a94] !text-white'
									: 'hover:bg-gray-900/5 dark:hover:bg-[#123f57]'
							} inline-flex items-center`}>
							Dashboard
						</a>
						<a
							href="#"
							className={`px-6 py-2 bg-transparent rounded-full text-slate-600 dark:text-slate-100 ${
								false
									? 'bg-[#535a94] !text-white'
									: 'hover:bg-gray-900/5 dark:hover:bg-[#123f57]'
							} inline-flex items-center`}>
							Dashboard
						</a>
						<a
							href="#"
							className={`px-6 py-2 bg-transparent rounded-full text-slate-600 dark:text-slate-100 ${
								false
									? 'bg-[#535a94] !text-white'
									: 'hover:bg-gray-900/5 dark:hover:bg-[#123f57]'
							} inline-flex items-center`}>
							Dashboard
						</a>
						<a
							href="#"
							className={`px-6 py-2 bg-transparent rounded-full text-slate-600 dark:text-slate-100 ${
								false
									? 'bg-[#535a94] !text-white'
									: 'hover:bg-gray-900/5 dark:hover:bg-[#123f57]'
							} inline-flex items-center`}>
							Dashboard
						</a>
						<a
							href="#"
							className={`px-6 py-2 bg-transparent rounded-full text-slate-600 dark:text-slate-100 ${
								false
									? 'bg-[#535a94] !text-white'
									: 'hover:bg-gray-900/5 dark:hover:bg-[#123f57]'
							} inline-flex items-center`}>
							Dashboard
						</a>
						<a
							href="#"
							className={`px-6 py-2 bg-transparent rounded-full text-slate-600 dark:text-slate-100 ${
								false
									? 'bg-[#535a94] !text-white'
									: 'hover:bg-gray-900/5 dark:hover:bg-[#123f57]'
							} inline-flex items-center`}>
							Dashboard
						</a>
					</nav>
				</div>
			</aside>
		</>
	);
};

export default Sidebar;
