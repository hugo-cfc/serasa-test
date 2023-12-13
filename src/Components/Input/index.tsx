"use client";

import React, { InputHTMLAttributes, ReactNode, forwardRef } from "react";
import { Eye, EyeOff } from "lucide-react";
import useInput from "./useInput";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  labelDescription?: string;
  helperText?: string;
  containerStyle?: string;
  buttonIcon?: ReactNode;
  buttonAction?: () => unknown;
}

// eslint-disable-next-line react/display-name
const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label = "",
      labelDescription = "",
      helperText = "",
      className = "",
      containerStyle = "",
      type = "",
      buttonIcon,
      readOnly,
      buttonAction,
      disabled,
      ...rest
    },
    ref
  ) => {
    const { isVisible, setIsVisible } = useInput();

    const inputDefaultStyle = `border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-secondary block w-full p-2.5 transition-all ${
      readOnly || disabled ? "border-gray-100" : "border-gray-300"
    } ${helperText ? "border-2 border-red-500" : ""}`;
    const inputFinalStyle = `${inputDefaultStyle} ${className}`;
    const containerDefaultStyle = `w-full mx-auto ${readOnly || disabled ? "border-gray-100" : "border-gray-300"}`;
    const containerFinalStyle = `${containerDefaultStyle} ${containerStyle}`;

    return (
      <div className={containerFinalStyle}>
        <div className="flex items-center gap-x-1">
          <label htmlFor={label} className="block mb-1 text-xs font-medium text-textColors-dark-primary">
            {label}
          </label>

          <span className="block mb-1 text-xs font-medium text-gray-600">{labelDescription}</span>
        </div>

        {type === "password" ? (
          <div className={inputFinalStyle + "flex focus-within:border-2 focus-within:border-blue-700 py-2"}>
            <input
              id={label}
              type={isVisible ? "text" : "password"}
              className="w-full focus-visible:outline-0"
              ref={ref}
              {...rest}
              disabled={disabled}
            />

            <button className="ml-2" type="button" onClick={() => setIsVisible((prevState) => !prevState)}>
              {isVisible ? <Eye /> : <EyeOff />}
            </button>
          </div>
        ) : buttonIcon ? (
          <div
            className={
              inputFinalStyle +
              `flex focus-within:border-2 focus-within:border-blue-700 bg-white ${
                readOnly || disabled ? "!border-gray-100 !bg-gray-disabled" : "border-gray-500 bg-white"
              }`
            }
          >
            <input
              id={label}
              type={type}
              className={`w-full focus-visible:outline-0 ${
                readOnly || disabled ? "!border-gray-100 !bg-gray-disabled" : "border-gray-500 bg-white"
              }`}
              ref={ref}
              {...rest}
              disabled={disabled}
            />

            <button className="ml-2" type="button" onClick={buttonAction}>
              {buttonIcon}
            </button>
          </div>
        ) : (
          <input id={label} type={type} className={inputFinalStyle} disabled={disabled} ref={ref} {...rest} />
        )}

        <small className="text-red-500 text-xs">{helperText}</small>
      </div>
    );
  }
);

export default Input;
