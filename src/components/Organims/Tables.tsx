import { useState } from "react";
import { Alert } from "../../ui/Alert";
import { CardTable } from "../Molecules/Table";
import { ModalUi } from "../../ui/Modal";
import { tablesFormConfig } from "../../Tools/configurationsForms";
import { useGet } from "../../Tools/Hooks/useGet";
import { DividingLine } from "../../DividingLine";
import { DataLoader } from "../../ui/Spinner";
import { usePost } from "../../Tools/Hooks/usePost";
import { useDelete } from "../../Tools/Hooks/useDelete";
import { ConfirmAlertModal } from "../../ui/ConfirmAlert";

const url = import.meta.env.VITE_API_URL;

export const Tables = () => {
  const { handlePress } = usePost()
  const { handleDelete } = useDelete();

  const [alert, setAlert] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedtable, setSelectedtable] = useState<{ id: string; name: string } | null>(null);

  const token = localStorage.getItem('token'); // Obtener token desde localStorage
  if (!token) {
    return;
  }

  const handleSubmit = async(formData: Record<string, any>) => {
    console.log(formData)

    const tableObject = {
      num_mesa: parseInt(formData.numberOfTable),
      num_sillas: parseInt(formData.capacity),
      id_admin: "c306e12e-b098-43ff-9eec-92c94d1359e4"
    }

    try {
      const success = await handlePress(`${url}/mesas`, tableObject, token )
      console.log(success)

      if(!success) {
        setAlert({ message: "Please fill all the fields", type: "error" });
        return;
      }

      setAlert({ message: "Table added successfully", type: "success" })
    } catch (error) {
      setAlert({ message: "An error ocurred", type: "error" });
    }
  }


  const handleDeleteTable = () => {
    if(selectedtable){
      try {
        const success = handleDelete(`mesas/${selectedtable.id}`, token)
        if(!success) {
          setAlert({ message: "An error ocurred", type: "error" });
          return;
        }
        setAlert({ message: "Table deleted successfully", type: "success" });
        setModalVisible(false);
      } catch (error) {
        setAlert({ message: "An error ocurred", type: "error" });
    }
  }
}

  const { data } = useGet(`${url}/mesas`, token)

  return (
    <div className=" p-5">
      {
        alert && (
          <Alert
            message={alert.message}
            type={alert.type}
            onClose={ () => setAlert(null) }
          />
        )
      }

      <ModalUi
        buttonLabel="Add Table"
        modalTitle="Add New Table"
        inputsConfig={tablesFormConfig}
        onSubmit={handleSubmit}
        footerButtons={[
          {
            label: "Cancel",
            color: "danger",
            variant: "flat",
            onClick: () => { console.log("Cancelled") }
          },
          {
            label: "Submit",
            color: "primary",
            onClick: () => { console.log("Submitted") }
          }
        ]}
        photoIsRequired={false}
      />

      <DividingLine/>
      <div>
        { data ? 
        <CardTable 
          tableData={data}
          handlePress={(id, name) =>{
            setSelectedtable({ id, name });
            setModalVisible(true);
          }}
        /> 
        : 
        <DataLoader/>  
      }
      </div>

      {selectedtable && (
        <ConfirmAlertModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          onConfirm={handleDeleteTable}
          name={selectedtable.name}
        />
      )}
       
    </div>
  );
}

