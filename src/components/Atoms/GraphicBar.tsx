import React, { useEffect, useState } from "react";
import { BarChart, Bar, Cell, Tooltip, Legend, XAxis, YAxis, ResponsiveContainer } from "recharts";

type BarData = {
  name: string;
  value: number;
};

type ApiResponse = {
  sales_probabilities: Record<string, number>;
};

type GraphicBarProps = {
  apiUrl: string;
  COLORS: string[];
};

export const GraphicBar = ({ apiUrl, COLORS }: GraphicBarProps) => {
  const [barData, setBarData] = useState<BarData[]>([]);

  useEffect(() => {
    fetch(apiUrl)
      .then(response => response.json())
      .then((data: ApiResponse) => {
        const formattedData = Object.entries(data.sales_probabilities).map(([key, value]) => ({
          name: key,
          value: value * 100,
        }));
        setBarData(formattedData);
      })
      .catch(error => console.error("Error fetching data:", error));
  }, [apiUrl]);

  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={barData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8">
            {barData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
