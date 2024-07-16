import { useState } from "react";
import { Avatar, Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { Waiter } from "../../types/typeWaiter";

type RenderWaiterCardsProps = {
  waitersData: Waiter[]
}



export const RenderWaiterCards = ({ waitersData }: RenderWaiterCardsProps) => {
  const [showAlert, setShowAlert] = useState(false);
  const [selectedWaiter, setSelectedWaiter] = useState<any>(null);
  const navigate = useNavigate()

  const handleCardClick = (waiter: any) => {
    setSelectedWaiter(waiter);
    setShowAlert(true);
  };

  const handleAlertConfirm = () => {
    setShowAlert(false);
    navigate('/admin/waiters')
  };

  const handleAlertCancel = () => {
    setShowAlert(false);
  };

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {waitersData.slice(0, 4).map((waiter, index) => (
        <div
          key={index}
          className={`w-56 h-64 p-4 bg-gradient-to-b from-customRed to-customDarkRed text-white relative rounded-md shadow-2xl transform transition-transform hover:cursor-pointer ${
            index === 0 ? "" : 
            index === 1 ? " blur-sm" : 
            " blur-md"
          }`}
          onClick={() => handleCardClick(waiter)}
        >
          <div className="flex justify-center">
            <Avatar size="md" className="absolute top-4 shadow-md" src={waiter.urlImage} />
          </div>
          <h4 className="mt-14 text-center text-base font-semibold">
            {waiter.nombre}
          </h4>
          <p className="mb-1 text-center font-semibold">
            Puesto:{" "}
            <span className="text-sm font-normal">{waiter.position}</span>
          </p>
          <p className="mb-1 text-center">
            No. Telefónico:{" "}
            <span className="text-sm font-normal">{waiter.phone}</span>
          </p>
          <p className="mb-1 text-center">
            Email:{" "}
            <span className="text-sm font-normal">{waiter.email}</span>
          </p>
        </div>
      ))}

      {showAlert && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <p className="text-lg font-semibold mb-2">
              ¿Desea ver más información de {selectedWaiter.nombre}?
            </p>
            <div className="flex justify-end gap-x-4">
              <Button
                color="primary"
                variant="solid"
                onClick={handleAlertConfirm}
              >
                Sí
              </Button>
              <Button
              color= "danger" variant= "flat"
                onClick={handleAlertCancel}
              >
                Cancelar
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
