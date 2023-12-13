import { ReactNode } from "react";

import Header from "./Components/Header";
import Aside from "./Components/Aside";
import Main from "./Components/Main";

interface MenuProps {
  children: ReactNode;
}

const Menu = ({ children }: MenuProps) => {
  return (
    <>
      <Header />

      <div className="flex items-start bg-gray-50 h-[calc(100vh-56px)] overflow-hidden">
        <Aside />

        <Main>{children}</Main>
      </div>
    </>
  );
};

export default Menu;
