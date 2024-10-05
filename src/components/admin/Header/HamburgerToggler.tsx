import { useProviderContext } from "@/components/Context";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
const HamburgerToggler = (props: any) => {
  const { isHamburgerOpen, setIsHamburgerOpen } = useProviderContext();
  return (
    <button
      onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
      className="hidden sm:block p-2 text-[#e52e71] dark:text-white rounded cursor-pointer"
    >
      {isHamburgerOpen ? (
        <MenuFoldOutlined className="text-3xl" />
      ) : (
        <MenuUnfoldOutlined className="text-3xl" />
      )}
    </button>
  );
};

export default HamburgerToggler;
