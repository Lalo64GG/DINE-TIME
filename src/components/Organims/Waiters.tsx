import { useState } from "react";
import { ConfirmAlertModal } from "../../ui/ConfirmAlert";
import { ModalUi } from "../../ui/Modal";
import { DividingLine } from "../../DividingLine";
import { usePost } from "../../Tools/Hooks/usePost";
import { Alert } from "../../ui/Alert";
import { useGet } from "../../Tools/Hooks/useGet";
import { CardWaiter } from "../Molecules/CardWaiter";
import { DataLoader } from "../../ui/Spinner";
import { useDelete } from "../../Tools/Hooks/useDelete";
import { waiterFormConfig } from "../../Tools/configurationsForms";

const url = import.meta.env.VITE_API_URL;

export const Waiters = () => {
  const { handlePress } = usePost();
  const { handleDelete } = useDelete();

  const [alert, setAlert] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedWaiter, setSelectedWaiter] = useState<{ id: string; name: string } | null>(null);

  const token = localStorage.getItem("token");
  if (!token) {
    return null;
  }

  const { data } = useGet(`${url}/mesero`, token);

  const handleSubmit = async (formData: Record<string, any>) => {
    const { photo, ...rest } = formData;
    const formDataWithUrlImg = {
      ...rest,
      urlImg: photo,
    };

    try {
      const success = await handlePress(`${url}/mesero`, formDataWithUrlImg, token);
      if (!success) {
        setAlert({ message: "Please fill all the fields", type: "error" });
        return;
      }
      setAlert({ message: "Waiter added successfully", type: "success" });
    } catch (error) {
      setAlert({ message: "An error occurred", type: "error" });
    }
  };

  const handleDeleteWaiter = async () => {
    if (selectedWaiter) {
      try {
        const success = await handleDelete(`mesero/${selectedWaiter.id}`, token);
        if (!success) {
          setAlert({ message: "An error occurred", type: "error" });
          return;
        }
        setAlert({ message: "Waiter deleted successfully", type: "success" });
        setModalVisible(false);
      } catch (error) {
        setAlert({ message: "An error occurred", type: "error" });
      }
    }
  };

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
      <div>
        {data ? (
          <CardWaiter
            handlePress={(id, name) => {
              setSelectedWaiter({ id, name });
              setModalVisible(true);
            }}
            waitersData={data}
          />
        ) : (
          <DataLoader />
        )}
      </div>
      {selectedWaiter && (
        <div className=" bg-white z-50">
          <ConfirmAlertModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          onConfirm={handleDeleteWaiter}
          name={selectedWaiter.name}
        />
        </div>
      )}
    </div>
  );
};
