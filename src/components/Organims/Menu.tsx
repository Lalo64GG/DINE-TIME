import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { CardTopFood } from "../Molecules/CardTopFood";
import { topRatedFood } from "../../data/data";

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
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      id: "food",
      label: "Food",
      content:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];

  return (
    <div className="flex w-full flex-col justify-center items-center mt-10">
      <Tabs
        classNames={{
          tabList:
            "gap-6 w-full relative rounded-none px-6 bg-gradient-to-b from-customRed to-customDarkRed",
          cursor: "w-full bg-gradient-to-b from-customRed to-customDarkRed",
          tab: "max-w-fit px-0 h-12",
          tabContent: "group-data-[selected=true]:text-[#06b6d4] ",
        }}
        aria-label="Dynamic tabs"
        items={tabs}
        variant="underlined"
      >
        {(item) => (
          <Tab key={item.id} title={item.label} className=" w-full">
            <Card>
              <CardBody>{item.content}</CardBody>
            </Card>
          </Tab>
        )}
      </Tabs>
    </div>
  );
};
