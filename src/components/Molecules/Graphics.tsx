import { GraphicPie } from "../Atoms/GraphicPie";
import { GraphicLine } from "../Atoms/GraphicLine";
import { data, pieData } from "../../data/data";
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export const Graphics = () => {
  return (
    <div className="flex flex-col md:flex-row gap-2">
      <div className="w-full md:w-1/2 h-64 md:h-80 lg:mt-0 mt-5 ">
        <h2 className="text-center font-semibold text-2xl mb-5">Gráfica de Pastel</h2>
        <GraphicPie pieData={pieData} COLORS={COLORS} />
      </div>
      <div className="w-full md:w-1/2 h-64 md:h-80 lg:mt-0 mt-10">
        <h2 className="text-center font-semibold text-2xl mb-5">Gráfica de Línea</h2>
        <GraphicLine data={data} />
      </div>
    </div>
  );
};
