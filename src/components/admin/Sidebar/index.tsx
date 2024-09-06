import { useProviderContext } from '@/components/Context';
import {
	BellOutlined,
	CodeOutlined,
	CreditCardOutlined,
	DashboardOutlined,
	FileAddOutlined,
	FileDoneOutlined,
	FileExclamationOutlined,
	MoneyCollectFilled,
	PaperClipOutlined,
	ProfileOutlined,
	ReconciliationOutlined,
	RightSquareOutlined,
	SettingOutlined,
	StarOutlined,
	TeamOutlined,
	TransactionOutlined,
	UsergroupAddOutlined,
	WalletFilled,
	WalletOutlined
} from '@ant-design/icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const Sidebar = (props: any) => {
	const { isHamburgerOpen, setIsHamburgerOpen } = useProviderContext();
	const pathName = usePathname();

	const navList = [
		{
			name: 'Dashboard',
			slug: '/dashboard',
			icon: <DashboardOutlined />,
		},
		{
			name: 'My Team',
			slug: '/team',
			icon: <TeamOutlined />,
		},
		{
			name: 'All Schema',
			slug: '/user/schemas',
			icon: <ProfileOutlined />,
		},
		{
			name: 'Schema Logs',
			slug: '/user/invest-logs',
			icon: <CodeOutlined />,
		},
		{
			name: 'All Transactions',
			slug: '/user/transactions',
			icon: <TransactionOutlined />,
		},
		{
			name: 'Add Money',
			slug: '/user/deposit/new',
			icon: <FileAddOutlined />,
		},
		{
			name: 'Add Money Log',
			slug: '/user/deposit/log',
			icon: <FileExclamationOutlined />,
		},
		{
			name: 'Wallet Exchange',
			slug: '/user/wallet-exchange',
			icon: <WalletOutlined />,
		},
		{
			name: 'Send Money',
			slug: '/user/send-money/new',
			icon: <FileDoneOutlined />,
		},
		{
			name: 'Send Money Log',
			slug: '/user/send-money/log',
			icon: <RightSquareOutlined />,
		},
		{
			name: 'Withdraw',
			slug: '/user/withdraw/new',
			icon: <CreditCardOutlined />,
		},
		{
			name: 'Withdraw Log',
			slug: '/user/withdraw/log',
			icon: <ReconciliationOutlined />,
		},
		{
			name: 'Ranking Badge',
			slug: '/user/ranking-badge',
			icon: <StarOutlined />,
		},
		{
			name: 'Referral',
			slug: '/user/referral',
			icon: <UsergroupAddOutlined />,
		},
		{
			name: 'Settings',
			slug: '/user/settings',
			icon: <SettingOutlined />,
		},
		{
			name: 'Support Ticket',
			slug: '/user/support-ticket',
			icon: <PaperClipOutlined />,
		},
		{
			name: 'Notifications',
			slug: '/user/notifications',
			icon: <BellOutlined />,
		},
	];

	return (
		<>
			<aside
				className={`fixed top-[4.5rem] left-0 bottom-0 z-20 flex flex-col flex-shrink-0 font-normal transition-all ease-in-out duration-300 ${
					isHamburgerOpen
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
										<WalletFilled className="text-base" />
										Main Wallet
									</div>
									<div className="ml-auto">$0</div>
								</div>
								<div className="flex items-center text-sm font-bold">
									<div className="flex items-center gap-1.5">
										<MoneyCollectFilled className="text-base" />
										Profit Wallet
									</div>
									<div className="ml-auto">$3</div>
								</div>
							</div>
						</div>
						<div className="grid grid-cols-2 gap-2">
							<button className="bg-[#5364f1] hover:bg-[#e52e71] inline-flex items-center gap-2 justify-center h-11 rounded text-white text-base font-medium">
								<FileAddOutlined className="text-base" />
								Deposit
							</button>
							<button className="bg-[#2a9d8f] hover:bg-[#e52e71] inline-flex items-center gap-2 justify-center h-11 rounded text-white text-base font-medium">
								<FileDoneOutlined className="text-base" />
								Invest Now
							</button>
						</div>
					</div>
					<nav className="grow h-auto p-7 flex flex-col gap-2">
						{navList?.map((nav) => (
							<Link
								href={nav?.slug}
								className={`px-6 py-2 bg-transparent rounded-full text-slate-600 dark:text-slate-100 ${
									pathName.endsWith(nav?.slug)
										? '!bg-[#535a94] !text-white'
										: 'hover:bg-gray-900/5 dark:hover:bg-[#123f57]'
								} inline-flex items-center gap-2 uppercase leading-none`}>
								<span className="text-lg">{nav?.icon}</span>
								<span>{nav?.name}</span>
							</Link>
						))}
					</nav>
				</div>
			</aside>
		</>
	);
};

export default Sidebar;
