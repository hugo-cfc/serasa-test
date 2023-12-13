import PieChart from "../PieChart";

const ByState = () => {
  return (
    <PieChart
      title="Fazendas por estado"
      labels={["Alagoas", "Pernambuco", "Sergipe", "Teste"]}
      datas={[8, 9, 3, 3]}
    />
  );
};

export default ByState;
