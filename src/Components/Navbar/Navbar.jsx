import LanguageSelector from "./LanguageSelector";
import Profile from "./Profile";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
  return (
    <nav className="w-full h-[100px] bg-white shadow-md flex items-center justify-between px-10 fixed top-0 left-0">
      {/* Left Side - Language Selector */}
      <div className="flex items-center space-x-2">
        <HamburgerMenu />
        <LanguageSelector />
      </div>

      {/* Right Side - Profile */}
      <Profile />
    </nav>
  );
};

export default Navbar;
