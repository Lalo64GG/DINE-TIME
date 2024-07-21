import { Avatar, Button } from "@nextui-org/react";
import { Waiter } from "../../types/typeWaiter";

type CardWaiterProps = {
  waitersData: Waiter[];
  handlePress?: (id: string, name: string) => void;
};

export const CardWaiter = ({ waitersData, handlePress }: CardWaiterProps) => {
  return (
    <div className="flex flex-wrap gap-4 mt-4 justify-center bg-white shadow-2xl p-4 rounded-lg">
      {waitersData.length > 0 ? (
        waitersData.map((waiter, index) => (
          <div
            key={index}
            className="w-72 h-80 p-6 bg-gradient-to-b from-customRed to-customDarkRed text-white relative rounded-md shadow-2xl transform transition-transform hover:scale-105 hover:cursor-pointer"
          >
            <div className="flex justify-center">
              <Avatar
                size="lg"
                className="absolute top-5 shadow-md"
                src={waiter.urlImage}
              />
            </div>
            <h4 className="mt-16 text-center text-lg font-semibold">
              {waiter.nombre}
            </h4>
            <p className="mb-2 text-center font-semibold">
              Puesto:{" "}
              <span className="text-sm font-normal">{waiter.position}</span>
            </p>
            <p className="mb-2 text-center">
              No. Telefónico:{" "}
              <span className="text-sm font-normal">{waiter.phone}</span>
            </p>
            <p className="mb-2 text-center">
              Email: <span className="text-sm font-normal">{waiter.email}</span>
            </p>
            <div className="flex justify-center items-center mt-4 gap-x-4">
              <Button
                color="danger"
                variant="flat"
                onClick={() =>
                  handlePress && handlePress(waiter.id, waiter.nombre)
                }
              >
                Eliminar
              </Button>
            </div>
          </div>
        ))
      ) : (
        <div>
          <p className="text-center text-lg">No hay Meseros registrados.</p>
        </div>
      )}
    </div>
  );
};
