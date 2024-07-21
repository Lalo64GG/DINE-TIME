import { useState, useEffect } from "react";
import { Food, Drinks, Item } from "../../types/typeFood";

type Order = {
  id: string;
  items: Item[];
  table: string;
}

export const useOrderManagement = (initialOrders: Order[] = []) => {
  const [orders, setOrders] = useState<Order[]>(initialOrders);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders") || "[]");
    setOrders(savedOrders);
  }, []);

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  const handleNewOrder = () => {
    const newOrder = {
      id: Date.now().toString(),
      items: [],
      table: "",
    };
    setSelectedOrder(newOrder);
    setOrders([...orders, newOrder]);
  };

  const handleAddToOrder = (item: Food | Drinks) => {
    if (!selectedOrder) return;
    const existingItem = selectedOrder.items.find(
      (i) => i.item.id === item.id
    );
    const updatedItems = existingItem
      ? selectedOrder.items.map((i) =>
          i.item.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      : [...selectedOrder.items, { item, quantity: 1 }];

    const updatedOrder = { ...selectedOrder, items: updatedItems };
    const updatedOrders = orders.map((order) =>
      order.id === selectedOrder.id ? updatedOrder : order
    );
    setOrders(updatedOrders);
    setSelectedOrder(updatedOrder);
  };

  const handleSelectOrder = (order: Order) => {
    setSelectedOrder(order);
  };

  const handleRemoveItem = (item: Food | Drinks) => {
    if (!selectedOrder) return;
    const updatedItems = selectedOrder.items
      .map((i) =>
        i.item.id === item.id ? { ...i, quantity: i.quantity - 1 } : i
      )
      .filter((i) => i.quantity > 0);

    const updatedOrder = { ...selectedOrder, items: updatedItems };
    const updatedOrders = orders.map((order) =>
      order.id === selectedOrder.id ? updatedOrder : order
    );
    setOrders(updatedOrders);
    setSelectedOrder(updatedOrder);
  };

  const updateOrderTable = (table: string) => {
    if (selectedOrder) {
      const updatedOrder = { ...selectedOrder, table };
      const updatedOrders = orders.map((order) =>
        order.id === selectedOrder.id ? updatedOrder : order
      );
      setOrders(updatedOrders);
      setSelectedOrder(updatedOrder);
    }
  };

  const calculateTotal = (order: Order) => {
    return order.items.reduce(
      (total, { item, quantity }) => total + item.precio * quantity,
      0
    );
  };

  return {
    orders,
    selectedOrder,
    handleNewOrder,
    handleAddToOrder,
    handleSelectOrder,
    handleRemoveItem,
    calculateTotal,
    updateOrderTable,
  };
};
