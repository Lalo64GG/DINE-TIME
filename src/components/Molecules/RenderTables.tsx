import { useState } from "react";
import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { Table, Tables } from "../../types/typeTable"; // Asegúrate de importar correctamente tus tipos

type RenderWaiterCardsProps = {
  tableData: Tables;
};

export const RenderTable = ({ tableData }: RenderWaiterCardsProps) => {
  const [showAlert, setShowAlert] = useState(false);
  const [selectedWaiter, setSelectedWaiter] = useState<Table | null>(null);
  const navigate = useNavigate();

  const handleCardClick = (waiter: Table) => {
    setSelectedWaiter(waiter);
    setShowAlert(true);
  };

  const handleAlertConfirm = () => {
    setShowAlert(false);
    navigate("/admin/tables");
  };

  const handleAlertCancel = () => {
    setShowAlert(false);
  };

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {tableData.mesa && tableData.mesa.length > 0 ? (
        tableData.mesa.slice(0, 4).map((table, index) => (
          <div
          key={table.id}
          className={`w-56 h-64 p-4 bg-gradient-to-b from-customRed to-customDarkRed text-white relative rounded-md shadow-2xl transform transition-transform hover:cursor-pointer ${
            index === 0
              ? ""
              : index === 1
              ? " blur-sm"
              : " blur-md"
          }`}
          onClick={() => handleCardClick(table)}
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
          <p className="mt-2 text-center text-white">
            No. Mesa {" "}
            <span className="mt-2 font-normal">{table.num_mesa}</span>
          </p>
          <p className=" font-semibold text-white">
            Capcidad:{" "}
            <span className="mt-2 font-normal">{table.num_sillas}</span>
          </p>
        </div>
        ))
      ) : (
        <p className="text-center text-lg">No hay tablas registradas</p>
      )}

      {showAlert && selectedWaiter && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <p className="text-lg font-semibold mb-2">
              ¿Desea ver más información de Mesa:  {selectedWaiter.num_mesa}?
            </p>
            <div className="flex justify-end gap-x-4">
              <Button color="primary" variant="solid" onClick={handleAlertConfirm}>
                Sí
              </Button>
              <Button color="danger" variant="flat" onClick={handleAlertCancel}>
                Cancelar
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
