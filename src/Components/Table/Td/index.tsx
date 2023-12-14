import { HTMLAttributes } from "react";

interface TdProps extends HTMLAttributes<HTMLTableCellElement> {}

const Td = ({ children, className, ...rest }: TdProps) => {
  const finalClassName = `py-2 px-4 text-xs text-gray-500 uppercase ${className}`;

  return (
    <td className={finalClassName} {...rest}>
      {children}
    </td>
  );
};

export default Td;
