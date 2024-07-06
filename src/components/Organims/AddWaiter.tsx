// pages/add-waiter.tsx
import { useState } from "react";
import { Button, Input } from "@nextui-org/react";
import { useRouter } from "next/router";

export const AddWaiter = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleAddWaiter = () => {
    const newWaiter = { name, lastName, jobTitle, phone, email };
    console.log("Añadiendo mesero:", newWaiter);
    // Aquí puedes añadir la lógica para enviar el nuevo mesero a tu API
    router.push("/waiters");
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

