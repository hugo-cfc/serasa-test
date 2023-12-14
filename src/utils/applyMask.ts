const applyMask = (value?: string, mask?: string) => {
  if (!value || !mask) return;

  const numericValue = value.replace(/\D/g, "");
  let maskedValue = "";
  let i = 0;

  for (let c of mask) {
    if (i >= numericValue.length) {
      break;
    }

    if (c === "9") {
      maskedValue += numericValue[i];
      i++;
    } else {
      maskedValue += c;
    }
  }

  return maskedValue;
};

export default applyMask;
