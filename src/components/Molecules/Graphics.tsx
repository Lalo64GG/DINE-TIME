import { GraphicPie } from "../Atoms/GraphicPie";
import { GraphicLine } from "../Atoms/GraphicLine";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

interface GraphicsProps {
  probabilities: { [key: string]: number } | null;
}

export const Graphics: React.FC<GraphicsProps> = ({ probabilities }) => {
  const pieData = probabilities
    ? Object.keys(probabilities).map((key, index) => ({
        name: `Categoría ${key}`,
        value: probabilities[key],
        color: COLORS[index % COLORS.length]
      }))
    : [];

  const lineData = probabilities
    ? Object.keys(probabilities).map((key) => ({
        name: `Categoría ${key}`,
        uv: probabilities[key] * 100,
        pv: probabilities[key] * 100
      }))
    : [];

  return (
    <div className="flex flex-col md:flex-row gap-2">
      <div className="w-full md:w-1/2 h-64 md:h-80 lg:mt-0 mt-5">
        <h2 className="text-center font-semibold text-2xl mb-5">Gráfica de Pastel</h2>
        <GraphicPie pieData={pieData} />
      </div>
      <div className="w-full md:w-1/2 h-64 md:h-80 lg:mt-0 mt-10">
        <h2 className="text-center font-semibold text-2xl mb-5">Gráfica de Línea</h2>
        <GraphicLine data={lineData} />
      </div>
    </div>
  );
};
