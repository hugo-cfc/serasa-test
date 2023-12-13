import { HTMLAttributes } from "react";

const AuthFormContainer = ({ children, className }: HTMLAttributes<HTMLDivElement>) => {
  const finalStyle = `${className}`;

  return <div className={`${finalStyle} bg-white rounded-xl px-8 py-4 gap-x-10`}>{children}</div>;
};

export default AuthFormContainer;
