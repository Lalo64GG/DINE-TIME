import{ useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';

type BarData = {
  name: string;
  value: number;
};

type GraphicBarProps = {
  apiUrl: string;
  COLORS: string[];
};

export const GraphicBar2 = ({ apiUrl, COLORS }: GraphicBarProps) => {
  const [data, setData] = useState<BarData[]>([]);

  useEffect(() => {
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const formattedData = [
          { name: 'Máximo', value: data.max },
          { name: 'Promedio', value: data.mean },
          { name: 'Mediana', value: data.median },
          { name: 'Mínimo', value: data.min },
          { name: 'Desviación Estándar', value: data.std_dev },
        ];
        setData(formattedData);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [apiUrl]);

  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
