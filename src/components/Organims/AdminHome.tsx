import { Graphics } from "../Molecules/Graphics";
import { RenderWaiterCards } from "../Molecules/RenderWaitersCards";

export const AdminHome = () => {
  const currentDate = new Date().toLocaleDateString();

  const nameAdm = "Eduardo"
  return (
    <div className="container mx-auto p-4 bg-white rounded-md shadow-2xl my-10">
      <h1 className="text-3xl font-bold mb-4">Bienvenid@ { nameAdm } </h1>
      <p className="text-gray-600 mb-8">Fecha: {currentDate}</p>
      <div className=" mt-10 mb-16 ">
        <h2 className= " text-center text-2xl font-bold">Graficas</h2>
        <Graphics />
      </div>

      <div className="my-10">
        <h1 className=" mb-10 text-center text-2xl font-bold">Meseros</h1>
        <div className="flex flex-wrap gap-4 justify-center">
          <RenderWaiterCards />
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
