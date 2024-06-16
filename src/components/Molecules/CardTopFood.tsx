import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { FaStar, FaRegStar } from "react-icons/fa";
import { useSortedFood } from '../../../public/Hooks/useSortedFood'; 
import { TopFood } from "../../types/typeFood";

type CardTopFoodProps =  {
  topFood: TopFood[];
}

export const CardTopFood = ({ topFood } : CardTopFoodProps) => {
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

  return (
    <div>
      <div className="flex justify-end mb-4">
        <button onClick={() => setSortCriteria('rating')}>Sort by Rating</button>
        <button onClick={() => setSortCriteria('price')} className="ml-2">Sort by Price</button>
      </div>
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
        {sortedFood.map((item, index) => (
          <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={item.img}
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
