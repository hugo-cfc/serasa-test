function isCpfValid(cpf: string) {
  const cpfNumbers = cpf.split("").map(Number);
  const [d1, d2] = cpfNumbers.slice(9);

  const sum1 = cpfNumbers.slice(0, 9).reduce((acc, curr, index) => acc + curr * (10 - index), 0);
  const remainder1 = sum1 % 11;
  const calculatedD1 = remainder1 < 2 ? 0 : 11 - remainder1;

  const sum2 = cpfNumbers.slice(0, 9).reduce((acc, curr, index) => acc + curr * (11 - index), 0);
  const sumWithD1 = sum2 + calculatedD1 * 2;
  const remainder2 = sumWithD1 % 11;
  const calculatedD2 = remainder2 < 2 ? 0 : 11 - remainder2;

  return d1 === calculatedD1 && d2 === calculatedD2;
}

export default isCpfValid;
