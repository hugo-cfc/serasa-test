function isCnpjValid(cnpj: string): boolean {
  cnpj = cnpj.replace(/[^\d]/g, "");

  if (cnpj.length !== 14) {
    return false;
  }

  if (/^(\d)\1+$/.test(cnpj)) {
    return false;
  }

  let sum = 0;
  let weight = 2;
  for (let i = 11; i >= 0; i--) {
    sum += parseInt(cnpj[i]) * weight;
    weight = weight === 9 ? 2 : weight + 1;
  }
  const digit1 = sum % 11 < 2 ? 0 : 11 - (sum % 11);

  if (parseInt(cnpj[12]) !== digit1) {
    return false;
  }

  sum = 0;
  weight = 2;
  for (let i = 12; i >= 0; i--) {
    sum += parseInt(cnpj[i]) * weight;
    weight = weight === 9 ? 2 : weight + 1;
  }
  const digit2 = sum % 11 < 2 ? 0 : 11 - (sum % 11);

  if (parseInt(cnpj[13]) !== digit2) {
    return false;
  }

  return true;
}

export default isCnpjValid;
