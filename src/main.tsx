import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "./Layout";
import { Lading } from "./components/Organims/Lading";
import { Menu } from "./components/Organims/Menu";

import { Providers } from "./ui/Providers";
import { Button } from "./components/Atoms/Button";

const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <div>
    <div className="bg-gray-950 rounded-md shadow-lg p-4">
      <Button text="Button 1" customStyle="border-r-0 rounded-l-lg px-6" />
      <Button text="Button 2" customStyle="border-l-0 rounded-r-lg px-6" />
    </div>
  </div>
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <Lading />,
      },
      {
        path: "/menu",
        element: <Menu/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
     <Providers >
     <RouterProvider router={router} />
     </Providers>
    
  </React.StrictMode>
);
