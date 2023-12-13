import Image from "next/image";

import SerasaLogo from "@/assets/logos/SerasaLogoWhite.png";
import Profile from "./Components/Profile";

const Header = () => {
  return (
    <nav className="bg-primary px-4 py-2 flex items-center justify-between">
      <Image src={SerasaLogo} alt="Serasa" className="w-24 ml-3" priority />

      <Profile />
    </nav>
  );
};

export default Header;
