import applyMask from "./applyMask";

const formatCpf = (value: string) => {
  const numericValue = value.replace(/[\D]/g, "");

  if (numericValue.length > 11) {
    return value.substring(0, 14);
  }

  return applyMask(numericValue, "999.999.999-99");
};

export default formatCpf;
