import React, { useEffect } from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";

export const DoubleTabs = () => {
  const [selected, setSelected] = React.useState("login");

  const handleSelectionChange = (key : any) => {
    setSelected(String(key));
  };

   useEffect(() => {
    if (selected === "login") {
      console.log("hola");
    } else {
      console.log("hola2");
    }
  }, [selected]);

  return (
    <div className="flex flex-col w-full">
      <Card className="max-w-full w-[340px] h-[400px]">
        <CardBody className="overflow-hidden">
          <Tabs
            fullWidth
            size="md"
            aria-label="Tabs form"
            selectedKey={selected}
            onSelectionChange={handleSelectionChange} 
          >
            <Tab key="login" title="Login">
              {/* Contenido del tab de Login */}
            </Tab>
            <Tab key="sign-up" title="Sign up">
              {/* Contenido del tab de Sign Up */}
            </Tab>
          </Tabs>
        </CardBody>
      </Card>
    </div>
  );
};
