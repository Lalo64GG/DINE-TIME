import { Card, CardBody, CardFooter, Image, Tabs, Tab } from "@nextui-org/react";
import { FaStar, FaRegStar } from "react-icons/fa";
import { useSortedFood } from '../../Tools/Hooks/useSortedFood'; 
import { TopFood } from "../../types/typeFood";
import { useNavigate } from "react-router-dom";

type CardTopFoodProps = {
  topFood: TopFood[];
};

export const CardTopFood = ({ topFood }: CardTopFoodProps) => {

  const navigate = useNavigate();

  const { sortedFood, setSortCriteria } = useSortedFood(topFood, 'rating');

  // Función para renderizar las estrellas según la calificación
  const renderStars = (rating: number) => (
    <div className="flex items-center">
      {Array.from({ length: 5 }, (_, index) => (
        index < rating ? (
          <FaStar key={index} className="text-yellow-500" />
        ) : (
          <FaRegStar key={index} className="text-yellow-500" />
        )
      ))}
    </div>
  );

  const handleSelectionChange = (key: any) => {
    setSortCriteria(String(key));
  };

  return (
    <div>
     <div className=" lg:w-[25%]">
     <Tabs
        fullWidth
        size="md"
        aria-label="Sort tabs"
        onSelectionChange={handleSelectionChange}
      >
        <Tab key="rating" title="Sort by Rating" />
        <Tab key="price" title="Sort by Price" />
      </Tabs>
     </div>


      <div className="gap-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4">
        {sortedFood.map((item, index) => (
          <Card shadow="sm" key={index} isPressable onPress={() => navigate(`/food/${item.id}`)}>
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
                {renderStars(item.rating)}
              </div>
              <p className="text-default-500">$ {item.price}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};
