import { useState } from "react";
import { Card, CardBody, CardFooter, Image, Tabs, Tab } from "@nextui-org/react";
import { Categoria, Drinks, Food } from "../../types/typeFood";
import { useNavigate } from "react-router-dom";

type CardFoodProps = {
  data: Categoria | undefined;
  isRequiredTabs: boolean;
  isRequiredNavigate: boolean;
  onOrder: (item: Food | Drinks) => void;
};

export const CardFood = ({ data, isRequiredTabs, isRequiredNavigate, onOrder }: CardFoodProps) => {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState<string>("");

  if (!data || !data.productos) {
    return <div>No data available</div>;
  }

  const handleSelectionChange = (key: any) => {
    setSelectedType(key);
  };

  const shouldShowTabs = data.productos.some(
    (producto) =>
      ["Agua", "Cerveza", "Refresco"].includes((producto as Drinks).tipo)
  );

  const filteredData = selectedType
    ? data.productos.filter(
        (item) => "tipo" in item && item.tipo === selectedType
      )
    : data.productos;

  return (
    <div>
      {shouldShowTabs && isRequiredTabs && (
        <div className="lg:w-[25%]">
          <Tabs
            fullWidth
            size="md"
            aria-label="Sort tabs"
            onSelectionChange={handleSelectionChange}
          >
            <Tab key="Agua" title="Aguas" />
            <Tab key="Cerveza" title="Cervezas" />
            <Tab key="Refresco" title="Refrescos" />
          </Tabs>
        </div>
      )}

      <div className="gap-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4">
        {filteredData.map((item, index) => (
          <Card
            shadow="sm"
            key={index}
            isPressable
            onPress={
              isRequiredNavigate 
              ? () => navigate(`/food/${item.id}`) 
              : () => onOrder(item)
            }
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
