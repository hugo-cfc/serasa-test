import PieChart from "../PieChart";

const ByUseOfTheSoil = () => {
  return (
    <PieChart
      title="Fazendas por uso do solo"
      labels={["Alagoas", "Pernambuco"]}
      datas={[8, 9]}
    />
  );
};

export default ByUseOfTheSoil;
