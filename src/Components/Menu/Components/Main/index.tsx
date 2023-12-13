"use client";

import { HTMLAttributes } from "react";
import { usePathname } from "next/navigation";

interface MainProps extends HTMLAttributes<HTMLElement> {}

const Main = ({ children }: MainProps) => {
  const pathname = usePathname();
  const isPageProducts = pathname.match(/(\/newOrders\/products)/);
  const isPageIfood = pathname.match(/(\/newOrders\/ifood)/);
  const isPageCheckout = pathname.match(/(\/newOrders\/checkout)/);
  const isPageOrder = pathname.match(/(\/allOrders\/order)/);
  return (
    <main
      className={`overflow-auto mx-auto overflow-x-hidden h-[inherit] ${
        isPageProducts || isPageCheckout || isPageOrder || isPageIfood ? "" : "p-4 pb-8"
      }`}
    >
      {children}
    </main>
  );
};

export default Main;
