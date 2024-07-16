import { ModalUi } from "../../ui/Modal";
import { DividingLine } from "../../DividingLine";
import { usePost } from "../../Tools/Hooks/usePost";
import { Alert } from "../../ui/Alert";
import { useState } from "react";
import { foodFormConfig } from "../../Tools/configurationsForms";
import { useGet } from "../../Tools/Hooks/useGet";
import { DataLoader } from "../../ui/Spinner";
import { CardFoodAdm } from "../Molecules/CardFoodAdm";

const url = import.meta.env.VITE_API_URL;

export const Food = () => {
  const { handlePress } = usePost();
  const [alert, setAlert] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const token = localStorage.getItem('token'); 
  if (!token) {
    return;
  }

  const handleSubmit = async (formData: Record<string, any>) => {
    console.log(formData.tipo);
    const categoriaId = (formData.categoria == "Bebida") ? "68af9a39-e9a7-4361-b8b7-68ebe19b5636" : "5ce27342-ba9b-4d7a-8d38-a5efc11d9032" ;

    const { categoria, precio, ...restFormData } = formData;

    const objectFood = {
      categoriaId,
      precio: parseInt(precio, 10),
      ...restFormData
    };


    try {
      const success = await handlePress(`${url}/producto`, objectFood, token);
      console.log(success);

      if (!success) {
        setAlert({ message: "Please fill all the fields", type: "error" });
        return;
      }

      setAlert({ message: "Food added successfully", type: "success" });
     } catch (error) {
      setAlert({ message: "An error occurred", type: "error" });
    }
  };

  const { data } = useGet(`${url}/producto`, token);

  return (
    <div className="p-5">
      {alert && (
        <Alert
          message={alert.message}
          type={alert.type}
          onClose={() => setAlert(null)}
        />
      )}

      <ModalUi
        buttonLabel="Add Food"
        modalTitle="Add New Food "
        inputsConfig={foodFormConfig}
        onSubmit={handleSubmit}
        footerButtons={[
          {
            label: "Cancel",
            color: "danger",
            variant: "flat",
            onClick: () => console.log("Cancelled"),
          },
          { label: "Submit", color: "primary", onClick: () => {} },
        ]}
        photoIsRequired={true}
      />
      <DividingLine />
      <div>
       { data ?  <CardFoodAdm data={data} /> : <DataLoader/> }
      </div>
    </div>
  );
};
