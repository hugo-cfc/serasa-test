import Farm from "./Farm";

export default interface Producer {
  id: string;
  name: string;
  cpfcnpj: string;
  farms: Farm[]
// eslint-disable-next-line semi
}
