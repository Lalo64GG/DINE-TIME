import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "./Layout";
import { Lading } from "./components/Organims/Lading";
import { Menu } from "./components/Organims/Menu";
import { Providers } from "./Tools/Providers";
import { FoodId } from "./components/Organims/FoodId";
import { Login } from "./components/Organims/Login";
import { AdminHome } from "./components/Organims/AdminHome";
import { Waiters } from "./components/Organims/Waiters";
import { ProtectedRoute } from "./Tools/ProtectedRoute"; // Importa el componente de ruta protegida
import { AuthProvider } from "./Tools/AuthContextType"; // Importa el proveedor de autenticación
import {Tables} from "./components/Organims/Tables";
import { Food } from "./components/Organims/Food";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Lading />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/food/:id",
        element: <FoodId />,
      },
    ],
  },
  {
    path: "/adm",
    element: <Login />,
  },
  {
    path: "/admin/",
    element: <Layout />,
    children: [
      {
        path: "/admin/home",
        element:  <ProtectedRoute element={<AdminHome />} />,
      },
      {
        path: "/admin/waiters",
        element: <ProtectedRoute element={<Waiters />} />,
      },
      {
        path: "/admin/tables",
        element: <ProtectedRoute element={<Tables/>}/>
      },
      {
        path: "/admin/food/",
        element: <Food/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Providers>
      <AuthProvider>
        <Providers>
          <RouterProvider router={router} />
        </Providers>
      </AuthProvider>
    </Providers>
  </React.StrictMode>
);
