import getFarms from "@/fetchers/farms/getFarms";
import DataCard from "../../../../../Components/DataCard";

const Area = async () => {
  const farms = await getFarms();

  const totalArea = farms.reduce((accumulator, currentValue) => {
    const area = currentValue.area;

    return accumulator + area;
  }, 0);


  return (
    <DataCard className="flex-1">
      <h3 className="font-bold text-center">Hectares (Área total)</h3>

      <p className="text-3xl text-center">{totalArea}ha</p>
    </DataCard>
  );
};

export default Area;
