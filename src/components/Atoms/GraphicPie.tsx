import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

type PieData = {
  name: string;
  value: number;
  color: string; // Añadir la propiedad color
};

type GraphicPieProps = {
  pieData: PieData[];
};

export const GraphicPie: React.FC<GraphicPieProps> = ({ pieData }) => (
  <div className="w-full h-full">
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={pieData}
          cx="50%"
          cy="50%"
          outerRadius="80%"
          fill="#8884d8"
          dataKey="value"
          label={({ name, value }) => `${name}: ${value}`}
        >
          {pieData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  </div>
);
