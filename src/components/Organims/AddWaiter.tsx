// pages/add-waiter.tsx
import { useState } from "react";
import { Button, Input } from "@nextui-org/react";


export const AddWaiter = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");


  const handleAddWaiter = () => {
    // const newWaiter = { name, lastName, jobTitle, phone, email };
   
  };

  return (
    <div>
      <h1>Añadir Mesero</h1>
      <form>
        <Input
          label="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          label="Apellido"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <Input
          label="Puesto de Trabajo"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
        />
        <Input
          label="Teléfono"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <Input
          label="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button onPress={handleAddWaiter}>Añadir</Button>
      </form>
    </div>
  );
};

