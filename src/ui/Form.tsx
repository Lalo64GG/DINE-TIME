import { useState } from "react";
import { Tabs, Tab, Input, Link, Button, Card, CardBody } from "@nextui-org/react";
import { usePost } from "../Tools/Hooks/usePost";  
import { useNavigate } from "react-router-dom";
import {useInputValidation} from "../Tools/Hooks/useInputValidation";
import {Alert} from "../ui/Alert";
import { useAuth } from "../Tools/AuthContextType"; 

export const Form = () => {
  const [selected, setSelected] = useState("login");
  const [alert, setAlert] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const email = useInputValidation("");
  const password = useInputValidation("");
  const name = useInputValidation("");
  const lastName = useInputValidation("");

  const { handlePress } = usePost();
  const navigate = useNavigate();
  const { login } = useAuth(); // Usar el hook de autenticación

  const handleSelectionChange = (key: any) => {
    setSelected(String(key));
  };

  const handleLogin = async () => {
    email.validate();
    password.validate();

    if (email.isInvalid || password.isInvalid) {
      return;
    }

    const url = 'http://localhost:3000/API/auth/login';
    const objectPost = {
      correo: email.value,
      password: password.value,
    };

    try {
      const success = await handlePress(url, objectPost);
      if (success) {
        setAlert({ message: "Login exitoso", type: 'success' });
        login(); // Actualizar el estado de autenticación
        setTimeout(() => {
          navigate("/admin/home");
        }, 2000)
      } else {
        setAlert({ message: "Correo y/o contraseña incorrecta", type: 'error' });
      }
    } catch (error:any) {
      setAlert({ message: "Error en el login: " + error.message, type: 'error' });
      console.error("Error en el login:", error);
    }
  };

  const handleSignUp = async () => {
    name.validate();
    lastName.validate();
    email.validate();
    password.validate();

    if (name.isInvalid || lastName.isInvalid || email.isInvalid || password.isInvalid) {
      return;
    }

    const url = import.meta.env.API_URL; 
    const objectPost = {
      nombre: name.value,
      apellido: lastName.value,
      correo: email.value,
      password: password.value,
    }; 

    try {
      const success = await handlePress(`${url}/admin`, objectPost);
      if (success) {
        setAlert({ message: "Registro exitoso", type: 'success' });
      } else {
        setAlert({ message: "Error en el registro", type: 'error' });
      }
    } catch (error :any) {
      setAlert({ message: "Error en el registro: " + error.message, type: 'error' });
      console.error("Error en el registro:", error);
    }
  };

  return (
    <div className="flex flex-col w-full">
      {alert && <Alert message={alert.message} type={alert.type} onClose={() => setAlert(null)} />}
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
                  value={email.value}
                  onChange={ (e) => email.setValue(e.target.value) } 
                  isInvalid={email.isInvalid}
                />
                <Input
                  isRequired
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  value={password.value}
                  onChange={ (e) => password.setValue(e.target.value)}
                  isInvalid={password.isInvalid}
                />
                <p className="text-center text-small">
                  Need to create an account?{" "}
                  <Link className="hover:cursor-pointer" size="sm" onPress={() => setSelected("sign-up")}>
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
                  value={name.value}
                  onChange={ (e) => name.setValue(e.target.value)}
                  isInvalid={name.isInvalid}
                />
                <Input  
                  label="Last Name" 
                  placeholder="Enter your last name" 
                  type="text"
                  value={lastName.value}
                  onChange={ (e) => lastName.setValue(e.target.value)}
                  isInvalid={lastName.isInvalid}
                />
                <Input 
                  isRequired 
                  label="Email" 
                  placeholder="Enter your email" 
                  type="email" 
                  value={email.value}
                  onChange={ (e) => email.setValue(e.target.value)}
                  isInvalid={email.isInvalid}
                />
                <Input
                  isRequired
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  value={password.value}
                  onChange={ (e) => password.setValue(e.target.value)}
                  isInvalid={password.isInvalid}
                />
                <p className="text-center text-small">
                  Already have an account?{" "}
                  <Link className="hover:cursor-pointer" size="sm" onPress={() => setSelected("login")}>
                    Login
                  </Link>
                </p>
                <div className="flex gap-2 justify-end mb-10">
                  <Button fullWidth color="primary" onClick={ handleSignUp }>
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
};
