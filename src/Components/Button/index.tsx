import { ButtonHTMLAttributes, ReactNode, Ref, forwardRef } from "react";
import { button } from "./style";

type variants =
  | "filledDefault"
  | "filledSecondary"
  | "outlined"
  | "text"
  | "filledWarning"
  | "outlinedWarning"
  | "warningTextButton";

type spacings = "sm" | "base" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: variants | undefined;
  spacing?: spacings | undefined;
}

const Button = forwardRef(
  (
    {
      children,
      className,
      variant = "filledDefault",
      spacing = "base",
      ...rest
    }: ButtonProps,
    ref: Ref<HTMLButtonElement>
  ) => {
    const finalStyle = `${button({
      type: variant,
      spacing: spacing,
    })} ${className}`;

    return (
      <button className={`${finalStyle} `} ref={ref} {...rest}>
        {children}
      </button>
    );
  }
);

export default Button;
