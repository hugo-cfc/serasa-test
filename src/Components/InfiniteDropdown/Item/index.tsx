import { HTMLAttributes } from "react";

interface ItemProps extends HTMLAttributes<HTMLLIElement> {
  isActive?: boolean;
}

const Item = ({ children, isActive, ...rest }: ItemProps) => {
  return (
    <li
      className={`bg-gray-200
    hover:bg-gray-300 active:bg-gray-400 text-gray-700 font-light text-xs py-2 px-3 cursor-pointer ${
    isActive ? "border-l-2 border-blue-500" : ""
    }`}
      {...rest}
    >
      {children}
    </li>
  );
};

export default Item;
