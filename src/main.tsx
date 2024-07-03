import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "./Layout";
import { Lading } from "./components/Organims/Lading";
import { Menu } from "./components/Organims/Menu";

import { Providers } from "./ui/Providers";
import { FoodId } from "./components/Organims/FoodId";
import { Login } from "./components/Organims/Login";

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
        element: <Menu/>,
      },
      {
        path: "/food/:id",
        element: <FoodId/>
      },
    ],
  },
  {
    path: "/admin",
    element: <Login/>,
    children: [
      // Admin routes go here
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
     <Providers >
     <RouterProvider router={router} />
     </Providers>
    
  </React.StrictMode>
);
