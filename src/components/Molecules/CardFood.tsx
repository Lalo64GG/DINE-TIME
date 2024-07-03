import { useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Tabs,
  Tab,
} from "@nextui-org/react";
import { Categoria, Drinks } from "../../types/typeFood";
import { useNavigate } from "react-router-dom";

type CardFoodProps = {
  data: Categoria;
};

export const CardFood = ({ data }: CardFoodProps) => {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState<string>("");

  const handleSelectionChange = (key: any) => {
    setSelectedType(key);
  };

  // Verificar si algún producto tiene el tipo 'Agua', 'Cerveza' o 'Refresco'
  const shouldShowTabs = data.productos.some(
    (producto) =>
      ["Agua", "Cerveza", "Refresco"].includes((producto as Drinks).tipo)
  );

  // Filtrar los elementos según el tipo seleccionado
  const filteredData = selectedType
    ? data.productos.filter(
        (item) => "tipo" in item && item.tipo === selectedType
      )
    : data.productos;

  return (
    <div>
      {shouldShowTabs && (
        <div className="lg:w-[25%]">
          <Tabs
            fullWidth
            size="md"
            aria-label="Sort tabs"
            onSelectionChange={handleSelectionChange}
          >
            <Tab key="Agua" title="Aguas" />
            <Tab key="Cervezas" title="Cervezas" />
            <Tab key="Refrescos" title="Refrescos" />
          </Tabs>
        </div>
      )}

      <div className="gap-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4">
        {filteredData.map((item, index) => (
          <Card
            shadow="sm"
            key={index}
            isPressable
            onPress={() => navigate(`/food/${item.id}`)}
          >
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={item.nombre}
                className="w-full object-cover h-[140px]"
                src={item.img}
              />
            </CardBody>
            <CardFooter className="flex items-center justify-between">
              <div>
                <b>{item.nombre}</b>
              </div>
              <p className="text-default-500">$ {item.precio}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};
