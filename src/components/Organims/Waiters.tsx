import { ModalUi } from "../../ui/Modal";
import { DividingLine } from "../../DividingLine";
import { usePost } from "../../Tools/Hooks/usePost";
import { Alert } from "../../ui/Alert";
import { useState } from "react";
import { waiterFormConfig } from "../../Tools/configurationsForms";
import { useGet } from "../../Tools/Hooks/useGet";
import { CardWaiter } from "../Molecules/CardWaiter";
import { DataLoader } from "../../ui/Spinner";

const url = import.meta.env.VITE_API_URL;

export const Waiters = () => {
  const { handlePress } = usePost();
  const [alert, setAlert] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const token = localStorage.getItem('token'); // Obtener token desde localStorage
  if (!token) {
    return;
  }

  const handleSubmit = async (formData: Record<string, any>) => {
    const { photo, ...rest } = formData;
    const formDataWithUrlImg = {
      ...rest,
      urlImg: photo,
    };

 
    try {
      const success = await handlePress(`${url}/mesero`, formDataWithUrlImg, token );
      console.log(success);

      if (!success) {
        setAlert({ message: "Please fill all the fields", type: "error" });
        return;
      }

      setAlert({ message: "Waiter added successfully", type: "success" });
    } catch (error) {
      setAlert({ message: "An error occurred", type: "error" });
    }
  };

  const { data } = useGet(`${url}/mesero`, token);

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
        buttonLabel="Add Waiter"
        modalTitle="Add New Waiter"
        inputsConfig={waiterFormConfig}
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
      <div >
       { data ?  <CardWaiter waitersData={data} /> : <DataLoader/> }
      </div>
    </div>
  );
};
