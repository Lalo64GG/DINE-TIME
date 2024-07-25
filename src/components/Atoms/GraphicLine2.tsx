import React, { useEffect, useState } from "react";
import { LineChart, Line, Tooltip, Legend, XAxis, YAxis, ResponsiveContainer } from "recharts";

type GasData = {
  createdAt: string;
  gas_level: string;
};

type FormattedGasData = {
  createdAt: string;
  gas_level: number;
};

type GraphicLineProps = {
  apiUrl: string;
};

export const GraphicLine = ({ apiUrl }: GraphicLineProps) => {
  const [lineData, setLineData] = useState<FormattedGasData[]>([]);

  useEffect(() => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Los meses comienzan en 0
    const year = String(today.getFullYear()).slice(-2); // Tomar los últimos dos dígitos del año
    const todayFormatted = `${day}/${month}/${year}`; // Formato DD/MM/YY

    fetch(apiUrl)
      .then(response => response.json())
      .then((data: GasData[]) => {
        const filteredData = data.filter(entry => entry.createdAt === todayFormatted);
        const formattedData = filteredData.map(entry => ({
          createdAt: entry.createdAt,
          gas_level: parseFloat(entry.gas_level),
        }));
        setLineData(formattedData);
      })
      .catch(error => console.error("Error fetching data:", error));
  }, [apiUrl]);

  const formatXAxis = (tickItem: string) => {
    return lineData.length > 0 ? lineData[0].createdAt : "";
  };

  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={lineData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey="" tickFormatter={formatXAxis} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="gas_level" stroke="#8884d8" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
