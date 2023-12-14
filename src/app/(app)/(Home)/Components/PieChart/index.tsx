"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

import DataCard from "@/Components/DataCard";

ChartJS.register(ArcElement, Tooltip, Legend);

interface PieChartProps {
  title: string;
  labels: string[];
  datas: number[];
}

const PieChart = ({ title, datas, labels }: PieChartProps) => {
  const data = {
    labels: labels,
    datasets: [
      {
        data: datas,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <DataCard>
      <h1 className="font-bold text-center text-sm">{title}</h1>

      <Pie data={data} />
    </DataCard>
  );
};

export default PieChart;
