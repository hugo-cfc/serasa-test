import applyMask from "./applyMask";

const formatCnpj = (value: string) => {
  const numericValue = value.replace(/[\D]/g, "");

  if (numericValue.length < 1) {
    return "";
  }

  if (numericValue.length > 14) {
    return value.substring(0, 18);
  }

  return applyMask(numericValue, "99.999.999/9999-99");
};

export default formatCnpj;
