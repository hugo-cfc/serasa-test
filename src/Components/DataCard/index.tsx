import { HTMLAttributes } from "react";

interface DataCardProps extends HTMLAttributes<HTMLDivElement> {}

const DataCard = ({ className, children }: DataCardProps) => {
  const finalClassName = className;

  return (
    <div className={`${finalClassName} bg-white p-4 rounded-xl shadow-lg`}>
      {children}
    </div>
  );
};

export default DataCard;
