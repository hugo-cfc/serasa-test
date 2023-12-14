import { HTMLAttributes } from "react";
import { ChevronsUpDown } from "lucide-react";

interface ThProps extends HTMLAttributes<HTMLTableCellElement> {
  sortIcon?: boolean;
  sortIconAction?: () => unknown;
}

const Th = ({
  children,
  className,
  sortIcon,
  sortIconAction,
  ...rest
}: ThProps) => {
  const finalClassName = `px-4 py-2 text-xs text-gray-700 font-bold ${className}`;

  return (
    <th className={finalClassName} {...rest}>
      <div className="flex items-center justify-between">
        <span className="flex">{children}</span>

        {sortIcon && (
          <button
            type="button"
            className="cursor-pointer"
            onClick={sortIconAction}
          >
            <ChevronsUpDown className="w-4 h-4" />
          </button>
        )}
      </div>
    </th>
  );
};

export default Th;
