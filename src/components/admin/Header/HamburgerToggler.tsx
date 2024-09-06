import { useProviderContext } from '@/components/Context';
import {
	LeftCircleFilled,
	RightCircleFilled
} from '@ant-design/icons';
const HamburgerToggler = (props: any) => {
	const { isHamburgerOpen, setIsHamburgerOpen } = useProviderContext();
	return (
		<button
			onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
			className="p-2 text-[#e52e71] dark:text-white rounded cursor-pointer">
			{isHamburgerOpen ? (
				<RightCircleFilled className="text-3xl" />
			) : (
				<LeftCircleFilled className="text-3xl" />
			)}
		</button>
	);
};

export default HamburgerToggler;
