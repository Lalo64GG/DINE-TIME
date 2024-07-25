import { Graphics } from "../Molecules/Graphics";
import { RenderWaiterCards } from "../Molecules/RenderWaitersCards";
import { RenderTable } from "../Molecules/RenderTables";
import { RenderBalance } from "../Molecules/RenderBalance";
import { useGet } from "../../Tools/Hooks/useGet";
import { DataLoader } from "../../ui/Spinner";
import { useAdminInfo } from "../../Tools/Hooks/useAdminInfo";
import { GraphicLine } from "../Atoms/GraphicLine2";
import { useShortPolling } from "../../Tools/Hooks/useShortPolling";
const url = import.meta.env.VITE_API_URL;

export const AdminHome = () => {
  const currentDate = new Date().toLocaleDateString();
  const token = localStorage.getItem('token');
  if (!token) {
    return null;
  }

  const { data: waitersData } = useGet(`${url}/mesero`, token);
  const { data: tableData } = useGet(`${url}/mesas`, token);
  const { data: balanceData, loading: loadingBalance, error: errorBalance } = useGet(`${url}/estadistica`);
  const { adminInfo } = useAdminInfo();
  const { data, error } = useShortPolling('https://dine-time-api-consumer.integrador.xyz/api/gas-level');
  
  const gasLevel = data?.gas_level;
  const temperature = data?.temperature;

  // Determine alert message based on gas level
  let alertMessage = "";
  if (gasLevel !== undefined) {
    if (gasLevel >= 250 && gasLevel <= 300) {
      alertMessage = "¡Alerta! El nivel de gas está entre 250 y 300.";
    }
  }

  return (
    <>  {alertMessage && (
      <div className="mt-4 p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700">
        <p className="font-semibold">{alertMessage}</p>
      </div>
    )}
    <div className="container mx-auto p-4 bg-white rounded-md shadow-2xl my-10">
      <h1 className="text-3xl font-bold mb-4">Bienvenid@ {adminInfo?.administrador.nombre}</h1>
      <p className="text-gray-600">Fecha: {currentDate}</p>
      <div>
        <p className="text-gray-600">
          Nivel del gas en cocina <span className="font-semibold text-black">{ gasLevel }</span>
        </p>
        <p className="text-gray-600">
          Nivel del clima en el restaurante <span className="font-semibold text-black">{ temperature }</span>
        </p>
      
      </div>

      <div className="mt-10 mb-16">
        <h2 className="text-center text-2xl font-bold">Gráficas</h2>
        <Graphics />
        <div className="w-full h-64 md:h-80 lg:mt-0 mt-5">
          <h2 className="text-center font-semibold text-2xl mb-5">Niveles de gas</h2>
          <GraphicLine apiUrl="https://logestadistica.onrender.com/api/records/gas-levels"/>
        </div>
      </div>

      <div className="my-10">
        <h2 className="mb-10 text-center text-2xl font-bold">Meseros</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {waitersData ? <RenderWaiterCards waitersData={waitersData} /> : <DataLoader />}
        </div>
      </div>

      <div className="my-10">
        <h2 className="mb-10 text-center text-2xl font-bold">Mesas</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {tableData ? <RenderTable tableData={tableData} /> : <DataLoader />}
        </div>
      </div>

      <div className="my-10">
        <h2 className="mb-10 text-center text-2xl font-bold">Balance Semanal</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          { balanceData ? <RenderBalance balanceData={balanceData} /> : <DataLoader/> }
        </div>
      </div>
    </div>
    </>
  );
};

export default AdminHome;
