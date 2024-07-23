import React, { useEffect, useState } from 'react';
import { GraphicPie } from "../Atoms/GraphicPie";
import { GraphicLine } from "../Atoms/GraphicLine";
import { fetchWeeklySales, fetchProbability } from '../../api';

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

interface SalesData {
  sales: number;
}

interface ProbabilityData {
  [key: string]: number;
}

export const Graphics = () => {
  const [salesData, setSalesData] = useState<SalesData[]>([]);
  const [probabilityData, setProbabilityData] = useState<ProbabilityData>({});

  useEffect(() => {
    const fetchData = async () => {
      const sales = await fetchWeeklySales();
      setSalesData(sales);

      const probability = await fetchProbability();
      setProbabilityData(probability);
    };

    fetchData();
  }, []);

  const pieData = probabilityData
    ? Object.keys(probabilityData).map((key, index) => ({
        name: `Categoría ${key}`,
        value: probabilityData[key],
        color: COLORS[index % COLORS.length]
      }))
    : [];

  const lineData = salesData
    ? salesData.map((item, index) => ({
        name: `Día ${index + 1}`,
        uv: item.sales,
        pv: item.sales
      }))
    : [];

  return (
    <div className="flex flex-col md:flex-row gap-2">
      <div className="w-full md:w-1/2 h-64 md:h-80 lg:mt-0 mt-5">
        <h2 className="text-center font-semibold text-2xl mb-5">Gráfica de Pastel</h2>
        <GraphicPie pieData={pieData} COLORS={COLORS} />
      </div>
      <div className="w-full md:w-1/2 h-64 md:h-80 lg:mt-0 mt-10">
        <h2 className="text-center font-semibold text-2xl mb-5">Gráfica de Línea</h2>
        <GraphicLine data={lineData} />
      </div>
    </div>
  );
};
