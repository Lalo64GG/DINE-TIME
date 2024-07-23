import { Modal, Button, Input, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react";
import { useState } from "react";

type TableSelectionModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSave: (tableNumber: string) => void;
  data: any; // Cambia según tus datos reales
};

export const TableSelectionModal = ({
  isOpen,
  onClose,
  onSave,
}: TableSelectionModalProps) => {
  const [tableNumber, setTableNumber] = useState("");

  const handleSave = () => {
    onSave(tableNumber);
    setTableNumber("");
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
      <ModalHeader>Select Table</ModalHeader>
      <ModalBody>
        <Input
          label="Table Number"
          value={tableNumber}
          onChange={(e) => setTableNumber(e.target.value)}
        />
      </ModalBody>
      <ModalFooter>
        <Button  color="warning" onClick={onClose}>
          Cancel
        </Button>
        <Button  onClick={handleSave}>
          Save
        </Button>
      </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
