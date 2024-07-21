import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "../../ui/Form";

export const WaiterLogin: React.FC = () => {
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const handleLogin = async (credentials: { username: string; password: string }) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("waiterToken", data.token);
        console.log("Redirigiendo a /waiter/home");  
        navigate("/waiter/home");
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError("Error al iniciar sesión");
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center mx-auto bg-gray-100">
      <div className="w-full h-full lg:w-6/12 lg:flex justify-center items-center flex-col mb-10 lg:mb-0 p-4 lg:p-0 bg-[#340A0B] text-white shadow-lg rounded-r-lg overflow-hidden hidden relative">
        <div
          className="rounded-r-lg shadow-lg absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url(https://i.pinimg.com/736x/c3/f6/ae/c3f6aeb3dafb7598e096f04848011af8.jpg)",
          }}
        ></div>
        <div className="relative z-10 p-8 lg:p-16">
          <h2 className="font-bold text-4xl lg:text-5xl text-center lg:text-left mb-8">
            ¡Bienvenido Mesero!
          </h2>
          <p className="text-base lg:text-lg mb-5 lg:mb-8 px-2 lg:px-0">
            Inicia sesión para acceder a tu panel de control.
          </p>
        </div>
      </div>

      <div className="w-full lg:w-6/12 flex flex-col items-center p-4 mt-10 lg:mt-0 order-1 lg:order-2">
        <div className="relative w-full h-full flex justify-center items-center p-4 ">
          <div className="flex justify-center items-center">
            <Form onSubmit={handleLogin} />
          </div>
          {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>
      </div>
    </div>
  );
};
