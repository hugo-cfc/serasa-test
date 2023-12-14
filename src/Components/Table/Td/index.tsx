import { HTMLAttributes } from "react";

interface TdProps extends HTMLAttributes<HTMLTableCellElement> {
  isLoading?: boolean;
}

const Td = ({ children, className, isLoading, ...rest }: TdProps) => {
  const finalClassName = `py-2 px-4 text-xs text-gray-500 uppercase ${className}`;

  return isLoading ? (
    <td
      className="bg-slate-300 h-6 animate-pulse border-2 border-x-white"
      {...rest}
    />
  ) : (
    <td className={finalClassName} {...rest}>
      {children}
    </td>
  );
};

export default Td;
