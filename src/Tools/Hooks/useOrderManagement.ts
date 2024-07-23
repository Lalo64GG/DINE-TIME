import { useState, useEffect } from "react";
import { Food, Drinks, Item } from "../../types/typeFood";

type Order = {
  id: string;
  items: Item[];
  table: number;
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

  const getNextTableNumber = () => {
    const highestTable = orders.reduce(
      (max, order) => Math.max(max, order.table),
      0
    );
    return highestTable + 1;
  };

  const handleNewOrder = () => {
    const newOrder = {
      id: Date.now().toString(),
      items: [],
      table: getNextTableNumber(),
    };
    setOrders([...orders, newOrder]);
    setSelectedOrder(newOrder);
  };

  const handleAddToOrder = (item: Food | Drinks) => {
    if (selectedOrder) {
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
    }
  };

  const handleSelectOrder = (order: Order) => {
    setSelectedOrder(order);
  };

  const handleRemoveItem = (item: Food | Drinks) => {
    if (selectedOrder) {
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
    calculateTotal
  };
};
