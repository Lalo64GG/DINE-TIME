// src/Tools/WaiterProtectedRoute.tsx
import React from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  element: React.ReactElement;
}

export const WaiterProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
  const token = localStorage.getItem("waiterToken");
  return token ? element : <Navigate to="/waiter" />;
};
