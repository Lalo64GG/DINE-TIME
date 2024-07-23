import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useInputValidation } from "../../Tools/Hooks/useInputValidation";
import { usePost } from "../../Tools/Hooks/usePost";
import { Alert } from "../../ui/Alert";
import { Button } from "@nextui-org/react";
const url = import.meta.env.VITE_API_URL;

export const WaiterLogin = () => {
  const navigate = useNavigate();
  const [alert, setAlert] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const email = useInputValidation();
  const password = useInputValidation();

  const { handlePress } = usePost();

  const handleLogin = async() =>{
    email.validate();
    password.validate();

    if(email.isInvalid || password.isInvalid){
      return;
    }

    const objectPost = {
      email: email.value,
      password: password.value,	
    }

    try {
      const success = await handlePress(`${url}/auth/loginMesero`, objectPost);
      if (success) {
        setAlert({ message: "Registro exitoso", type: 'success' });
        setTimeout(() => {
          navigate("/waiter/home");
        }, 1500)
      } else {
        setAlert({ message: "Error en el registro", type: 'error' });
      }
    } catch (error :any) {
      setAlert({ message: "Error en el registro: " + error.message, type: 'error' });
      console.error("Error en el registro:", error);
    }
  }




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

            {alert && <Alert message={alert.message} type={alert.type} onClose={() => setAlert(null)} />}

            <form className="bg-white rounded-md shadow-lg p-8 w-full max-w-md">
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email.value}
                  onChange={(e) => email.setValue(e.target.value)}
                  onBlur={email.validate}
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${email.isInvalid ? "border-red-500" : ""}`}
                  placeholder="Enter your email"
                />
                {email.isInvalid && <p className="text-red-500 text-xs italic">Email is required.</p>}
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password.value}
                  onChange={(e) => password.setValue(e.target.value)}
                  onBlur={password.validate}
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${password.isInvalid ? "border-red-500" : ""}`}
                  placeholder="Enter your password"
                />
                {password.isInvalid && <p className="text-red-500 text-xs italic">Password is required.</p>}
              </div>
              <Button
                fullWidth color="primary" onClick={ handleLogin }
              >
                Login
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
