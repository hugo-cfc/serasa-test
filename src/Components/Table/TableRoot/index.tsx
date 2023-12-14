import { HTMLAttributes } from "react";

interface TableRootProps extends HTMLAttributes<HTMLTableElement> {}

const TableRoot = ({ children, className, ...rest }: TableRootProps) => {
  const finalClassName = `table-auto w-full bg-white rounded-lg border-0 border-b-0 rounded-b-none ${className}`;

  return (
    <table className={finalClassName} {...rest}>
      {children}
    </table>
  );
};

export default TableRoot;
