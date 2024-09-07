const page = () => {
	return (
		<div className="flex flex-col grow shadow-lg rounded">
			<div className="px-6 h-14 rounded-t border-t border-x border-gray-200 dark:border-[#535a94]/80 text-lg text-medium bg-white dark:bg-transparent flex items-center gap-2">
				All The Schemas
			</div>
			<div className="flex flex-col p-6 gap-2 rounded-b border border-gray-200 dark:border-[#535a94]/80 bg-white dark:bg-transparent">
				<div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
					<div className="ring-1 ring-slate-800/10 dark:ring-white/10 rounded-3xl p-8 xl:p-10">
						<div className="flex items-center justify-between gap-x-4">
							<h2
								id="product1"
								className="text-lg font-semibold leading-8 text-slate-900 dark:text-white">
								Product Type 1
							</h2>
						</div>
						<p className="mt-4 text-sm leading-6 text-gray-500 dark:text-gray-300">
							Product details for Product Type 1
						</p>
						<p className="mt-6 flex items-baseline gap-x-1">
							<span className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
								€ 10 / unit
							</span>
							<span className="text-sm font-semibold leading-6 text-gray-500 dark:text-gray-300"></span>
						</p>
						<a
							href="/order"
							aria-describedby="product1"
							className="bg-slate-100 dark:bg-[#003049] text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-[#535a94] mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
							Order Now
						</a>
						<ul
							role="list"
							className="mt-8 space-y-3 text-sm leading-6 text-gray-500 dark:text-gray-300 xl:mt-10">
							<li className="flex gap-x-3">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
									className="h-6 w-5 flex-none text-slate-900 dark:text-white">
									<path
										fill-rule="evenodd"
										d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
										clip-rule="evenodd"></path>
								</svg>
								40 units
							</li>
							<li className="flex gap-x-3">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
									className="h-6 w-5 flex-none text-slate-900 dark:text-white">
									<path
										fill-rule="evenodd"
										d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
										clip-rule="evenodd"></path>
								</svg>
								1 feature
							</li>
							<li className="flex gap-x-3">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
									className="h-6 w-5 flex-none text-slate-900 dark:text-white">
									<path
										fill-rule="evenodd"
										d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
										clip-rule="evenodd"></path>
								</svg>
								Fast delivery
							</li>
						</ul>
					</div>

					<div className="bg-slate-100 dark:bg-[#003049] ring-2 ring-[#5364f1] rounded-3xl p-8 xl:p-10 relative">
						<div className="flex items-baseline justify-between gap-x-4">
							<h2
								id="product2"
								className="text-lg font-semibold leading-8 text-slate-900 dark:text-white">
								Product Type 2
							</h2>
							<p className="absolute top-4 right-4 rounded-full whitespace-nowrap bg-[#5364f1] px-2.5 py-1 text-xs font-semibold leading-5 text-white">
								Most popular
							</p>
						</div>
						<p className="mt-4 text-sm leading-6 text-gray-500 dark:text-gray-300">
							The most popular choice. Product details for Product
							Type 2
						</p>
						<p className="mt-6 flex items-baseline gap-x-1">
							<span className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
								€ 20 / unit
							</span>
							<span className="text-sm font-semibold leading-6 text-gray-500 dark:text-gray-300"></span>
						</p>
						<a
							href="/order"
							aria-describedby="product2"
							className="bg-[#5364f1] text-white shadow-sm hover:bg-indigo-600 mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
							Order Now
						</a>
						<ul
							role="list"
							className="mt-8 space-y-3 text-sm leading-6 text-gray-500 dark:text-gray-300 xl:mt-10">
							<li className="flex gap-x-3">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
									className="h-6 w-5 flex-none text-slate-900 dark:text-white">
									<path
										fill-rule="evenodd"
										d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
										clip-rule="evenodd"></path>
								</svg>
								120 units
							</li>
							<li className="flex gap-x-3">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
									className="h-6 w-5 flex-none text-slate-900 dark:text-white">
									<path
										fill-rule="evenodd"
										d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
										clip-rule="evenodd"></path>
								</svg>
								3 different features
							</li>
							<li className="flex gap-x-3">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
									className="h-6 w-5 flex-none text-slate-900 dark:text-white">
									<path
										fill-rule="evenodd"
										d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
										clip-rule="evenodd"></path>
								</svg>
								Fast delivery
							</li>
						</ul>
					</div>

					<div className="ring-1 ring-slate-800/10 dark:ring-white/10 rounded-3xl p-8 xl:p-10">
						<div className="flex items-center justify-between gap-x-4">
							<h2
								id="product1"
								className="text-lg font-semibold leading-8 text-slate-900 dark:text-white">
								Product Type 1
							</h2>
						</div>
						<p className="mt-4 text-sm leading-6 text-gray-500 dark:text-gray-300">
							Product details for Product Type 1
						</p>
						<p className="mt-6 flex items-baseline gap-x-1">
							<span className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
								€ 10 / unit
							</span>
							<span className="text-sm font-semibold leading-6 text-gray-500 dark:text-gray-300"></span>
						</p>
						<a
							href="/order"
							aria-describedby="product1"
							className="bg-slate-100 dark:bg-[#003049] text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-[#535a94] mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
							Order Now
						</a>
						<ul
							role="list"
							className="mt-8 space-y-3 text-sm leading-6 text-gray-500 dark:text-gray-300 xl:mt-10">
							<li className="flex gap-x-3">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
									className="h-6 w-5 flex-none text-slate-900 dark:text-white">
									<path
										fill-rule="evenodd"
										d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
										clip-rule="evenodd"></path>
								</svg>
								40 units
							</li>
							<li className="flex gap-x-3">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
									className="h-6 w-5 flex-none text-slate-900 dark:text-white">
									<path
										fill-rule="evenodd"
										d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
										clip-rule="evenodd"></path>
								</svg>
								1 feature
							</li>
							<li className="flex gap-x-3">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
									className="h-6 w-5 flex-none text-slate-900 dark:text-white">
									<path
										fill-rule="evenodd"
										d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
										clip-rule="evenodd"></path>
								</svg>
								Fast delivery
							</li>
						</ul>
					</div>

					<div className="ring-1 ring-slate-800/10 dark:ring-white/10 rounded-3xl p-8 xl:p-10">
						<div className="flex items-center justify-between gap-x-4">
							<h2
								id="product1"
								className="text-lg font-semibold leading-8 text-slate-900 dark:text-white">
								Product Type 1
							</h2>
						</div>
						<p className="mt-4 text-sm leading-6 text-gray-500 dark:text-gray-300">
							Product details for Product Type 1
						</p>
						<p className="mt-6 flex items-baseline gap-x-1">
							<span className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
								€ 10 / unit
							</span>
							<span className="text-sm font-semibold leading-6 text-gray-500 dark:text-gray-300"></span>
						</p>
						<a
							href="/order"
							aria-describedby="product1"
							className="bg-slate-100 dark:bg-[#003049] text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-[#535a94] mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
							Order Now
						</a>
						<ul
							role="list"
							className="mt-8 space-y-3 text-sm leading-6 text-gray-500 dark:text-gray-300 xl:mt-10">
							<li className="flex gap-x-3">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
									className="h-6 w-5 flex-none text-slate-900 dark:text-white">
									<path
										fill-rule="evenodd"
										d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
										clip-rule="evenodd"></path>
								</svg>
								40 units
							</li>
							<li className="flex gap-x-3">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
									className="h-6 w-5 flex-none text-slate-900 dark:text-white">
									<path
										fill-rule="evenodd"
										d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
										clip-rule="evenodd"></path>
								</svg>
								1 feature
							</li>
							<li className="flex gap-x-3">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
									className="h-6 w-5 flex-none text-slate-900 dark:text-white">
									<path
										fill-rule="evenodd"
										d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
										clip-rule="evenodd"></path>
								</svg>
								Fast delivery
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;
