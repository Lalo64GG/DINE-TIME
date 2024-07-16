import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
// import { CardTopFood } from "../Molecules/CardTopFood";
// import { topRatedFood, AllFood, AllDrinks } from "../../data/data";
import { CardFood } from "../Molecules/CardFood";
import { useGet } from "../../Tools/Hooks/useGet";
import { DataLoader } from "../../ui/Spinner";

const url = import.meta.env.VITE_API_URL;

export const Menu = () => {
  // const { data: topRatedFood, loading: loadingTopFood, error: errorTopFood } = useGet("/api/top-rated-food");
  const {
    data: allDrinks,
    loading: loadingDrinks,
  } = useGet(
    `${url}/categorias/68af9a39-e9a7-4361-b8b7-68ebe19b5636`
  );
  const {
    data: allFood,
    loading: loadingFood,
  } = useGet(
    `${url}/categorias/5ce27342-ba9b-4d7a-8d38-a5efc11d9032`
  );

  if (loadingDrinks || loadingFood) {
    return <DataLoader/>;
  }

  let tabs = [
    {
      id: "rating",
      label: "Top Food",
      content: (
        <div>
          {/* <CardTopFood topFood={topRatedFood} /> */}
        </div>
      ),
    },
    {
      id: "drinks",
      label: "Drinks",
      content: (
        <div>{allDrinks ? <CardFood data={allDrinks} isRequiredTabs={true} isRequiredNavigate={true} /> : <DataLoader />}</div>
      ),
    },
    {
      id: "food",
      label: "Food",
      content: (
        <div>{allFood ? <CardFood data={allFood} isRequiredTabs={false} isRequiredNavigate={true} /> : <DataLoader />}</div>
      ),
    },
  ];

  return (
    <div className="flex w-full flex-col justify-center items-center mt-10">
      <Tabs
        classNames={{
          tabList: "gap-6 w-full relative rounded-lg px-6 bg-customDarkRed  ",
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
