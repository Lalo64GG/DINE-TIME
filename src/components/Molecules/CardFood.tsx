import { useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Tabs,
  Tab,
} from "@nextui-org/react";
import { Drinks, Food } from "../../types/typeFood";

type CardFoodProps = {
  data: Food[] | Drinks[];
};

export const CardFood = ({ data }: CardFoodProps) => {
  const [selectedType, setSelectedType] = useState<string>("");

  const handleSelectionChange = (key: any) => {
    setSelectedType(key);
  };

  // Verificar si algún elemento en data tiene la propiedad 'type'
  const shouldShowTabs = data.some(item => "type" in item);

  // Filtrar los elementos según el tipo seleccionado
  const filteredData = selectedType
    ? data.filter((item) => "type" in item && item.type === selectedType)
    : data;

  return (
    <div>
      {shouldShowTabs && (
       <div className=" lg:w-[25%]">
         <Tabs
          fullWidth
          size="md"
          aria-label="Sort tabs"
          onSelectionChange={handleSelectionChange}
        >
          <Tab key="Aguas" title="Aguas" />
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
            onPress={() => console.log(`item pressed ${item.id}`)}
          >
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={item.name}
                className="w-full object-cover h-[140px]"
                src={item.img}
              />
            </CardBody>
            <CardFooter className="flex items-center justify-between">
              <div>
                <b>{item.name}</b>
              </div>
              <p className="text-default-500">$ {item.price}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

