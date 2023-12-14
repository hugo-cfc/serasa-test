import { HTMLAttributes } from "react";

interface TrProps extends HTMLAttributes<HTMLTableRowElement> {}

const Tr = ({ children, className, ...rest }: TrProps) => {
  const finalClassName = `hover:bg-zinc-100 ${className}`;

  return (
    <tr className={finalClassName} {...rest}>
      {children}
    </tr>
  );
};

export default Tr;
