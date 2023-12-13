"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import sidebarRoutes from "./sidebarRoutes";

const Aside = () => {
  const pathname = usePathname();
  const firstPathname = pathname.split("/")[1];
  const pathnameRegex = new RegExp(`(${firstPathname})`);

  return (
    <aside
      className={`bg-white shrink-0 text-textColors-dark-primary w-40 h-[calc(100vh-56px)] p-4 border border-gray-300 notebook:w-56`}
    >
      <nav>
        <ul className="space-y-2 list-disc">
          {sidebarRoutes.map((item) => {
            const finalPathname = !firstPathname ? "/" : pathnameRegex;

            return (
              <Link key={item.id} href={item.route}>
                <div
                  className={`rounded-3xl px-5 mb-2 transition-all ${
                    item.route === finalPathname
                      ? "bg-blue-50 p-2 text-secondary hover:bg-blue-100"
                      : "bg-white p-2 text-textColors-dark-primary hover:bg-gray-100"
                  }`}
                >
                  <li className="ml-4">
                    <span className="text-xs">{item.name}</span>
                  </li>
                </div>
              </Link>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Aside;
