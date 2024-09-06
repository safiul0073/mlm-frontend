'use client';

import {
	WarningFilled
} from '@ant-design/icons';

const Dashboard = () => {
	return (
		<div className="flex flex-col gap-6">
			<div className="flex items-center gap-2 bg-[#ffc300]/10 dark:bg-[#003049]/80 rounded border border-gray-200 dark:border-[#535a94]/80 p-6">
				<div className="flex items-center gap-2.5 text-base leading-tight">
					<div className="bg-[#ffc300] text-white h-10 aspect-square shrink-0 rounded-full inline-flex items-center justify-center">
						<WarningFilled className='text-lg'/>
					</div>
					<span>
						You need to submit your
						<b>KYC and Other Documents</b> before proceed to the
						system.
					</span>
				</div>
				<div className="flex items-center gap-2.5 ml-auto">
					<a
						href="#"
						className="bg-gradient-to-r from-[#e52e71] to-[#ff8a00] inline-flex items-center justify-center h-10 rounded-full text-white text-base font-medium px-5">
						Deposit
					</a>
					<a
						href="#"
						className="bg-[#e52e71] inline-flex items-center justify-center h-10 rounded-full text-white text-base font-medium px-5">
						Invest Now
					</a>
				</div>
			</div>
			<div className="flex items-center gap-6">
				<div className="flex relative">
					<div className="w-52 aspect-square shrink-0 rounded-full bg-[#003049] border-4 border-solid border-[#ffc300] overflow-hidden">
						<img
							src="https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png"
							className="w-full h-full object-fit"
							alt="Image"
						/>
					</div>
					<span className="absolute top-1 right-1 bg-[#5364f1] h-14 aspect-square rounded-full inline-flex items-center justify-center border-4 border-solid border-[#ffc300]">
						<img
							src="https://hyiprio.tdevs.co/assets/global/images/sCQgIyl0OKzFiO73nmWF.svg"
							alt=""
							className="w-7"
						/>
					</span>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
