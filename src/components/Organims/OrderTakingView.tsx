import { useOrderManagement } from "../../Tools/Hooks/useOrderManagement";
import { usePost } from "../../Tools/Hooks/usePost";
import { useGet } from "../../Tools/Hooks/useGet";
import { DataLoader } from "../../ui/Spinner";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { CardFood } from "../Molecules/CardFood";
import { useState } from "react";
import { Alert } from "../../ui/Alert";
import { TableSelectionModal } from "./TableSelectionModal";

const url = import.meta.env.VITE_API_URL;

export const OrderTakingView = () => {
  const [alert, setAlert] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedTable, setSelectedTable] = useState<{ id: string; num_mesa: number } | null>(null);

  const { handlePress } = usePost();

  const {
    orders,
    selectedOrder,
    handleAddToOrder,
    handleSelectOrder,
    handleRemoveItem,
    calculateTotal,
    handleNewOrder,
    handleDeleteOrder
  } = useOrderManagement();

  const { data: allDrinks, loading: loadingDrinks } = useGet(
    `${url}/categorias/312b7453-e2a1-4176-ab63-96d00eae1196`
  );
  const { data: allFood, loading: loadingFood } = useGet(
    `${url}/categorias/5ce27342-ba9b-4d7a-8d38-a5efc11d9032`
  );

  if (loadingDrinks || loadingFood) {
    return <DataLoader />;
  }

  const handleSendOrder = async () => {
    if (!selectedOrder || !selectedTable) {
      setAlert({
        message: "Por favor seleccione una mesa antes de enviar la orden.",
        type: "error",
      });
      return;
    }
  
    try {
      const totalPrice = calculateTotal(selectedOrder);

      console.log({
        precio_Fn: totalPrice,
        id_mesa: selectedTable.id,
      });
  
      const response = await handlePress(`${url}/ventas`, {
        precio_Fn: totalPrice,
        id_mesa: selectedTable.id,
      });
  
      if (!response) {
        setAlert({
          message: "Ocurrió algún error, intente de nuevo",
          type: "error",
        });
        return;
      }
  
      // Eliminar la orden enviada
      if (selectedOrder) {
        handleDeleteOrder(selectedOrder.id);
      }
  
      setAlert({ message: "Orden enviada correctamente", type: "success" });
    } catch (error) {
      if (error instanceof Error) {
        setAlert({ message: error.message, type: "error" });
        console.log(error.message);
      }
    }
  };

  const handleSelectTable = (table: { id: string; num_mesa: number }) => {
    setSelectedTable(table);
    handleNewOrder({ id: Date.now().toString(), items: [], table: table.num_mesa });
  };

  let tabs = [
    {
      id: "drinks",
      label: "Drinks",
      content: (
        <div>
          {allDrinks ? (
            <CardFood
              data={allDrinks}
              isRequiredTabs={true}
              isRequiredNavigate={false}
              onOrder={handleAddToOrder}
            />
          ) : (
            <DataLoader />
          )}
        </div>
      ),
    },
    {
      id: "food",
      label: "Food",
      content: (
        <div>
          {allFood ? (
            <CardFood
              data={allFood}
              isRequiredTabs={false}
              isRequiredNavigate={false}
              onOrder={handleAddToOrder}
            />
          ) : (
            <DataLoader />
          )}
        </div>
      ),
    },
  ];

  return (
    <div className="flex w-full flex-col lg:flex-row items-center lg:items-stretch">
      {alert && (
        <Alert
          message={alert.message}
          type={alert.type}
          onClose={() => setAlert(null)}
        />
      )}
      <TableSelectionModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onSelect={handleSelectTable}
      />
      <div className="w-full lg:w-6/12 flex flex-col items-center mb-10 lg:mb-0 p-4 lg:p-0 rounded-lg">
        <div className="w-full">
          <button
            onClick={() => setModalOpen(true)}
            className="mb-4 p-2 bg-blue-500 text-white rounded w-full "
          >
            New Order
          </button>
          <Tabs
            classNames={{
              tabList:
                "gap-6 w-full relative rounded-lg  px-6 bg-customDarkRed",
              cursor: "w-full bg-gradient-to-b from-customRed to-customDarkRed",
              tab: "max-w-fit px-0 h-12 px-2",
              tabContent: "group-data-[selected=true]:text-white",
            }}
            aria-label="Dynamic tabs"
            items={tabs}
            variant="solid"
          >
            {(item) => (
              <Tab key={item.id} title={item.label} className="w-full">
                <Card>
                  <CardBody className="shadow-2xl">{item.content}</CardBody>
                </Card>
              </Tab>
            )}
          </Tabs>
        </div>
      </div>

      <div className="w-full lg:w-6/12 flex flex-col items-center lg:p-16 p-4 mt-10 lg:mt-0 order-1 lg:order-2">
        <div className="bg-gray-100 w-full px-4 overflow-y-scroll h-64 mb-4">
          <h2 className="text-xl font-bold mb-4 pt-2 text-center">
            Existing Orders
          </h2>
          {orders.map((order) => (
            <div
              key={order.id}
              className="mb-2 p-2 bg-white rounded shadow cursor-pointer"
              onClick={() => handleSelectOrder(order)}
            >
              <p>Order ID: {order.id}</p>
              <p>Table: {order.table}</p>
              <p>Items: {order.items.reduce((sum, i) => sum + i.quantity, 0)}</p>
              <p>Total: $ {calculateTotal(order).toFixed(2)}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-100 w-full p-4 rounded shadow">
          {selectedOrder && (
            <div className="p-6 bg-white rounded shadow">
              <h3 className="text-lg font-bold">Order Details</h3>
              <p>Table: {selectedOrder.table}</p>
              {selectedOrder.items.map(({ item, quantity }, index) => (
                <div key={index} className="flex justify-between">
                  <p>{item.nombre} x</p>
                  <p>{quantity}</p>
                  <p>$ {(item.precio * quantity).toFixed(2)}</p>
                  <button
                    onClick={() => handleRemoveItem(item)}
                    className="ml-4 mb-2 p-2 bg-red-500 text-white rounded"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <p className="font-bold">
                Total: $ {calculateTotal(selectedOrder).toFixed(2)}
              </p>
              <button
                onClick={handleSendOrder}
                className="mt-4 p-2 bg-green-500 text-white rounded w-full"
              >
                Send Order
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
