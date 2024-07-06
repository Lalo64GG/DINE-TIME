import { useState } from "react";
import {Tabs, Tab, Input, Link, Button, Card, CardBody} from "@nextui-org/react";

import { usePost } from "../../public/Hooks/usePost"  
import { useNavigate } from "react-router-dom";

export const Form = () => {
  const [selected, setSelected] = useState("login");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { handlePress } = usePost();
  const  navigate = useNavigate()

  const handleSelectionChange = (key: any) => {
    setSelected(String(key));
  };

  const handleLogin = async () => {
    const url = 'http://localhost:3000/API/auth/login';
    const objectPost = {
      correo: email,
      password
     };

    try {
      const success = await handlePress(url, objectPost);
      if (!success) {
        console.log("Login exitoso");
        return;
      }  
      
      navigate("/admin/home")

    } catch (error) {
      console.error("Error en el login:", error);
    }
  };

  const handleSignUp = async () => {
    const url = 'http://localhost:3000/API/admin'; 
    const objectPost = {
      nombre: name,
      apellido: lastName,
      correo: email,
      password
     }; 

    try {
        const success = await handlePress(url, objectPost);
        if (success) {
            // Manejar lógica después de una operación exitosa
            console.log("Registro exitoso");
        } else {
            // Manejar lógica después de un error
            console.log("Error en el registro");
        }
    } catch (error) {
        console.error("Error en el registro:", error);
    }
};





  return (
    <div className="flex flex-col w-full">
      <Card className="max-w-full w-[340px] h-[440px] ">
        <CardBody className="overflow-hidden">
          <Tabs
            fullWidth
            size="md"
            aria-label="Tabs form"
            selectedKey={selected}
            onSelectionChange={handleSelectionChange}
          >
            <Tab key="login" title="Login">
              <form className="flex flex-col gap-4">
                <Input 
                  isRequired 
                  label="Email" 
                  placeholder="Enter your email" 
                  type="email"
                  onChange={ (e) => setEmail(e.target.value) } 
                />
                <Input
                  isRequired
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  onChange={ (e) => setPassword(e.target.value)}
                />
                <p className="text-center text-small">
                  Need to create an account?{" "}
                  <Link  className="hover:cursor-pointer" size="sm" onPress={() => setSelected("sign-up")}>
                    Sign up
                  </Link>
                </p>
                <div className="flex gap-2 justify-end">
                  <Button fullWidth color="primary" onClick={ handleLogin }>
                    Login
                  </Button>
                </div>
              </form>
            </Tab>
            <Tab key="sign-up" title="Sign up">
              <form className="flex flex-col gap-4 h-[300px]">
                <Input 
                  isRequired 
                  label="Name" 
                  placeholder="Enter your name" 
                  type="text"
                  onChange={ (e) => setName(e.target.value)}
                />
                <Input  
                  label="Last Name" 
                  placeholder="Enter your last name" 
                  type="text"
                  onChange={ (e) => setLastName(e.target.value)}
                />
                <Input 
                  isRequired 
                  label="Email" 
                  placeholder="Enter your email" 
                  type="email" 
                  onChange={ (e) => setEmail(e.target.value)}
                />
                <Input
                  isRequired
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  onChange={ (e) => setPassword(e.target.value)}
                />
                <p className="text-center text-small">
                  Already have an account?{" "}
                  <Link className="hover:cursor-pointer" size="sm" onPress={() => setSelected("login")}>
                    Login
                  </Link>
                </p>
                <div className="flex gap-2 justify-end mb-10">
                  <Button fullWidth color="primary" onClick={ handleSignUp }  >
                    Sign up
                  </Button>
                </div>
              </form>
            </Tab>
          </Tabs>
        </CardBody>
      </Card>
    </div>
  );
}
