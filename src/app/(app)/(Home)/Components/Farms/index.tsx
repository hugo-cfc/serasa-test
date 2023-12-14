import getFarms from "@/fetchers/farms/getFarms";
import DataCard from "../../../produtores/Components/DataCard";

const Farms = async () => {
  const farms = await getFarms();

  return (
    <DataCard className="flex-1">
      <h3 className="font-bold text-center">Número de fazendas</h3>

      <p className="text-3xl text-center">{farms.length}</p>
    </DataCard>
  );
};

export default Farms;
