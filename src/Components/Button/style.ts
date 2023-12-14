import { tv } from "tailwind-variants";

export const button = tv({
  base: "text-center font-sans rounded-md transition-all cursor-pointer flex items-center justify-center gap-x-2 disabled:cursor-not-allowed hover:brightness-125 active:brightness-50",
  variants: {
    type: {
      filledDefault: "text-white bg-primary disabled:bg-gray-400",
      filledSecondary: "text-white bg-secondary disabled:bg-gray-400",
      outlined:
        "text-blue-700 bg-white border border-gray-300 hover:border-gray-mdio hover:text-blue-800 hover:bg-blue-100 active:bg-blue-300 active:border-white active:text-blue-800 disabled:bg-gray-50 disabled:border-white disabled:text-gray-400",
      text: "text-blue-700 bg-transparent hover:text-blue-600  active:text-blue-800 disabled:text-gray-400",
      filledWarning: "text-white bg-red-500 hover:bg-red-400 active:bg-red-600 disabled:bg-gray-300",
      outlinedWarning:
        "text-red-500 bg-white border border-gray-300 hover:border-gray-mdio hover:text-red-300 active:bg-red-100 active:bg-red-100 active:text-red-500 disabled:bg-gray-50 disabled:border-white disabled:text-gray-400",
      warningTextButton: "text-red-500 bg-transparent hover:text-red-300  active:text-red-700 disabled:text-gray-200",
    },
    spacing: {
      sm: "px-4 py-1 text-xs",
      base: "px-4 py-2 text-sm",
      lg: "px-8 py-2.5 font-bold",
    },
  },
});
