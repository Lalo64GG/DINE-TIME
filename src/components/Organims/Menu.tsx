import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { CardTopFood } from "../Molecules/CardTopFood";
import { topRatedFood, AllFood, AllDrinks } from "../../data/data";
import { CardFood } from "../Molecules/CardFood";

export const Menu = () => {
  let tabs = [
    {
      id: "rating",
      label: "Top Food",
      content: (
        <div>
          <CardTopFood topFood={topRatedFood} />
        </div>
      ),
    },
    {
      id: "drinks",
      label: "Drinks",
      content:
        <div>
          <CardFood data={ AllDrinks }/>
        </div>
    },
    {
      id: "food",
      label: "Food",
      content:
       <div>
         <CardFood data={ AllFood }/>
       </div>

    },
  ];

  return (
    <div className="flex w-full flex-col justify-center items-center mt-10">
      <Tabs
        classNames={{
          tabList:
            "gap-6 w-full relative rounded-lg px-6 bg-customDarkRed  ",
          cursor: "w-full bg-gradient-to-b from-customRed to-customDarkRed",
          tab: "max-w-fit px-0 h-12 px-2",
          tabContent: "group-data-[selected=true]:text-white ",
        }}
        aria-label="Dynamic tabs"
        items={tabs}
        variant="solid"
      >
        {(item) => (
          <Tab key={item.id} title={item.label} className=" w-full ">
            <Card>
              <CardBody className=" shadow-2xl ">{item.content}</CardBody>
            </Card>
          </Tab>
        )}
      </Tabs>
    </div>
  );
};
