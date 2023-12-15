import { SelectHTMLAttributes, forwardRef } from "react";

interface Options {
  id: string;
  label: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  helperText?: string;
  options: Array<Options>;
  containerStyle?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      helperText,
      className,
      options,
      containerStyle,
      disabled,
      ...rest
    },
    ref
  ) => {
    const selectDefaultStyle = `border text-gray-900 text-sm text-sm rounded-lg transition-all focus:ring-blue-500 focus:border-secondary block w-full p-2.5 ${
      helperText ? "border-2 border-red-500" : ""
    }
    ${
  disabled ? "border-gray-100 bg-neutral-50" : "border-gray-300"
}
    `;

    const selectFinalStyle = `${selectDefaultStyle} ${className}`;

    const containerDefaultStyle = "w-full mx-auto";
    const containerFinalStyle = `${containerDefaultStyle} ${containerStyle}`;

    return (
      <div className={containerFinalStyle}>
        <label
          htmlFor="options"
          className="block mb-1 text-xs font-medium text-textColors-dark-primary"
        >
          {label}
        </label>

        <select
          id="options"
          className={selectFinalStyle}
          disabled={disabled}
          {...rest}
          ref={ref}
        >
          <option defaultValue="" value={""}></option>
          {options?.map((option) => (
            <option key={option.id} value={option.id}>
              {option.label}
            </option>
          ))}
        </select>

        <small className="text-red-500 text-xs">{helperText}</small>
      </div>
    );
  }
);

export default Select;
