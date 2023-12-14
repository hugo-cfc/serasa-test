export default interface Farm {
  id: number,
  producerId: number,
  farmName: string;
  city: string;
  state: string;
  area: number;
  arableArea: number;
  vegetationArea: number;
  plantedCrops: string[];
// eslint-disable-next-line semi
}
