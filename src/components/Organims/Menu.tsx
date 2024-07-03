import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { CardTopFood } from "../Molecules/CardTopFood";
import { topRatedFood, AllFood, AllDrinks } from "../../data/data";
import { CardFood } from "../Molecules/CardFood";
import { useGet } from "../../../public/Hooks/useGet";
import { DataLoader } from "../../ui/Spinner";

export const Menu = () => {
  // const { data: topRatedFood, loading: loadingTopFood, error: errorTopFood } = useGet("/api/top-rated-food");
  const {
    data: allDrinks,
    loading: loadingDrinks,
    error: errorDrinks,
  } = useGet(
    "http://localhost:3000/API/categorias/e8ffbbfa-2368-48ff-87c7-235b3a5ec68a"
  );
  const {
    data: allFood,
    loading: loadingFood,
    error: errorFood,
  } = useGet(
    "http://localhost:3000/API/categorias/35cc5a54-907b-4cfe-809e-1a1f3e784edd"
  );

  if (loadingDrinks || loadingFood) {
    return <div>Loading...</div>;
  }

  if (errorDrinks || errorFood) {
    return <div>Something went wrong...</div>;
  }

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
      content: (
        <div>{allDrinks ? <CardFood data={allDrinks} /> : <DataLoader />}</div>
      ),
    },
    {
      id: "food",
      label: "Food",
      content: (
        <div>{allFood ? <CardFood data={allFood} /> : <DataLoader />}</div>
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
