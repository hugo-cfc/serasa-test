"use client";

import { useEffect, useState } from "react";
import { useQuery } from "react-query";

import PieChart from "../PieChart";

import getFarmsByState from "@/fetchers/farms/getFarmsByState";

const ByState = () => {
  const [farmsByState, setFarmsByStates] = useState<{state: string; farms: number;}[]>([]);

  const { data } = useQuery("farms-by-id", () => getFarmsByState());

  useEffect(() => {
    if (!data) return;

    for (const [state, farms] of Object.entries(data)) {
      setFarmsByStates((prevState) => [...prevState, { state, farms }]);
    }
  }, [data, data?.farmsByState]);

  return (
    <PieChart
      title="Fazendas por estado"
      labels={farmsByState.map(item => item.state)}
      datas={farmsByState.map(item => item.farms)}
    />
  );
};

export default ByState;
