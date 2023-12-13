import { ButtonHTMLAttributes, ReactNode, Ref, forwardRef } from "react";
import { button } from "./style";

type variants = "filledDefault" | "outlined" | "text" | "filledWarning" | "outlinedWarning" | "warningTextButton";

type spacings = "sm" | "base" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: variants | undefined;
  spacing?: spacings | undefined;
}

// eslint-disable-next-line react/display-name
const Button = forwardRef(
  (
    { children, className, variant = "filledDefault", spacing = "base", ...rest }: ButtonProps,
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
