import { GraphicBar } from "../Atoms/GraphicBar";
import { GraphicBar2 } from "../Atoms/GraphicLine";
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export const Graphics = () => {
  return (
    <div className="flex flex-col md:flex-row gap-2">
      <div className="w-full md:w-1/2 h-64 md:h-80 lg:mt-0 mt-5 ">
        <h2 className="text-center font-semibold text-2xl mb-5">Días de la semana con mayor venta</h2>
        <GraphicBar apiUrl={"https://estadisticaventas.onrender.com/sales/probability"} COLORS={COLORS} />
      </div>
      <div className="w-full md:w-1/2 h-64 md:h-80 lg:mt-0 mt-10">
        <h2 className="text-center font-semibold text-2xl mb-5">Gráfica con respecto a la temperatura del restaurante</h2>
        <GraphicBar2 apiUrl="https://logestadistica.onrender.com/api/records/temperature-statistics" COLORS={COLORS}/>
      </div>
    </div>
  );
};
