"use client";

import { ChevronUp, ChevronDown, X } from "lucide-react";
import { ReactNode, useState } from "react";

interface DropdownProps {
  children: ReactNode;
  readonly?: boolean;
  label: string;
  placeholder: string;
  value?: string[];
  containerStyle?: string;
  onClickValue: (item: string) => void;
}

const Dropdown = ({
  children,
  label,
  readonly,
  placeholder,
  value,
  containerStyle,
  onClickValue,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleBackgroundClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className={`${containerStyle} relative`}>
      <label htmlFor={label} className="block mb-1 text-xs font-medium">
        {label || ""}
      </label>

      <button
        className={`flex items-center justify-between border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-secondary w-full p-2 transition-all ${readonly ? "border-gray-100 bg-neutral-50" : "border-gray-300"}`}
        onClick={() => {
          if (readonly) return;
          setIsOpen(true);
        }}
        disabled={readonly}
        type="button"
      >
        <span className="flex flex-wrap text-gray-700 font-light text-xs">
          {value?.length
            ? value.map((item) => (
              <span key={item} className="bg-gray-200 p-1 text-xs mx-0.5 flex  items-center gap-x-2" onClick={() => {if(readonly) return; onClickValue(item);}}>
                {item} <X className="w-2 h-2"/>
              </span>
            ))
            : placeholder}
        </span>

        {!readonly &&
          (!isOpen ? (
            <ChevronDown className="w-4 h-4" />
          ) : (
            <ChevronUp className="w-4 h-4" />
          ))}
      </button>

      <div
        className={`${
          isOpen ? "fixed left-0 top-0 z-10 h-screen w-screen" : "hidden"
        }`}
        onClick={handleBackgroundClick}
      />
      <div
        className={`absolute right-0 left-0 top-[60px] z-10 w-full overflow-auto max-h-48 rounded-md shadow-xl transition-all ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul onClick={() => closeModal()}>{children}</ul>
      </div>
    </div>
  );
};

export default Dropdown;
