"use client";

import { useEffect, useState } from "react";
import { useQuery } from "react-query";

import PieChart from "../PieChart";

import getFarmsByCrop from "@/fetchers/farms/getFarmsByCrop";

const ByCrops = () => {
  const [farmsByCrop, setFarmsByCrop] = useState<{crop: string; farms: number;}[]>([]);

  const { data } = useQuery("farms-by-crop", () => getFarmsByCrop());

  useEffect(() => {
    if (!data) return;

    for (const [crop, farms] of Object.entries(data)) {
      setFarmsByCrop((prevState) => [...prevState, { crop, farms }]);
    }
  }, [data, data?.farmsByState]);

  return (
    <PieChart
      title="Fazendas por cultura"
      labels={farmsByCrop.map(item => item.crop)}
      datas={farmsByCrop.map(item => item.farms)}
    />
  );
};

export default ByCrops;
