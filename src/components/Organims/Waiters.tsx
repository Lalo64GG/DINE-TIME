import { useState, useEffect } from "react";
import { Button, Card } from "@nextui-org/react";
import Link from "next/link";

interface Waiter {
  name: string;
  lastName: string;
  jobTitle: string;
  phone: string;
  email: string;
}

const waitersData: Waiter[] = [
  {
    name: "Alfredo Álvarez",
    lastName: "Álvarez",
    jobTitle: "Mesero",
    phone: "1234567890",
    email: "alfredo@example.com",
  },
  {
    name: "Taylor Smith",
    lastName: "Smith",
    jobTitle: "Mesero",
    phone: "0987654321",
    email: "taylor@example.com",
  },
  {
    name: "José de Pablo",
    lastName: "de Pablo",
    jobTitle: "Mesero",
    phone: "5555555555",
    email: "jose@example.com",
  },
];

export const Waiters = () => {
  const [waiters, setWaiters] = useState<Waiter[]>([]);

  useEffect(() => {
    setWaiters(waitersData);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <Link href="/AddWaiter">
        <Button
          style={{
            color: "white",
            backgroundImage:
              "linear-gradient(135deg, #8E0000 0%, #280000 100%)",
          }}
        >
          Añadir Mesero
        </Button>
      </Link>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
          marginTop: "16px",
        }}
      >
        {waiters.map((waiter, index) => (
          <Card
            key={index}
            style={{
              width: "300px",
              height: "250px",
              padding: "16px",
              backgroundColor: "#4A1010",
              color: "white",
              position: "relative",
            }}
          >
            <div
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                backgroundColor: "#CACACA",
                position: "absolute",
                top: "10px",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            ></div>
            <h4 style={{ marginTop: "80px" }}>{waiter.name}</h4>
            <p style={{ marginBottom: "8px" }}>{waiter.jobTitle}</p>
            <p style={{ marginBottom: "8px" }}>{waiter.phone}</p>
            <p style={{ marginBottom: "8px" }}>{waiter.email}</p>
            <button
              style={{
                color: "black",
                backgroundColor: "white",
                height: "40px",
                width: "140px",
                borderRadius: "20px",
              
              }}
            >
        
              Más información
            </button>
          </Card>
        ))}
      </div>
    </div>
  );
};
