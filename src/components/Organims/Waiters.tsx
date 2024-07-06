// pages/waiters.tsx
import { useState, useEffect } from "react";
import { Button, Card, Container } from "@nextui-org/react";
import Link from "next/link";

interface Waiter {
  name: string;
  lastName: string;
  jobTitle: string;
  phone: string;
  email: string;
}

const waitersData: Waiter[] = [
  { name: "Alfredo Álvarez", lastName: "Álvarez", jobTitle: "Mesero", phone: "1234567890", email: "alfredo@example.com" },
  { name: "Taylor Smith", lastName: "Smith", jobTitle: "Mesero", phone: "0987654321", email: "taylor@example.com" },
  { name: "José de Pablo", lastName: "de Pablo", jobTitle: "Mesero", phone: "5555555555", email: "jose@example.com" },
];

export const Waiters = () => {
  const [waiters, setWaiters] = useState<Waiter[]>([]);

  useEffect(() => {
    setWaiters(waitersData);
  }, []);

  return (
    <Container>
      <h1>Lista de Meseros</h1>
      <Link href="/add-waiter">
        <Button>Añadir Mesero</Button>
      </Link>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginTop: '16px' }}>
        {waiters.map((waiter, index) => (
          <Card key={index} style={{ width: '300px' }}>
            <Card.Body>
              <h4>{waiter.name}</h4>
              <p>{waiter.jobTitle}</p>
              <p>{waiter.phone}</p>
              <p>{waiter.email}</p>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};


