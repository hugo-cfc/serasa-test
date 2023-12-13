"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import sidebarRoutes from "../../../Aside/sidebarRoutes";
import { Menu } from "lucide-react";

const MobileMenu = () => {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  const firstPathname = pathname.split("/")[1];
  const pathnameRegex = new RegExp(`(${firstPathname})`);

  return (
    <>
      <button
        className="tablet:hidden"
        onClick={() => setIsVisible((prevState) => !prevState)}
      >
        <Menu className="text-white" />
      </button>

      {isVisible && (
        <nav className="absolute top-14 left-0 shadow-2xl rounded-lg transition-all animate-fade w-screen">
          <ul className="space-y-2 list-disc">
            {sidebarRoutes.map((item) => {
              const finalPathname = !firstPathname ? "/" : pathnameRegex;

              return (
                <Link key={item.id} href={item.route}>
                  <div
                    className={`px-5 transition-all ${
                      item.route === finalPathname
                        ? "bg-blue-50 p-2 text-secondary hover:bg-blue-100"
                        : "bg-white p-2 text-textColors-dark-primary hover:bg-gray-100"
                    }`}
                  >
                    <span className="text-xs">{item.name}</span>
                  </div>
                </Link>
              );
            })}
          </ul>
        </nav>
      )}
    </>
  );
};

export default MobileMenu;
