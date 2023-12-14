import { HTMLAttributes } from "react";

interface TableContainerProps extends HTMLAttributes<HTMLDivElement> {}

const TableContainer = ({ children, className, ...rest }: TableContainerProps) => {
  const finalClassName = `bg-white border border-gray-300 rounded-lg pb-6 ${className}`;

  return (
    <div className={finalClassName} {...rest}>
      {children}
    </div>
  );
};

export default TableContainer;
