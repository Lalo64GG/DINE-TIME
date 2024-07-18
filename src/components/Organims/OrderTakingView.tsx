import React, { useState, useEffect } from 'react';
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { CardFood } from "../Molecules/CardFood";
import { useGet } from "../../Tools/Hooks/useGet";
import { DataLoader } from "../../ui/Spinner";
import { Food, Drinks } from '../../types/typeFood';

const url = import.meta.env.VITE_API_URL;

interface Order {
  id: string;
  items: { item: Food | Drinks, quantity: number }[];
  table: number;
}

export const OrderTakingView = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  const { data: allDrinks, loading: loadingDrinks } = useGet(`${url}/categorias/68af9a39-e9a7-4361-b8b7-68ebe19b5636`);
  const { data: allFood, loading: loadingFood } = useGet(`${url}/categorias/5ce27342-ba9b-4d7a-8d38-a5efc11d9032`);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    setOrders(savedOrders);
  }, []);

  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders));
  }, [orders]);

  const getNextTableNumber = () => {
    const highestTable = orders.reduce((max, order) => Math.max(max, order.table), 0);
    return highestTable + 1;
  };

  const handleNewOrder = () => {
    const newOrder = { id: Date.now().toString(), items: [], table: getNextTableNumber() };
    setOrders([...orders, newOrder]);
    setSelectedOrder(newOrder);
  };

  const handleAddToOrder = (item: Food | Drinks) => {
    if (selectedOrder) {
      const existingItem = selectedOrder.items.find(i => i.item.id === item.id);
      const updatedItems = existingItem
        ? selectedOrder.items.map(i => i.item.id === item.id ? { ...i, quantity: i.quantity + 1 } : i)
        : [...selectedOrder.items, { item, quantity: 1 }];
      
      const updatedOrder = { ...selectedOrder, items: updatedItems };
      const updatedOrders = orders.map(order =>
        order.id === selectedOrder.id ? updatedOrder : order
      );
      setOrders(updatedOrders);
      setSelectedOrder(updatedOrder);
    }
  };

  const handleSelectOrder = (order: Order) => {
    setSelectedOrder(order);
  };

  const handleSendOrder = async () => {
    if (selectedOrder) {
      try {
        await fetch(`${url}/ordenes`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(selectedOrder)
        });
        setOrders(orders.filter(order => order.id !== selectedOrder.id));
        setSelectedOrder(null);
      } catch (error) {
        console.error('Error sending order:', error);
      }
    }
  };

  const handleRemoveItem = (item: Food | Drinks) => {
    if (selectedOrder) {
      const updatedItems = selectedOrder.items
        .map(i => i.item.id === item.id ? { ...i, quantity: i.quantity - 1 } : i)
        .filter(i => i.quantity > 0);

      const updatedOrder = { ...selectedOrder, items: updatedItems };
      const updatedOrders = orders.map(order =>
        order.id === selectedOrder.id ? updatedOrder : order
      );
      setOrders(updatedOrders);
      setSelectedOrder(updatedOrder);
    }
  };

  const calculateTotal = (order: Order) => {
    return order.items.reduce((total, { item, quantity }) => total + item.precio * quantity, 0);
  };

  if (loadingDrinks || loadingFood) {
    return <DataLoader />;
  }

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
    <div className="flex w-full h-full">
      <div className="w-3/4 p-4">
        <button
          onClick={handleNewOrder}
          className="mb-4 p-2 bg-blue-500 text-white rounded"
        >
          New Order
        </button>
        <Tabs
          classNames={{
            tabList: "gap-6 w-full relative rounded-lg px-6 bg-customDarkRed",
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
      <div className="w-1/4 p-4 bg-gray-100 overflow-y-auto pt-4">
<h2 className="text-xl font-bold mb-4 pt-10">Existing Orders</h2>
{orders.map(order => (
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
{selectedOrder && (
<div className="mt-4 p-4 bg-white rounded shadow">
<h3 className="text-lg font-bold">Order Details</h3>
<p>Table: {selectedOrder.table}</p>
{selectedOrder.items.map(({ item, quantity }, index) => (
<div key={index} className="flex justify-between">
<p>{item.nombre} x{quantity}</p>
<p>$ {(item.precio * quantity).toFixed(2)}</p>
<button
onClick={() => handleRemoveItem(item)}
className="ml-4 p-1 bg-red-500 text-white rounded"
>
Remove
</button>
</div>
))}
<p className="font-bold">Total: $ {calculateTotal(selectedOrder).toFixed(2)}</p>
<button
           onClick={handleSendOrder}
           className="mt-4 p-2 bg-green-500 text-white rounded"
         >
Send Order
</button>
</div>
)}
</div>
</div>
);
};
