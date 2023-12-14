import PieChart from "../PieChart";

const ByCrops = () => {
  return (
    <PieChart
      title="Fazendas por cultura"
      labels={["Alagoas", "Pernambuco"]}
      datas={[8, 9]}
    />
  );
};

export default ByCrops;