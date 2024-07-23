import { Graphics } from "../Molecules/Graphics";
import { RenderWaiterCards } from "../Molecules/RenderWaitersCards";
import { useGet } from "../../Tools/Hooks/useGet";
import { DataLoader } from "../../ui/Spinner";
import { RenderTable } from "../Molecules/RenderTables";
import { useAdminInfo } from "../../Tools/Hooks/useAdminInfo";
import { useSalesData } from "../../Tools/Hooks/useSalesData";

const url = import.meta.env.VITE_API_URL;

export const AdminHome = () => {
  const currentDate = new Date().toLocaleDateString();
  const token = localStorage.getItem('token');
  if (!token) {
    return null;
  }

  const { data } = useGet(`${url}/mesero`, token);
  const { data: dataTable } = useGet(`${url}/mesas`, token);
  const { adminInfo } = useAdminInfo();
  const { salesProbabilities, weeklySales, loading } = useSalesData(token);

  return (
    <div className="container mx-auto p-4 bg-white rounded-md shadow-2xl my-10">
      <h1 className="text-3xl font-bold mb-4">Bienvenid@ {adminInfo?.administrador.nombre}</h1>
      <p className="text-gray-600 mb-8">Fecha: {currentDate}</p>

      <div className="mt-10 mb-16">
        <h2 className="text-center text-2xl font-bold">Gráficas</h2>
        {loading ? <DataLoader /> : <Graphics probabilities={salesProbabilities} />}
      </div>

      <div className="my-10">
        <h2 className="mb-10 text-center text-2xl font-bold">Meseros</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {data ? <RenderWaiterCards waitersData={data} /> : <DataLoader />}
        </div>
      </div>

      <div className="my-10">
        <h2 className="mb-10 text-center text-2xl font-bold">Mesas</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {dataTable ? <RenderTable tableData={dataTable} /> : <DataLoader />}
        </div>
      </div>

      <div className="my-10">
        <h2 className="mb-10 text-center text-2xl font-bold">Ventas Semanales</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {loading ? <DataLoader /> : <p>Ventas esta semana: {weeklySales}</p>}
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
