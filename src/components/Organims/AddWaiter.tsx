import { useState } from "react";
import { Button, Input, Textarea } from "@nextui-org/react";

export const AddWaiter = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [workSchedule, setWorkSchedule] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [assignedTables, setAssignedTables] = useState("");
  const [workDays, setWorkDays] = useState("");
  const [comments, setComments] = useState("");
  const [cv, setCV] = useState("");

  const handleAddWaiter = () => {
    const newWaiter = { name, lastName, workSchedule, phone, email, assignedTables, workDays, comments, cv };
    console.log("Añadiendo mesero:", newWaiter);
    // logica de meseros 
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "white",
    color: "black",
    borderRadius: "8px",
  };

  const titleStyle: React.CSSProperties = {
    textAlign: "center",
    marginBottom: "20px",
    color: "#black",
  };

  const formStyle: React.CSSProperties = {
    display: "flex",
    gap: "20px",
  };

  const columnStyle: React.CSSProperties = {
    flex: 1,
    display: "flex",
    flexDirection: "column" as 'column', 
    gap: "15px",
  };

  const inputFieldStyle: React.CSSProperties = {
    backgroundColor: "E4E4E4",
    borderRadius: "4px",
    padding: "10px",
    color: "black",
  };

  const buttonStyle: React.CSSProperties = {
    marginTop: "20px",
    backgroundColor: "#e63946",
    color: "black",
    border: "none",
    padding: "10px 15px",
    borderRadius: "4px",
    cursor: "pointer",
    textAlign: "center",
  };

  const photoCircleStyle: React.CSSProperties = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    backgroundColor: "#cacaca",
    alignSelf: "center",
    marginBottom: "20px",
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Añadir Mesero</h1>
      <form style={formStyle}>
        {/* Columna izquierda */}
        <div style={columnStyle}>
          <div style={photoCircleStyle}></div>
          <Input
            label="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={inputFieldStyle}
          />
          <Input
            label="Apellido"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            style={inputFieldStyle}
           
          />
          <Input
            label="Horario de Trabajo"
            value={workSchedule}
            onChange={(e) => setWorkSchedule(e.target.value)}
            style={inputFieldStyle}
          />
          <Input
            label="Teléfono"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={inputFieldStyle}
          />
          <Input
            label="Correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputFieldStyle}
          />
        </div>
        
        {/* Columna derecha */}
        <div style={columnStyle}>
          <Input
            label="Mesa Encargada"
            value={assignedTables}
            onChange={(e) => setAssignedTables(e.target.value)}
            style={inputFieldStyle}
          />
          <Input
            label="Días de Trabajo"
            value={workDays}
            onChange={(e) => setWorkDays(e.target.value)}
            style={inputFieldStyle}
          />
          <Textarea
            label="Comentarios"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            style={inputFieldStyle}
          />
          <Input
            label="CV"
            value={cv}
            onChange={(e) => setCV(e.target.value)}
            style={inputFieldStyle}
          />
        </div>
      </form>
      <Button style={buttonStyle} onClick={handleAddWaiter}>
        Añadir
      </Button>
    </div>
  );
};
