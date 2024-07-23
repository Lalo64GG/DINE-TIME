// src/components/Pages/AdminHome.tsx
import { Graphics } from "../Molecules/Graphics";
import { RenderWaiterCards } from "../Molecules/RenderWaitersCards";
import { RenderTable } from "../Molecules/RenderTables";
import { RenderBalance } from "../Molecules/RenderBalance";
import { useGet } from "../../Tools/Hooks/useGet";
import { DataLoader } from "../../ui/Spinner";
import { useAdminInfo } from "../../Tools/Hooks/useAdminInfo";

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

  return (
    <div className="container mx-auto p-4 bg-white rounded-md shadow-2xl my-10">
      <h1 className="text-3xl font-bold mb-4">Bienvenid@ {adminInfo?.administrador.nombre}</h1>
      <p className="text-gray-600 mb-8">Fecha: {currentDate}</p>

      <div className="mt-10 mb-16">
        <h2 className="text-center text-2xl font-bold">Gráficas</h2>
        <Graphics />
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
  );
};

export default AdminHome;
