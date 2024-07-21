import { Avatar, Button } from "@nextui-org/react";
import { Categoria } from "../../types/typeFood";

type CardWaiterProps = {
  data: Categoria;
  handlePress?: (id: string, name:string) => void;
};

export const CardFoodAdm = ({ data, handlePress }: CardWaiterProps) => {
  return (
    <div className="flex flex-wrap gap-4 mt-4 justify-center bg-white shadow-2xl p-4 rounded-lg">
      {data.productos.length > 0 ? (
        data.productos.map((food, index) => (
          <div
            key={index}
            className="w-72 h-80 p-6 bg-gradient-to-b from-customRed to-customDarkRed text-white relative rounded-md shadow-2xl transform transition-transform hover:scale-105 hover:cursor-pointer"
          >
            <div className="flex justify-center">
              <Avatar
                size="lg"
                className="absolute top-5 shadow-md"
                src={food.img}
              />
            </div>
            <h4 className="mt-16 text-center text-lg font-semibold">
              {food.nombre}
            </h4>
            <p className="mb-2 text-center font-semibold">
              Tipo:{" "}
              <span className="text-sm font-normal">{food.tipo}</span>
            </p>
            <p className="mb-2 text-center">
              Precio:{" "}
              <span className="text-sm font-normal">{food.precio}</span>
            </p>
            <div className="flex justify-center items-center mt-4 gap-x-4">
              <Button 
                color="danger" 
                variant="flat"
                onClick={() => handlePress && handlePress(food.id, food.nombre)}
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
