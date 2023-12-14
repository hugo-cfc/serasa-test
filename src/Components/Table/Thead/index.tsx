import { HTMLAttributes } from "react";

interface TableProps extends HTMLAttributes<HTMLTableSectionElement> {}

const Thead = ({ children, className, ...rest }: TableProps) => {
  const finalClassName = `border-b border-gray-300 ${className}`;

  return (
    <thead className={finalClassName} {...rest}>
      {children}
    </thead>
  );
};

export default Thead;
