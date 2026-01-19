import Logo from "@/components/common/Logo/Logo";
import HeaderNavigationMenu from "./HeaderNavigationMenu";
import HeaderAction from "./HeaderAction";

const Header = () => {
  return (
    <header className="bg-white py-[22px] shadow-md rounded-b-xl fixed top-0 left-0 right-0">
      <div className="container">
        <div className="flex justify-between items-center">
          <Logo />
          <HeaderNavigationMenu />
          <HeaderAction />
        </div>
      </div>
    </header>
  );
};

export default Header;
