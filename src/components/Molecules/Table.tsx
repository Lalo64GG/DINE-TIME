// import { Tables } from "../../data/data";
import { Tables } from "../../types/typeTable";


type CardTableProps = {
  tableData: Tables;
};


export const CardTable = ({ tableData }: CardTableProps  ) => {

  console.log(tableData);
  return (
    <div className="flex flex-wrap gap-4 justify-center bg-white shadow-2xl p-4 rounded-lg mt-4">
      { tableData.mesa.length > 0 ? (
          tableData.mesa.map((table) => (
            <div
              key={table.id}
              className=" relative  transition-transform hover:scale-105 hover:cursor-pointer flex flex-col items-center p-6 border rounded-md bg-gradient-to-b from-customRed to-customDarkRed shadow-md w-72 h-80"
            >
              <img
                src={
                  table.imgSrc
                    ? table.imgSrc
                    : "https://img.freepik.com/vector-premium/vector-icono-imagen-predeterminado-pagina-imagen-faltante-diseno-sitio-web-o-aplicacion-movil-no-hay-foto-disponible_87543-11093.jpg"
                }
                alt={table.num_mesa}
                className="w-40 h-40 object-contain"
              />
              <span className="mt-2 text-center text-white">{table.num_mesa}</span>
              <p className=" font-semibold text-white">
                Capcidad:{" "}
                <span className="mt-2 font-normal">{table.num_sillas}</span>
              </p>
            </div>
          )) ) : (
            <p className="text-center text-lg"> No hay tablas registradas</p>
          )
       }
    </div>
  );
};
