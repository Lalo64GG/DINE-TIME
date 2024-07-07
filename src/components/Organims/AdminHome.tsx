import { Graphics } from "../Molecules/Graphics";

export const AdminHome = () => {
  const currentDate = new Date().toLocaleDateString();

  const nameAdm = "Mari"
  return (
    <div className="container mx-auto p-4 bg-white rounded-md shadow-2xl my-10">
      <h1 className="text-3xl font-bold mb-4">Bienvenid@ { nameAdm } </h1>
      <p className="text-gray-600 mb-8">Fecha: {currentDate}</p>
      <div className=" mt-10 mb-16 ">
        <h2 className= " text-center text-2xl font-bold">Graficas</h2>
        <Graphics />
      </div>

      <div className="">
        <h1 className="text-center text-2xl font-bold">Meseros</h1>
        <div className=" flex mx-10 p-10">
        <div className=" bg-red-500 w-10 h-10"></div>
        <div className=" bg-red-500 w-10 h-10"></div>
        <div className=" bg-red-500 w-10 h-10"></div>
        <div className=" bg-red-500 w-10 h-10"></div>
        <div className=" bg-red-500 w-10 h-10"></div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
